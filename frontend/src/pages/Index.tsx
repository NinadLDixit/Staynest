
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import FilterSection from "@/components/FilterSection";
import FeaturedListings from "@/components/FeaturedListings";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Index = () => {
  const navigate = useNavigate();
  
  const handleListProperty = () => {
    toast.info("Redirecting to property listing page");
    navigate("/list-property");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <SearchBar />
        <FilterSection />
        <FeaturedListings />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose StayNest?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="rounded-full bg-primary/10 p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Verified Listings</h3>
                    <p className="text-muted-foreground mt-1">All PG properties on StayNest are personally verified for quality and safety.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-primary/10 p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">No Brokerage</h3>
                    <p className="text-muted-foreground mt-1">Book directly with PG owners - no hidden fees or brokerage charges.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-primary/10 p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Genuine Reviews</h3>
                    <p className="text-muted-foreground mt-1">Read authentic reviews from actual tenants who have stayed at the properties.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6">Are you a PG Owner?</h2>
              <p className="text-muted-foreground mb-6">
                List your property on StayNest and connect with thousands of prospective tenants. Manage bookings, accept payments, and grow your business.
              </p>
              <button 
                onClick={handleListProperty}
                className="inline-block bg-accent text-accent-foreground hover:bg-accent/90 py-2 px-6 rounded-lg font-medium transition-colors"
              >
                List Your Property
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
