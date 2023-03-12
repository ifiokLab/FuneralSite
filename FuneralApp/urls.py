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

    #path('create-photo/<int:pk>/',views.create_photo, name='create-photo'),
    path('create-photo/<int:pk>/',views.create_photo, name='create-photo'),
    path('delete-photo/<int:formset_id>/', views.delete_photo, name='delete-photo'),

    path('create-facts/<int:pk>/',views.create_facts, name='create-facts'),
    path('delete-facts/<int:formset_id>/', views.delete_facts, name='delete-facts'),

    path('add-comment/<int:photoId>/', views.add_comment, name='add_comment'),
    path('photos/<int:photo_id>/comments/',views.photo_comments, name='photo_comments'),
    path('delete-comment/<int:commentId>/', views.delete_comment, name='delete_comment'),

    path('invite-contributor/', views.invite_contributor, name='invite_contributor'),
    path('register_contributor/', views.register_contributor, name='register_contributor'),

    path('like-photo/<int:photoId>/', views.like_photo, name='like_photo'),
    path('like-list/<int:photoId>/', views.like_list, name='like_list'),
    path('like-cover/<int:photoId>/', views.like_cover, name='like_cover'),
    path('cover-like-list/<int:photoId>/', views.cover_like_list, name='cover_like_list'),
    

]


