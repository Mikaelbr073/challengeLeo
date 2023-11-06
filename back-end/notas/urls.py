from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_notas),
    path('<str:title>', views.get_by_title),
    path('create/', views.create_notas)
]