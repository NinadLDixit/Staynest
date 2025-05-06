
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">About StayNest</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              StayNest is Bangalore's premier platform for finding comfortable and affordable PG accommodations tailored for students and working professionals.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
            <p className="mb-6">
              At StayNest, we're committed to transforming the way people find and book PG accommodations. We understand the challenges of relocating to a new city and finding a place that feels like home. Our mission is to connect PG seekers with verified, quality accommodations that meet their specific needs and preferences.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">What Makes Us Different</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-background rounded-lg border p-6">
                <h3 className="text-xl font-semibold mb-3">Verified Listings</h3>
                <p>Every PG on our platform undergoes thorough verification. We personally visit each property to ensure it meets our quality and safety standards before it's listed.</p>
              </div>
              <div className="bg-background rounded-lg border p-6">
                <h3 className="text-xl font-semibold mb-3">No Brokerage</h3>
                <p>We believe in transparency. Book directly with PG owners without any hidden fees or brokerage charges, saving you money and hassle.</p>
              </div>
              <div className="bg-background rounded-lg border p-6">
                <h3 className="text-xl font-semibold mb-3">Genuine Reviews</h3>
                <p>All reviews on our platform come from verified tenants who have actually stayed at the properties, giving you honest insights into what to expect.</p>
              </div>
              <div className="bg-background rounded-lg border p-6">
                <h3 className="text-xl font-semibold mb-3">Full Transparency</h3>
                <p>We provide detailed information about each PG, including high-quality images, amenities, house rules, and nearby landmarks to help you make informed decisions.</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Team</h2>
            <p className="mb-6">
              Founded in 2024, StayNest was created by a team of professionals who experienced firsthand the challenges of finding good PG accommodations in Bangalore. Our diverse team combines expertise in real estate, technology, and customer service to deliver an exceptional platform.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Join Our Community</h2>
            <p className="mb-6">
              Whether you're a tenant looking for your next home or a property owner wanting to list your PG, we welcome you to join our growing community. Together, we're creating a more accessible and transparent PG ecosystem in Bangalore.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
