from django.urls import path
from . import views

urlpatterns = [
	path('', views.index, name='index'),
	path('newcharacter/', views.newcharacter, name='newcharacter'),
	path('newcharacter/<int:char_id>/', views.set_abilities, name='set_abilities')
]