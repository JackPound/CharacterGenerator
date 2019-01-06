from django.db import models

# Create your models here.
class Character(models.Model):
	name = models.CharField(max_length=30)
	strength = models.IntegerField(default=10)
	dexterity = models.IntegerField(default=10)
	def __str__(self):
		return self.name