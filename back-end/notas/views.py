# Create your views here.
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Notas
from .api.serializers import NotasSerializer
import json

#buscando os dados 
@api_view(['GET'])
def get_notas(request):
    if request.method == 'GET':
        notas = Notas.objects.all()
        serializer = NotasSerializer(notas, many=True)
        return Response(serializer.data)
    return Response(status=status.HTTP_400_BAD_REQUEST)

#buscando os dados 
@api_view(['GET'])
def get_by_title(request, title):
    try:
        notas = Notas.objects.get(titile=title)
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        serializer = NotasSerializer(notas)
        return Response(serializer.data)

#salvando os dados
@api_view(['POST'])
def create_notas(request):
    if request.method == 'POST':
        new_notas = request.data
        serializer = NotasSerializer(data=new_notas)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

        
# editando os dados
@api_view(['PUT'])
def update_notas(request):
    if request.method == 'PUT':
        titile_request = request.data['titile']
        try:
            update_notas = Notas.objects.get(titile=titile_request)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = NotasSerializer(update_notas, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_notas(request):
    try:
        notas_to_delete = Notas.objects.get(titile=request.data['titile'])
        notas_to_delete.delete()
        return Response(status=status.HTTP_202_ACCEPTED)
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)