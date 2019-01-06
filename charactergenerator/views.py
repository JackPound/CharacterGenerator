from django.shortcuts import render
# Create your views here.
from .models import Character
from .forms import NewCharacterForm

def index(request):
	characters = Character.objects.all()
	return render(request, 'index.html', {'characters': characters})

def newcharacter(request):
	if 'add' in request.POST:
		print(request)
		print(request.POST['currentvalue'])
		basevalue = int(request.POST['currentvalue']) + 1
		return render(request, 'newcharacter.html', {'basevalue': basevalue})
	else:
		basevalue = 10
		return render(request, 'newcharacter.html', {'basevalue': basevalue})