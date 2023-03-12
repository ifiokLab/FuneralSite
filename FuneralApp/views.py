from django.shortcuts import render,redirect
from .forms import *
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate,login
from django.contrib import messages
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from django.contrib.auth.forms import UserCreationForm, UserChangeForm,AuthenticationForm

# Create your views here.

def SignUp(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            email = form.cleaned_data.get('email')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(email = email,password = raw_password)
            login(request,user)
            return redirect('home')
    else:
        form = UserForm()
    return render(request,'FuneralApp/signup.html',{'form':form})

import random
import string
from django.core.mail import send_mail

def generate_token():
    chars = string.ascii_letters + string.digits
    return ''.join(random.choice(chars) for _ in range(32))
'''
@login_required
def invite_contributor(request):
    if request.method == 'POST':
        email = request.POST['email']
        name = request.POST['name']
        invitation_token = generate_token()
        contributor = Contributor(email=email,name = name, invitation_token=invitation_token, invited_by=request.user)
        contributor.save()
        invite_url = request.build_absolute_uri(reverse('register_contributor') + '?token=' + invitation_token)
        send_mail(
            'Invitation to memorial app',
            f'You have been invited to contribute to a memorial on our app. To accept the invitation, please register using this link: {invite_url}',
            'ifiokudoh77@gmail.com',
            [email],
            fail_silently=False,
        )
        return redirect('invite_contributor')
    else:
        return render(request, 'invite_contributor.html')

'''
from django.conf import settings
''''
@login_required
def invite_contributor(request):
    if request.method == 'POST':
        email = request.POST['email']
        name = request.POST['name']
        memorials =request.POST['memorials']
        deceased = Deceased.objects.get(id = memorials)
        print(deceased)
        invitation_token = generate_token()
        contributor = Contributor(email=email,name = name, invitation_token=invitation_token, invited_by=request.user,memorials = deceased)
        contributor.save()
        invite_url = request.build_absolute_uri(reverse('register_contributor') + '?token=' + invitation_token)
        send_mail(
            'Invitation to memorial app',
            f'You have been invited to contribute to a memorial on our app. To accept the invitation, please register using this link: {invite_url}',
            f'{settings.DEFAULT_FROM_EMAIL}',
            [email],
            fail_silently=False,
        )
    return JsonResponse({'status': 'ok'})

'''

@login_required
def invite_contributor(request):
    if request.method == 'POST':
        email = request.POST['email']
        name = request.POST['name']
        memorials =request.POST['memorials']
        deceased = Deceased.objects.get(id = memorials)
        print(deceased)
        invitation_token = generate_token()
        contributor = Contributor(email=email,name = name, invitation_token=invitation_token, invited_by=request.user,memorials = deceased)
        contributor.save()
        invite_url = request.build_absolute_uri(reverse('register_contributor') + '?token=' + invitation_token)
       
        print(email)     
        message = Mail(
            from_email='ifiokudoh77@gmail.com',
            to_emails= [email],
            subject='Invitation to memorial app',
            html_content=f'<strong>You have been invited to contribute to a memorial on our app. To accept the invitation, please register using this link: {invite_url}</strong>'
            )
        messages.success(request, 'Email has been sent successfully!.')
        try:
            sg = SendGridAPIClient('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')
            response = sg.send(message)
            print(response.status_code)
            print(response.body)
            print(response.headers)
        except Exception as e:
            print(e.message)
    return JsonResponse({'status': 'ok'})



def register_contributor(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            token = request.GET.get('token')
            contributor = Contributor.objects.get(invitation_token=token)
            #contributor.save()
            user = form.save()
            print(user)
            email = form.cleaned_data.get('email')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(email = email,password = raw_password)
            login(request,user)
            contributor.contributor_user = user
            contributor.save()
            return redirect('home')
    else:
        form = UserForm()
    return render(request, 'FuneralApp/signup.html', {'form': form})





def home(request):
    return render(request,'FuneralApp/home.html')




from django.contrib.auth.views import LoginView
class Login(LoginView):
    template_name = 'FuneralApp/login.html'
    form_class = LoginForm

from django.contrib.auth import logout
def Logout(request):
    logout(request)
    return redirect('login')

def create_memorial(request):
    if request.method == 'POST':
        form = DeceasedForm(request.POST, request.FILES)
        if form.is_valid():
           form.save()
           return redirect('memorials')
    else:
        form = DeceasedForm()
    return render(request, 'FuneralApp/memorial.html', {'form': form})


@login_required(login_url='login')
def create_biography(request,pk):
    #deceased = Deceased.objects.get(id = pk,user = request.user)
    deceased = Deceased.objects.get(id = pk)
    #parent = Biography.objects.get(user = request.user,deceased = deceased.id) 
    biography_facts = ''
    parent = ''
    album = ''
    try:
        album = PhotoAlbum.objects.filter(deceased = deceased.id)
    except:
        print('no album!')
    else:
        album =  PhotoAlbum.objects.filter(deceased = deceased.id)
    try:
        #parent = Biography.objects.get(user = request.user,deceased = deceased.id) 
        #biography_facts = BiographyFacts.objects.filter(user = request.user,deceased = deceased.id)
        parent = Biography.objects.get(deceased = deceased.id) 
        biography_facts = BiographyFacts.objects.filter(deceased = deceased.id)
    except:
        print('doenst exist..')
    else:
        parent = Biography.objects.get(deceased = deceased.id) 
        biography_facts = BiographyFacts.objects.filter(deceased = deceased.id)

    contributor_count = 0
    try:
        contributor_count = Contributor.objects.filter(memorials = pk).count()
    except:
        print('doenst exist..')
    else:
        contributor_count = Contributor.objects.filter(memorials = pk).count()
    
    if request.method == 'POST':
        if parent: 
            form = BiographyForm(request.POST,request.FILES,instance=parent)
        else:
            form = BiographyForm(request.POST,request.FILES)
        print(request.POST,request.FILES)
        print(form.is_valid())
        if form.is_valid():
            form.save()
            messages.success(request, 'Your data has been saved.')
            return redirect('create_biography' ,pk = deceased.id)
    else:
        if parent: 
            form = BiographyForm(instance=parent)
        else:
            form = BiographyForm()
   
    return render(request, 'FuneralApp/biography.html', {'deceased':deceased,'biography_facts':biography_facts,'form':form,'parent':parent,'album':album,'inviteForm':ContributorForm,'contributor_count':contributor_count})





@login_required(login_url = 'login')
def DeceasedList(request):
    data =  Deceased.objects.filter(user = request.user)
    memorials = ''
    try:
        contributor = Contributor.objects.get( contributor_user = request.user)
    except:
        print('doesnt exist')
    else:
        contributor = Contributor.objects.get( contributor_user = request.user)
        memorials = contributor.memorials
    return render(request, 'FuneralApp/deceased-list.html', {'data': data,'memorials':memorials})




from django.db import transaction
def create_photo(request,pk):
    #deceased = Deceased.objects.get(id = pk,user = request.user)
    deceased = Deceased.objects.get(id = pk) 
    
    
    if request.method == 'POST':
        formset =  PhotosFormset(request.POST, request.FILES,instance=deceased)#,instance=deceased
        print(formset.get_form_error())
        print(request.FILES)
        if formset.is_valid():
            formset.save()
            #return redirect('home')
            messages.success(request, 'Your data has been saved.')
            return redirect('create_biography' ,pk = deceased.id)
    else:
        formset =  PhotosFormset(initial=[{'user': request.user,}],instance=deceased)# 
        #formset = FactsFormset(queryset=biography, initial=[{'user': request.user,'deceased':deceased.id}])# for deceased in biography
    return render(request, 'FuneralApp/create-photo.html', {'formset': formset,'deceased':deceased,})



def delete_photo(request, formset_id):
    
    formset = PhotoAlbum.objects.get(id=formset_id)
    formset.delete()
    return JsonResponse({'message': 'Formset deleted successfully.'})




def create_facts(request,pk):
    #deceased = Deceased.objects.get(id = pk,user = request.user) 
    deceased = Deceased.objects.get(id = pk) 
    
    if request.method == 'POST':
        formset =  FactsFormset(request.POST, request.FILES,instance=deceased)#,instance=deceased
        if formset.is_valid():
            formset.save()
            #return redirect('home')
            messages.success(request, 'Your data has been saved.')
            return redirect('create_biography' ,pk = deceased.id)
    else:
        formset =  FactsFormset(instance=deceased,initial=[{'user': request.user,}])# 
        #formset = FactsFormset(queryset=biography, initial=[{'user': request.user,'deceased':deceased.id}])# for deceased in biography
    return render(request, 'FuneralApp/biography-facts.html', {'formset': formset,'deceased':deceased,})



from django.http import JsonResponse

def delete_facts(request, formset_id):
    
    formset = BiographyFacts.objects.get(id=formset_id)
    print('hello',formset)
    formset.delete()
    return JsonResponse({'message': 'Formset deleted successfully.'})



from django.shortcuts import get_object_or_404

@login_required
def add_comment(request, photoId):
    photo = get_object_or_404(PhotoAlbum, id=photoId)
    if request.method == 'POST':
        comment_content = request.POST['comment_content']
        comment = Comments(photo=photo, text =comment_content,user = request.user)
        comment.save()
    return JsonResponse({'status': 'ok'})






def photo_comments(request, photo_id):
    #comments = Comments.objects.filter(photo_id=photo_id).values('id', 'text','user','date')
    comments = Comments.objects.filter(photo_id=photo_id)
    #return JsonResponse(list(comments), safe=False)
    comments_data = [{'text': comment.text, 'first_name': comment.user.first_name,'last_name': comment.user.last_name,'date':comment.date,'comment_id':comment.id,'login_user':request.user.id,'comment_by':comment.user.id} for comment in comments]
    return JsonResponse(comments_data, safe=False)



def like_list(request, photoId):
    photo = PhotoAlbum.objects.get(id=photoId)
    if photo.likes.filter(id=request.user.id).exists():
        #liked = False
        liked = True
    else:
        liked = False
    data = {
        'liked': liked,
        'count': photo.likes.count(),
    }
    return JsonResponse(data)

def delete_comment(request,commentId):
    if request.method == 'POST':
        #comment = Comments.objects.get(id=commentId, user=request.user)
        
        comment = Comments.objects.get(id=commentId)
        comment.delete()
   
    return JsonResponse({'status': 'ok'})





def like_photo(request,photoId):
    if request.method == 'POST':
        photo = PhotoAlbum.objects.get(id=photoId)
        if photo.likes.filter(id=request.user.id).exists():
            print(photo.likes.remove(request.user))
            photo.likes.remove(request.user)

            liked = False
        else:
            print(photo.likes.add(request.user))
            photo.likes.add(request.user)
            liked = True
        data = {
            'liked': liked,
            'count': photo.likes.count(),
        }
        return JsonResponse(data)


def like_cover(request,photoId):
    if request.method == 'POST':
        photo = Biography.objects.get(id=photoId)
        if photo.likes.filter(id=request.user.id).exists():
            print(photo.likes.remove(request.user))
            photo.likes.remove(request.user)

            liked = False
        else:
            print(photo.likes.add(request.user))
            photo.likes.add(request.user)
            liked = True
        data = {
            'liked': liked,
            'count': photo.likes.count(),
        }
    return JsonResponse(data)


def cover_like_list(request, photoId):
    photo = Biography.objects.get(id=photoId)
    if photo.likes.filter(id=request.user.id).exists():
        #liked = False
        liked = True
    else:
        liked = False
    data = {
        'liked': liked,
        'count': photo.likes.count(),
    }
    return JsonResponse(data)

'''
 try:
        comment = Comments.objects.get(id=comment_id, user=request.user)
        comment.delete()
        return JsonResponse({'deleted': True})
    except Comments.DoesNotExist:
        return JsonResponse({'deleted': False})'''


'''

def photo_comments(request, photo_id):
    photo = PhotoAlbum.objects.get(id=photo_id)
    comments = Comments.objects.filter(photo=photo).select_related('user')

    comments_data = []
    for comment in comments:
        comment_data = {
            'id': comment.id,
            'text': comment.text,
            'first_name': comment.user.first_name,  # access the username of the related User object
            'last_name': comment.user.last_name, 
        }
        comments_data.append(comment_data)
    print('mm',comments_data)

    return JsonResponse({'comments': comments_data})'''

