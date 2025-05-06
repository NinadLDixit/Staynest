# pg_finder/views.py
from django.http import JsonResponse
from backend.mongo_client import db
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def pg_listings(request):
    pg_collection = db['pg_listings']
    
    # Example filter: you can add query parameters like ?sharing_type=double
    filter_dict = {}
    if 'sharing_type' in request.GET:
        filter_dict['sharing_type'] = request.GET['sharing_type']
    
    # Sort by rent if requested
    sort = [('rent', 1)] if request.GET.get('ordering') == 'rent' else None

    # Fetch from MongoDB
    listings = list(pg_collection.find(filter_dict, {'_id': 0}).sort(sort) if sort else pg_collection.find(filter_dict, {'_id': 0}))
    
    return Response({'pg_listings': listings})
