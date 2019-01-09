from django.shortcuts import render
from django.http import HttpResponseRedirect
# Create your views here.
from .models import Character
from .forms import NewCharacterForm

def index(request):
	characters = Character.objects.all()
	return render(request, 'index.html', {'characters': characters})

def newcharacter(request):
	if request.method == 'POST':
		n = request.POST['name']
		r = request.POST['race']
		c = request.POST['characterclass']
		new_character = Character.objects.create(name= n, race = r, characterclass = c)
		return HttpResponseRedirect('/characters')
	else:
		form = NewCharacterForm
		return render(request, 'newcharacter.html', {'form': form})

def add_abilities(request):
	abilities = ['strength','dexterity','constitution','intelligence','wisdom','charisma']
	if 'add' in request.POST:
		print(request)
		print(request.POST['currentvalue'])
		basevalue = int(request.POST['currentvalue']) + 1
		return render(request, 'newcharacter.html', {'basevalue': basevalue})
	if 'subtract' in request.POST:
		basevalue = int(request.POST['currentvalue']) - 1
		return render(request, 'newcharacter.html', {'basevalue': basevalue})
	else:
		ability_score = 10
		return render(request, 'newcharacter.html', {'ability_score': ability_score, 'abilities': abilities})