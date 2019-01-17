from django.shortcuts import render
from django.http import HttpResponseRedirect
# Create your views here.
from .models import Character, Race, Characterclass
from .forms import NewCharacterForm
from .characterfun import skilled_check

def index(request):
	characters = Character.objects.all()
	return render(request, 'index.html', {'characters': characters})

def newcharacter(request):
	if request.method == 'POST':
		n = request.POST['name']
		r = int(request.POST['race'])
		c = int(request.POST['characterclass'])
		new_character = Character.objects.create(name= n, race_id = r, characterclass_id = c)
		if new_character.race.skilled:
			new_character.skilled = True
			new_character.save()
		url = str(new_character.id)
		return HttpResponseRedirect(url)
	else:
		form = NewCharacterForm
		return render(request, 'newcharacter.html', {'form': form})
def characters(request):
	return render(request, 'hello.html')
def set_abilities(request, char_id):
	character = Character.objects.get(id = char_id)
	return render(request, 'set_abilities.html', {'character': character})

def helpabilities(request):
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