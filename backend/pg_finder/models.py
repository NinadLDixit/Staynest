from django.db import models
from users.models import User

class PG(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()
    location = models.CharField(max_length=100)
    latitude = models.FloatField()
    longitude = models.FloatField()
    rent = models.DecimalField(max_digits=10, decimal_places=2)
    sharing_type = models.CharField(choices=[('single', 'Single'), ('double', 'Double')], max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)

class PGImage(models.Model):
    pg = models.ForeignKey(PG, related_name='images', on_delete=models.CASCADE)
    image_url = models.URLField()

class Review(models.Model):
    pg = models.ForeignKey(PG, on_delete=models.CASCADE, related_name='reviews')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.TextField()
    rating = models.IntegerField(default=5)
    created_at = models.DateTimeField(auto_now_add=True)

class FoodReview(models.Model):
    pg = models.ForeignKey(PG, on_delete=models.CASCADE, related_name='food_reviews')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    food_comment = models.TextField()
    food_rating = models.IntegerField(default=5)
    created_at = models.DateTimeField(auto_now_add=True)
