from django.db import models

# Create your models here.
class Character(models.Model):
	name = models.CharField(max_length=30)
	ability_points = models.IntegerField(default=25)
	strength = models.IntegerField(default=10)
	dexterity = models.IntegerField(default=10)
	constitution = models.IntegerField(default=10)
	intelligence = models.IntegerField(default=10)
	wisdom = models.IntegerField(default=10)
	charisma = models.IntegerField(default=10)
	def __str__(self):
		return self.name