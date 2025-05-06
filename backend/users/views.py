from django.contrib.auth.hashers import make_password, check_password
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from backend.mongo_client import db
import jwt
from django.conf import settings

@api_view(['POST'])
def register_user(request):
    users_collection = db['users']
    data = request.data

    required_fields = ['name', 'email', 'password', 'userType']
    if not all(field in data and data[field] for field in required_fields):
        return Response({'error': 'Missing required fields'}, status=status.HTTP_400_BAD_REQUEST)

    # Check if user already exists
    if users_collection.find_one({'email': data['email']}):
        return Response({'error': 'User with this email already exists'}, status=status.HTTP_409_CONFLICT)

    # Hash password before saving
    hashed_password = make_password(data['password'])

    # Save user
    user_data = {
        'name': data['name'],
        'email': data['email'],
        'password': hashed_password,
        'userType': data['userType'],
    }

    users_collection.insert_one(user_data)

    # Create JWT token
    payload = {
        'email': data['email'],
        'name': data['name'],
        'userType': data['userType'],
    }
    token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')

    return Response({'message': 'User registered successfully', 'token': token}, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def login_user(request):
    users_collection = db['users']
    data = request.data

    user = users_collection.find_one({'email': data['email']})
    if user and check_password(data['password'], user['password']):
        payload = {
            'email': user['email'],
            'name': user['name'],
        }
        token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')
        return Response({'token': token}, status=status.HTTP_200_OK)
    return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
