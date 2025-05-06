
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { MapPin, Star, Calendar, Heart, Phone, Mail } from "lucide-react";

// Mock data for a single listing
const listing = {
  id: 1,
  title: "Cozy PG near Indiranagar Metro",
  location: "100 Feet Road, Indiranagar, Bangalore",
  price: 12000,
  rating: 4.7,
  reviewCount: 28,
  description: "This well-maintained PG is located just 5 minutes away from Indiranagar Metro Station, making it ideal for professionals working in the CBD area. The rooms are spacious, clean, and come with all modern amenities including air conditioning, high-speed internet, TV, and attached bathroom.",
  gender: "girls" as "boys" | "girls" | "unisex",
  images: [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8",
    "https://images.unsplash.com/photo-1631679706909-1844bbd07221",
  ],
  amenities: [
    { name: "WiFi" },
    { name: "AC" },
    { name: "Laundry" },
    { name: "Food" },
    { name: "TV" },
    { name: "Parking" },
    { name: "Backup Power" },
    { name: "CCTV" },
  ],
  reviews: [
    {
      id: 1,
      name: "Priya Singh",
      date: "March 15, 2024",
      rating: 5,
      comment: "Excellent PG with amazing facilities. The food is really good and the location is perfect for anyone working in Indiranagar.",
    },
    {
      id: 2,
      name: "Ananya Sharma",
      date: "February 22, 2024",
      rating: 4,
      comment: "Clean rooms and good facilities. The staff is very friendly and cooperative. Only issue is sometimes hot water is not available.",
    },
  ],
  owner: {
    name: "Ramesh Kumar",
    phone: "+91 98765 43210",
    email: "ramesh@example.com",
    responseTime: "Usually responds within 24 hours",
  },
  rules: [
    "No smoking inside the premises",
    "Visitors allowed between 9 AM to 8 PM",
    "No loud music after 10 PM",
    "Security deposit: ₹15,000 (refundable)",
  ],
};

const genderColor = {
  boys: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  girls: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
  unisex: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
};

const ListingDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isFavorite, setIsFavorite] = useState(false);
  const [mainImage, setMainImage] = useState(listing.images[0]);
  const [showContactInfo, setShowContactInfo] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? "Removed from favorites" : "Added to favorites");
  };

  const handleBookNow = () => {
    toast.success("Booking request sent! The owner will contact you soon.");
  };

  const handleScheduleVisit = () => {
    toast.success("Visit scheduled! Details will be sent to your email.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">{listing.title}</h1>
              <div className="flex items-center mt-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{listing.location}</span>
              </div>
            </div>
            <div className="flex items-center mt-4 lg:mt-0 space-x-2">
              <Badge className={`${genderColor[listing.gender]} capitalize`}>
                {listing.gender} PG
              </Badge>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500 mr-1" />
                <span>{listing.rating}</span>
                <span className="text-muted-foreground ml-1">({listing.reviewCount} reviews)</span>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={toggleFavorite}
                className="rounded-full"
              >
                <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={mainImage}
                    alt={listing.title}
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {listing.images.map((img, idx) => (
                    <div
                      key={idx}
                      className={`cursor-pointer rounded-md overflow-hidden ${
                        mainImage === img ? "ring-2 ring-primary" : ""
                      }`}
                      onClick={() => setMainImage(img)}
                    >
                      <img
                        src={img}
                        alt={`${listing.title} - ${idx + 1}`}
                        className="h-20 w-28 object-cover"
                      />
                    </div>
                  ))}
                </div>
                
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold mt-8 mb-2">About this PG</h2>
                  <p>{listing.description}</p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mt-8 mb-4">Amenities</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {listing.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mt-8 mb-4">House Rules</h2>
                  <ul className="list-disc list-outside ml-5 space-y-2">
                    {listing.rules.map((rule, idx) => (
                      <li key={idx}>{rule}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mt-8 mb-4">Reviews</h2>
                  <div className="space-y-6">
                    {listing.reviews.map((review) => (
                      <div key={review.id} className="border-b pb-6">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium">{review.name}</h3>
                          <span className="text-muted-foreground text-sm">{review.date}</span>
                        </div>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? "fill-yellow-500 text-yellow-500"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="mt-2 text-muted-foreground">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button variant="outline" className="w-full">
                      View All Reviews
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-card rounded-xl shadow-md border p-6">
                  <h3 className="text-2xl font-bold">₹{listing.price.toLocaleString()}</h3>
                  <p className="text-muted-foreground">per month</p>
                  
                  <div className="mt-6 space-y-4">
                    <Button
                      onClick={handleBookNow}
                      className="w-full"
                    >
                      Book Now
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleScheduleVisit}
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <Calendar className="h-4 w-4" />
                      Schedule a Visit
                    </Button>
                  </div>
                  
                  <div className="mt-8">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Contact Owner</h3>
                      <Button
                        variant="ghost"
                        onClick={() => setShowContactInfo(!showContactInfo)}
                        className="text-primary text-sm"
                      >
                        {showContactInfo ? "Hide" : "Show"}
                      </Button>
                    </div>
                    
                    {showContactInfo ? (
                      <div className="mt-4 space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground">Owner</p>
                          <p className="font-medium">{listing.owner.name}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-primary" />
                          <a href={`tel:${listing.owner.phone}`} className="hover:text-primary">
                            {listing.owner.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-primary" />
                          <a href={`mailto:${listing.owner.email}`} className="hover:text-primary">
                            {listing.owner.email}
                          </a>
                        </div>
                        <p className="text-xs text-muted-foreground italic">
                          {listing.owner.responseTime}
                        </p>
                      </div>
                    ) : (
                      <div className="mt-4 p-4 bg-muted rounded-md text-center">
                        <p className="text-sm text-muted-foreground">
                          Click "Show" to view owner contact details
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-8 pt-4 border-t">
                    <h3 className="font-medium mb-2">Share this listing</h3>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ListingDetail;
