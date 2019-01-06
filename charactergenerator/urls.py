from django.urls import path
from . import views

urlpatterns = [
	path('', views.index, name='index'),
	path('newcharacter/', views.newcharacter, name='newcharacter'),
]