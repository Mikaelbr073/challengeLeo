from rest_framework import serializers
from ..models import Notas

class NotasSerializer(serializers.ModelSerializer):
        class Meta:
            model =  Notas
            fields = '__all__'