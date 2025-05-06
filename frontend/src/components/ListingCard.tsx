
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Heart, MapPin, Star } from "lucide-react";
import { useState } from "react";

interface Amenity {
  name: string;
}

interface ListingCardProps {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  amenities: Amenity[];
  gender: "boys" | "girls" | "unisex";
}

const ListingCard = ({
  id,
  title,
  location,
  price,
  rating,
  reviewCount,
  imageUrl,
  amenities,
  gender,
}: ListingCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const genderColor = {
    boys: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    girls: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    unisex: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  };

  return (
    <Card className="card-hover overflow-hidden h-full transform transition-transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="h-48 w-full object-cover"
        />
        <div className="absolute top-2 left-2">
          <Badge className={`${genderColor[gender]} capitalize`}>
            {gender}
          </Badge>
        </div>
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 p-2 bg-background/80 backdrop-blur-sm rounded-full"
        >
          <Heart
            className={`h-5 w-5 ${
              isFavorite ? "fill-red-500 text-red-500" : "text-foreground"
            }`}
          />
        </button>
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-medium line-clamp-1">{title}</h3>
          <div className="flex items-center space-x-1 text-sm">
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            <span>{rating.toFixed(1)}</span>
            <span className="text-muted-foreground">({reviewCount})</span>
          </div>
        </div>
        <div className="flex items-center mt-1 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="line-clamp-1">{location}</span>
        </div>
        <div className="mt-3">
          <div className="flex flex-wrap gap-2">
            {amenities.slice(0, 3).map((amenity) => (
              <Badge key={amenity.name} variant="secondary" className="font-normal">
                {amenity.name}
              </Badge>
            ))}
            {amenities.length > 3 && (
              <Badge variant="secondary" className="font-normal">
                +{amenities.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div>
          <span className="text-xl font-semibold">₹{price.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground">/month</span>
        </div>
        <span className="text-primary text-sm font-medium">View Details</span>
      </CardFooter>
    </Card>
  );
};

export default ListingCard;
