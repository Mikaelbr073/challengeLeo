from django.urls import path, include
from django.contrib import admin
urlpatterns = [
    path('admin/', admin.site.urls),
    path('notas/', include('notas.urls'), name='notas_urls')
]
