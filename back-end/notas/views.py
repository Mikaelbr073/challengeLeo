# Create your views here.
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Notas
from .serializers import NotasSerializer
import json

@api_view(['GET'])
def get_notas(request):
    if request.method == 'GET':
        notas = Notas.objects.all()
        serializer = NotasSerializer(notas, many=True)
        return Response(serializer.data)
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_by_title(request, title):
    try:
        notas = Notas.objects.get(titile=title)
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        serializer = NotasSerializer(notas)
        return Response(serializer.data)


@api_view(['POST'])
def create_notas(request):

    if request.method == 'POST':
        new_notas = request.data
        serializer = NotasSerializer(data=new_notas)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_400_BAD_REQUEST)

        
