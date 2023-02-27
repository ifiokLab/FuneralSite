from django.urls import path
from . import views

urlpatterns = [
    path('signup/',views.SignUp, name='signup'),
    path('',views.home, name='home'),
    path('login/',views.Login.as_view(),name='login'),
    path('logout/',views.Logout,name='logout'),
    path('create_memorial/',views.create_memorial,name='create_memorial'),
    path('create_biography/<int:pk>/',views.create_biography, name='create_biography'),
    path('memorials/',views.DeceasedList,name='memorials'),

    path('create-photo/<int:pk>/',views.create_photo, name='create-photo'),
    path('delete-photo/<int:formset_id>/', views.delete_photo, name='delete-photo'),

    path('create-facts/<int:pk>/',views.create_facts, name='create-facts'),
    path('delete-facts/<int:formset_id>/', views.delete_facts, name='delete-facts'),

]


