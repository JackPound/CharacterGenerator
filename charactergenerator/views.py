from django.shortcuts import render
# Create your views here.
from .models import Character

def index(request):
	characters = Character.objects.all()
	return render(request, 'index.html', {'characters': characters})