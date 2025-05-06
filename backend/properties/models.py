from django.db import models

class Property(models.Model):
    PROPERTY_TYPES = [
        ('pg', 'PG'),
        ('hostel', 'Hostel'),
        ('apartment', 'Shared Apartment')
    ]
    GENDER_CHOICES = [
        ('boys', 'Boys'),
        ('girls', 'Girls'),
        ('unisex', 'Unisex')
    ]
    AMENITIES_CHOICES = [
        ('wifi', 'WiFi'),
        ('ac', 'AC'),
        ('food', 'Food'),
        ('tv', 'TV'),
        ('laundry', 'Laundry'),
        ('parking', 'Parking'),
        ('gym', 'Gym')
    ]

    property_name = models.CharField(max_length=255)
    property_type = models.CharField(max_length=20, choices=PROPERTY_TYPES)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    address = models.TextField()
    area = models.CharField(max_length=255)
    city = models.CharField(max_length=100, default='Bangalore')
    pincode = models.CharField(max_length=6)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    amenities = models.JSONField(default=dict)
    rules = models.TextField()
    
    owner_name = models.CharField(max_length=255)
    owner_phone = models.CharField(max_length=15)
    owner_email = models.EmailField()

    def __str__(self):
        return self.property_name
