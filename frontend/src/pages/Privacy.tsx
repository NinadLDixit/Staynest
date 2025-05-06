
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <h2>1. Introduction</h2>
            <p>
              At StayNest, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
            </p>
            
            <h2>2. Information We Collect</h2>
            <p>
              We may collect the following types of information:
            </p>
            <ul>
              <li>Personal information (name, email address, phone number, etc.)</li>
              <li>Account information (username, password)</li>
              <li>Payment information (credit card details, billing address)</li>
              <li>Profile information (profile picture, preferences)</li>
              <li>Usage data (IP address, browser type, pages visited)</li>
              <li>Location data (with your consent)</li>
            </ul>
            
            <h2>3. How We Use Your Information</h2>
            <p>
              We use your information for various purposes, including:
            </p>
            <ul>
              <li>Providing and improving our services</li>
              <li>Processing transactions and bookings</li>
              <li>Communicating with you about our services</li>
              <li>Sending you marketing communications (with your consent)</li>
              <li>Ensuring the security of our platform</li>
              <li>Complying with legal obligations</li>
            </ul>
            
            <h2>4. Information Sharing</h2>
            <p>
              We may share your information with:
            </p>
            <ul>
              <li>Property owners and tenants (as necessary for bookings)</li>
              <li>Service providers (payment processors, hosting providers)</li>
              <li>Legal authorities (when required by law)</li>
            </ul>
            
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
            </p>
            
            <h2>6. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>Right to access your personal information</li>
              <li>Right to correct inaccurate information</li>
              <li>Right to delete your information</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
            </ul>
            
            <h2>7. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website. You can manage your cookie preferences through your browser settings.
            </p>
            
            <h2>8. Children's Privacy</h2>
            <p>
              StayNest is not intended for children under 18 years of age. We do not knowingly collect personal information from children.
            </p>
            
            <h2>9. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
            
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@staynest.com.
            </p>
            
            <p className="mt-8 text-muted-foreground">Last updated: April 29, 2025</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
