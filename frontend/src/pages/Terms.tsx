
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              Welcome to StayNest. These Terms of Service ("Terms") govern your access to and use of the StayNest website and services. 
              By accessing or using our services, you agree to be bound by these Terms.
            </p>
            
            <h2>2. Eligibility</h2>
            <p>
              You must be at least 18 years old to use our services. By using StayNest, you represent and warrant that you are 18 years of age or older.
            </p>
            
            <h2>3. User Accounts</h2>
            <p>
              To access certain features of StayNest, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            
            <h2>4. PG Listings</h2>
            <p>
              StayNest provides a platform for property owners to list their PG accommodations. We do not own or operate any of the PG properties listed on our platform.
            </p>
            
            <h2>5. Booking and Payments</h2>
            <p>
              All bookings are subject to availability and confirmation. Payment terms are specified for each listing. StayNest charges a service fee for using our platform.
            </p>
            
            <h2>6. Cancellation Policy</h2>
            <p>
              Cancellation policies vary by property and are specified in each listing. Please review the cancellation policy before making a booking.
            </p>
            
            <h2>7. Prohibited Activities</h2>
            <p>
              You agree not to engage in any activity that may interfere with the proper functioning of StayNest or compromise the security of our platform.
            </p>
            
            <h2>8. Intellectual Property</h2>
            <p>
              All content on StayNest, including text, graphics, logos, and software, is the property of StayNest and is protected by intellectual property laws.
            </p>
            
            <h2>9. Limitation of Liability</h2>
            <p>
              StayNest is not liable for any damages arising from your use of our services or your interactions with property owners or tenants.
            </p>
            
            <h2>10. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes arising from these Terms shall be resolved in the courts of Bangalore, Karnataka.
            </p>
            
            <h2>11. Changes to Terms</h2>
            <p>
              StayNest reserves the right to modify these Terms at any time. We will notify users of any significant changes to these Terms.
            </p>
            
            <h2>12. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at legal@staynest.com.
            </p>
            
            <p className="mt-8 text-muted-foreground">Last updated: April 29, 2025</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
