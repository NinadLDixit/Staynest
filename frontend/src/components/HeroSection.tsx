
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-primary/10 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">
            Find Your Perfect
            <span className="text-primary block mt-2">PG in Bangalore</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl sm:mx-0 mx-auto">
            StayNest offers comfortable and affordable paying guest accommodations with modern amenities, designed specifically for students and working professionals.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
            <Link to="/listings">
              <Button size="lg" className="text-lg">
                Find PG Homes
              </Button>
            </Link>
            <Link to="/list-property">
              <Button size="lg" variant="outline" className="text-lg">
                List Your Property
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default HeroSection;
