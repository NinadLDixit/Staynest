import os
import json
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import FileSystemStorage

from backend.mongo_client import db  # use the shared mongo_client.py

@csrf_exempt
def add_property(request):
    if request.method == 'POST':
        try:
            # Get the collection
            collection = db["properties"]

            # Handle image upload
            image_file = request.FILES.get('image')
            image_url = None
            if image_file:
                fs = FileSystemStorage(location=os.path.join(settings.MEDIA_ROOT, 'property_images'))
                filename = fs.save(image_file.name, image_file)
                image_url = os.path.join('property_images', filename)

            # Parse amenities safely (they come as a JSON string from React)
            amenities_str = request.POST.get('amenities', '{}')
            amenities = json.loads(amenities_str)

            # Create property document
            property_data = {
                "propertyName": request.POST.get("propertyName"),
                "propertyType": request.POST.get("propertyType"),
                "gender": request.POST.get("gender"),
                "address": request.POST.get("address"),
                "area": request.POST.get("area"),
                "city": request.POST.get("city"),
                "pincode": request.POST.get("pincode"),
                "description": request.POST.get("description"),
                "price": request.POST.get("price"),
                "amenities": amenities,
                "rules": request.POST.get("rules"),
                "ownerName": request.POST.get("ownerName"),
                "ownerPhone": request.POST.get("ownerPhone"),
                "ownerEmail": request.POST.get("ownerEmail"),
                "imageUrl": image_url,
            }

            # Insert into MongoDB
            result = collection.insert_one(property_data)

            return JsonResponse({"status": "success", "id": str(result.inserted_id)})

        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=500)

    return JsonResponse({"status": "error", "message": "Only POST method allowed"}, status=405)
