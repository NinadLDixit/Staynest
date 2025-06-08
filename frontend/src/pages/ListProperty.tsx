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

  const [image, setImage] = useState<File | null>(null);
  const [submittedProperty, setSubmittedProperty] = useState<any>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = new FormData();
      for (const key in formData) {
        if (key === "amenities") {
          data.append("amenities", JSON.stringify(formData.amenities));
        } else {
          // @ts-ignore
          data.append(key, formData[key]);
        }
      }
      if (image) {
        data.append("image", image);
      }

      const response = await fetch("http://localhost:8000/properties/add/", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        const result = await response.json();
        setSubmittedProperty(result);
        toast.success("Your property listing has been submitted for review!");

        setFormData({
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
        setImage(null);
      } else {
        toast.error("Failed to submit property");
      }
    } catch (error) {
      toast.error("An error occurred during submission");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold mb-8">List Your Property</h1>

          <div className="bg-card rounded-xl shadow-sm border p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="propertyName"
                  type="text"
                  required
                  placeholder="Property name (e.g., Green Stay PG)"
                  value={formData.propertyName}
                  onChange={handleChange}
                  className="w-full rounded-md border px-4 py-2"
                />
                <select
                  name="propertyType"
                  required
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full rounded-md border px-4 py-2"
                >
                  <option value="pg">PG</option>
                  <option value="hostel">Hostel</option>
                  <option value="apartment">Shared Apartment</option>
                </select>
              </div>

              <select
                name="gender"
                required
                value={formData.gender}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2"
              >
                <option value="boys">Boys</option>
                <option value="girls">Girls</option>
                <option value="unisex">Unisex</option>
              </select>

              <textarea
                name="address"
                required
                placeholder="Full address of the property"
                value={formData.address}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="area"
                  type="text"
                  required
                  placeholder="Area/Locality (e.g., Indiranagar)"
                  value={formData.area}
                  onChange={handleChange}
                  className="w-full rounded-md border px-4 py-2"
                />
                <input
                  name="city"
                  type="text"
                  disabled
                  value={formData.city}
                  className="w-full rounded-md border px-4 py-2 bg-gray-100"
                />
              </div>

              <input
                name="pincode"
                type="text"
                required
                placeholder="Pincode (e.g., 560001)"
                value={formData.pincode}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2"
              />

              <textarea
                name="description"
                required
                placeholder="Description of the property, nearby landmarks..."
                value={formData.description}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2"
              />

              <input
                name="price"
                type="number"
                required
                placeholder="Monthly rent (e.g., 9500)"
                value={formData.price}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2"
              />

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {Object.keys(formData.amenities).map((key) => (
                  <label key={key} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name={`amenities.${key}`}
                      checked={(formData.amenities as any)[key]}
                      onChange={handleChange}
                      className="h-4 w-4"
                    />
                    <span className="capitalize">{key}</span>
                  </label>
                ))}
              </div>

              <textarea
                name="rules"
                placeholder="House rules (e.g., No smoking, visitors till 8PM...)"
                value={formData.rules}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2"
              />

              <input
                name="ownerName"
                type="text"
                required
                placeholder="Contact person name"
                value={formData.ownerName}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="ownerPhone"
                  type="tel"
                  required
                  placeholder="Contact number"
                  value={formData.ownerPhone}
                  onChange={handleChange}
                  className="w-full rounded-md border px-4 py-2"
                />
                <input
                  name="ownerEmail"
                  type="email"
                  required
                  placeholder="Contact email"
                  value={formData.ownerEmail}
                  onChange={handleChange}
                  className="w-full rounded-md border px-4 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Upload Property Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files?.[0] || null)}
                  className="w-full border rounded-md py-2 px-3 text-sm"
                />
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full md:w-auto">
                  Submit Property
                </Button>
              </div>
            </form>

            {/* ✅ Preview Submitted Data */}
            {submittedProperty && (
              <div className="mt-12 border rounded-md p-6 shadow">
                <h2 className="text-xl font-bold mb-4">Submitted Property Preview</h2>
                <p><strong>Name:</strong> {submittedProperty.propertyName}</p>
                <p><strong>Price:</strong> ₹{submittedProperty.price}</p>
                <p><strong>City:</strong> {submittedProperty.city}</p>
                <p><strong>Owner:</strong> {submittedProperty.ownerName}</p>
                <p><strong>Email:</strong> {submittedProperty.ownerEmail}</p>
                <p><strong>Phone:</strong> {submittedProperty.ownerPhone}</p>
                <p><strong>Description:</strong> {submittedProperty.description}</p>
                <p><strong>Rules:</strong> {submittedProperty.rules}</p>
                <p><strong>Address:</strong> {submittedProperty.address}</p>
                <p><strong>Amenities:</strong> {
                  Object.entries(submittedProperty.amenities || {})
                    .filter(([_, v]) => v)
                    .map(([k]) => k)
                    .join(", ")
                }</p>
                {submittedProperty.image_url && (
                  <img
                    src={`http://localhost:8000${submittedProperty.image_url}`}
                    alt="Uploaded"
                    className="w-64 mt-4 rounded-md border"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ListProperty;
