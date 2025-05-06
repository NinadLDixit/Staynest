
import { Link } from "react-router-dom";
import ListingCard from "./ListingCard";

// Define the type for the listing to match ListingCardProps
type Listing = {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  amenities: { name: string }[];
  gender: "boys" | "girls" | "unisex";
};

const DUMMY_LISTINGS: Listing[] = [
  {
    id: 1,
    title: "Luxe Living PG in Indiranagar",
    location: "Indiranagar, Bangalore",
    price: 12000,
    rating: 4.7,
    reviewCount: 28,
    imageUrl: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1157&q=80",
    amenities: [
      { name: "WiFi" },
      { name: "AC" },
      { name: "Laundry" },
      { name: "Food" },
      { name: "TV" },
    ],
    gender: "girls",
  },
  {
    id: 2,
    title: "Premium PG in Koramangala",
    location: "Koramangala, Bangalore",
    price: 15000,
    rating: 4.5,
    reviewCount: 42,
    imageUrl: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    amenities: [
      { name: "WiFi" },
      { name: "AC" },
      { name: "Gym" },
      { name: "Food" },
    ],
    gender: "boys",
  },
  {
    id: 3,
    title: "Budget Friendly PG in HSR Layout",
    location: "HSR Layout, Bangalore",
    price: 8000,
    rating: 4.2,
    reviewCount: 18,
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    amenities: [
      { name: "WiFi" },
      { name: "Food" },
      { name: "Parking" },
    ],
    gender: "unisex",
  },
];

const FeaturedListings = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Featured PG Listings</h2>
        <Link
          to="/listings"
          className="text-primary hover:text-primary/80 font-medium"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {DUMMY_LISTINGS.map((listing) => (
          <Link to={`/listing/${listing.id}`} key={listing.id}>
            <ListingCard {...listing} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedListings;
