from django.urls import path
from .views import register_user, login_user,test_view

urlpatterns = [
    path('register/', register_user, name='register_user'),
    path('login/', login_user, name='login_user'),
    path('test/', test_view, name='test-view')
]
