from django.db import models

# Create your models here.
class Race(models.Model):
	name = models.CharField(max_length=30, default='')
	strength_bonus = models.IntegerField(default=0)
	dexterity_bonus = models.IntegerField(default=0)
	constitution_bonus = models.IntegerField(default=0)
	intelligence_bonus = models.IntegerField(default=0)
	charisma_bonus = models.IntegerField(default=0)
	wisdom_bonus = models.IntegerField(default=0)

	def __str__(self):
		return self.name

class Characterclass(models.Model):
	name = models.CharField(max_length=30, default='')

	def __str__(self):
		return self.name
class Character(models.Model):
	name = models.CharField(max_length=30, default='')
	race = models.ForeignKey(Race, on_delete=models.CASCADE)
	characterclass = models.ForeignKey(Characterclass, on_delete=models.CASCADE)
	ability_points = models.IntegerField(default=25)
	strength = models.IntegerField(default=10)
	dexterity = models.IntegerField(default=10)
	constitution = models.IntegerField(default= 10)
	intelligence = models.IntegerField(default=10)
	wisdom = models.IntegerField(default=10)
	charisma = models.IntegerField(default=10)
	def __str__(self):
		return self.name

	
	
