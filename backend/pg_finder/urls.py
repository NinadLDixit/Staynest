# pg_finder/urls.py
from django.urls import path
from .views import pg_listings

urlpatterns = [
    path('pgs/', pg_listings, name='pg_listings'),
]
