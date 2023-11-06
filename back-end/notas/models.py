from django.db import models
from uuid import uuid4

class Notas(models.Model):
    id_notas = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    titile = models.CharField(max_length=150)
    body_text = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    create_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'titile: {self.titile} | body_text: {self.body_text} | category: {self.category}'