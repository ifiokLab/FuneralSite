from django.contrib.auth.forms import UserCreationForm, UserChangeForm,AuthenticationForm
from django.forms import ModelForm,BaseInlineFormSet,inlineformset_factory
from .models import *
from django import forms
from django.utils.translation import gettext_lazy as _



class UserForm(UserCreationForm):
    def __init__(self, *args, **kwargs):
        super(UserForm, self).__init__(*args, **kwargs)
        self.fields['email'].widget.attrs.update({'onfocus':'Swap_text()','id':'my_email','type':'email','autofocus':False })
        self.fields['first_name'].widget.attrs.update({'onfocus':'Swap_text2()','id':'first_name'})
        self.fields['last_name'].widget.attrs.update({'onfocus':'Swap_text3()','id':'last_name'})
        self.fields['password1'].widget.attrs.update({'onfocus':'Swap_text4()','id':'pass_word1'})
       
        self.fields['password2'].widget.attrs.update({'onfocus':'Swap_text5()','id':'pass_word2'})
        #self.fields['password2'].widget.attrs['id'] = 'password2'


    class Meta:
        model = myuser
        fields = ('email','first_name','last_name','password1','password2')



class LoginForm(AuthenticationForm):
    username = forms.EmailField(label='Email',widget=forms.TextInput(attrs={'id': 'my_email','autofocus':False,'type':'email','onfocus':'Swap_text()'}))
    password = forms.CharField(max_length=32, widget=forms.PasswordInput(attrs={'id': 'pass_word','onfocus':'Swap_text2()'}))

   


class DeceasedForm(ModelForm):
    def __init__(self, *args, **kwargs):
        super(DeceasedForm, self).__init__(*args, **kwargs)
        self.fields['first_name'].widget.attrs.update({"oninput":"this.className = ''"})
        self.fields['middle_name'].widget.attrs.update({"oninput":"this.className = ''"})
        self.fields['last_name'].widget.attrs.update({"oninput":"this.className = ''"})
        self.fields['day_birth'].widget.attrs.update({"oninput":"this.className = ''"})
        self.fields['year_birth'].widget.attrs.update({"oninput":"this.className = ''"})
        self.fields['day_death'].widget.attrs.update({"oninput":"this.className = ''"})
        self.fields['year_death'].widget.attrs.update({"oninput":"this.className = ''"})
        


    class Meta:
        model = Deceased
        fields = '__all__'
        #widgets = {
            #'photos': forms.ClearableFileInput(attrs={'multiple': True}),
        #}


class FactsForm(ModelForm):
        
    class Meta:
        model  = BiographyFacts
        fields=('facts', 'description','user','deceased','id')
        #exclude = ('id',)



#FactsFormset = inlineformset_factory(Deceased, BiographyFacts, form=FactsForm, extra=1,)

FactsFormset = inlineformset_factory(Deceased, BiographyFacts, fields=('facts', 'description','user'), extra=1,
widgets={'description': forms.TextInput(attrs={
            'class': 'desc',
            'placeholder': 'Description'
        })
    })





class PhotosForm(ModelForm):
        
    class Meta:
        model  = PhotoAlbum
        fields=('image', 'title','user','deceased','id','date')
        #exclude = ('id',)



#FactsFormset = inlineformset_factory(Deceased, BiographyFacts, form=FactsForm, extra=1,)

PhotosFormset = inlineformset_factory(Deceased, PhotoAlbum, fields=('image', 'title','user','date'), extra=1,
widgets={'title': forms.TextInput(attrs={
            'class': 'desc',
            'placeholder': 'Brief title...'
            
        }), 
        'date': forms.TextInput(attrs={
            'class': 'desc',
            'title': 'when was this photo taken?',
            'type':'date',
                
        }),
        'image': forms.TextInput(attrs={
            'class': 'desc',
            'title': 'Upload Photo',
            'type':'file',
            'accept':'image*/'
                
        })
    })







class BiographyForm(ModelForm):
        
    class Meta:
        model  = Biography
        fields= '__all__'



from django.forms import modelformset_factory
'''

FactsFormset = modelformset_factory(
    model = BiographyFacts,form=FactsForm,
    fields=('facts', 'description','user','deceased','id'),
    extra=1,
    widgets={'description': forms.TextInput(attrs={
            'class': 'desc',
            'placeholder': 'Description'
        })
    }
) 

'''