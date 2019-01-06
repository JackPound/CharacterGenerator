from django import forms

class NewCharacterForm(forms.Form):
	name = forms.CharField(label='Character Name', max_length=30)
	ability_points = forms.IntegerField()
	strength = forms.IntegerField()
	dexterity = forms.IntegerField()
	constitution = forms.IntegerField()
	intelligence = forms.IntegerField()
	wisdom = forms.IntegerField()
	charisma = forms.IntegerField()