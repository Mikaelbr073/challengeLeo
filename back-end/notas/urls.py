from django.urls import path
from . import views

urlpatterns = [
    path('criar', views.create_notas),
    path('editar', views.update_notas),
    path('deletar', views.delete_notas),
    path('<str:title>', views.get_by_title),
    path('', views.get_notas),
]