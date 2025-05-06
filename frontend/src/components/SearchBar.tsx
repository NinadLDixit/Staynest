
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { toast } from "sonner";

// Popular locations in Bangalore
const POPULAR_LOCATIONS = [
  "Indiranagar",
  "Koramangala",
  "HSR Layout",
  "Whitefield",
  "Electronic City",
  "Marathahalli",
  "JP Nagar",
  "Bellandur",
  "BTM Layout",
  "Jayanagar",
  "Kormangala",
  "Ulsoor",
  "Bannerghatta Road",
  "Hebbal",
  "Banaswadi",
  "Richmond Town",
  "Banashankari",
  "MG Road",
  "Hosur Road",
  "Malleshwaram"
];

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  // Filter locations based on input
  const filteredLocations = POPULAR_LOCATIONS.filter(loc =>
    loc.toLowerCase().includes(location.toLowerCase())
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      console.log("Searching for PGs in:", location);
      toast.success(`Searching for PGs in ${location}`);
      navigate(`/listings?location=${encodeURIComponent(location)}`);
    } else {
      toast.error("Please enter a location to search");
    }
  };

  const handleLocationSelect = (loc: string) => {
    setLocation(loc);
    setShowSuggestions(false);
    // Auto-search after selection with a small delay
    setTimeout(() => {
      navigate(`/listings?location=${encodeURIComponent(loc)}`);
      toast.success(`Searching for PGs in ${loc}`);
    }, 300);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-8 z-10">
      <form
        onSubmit={handleSearch}
        className="bg-background rounded-xl shadow-lg border p-4 md:p-6 flex flex-col md:flex-row gap-4 items-center"
      >
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <input
            type="text"
            placeholder="Enter location, area, or landmark in Bangalore"
            className="w-full pl-10 pr-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => {
              // Delay hiding suggestions to allow for clicks
              setTimeout(() => setShowSuggestions(false), 150);
            }}
          />
          
          {showSuggestions && location.length > 0 && filteredLocations.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-background border rounded-md shadow-lg max-h-60 overflow-auto">
              {filteredLocations.map((loc) => (
                <div
                  key={loc}
                  className="px-4 py-2 hover:bg-muted cursor-pointer"
                  onMouseDown={() => handleLocationSelect(loc)}
                >
                  {loc}
                </div>
              ))}
            </div>
          )}
          
          {showSuggestions && location.length > 0 && filteredLocations.length === 0 && (
            <div className="absolute z-10 w-full mt-1 bg-background border rounded-md shadow-lg">
              <div className="px-4 py-2 text-muted-foreground">
                No locations found. Try a different search term.
              </div>
            </div>
          )}
        </div>
        <Button type="submit" className="w-full md:w-auto whitespace-nowrap">
          Search PGs
        </Button>
      </form>
      
      <div className="mt-4 flex flex-wrap justify-center gap-2 px-2">
        <span className="text-sm text-muted-foreground">Popular:</span>
        {POPULAR_LOCATIONS.slice(0, 5).map((loc) => (
          <button
            key={loc}
            className="text-sm text-primary hover:text-primary/80 hover:underline"
            onClick={() => handleLocationSelect(loc)}
          >
            {loc}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
