
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ListingCard from "@/components/ListingCard";
import { Button } from "@/components/ui/button";
import { Filter, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
  roomType?: "single" | "shared";
};

const LISTINGS: Listing[] = [
  {
    id: 1,
    title: "Cozy PG near Indiranagar Metro",
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
    roomType: "single",
  },
  {
    id: 2,
    title: "Premium PG Accommodation in Koramangala",
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
    roomType: "shared",
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
    roomType: "shared",
  },
  {
    id: 4,
    title: "Modern PG in Whitefield",
    location: "Whitefield, Bangalore",
    price: 13000,
    rating: 4.6,
    reviewCount: 35,
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1158&q=80",
    amenities: [
      { name: "WiFi" },
      { name: "AC" },
      { name: "Gym" },
      { name: "Food" },
      { name: "Parking" },
    ],
    gender: "boys",
    roomType: "single",
  },
  {
    id: 5,
    title: "Luxury PG in Electronic City",
    location: "Electronic City, Bangalore",
    price: 16000,
    rating: 4.8,
    reviewCount: 47,
    imageUrl: "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    amenities: [
      { name: "WiFi" },
      { name: "AC" },
      { name: "Gym" },
      { name: "Food" },
      { name: "TV" },
      { name: "Swimming Pool" },
    ],
    gender: "girls",
    roomType: "single",
  },
  {
    id: 6,
    title: "Affordable PG in Marathahalli",
    location: "Marathahalli, Bangalore",
    price: 9000,
    rating: 4.0,
    reviewCount: 22,
    imageUrl: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    amenities: [
      { name: "WiFi" },
      { name: "Food" },
      { name: "Laundry" },
    ],
    gender: "unisex",
    roomType: "shared",
  },
];

const Listings = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [filteredListings, setFilteredListings] = useState<Listing[]>(LISTINGS);
  const [priceRange, setPriceRange] = useState<string>("any");
  const [location, setLocation] = useState<string>("any");
  const [gender, setGender] = useState<string>("any");
  const [amenity, setAmenity] = useState<string>("any");
  
  const { search } = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(search);
  const filterParam = queryParams.get('filter');
  const locationParam = queryParams.get('location');

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  useEffect(() => {
    let filtered = [...LISTINGS];
    
    // Apply filter from URL parameters
    if (filterParam) {
      if (filterParam === 'boys' || filterParam === 'girls' || filterParam === 'unisex') {
        filtered = filtered.filter(listing => listing.gender === filterParam);
        setGender(filterParam);
      } else if (filterParam === 'single' || filterParam === 'shared') {
        filtered = filtered.filter(listing => listing.roomType === filterParam);
      }
    }

    // Apply location filter from URL
    if (locationParam) {
      filtered = filtered.filter(listing => 
        listing.location.toLowerCase().includes(locationParam.toLowerCase())
      );
      setLocation(locationParam);
    }
    
    // Apply price range filter
    if (priceRange !== "any") {
      const [min, max] = priceRange.split('-').map(Number);
      if (!max) {
        filtered = filtered.filter(listing => listing.price >= min);
      } else {
        filtered = filtered.filter(listing => listing.price >= min && listing.price <= max);
      }
    }
    
    // Apply location filter from dropdown
    if (location !== "any" && !locationParam) {
      filtered = filtered.filter(listing => 
        listing.location.toLowerCase().includes(location.toLowerCase())
      );
    }
    
    // Apply gender filter
    if (gender !== "any" && !filterParam) {
      filtered = filtered.filter(listing => listing.gender === gender);
    }
    
    // Apply amenity filter
    if (amenity !== "any") {
      filtered = filtered.filter(listing => 
        listing.amenities.some(item => item.name.toLowerCase() === amenity.toLowerCase())
      );
    }
    
    setFilteredListings(filtered);
  }, [filterParam, locationParam, priceRange, location, gender, amenity]);

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriceRange(e.target.value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation(e.target.value);
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };

  const handleAmenityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAmenity(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="outline" 
              size="icon"
              onClick={handleGoBack}
              className="h-9 w-9"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Go back</span>
            </Button>
            <h1 className="text-3xl font-bold">PG Listings in Bangalore</h1>
            <div className="flex-grow"></div>
            <Button
              variant="outline"
              onClick={() => setShowFilter(!showFilter)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
          
          {showFilter && (
            <div className="bg-background rounded-lg border p-4 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium">Price Range</label>
                  <select 
                    className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2"
                    value={priceRange}
                    onChange={handlePriceRangeChange}
                  >
                    <option value="any">Any</option>
                    <option value="0-10000">Under ₹10,000</option>
                    <option value="10000-15000">₹10,000 - ₹15,000</option>
                    <option value="15000">₹15,000+</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Location</label>
                  <select 
                    className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2"
                    value={location}
                    onChange={handleLocationChange}
                  >
                    <option value="any">Any</option>
                    <option value="Indiranagar">Indiranagar</option>
                    <option value="Koramangala">Koramangala</option>
                    <option value="HSR Layout">HSR Layout</option>
                    <option value="Whitefield">Whitefield</option>
                    <option value="Electronic City">Electronic City</option>
                    <option value="Marathahalli">Marathahalli</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Gender</label>
                  <select 
                    className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2"
                    value={gender}
                    onChange={handleGenderChange}
                  >
                    <option value="any">Any</option>
                    <option value="boys">Boys</option>
                    <option value="girls">Girls</option>
                    <option value="unisex">Unisex</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Amenities</label>
                  <select 
                    className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2"
                    value={amenity}
                    onChange={handleAmenityChange}
                  >
                    <option value="any">Any</option>
                    <option value="AC">AC</option>
                    <option value="WiFi">WiFi</option>
                    <option value="Food">Food</option>
                    <option value="Gym">Gym</option>
                    <option value="Laundry">Laundry</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {filteredListings.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredListings.map((listing) => (
                <Link to={`/listing/${listing.id}`} key={listing.id}>
                  <ListingCard {...listing} />
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium">No PGs found matching your criteria</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your filters to see more results</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Listings;
