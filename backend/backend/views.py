# backend/views.py
from django.http import JsonResponse

def homepage(request):
    return JsonResponse({'message': 'Welcome to the API!'})
