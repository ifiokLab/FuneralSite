from django.shortcuts import render,redirect
from .forms import *
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate,login
from django.contrib import messages
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



def create_biography(request,pk):
    deceased = Deceased.objects.get(id = pk,user = request.user)
    #parent = Biography.objects.get(user = request.user,deceased = deceased.id) 
    biography_facts = ''
    parent = ''
    try:
        parent = Biography.objects.get(user = request.user,deceased = deceased.id) 
        biography_facts = BiographyFacts.objects.filter(user = request.user,deceased = deceased.id)
    except:
        print('doenst exist..')
    else:
       parent = Biography.objects.get(user = request.user,deceased = deceased.id) 
       biography_facts = BiographyFacts.objects.filter(user = request.user,deceased = deceased.id)
    
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
   
    return render(request, 'FuneralApp/biography.html', {'deceased':deceased,'biography_facts':biography_facts,'form':form,'parent':parent})





@login_required(login_url = 'login')
def DeceasedList(request):
    data =  Deceased.objects.filter(user = request.user)
    return render(request, 'FuneralApp/deceased-list.html', {'data': data})




from django.db import transaction
def create_photo(request,pk):
    deceased = Deceased.objects.get(id = pk,user = request.user) 
    
    if request.method == 'POST':
        formset =  PhotosFormset(request.POST, request.FILES,instance=deceased)#,instance=deceased
        print(formset.get_form_error())
        print(request.POST, request.FILES)
        print(formset.errors)
        if formset.is_valid():
            with transaction.atomic():
                formset.save()
            #return redirect('home')
            messages.success(request, 'Your data has been saved.')
            return redirect('create_biography' ,pk = deceased.id)
    else:
        formset =  PhotosFormset(instance=deceased,initial=[{'user': request.user,}])# 
        #formset = FactsFormset(queryset=biography, initial=[{'user': request.user,'deceased':deceased.id}])# for deceased in biography
    return render(request, 'FuneralApp/create-photo.html', {'formset': formset,'deceased':deceased,})



def delete_photo(request, formset_id):
    
    formset = PhotoAlbum.objects.get(id=formset_id)
    formset.delete()
    return JsonResponse({'message': 'Formset deleted successfully.'})




def create_facts(request,pk):
    deceased = Deceased.objects.get(id = pk,user = request.user) 
    
    if request.method == 'POST':
        formset =  FactsFormset(request.POST, request.FILES,instance=deceased)#,instance=deceased
        print(formset.get_form_error())
        print(request.POST, request.FILES)
        print(formset.errors)
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


'''

def create_memorial(request):
    if request.method == 'POST':
        form = DeceasedForm(request.POST, request.FILES)
        if form.is_valid():
            for image in request.FILES.getlist('photos'):
                Deceased.objects.create(
                    user = request.user,first_name =form.cleaned_data['first_name'],
                    middle_name = form.cleaned_data['middle_name'],
                    last_name = form.cleaned_data['last_name'],
                    month_birth = form.cleaned_data['month_birth'],
                    day_birth = form.cleaned_data['day_birth'],
                    year_birth = form.cleaned_data['year_birth'],

                    month_death = form.cleaned_data['month_death'],
                    day_death = form.cleaned_data['day_death'],
                    year_death = form.cleaned_data['year_death'],
                    bio = form.cleaned_data['bio'],
                    
                    photos=image
                    )
            #return redirect('home')
    else:
        form = DeceasedForm()
    return render(request, 'upload_photos.html', {'form': form})

'''


'''

def create_biography(request,pk):
    deceased = Deceased.objects.get(id = pk)
    #biography = BiographyFacts.objects.filter(user = request.user,deceased = deceased.id)
    biography = BiographyFacts.objects.get(user = request.user,deceased = deceased.id)
    
    if request.method == 'POST':
        formset = FactsFormset(request.POST, request.FILES,instance=deceased)#,instance=deceased
        print(formset.get_form_error())
        if formset.is_valid():
            print('successful!')
            for form in formset:
                print(formset.cleaned_data)
                print(bool( form.save()))
                form.save()
                return redirect('home')
            #return redirect('create_biography')
    else:
        formset = FactsFormset(instance=deceased)# 
        #formset = FactsFormset(queryset=biography, initial=[{'user': request.user,'deceased':deceased.id}])# for deceased in biography
    return render(request, 'FuneralApp/biography.html', {'formset': formset,'deceased':deceased})

'''