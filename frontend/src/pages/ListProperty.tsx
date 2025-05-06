
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ListProperty = () => {
  const [formData, setFormData] = useState({
    propertyName: "",
    propertyType: "pg",
    gender: "boys",
    address: "",
    area: "",
    city: "Bangalore",
    pincode: "",
    description: "",
    price: "",
    amenities: {
      wifi: false,
      ac: false,
      food: false,
      tv: false,
      laundry: false,
      parking: false,
      gym: false,
    },
    rules: "",
    ownerName: "",
    ownerPhone: "",
    ownerEmail: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    if (name.startsWith("amenities.")) {
      const amenityName = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        amenities: {
          ...prev.amenities,
          [amenityName]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Property Listing:", formData);
    toast.success("Your property listing has been submitted for review!");
    // In a real app, this would submit the form to the backend
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold mb-8">List Your Property</h1>
          
          <div className="bg-card rounded-xl shadow-sm border p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Basic Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="propertyName" className="block text-sm font-medium mb-1">
                      Property Name*
                    </label>
                    <input
                      id="propertyName"
                      name="propertyName"
                      type="text"
                      required
                      value={formData.propertyName}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-4 py-2"
                      placeholder="e.g., Sunshine PG"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium mb-1">
                      Property Type*
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      required
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-4 py-2"
                    >
                      <option value="pg">PG</option>
                      <option value="hostel">Hostel</option>
                      <option value="apartment">Shared Apartment</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium mb-1">
                    Gender*
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    required
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-4 py-2"
                  >
                    <option value="boys">Boys</option>
                    <option value="girls">Girls</option>
                    <option value="unisex">Unisex</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium mb-1">
                    Complete Address*
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    rows={2}
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-4 py-2"
                    placeholder="House/Building number, Street name"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="area" className="block text-sm font-medium mb-1">
                      Area/Locality*
                    </label>
                    <input
                      id="area"
                      name="area"
                      type="text"
                      required
                      value={formData.area}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-4 py-2"
                      placeholder="e.g., Koramangala, Indiranagar"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium mb-1">
                      City*
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-4 py-2"
                      disabled
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="pincode" className="block text-sm font-medium mb-1">
                    Pincode*
                  </label>
                  <input
                    id="pincode"
                    name="pincode"
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-4 py-2"
                    placeholder="e.g., 560034"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Property Details</h2>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium mb-1">
                    Description*
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    required
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-4 py-2"
                    placeholder="Describe your property, nearby landmarks, etc."
                  />
                </div>
                
                <div>
                  <label htmlFor="price" className="block text-sm font-medium mb-1">
                    Monthly Rent (₹)*
                  </label>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    required
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-4 py-2"
                    placeholder="e.g., 10000"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Amenities</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="flex items-center space-x-2">
                      <input
                        id="wifi"
                        name="amenities.wifi"
                        type="checkbox"
                        checked={formData.amenities.wifi}
                        onChange={handleChange}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="wifi">WiFi</label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        id="ac"
                        name="amenities.ac"
                        type="checkbox"
                        checked={formData.amenities.ac}
                        onChange={handleChange}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="ac">AC</label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        id="food"
                        name="amenities.food"
                        type="checkbox"
                        checked={formData.amenities.food}
                        onChange={handleChange}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="food">Food</label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        id="tv"
                        name="amenities.tv"
                        type="checkbox"
                        checked={formData.amenities.tv}
                        onChange={handleChange}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="tv">TV</label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        id="laundry"
                        name="amenities.laundry"
                        type="checkbox"
                        checked={formData.amenities.laundry}
                        onChange={handleChange}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="laundry">Laundry</label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        id="parking"
                        name="amenities.parking"
                        type="checkbox"
                        checked={formData.amenities.parking}
                        onChange={handleChange}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="parking">Parking</label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        id="gym"
                        name="amenities.gym"
                        type="checkbox"
                        checked={formData.amenities.gym}
                        onChange={handleChange}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="gym">Gym</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="rules" className="block text-sm font-medium mb-1">
                    House Rules
                  </label>
                  <textarea
                    id="rules"
                    name="rules"
                    rows={3}
                    value={formData.rules}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-4 py-2"
                    placeholder="e.g., No smoking, No pets, Visitors timing, etc."
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Contact Information</h2>
                
                <div>
                  <label htmlFor="ownerName" className="block text-sm font-medium mb-1">
                    Contact Person Name*
                  </label>
                  <input
                    id="ownerName"
                    name="ownerName"
                    type="text"
                    required
                    value={formData.ownerName}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-4 py-2"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="ownerPhone" className="block text-sm font-medium mb-1">
                      Contact Phone*
                    </label>
                    <input
                      id="ownerPhone"
                      name="ownerPhone"
                      type="tel"
                      required
                      value={formData.ownerPhone}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-4 py-2"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="ownerEmail" className="block text-sm font-medium mb-1">
                      Contact Email*
                    </label>
                    <input
                      id="ownerEmail"
                      name="ownerEmail"
                      type="email"
                      required
                      value={formData.ownerEmail}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-4 py-2"
                    />
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button type="submit" className="w-full md:w-auto">
                  Submit Property
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ListProperty;
