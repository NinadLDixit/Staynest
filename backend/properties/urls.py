from django.urls import path
from .views import add_property

urlpatterns = [
    path("add/", add_property, name="add_property"),
]
