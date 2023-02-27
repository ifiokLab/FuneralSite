
from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField
from django.shortcuts import reverse
from django.contrib.auth.models import User
from django.conf import settings
#from django_countries.fields import CountryField

#from .fields import OrderField
from .manager import CustomUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

'''deceased>>memorial>>biography'''


class myuser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=40,blank=False)
    last_name = models.CharField(max_length=40,blank=False)
    date_joined = models.DateTimeField(auto_now_add=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
   

     
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name','last_name',]
    objects = CustomUserManager()

    def __str__(self):
        return f'{self.first_name} {self.last_name}'



month_choices = [
    ('January','January'),
    ('February','February'),
    ('March','March'),
    ('April','April'),
    ('May',',May'),
    ('June','June'),
    ('July','July'),
    ('August','August'),
    ('September','September'),
    ('October','October'),
    ('November','November'),
    ('December','December'),
]

class Deceased(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255)
    middle_name = models.CharField(max_length=255,blank=True,null=True)
    last_name = models.CharField(max_length=255)
    month_birth = models.CharField(max_length=100,choices=month_choices)
    day_birth = models.IntegerField()
    year_birth = models.IntegerField(error_messages='Year must be greater than or equal to 1901')
   
    month_death = models.CharField(max_length=100,choices=month_choices,blank=True,null=True)
    day_death= models.IntegerField(blank=True,null=True)
    year_death = models.IntegerField(blank=True,null=True,error_messages='Year must be greater than or equal to 1901')
    #bio = models.TextField(null=True, blank=True)
    
   

    def __str__(self):
        return self.first_name




facts_choices = [
    ('1','Place of birth'),
    ('2','Most recently lived in'),
    ('3','favorite hobbies'),
    ('4','favorite foods'),
    ('5','Favorite bands and musical artists'),
    ('6','Interesting facts about'),
    ('7','If you could tell anything today, what would you say?'),
    ('8','loved nothing more than'),
    ('9','Favorite place in the world'),
    ('10','Favorite sports'),
    ('11','Favorite movies'),
    ('12',"profession(s)"),
    ('13',"superpower"),
    ('14',"proudest accomplishments"),
    ('15',"pets in life"),
    ('17',"Favorite ice cream flavor"),
    ('18',"Places traveled to"),

    ('19',"Name of High School attended"),
    ('20',"Name of college attended"),
    ('21',"Name of  parents"),
    ('22',"Name of siblings"),
    ('23',"Name of children"),
    ('24',"Name of grandchildren"),
]


class BiographyFacts(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    deceased = models.ForeignKey(Deceased,on_delete=models.CASCADE)
    #biography = models.TextField(blank=True,null=True)
    facts = models.CharField(max_length=100,choices=facts_choices,blank=True,null=True)
    description = models.CharField(max_length=100,null=True,blank=True)

    def __str__(self):
        return self.facts

    class Meta:
        ordering = ('id',)



class PhotoAlbum(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    deceased = models.ForeignKey(Deceased,on_delete=models.CASCADE)
    title = models.CharField(max_length=100,null=True,blank=True)
    date = models.DateField(blank=True,null=True)
    image = models.ImageField(upload_to='Albums/',null=True,blank=True)

    def __str__(self):
        return self.title



class Biography(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    deceased = models.ForeignKey(Deceased,on_delete=models.CASCADE)
    body_text = models.TextField(null=True,blank=True)
    cover_photo = models.ImageField(null=True, blank=True,upload_to = 'CoverPhoto/')

    def __str__(self):
        return self.deceased.first_name

        