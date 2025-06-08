# backend/views.py
from django.http import JsonResponse,HttpResponse

def homepage(request):
    return HttpResponse("Hi Welcome")
