from rest_framework import serializers
from .models import PG, PGImage, Review, FoodReview

class PGImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PGImage
        fields = ['image_url']

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

class FoodReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodReview
        fields = '__all__'

class PGSerializer(serializers.ModelSerializer):
    images = PGImageSerializer(many=True, read_only=True)
    reviews = ReviewSerializer(many=True, read_only=True)
    food_reviews = FoodReviewSerializer(many=True, read_only=True)

    class Meta:
        model = PG
        fields = '__all__'
