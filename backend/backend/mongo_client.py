# backend/mongo_client.py

from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017")
db = client["staynest_db"]

# Example collection
pg_collection = db["pg_listings"]
