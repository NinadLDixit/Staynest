
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FilterSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const navigate = useNavigate();
  
  const filters = [
    { id: "all", label: "All PGs" },
    { id: "boys", label: "Boys PG" },
    { id: "girls", label: "Girls PG" },
    { id: "unisex", label: "Unisex PG" },
    { id: "single", label: "Single Room" },
    { id: "shared", label: "Shared Room" },
  ];

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId);
    
    // Navigate to listings page with the filter query parameter
    if (filterId === "all") {
      navigate("/listings");
    } else {
      navigate(`/listings?filter=${filterId}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <h2 className="text-2xl font-bold mb-6">Find by Category</h2>
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? "default" : "outline"}
            onClick={() => handleFilterClick(filter.id)}
            className="rounded-full"
          >
            {filter.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
