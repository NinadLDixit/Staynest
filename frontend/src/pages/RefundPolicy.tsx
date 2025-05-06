
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold mb-8">Refund Policy</h1>
          
          <div className="prose max-w-none">
            <h2>1. General Refund Policy</h2>
            <p>
              At StayNest, we strive to ensure that all our users have a positive experience. This Refund Policy outlines the terms and conditions for refunds on our platform.
            </p>
            
            <h2>2. Booking Cancellations</h2>
            <p>
              Refunds for booking cancellations are subject to the following terms:
            </p>
            <ul>
              <li><strong>More than 7 days before check-in:</strong> Full refund minus the service fee</li>
              <li><strong>3-7 days before check-in:</strong> 50% refund minus the service fee</li>
              <li><strong>Less than 3 days before check-in:</strong> No refund</li>
            </ul>
            
            <h2>3. Property-Specific Cancellation Policies</h2>
            <p>
              Some properties may have their own cancellation policies that differ from our standard policy. These property-specific policies are displayed on the listing page and take precedence over our standard policy.
            </p>
            
            <h2>4. Service Fee</h2>
            <p>
              The service fee charged by StayNest is non-refundable except in exceptional circumstances, such as if the property owner cancels the booking or if there is a verified significant discrepancy between the listed property and the actual property.
            </p>
            
            <h2>5. Security Deposit</h2>
            <p>
              Security deposits are fully refundable within 7 days after check-out, provided there is no damage to the property or violation of house rules.
            </p>
            
            <h2>6. Extenuating Circumstances</h2>
            <p>
              In cases of extenuating circumstances (such as natural disasters, serious illness, or government-imposed restrictions), we may offer a full or partial refund at our discretion, regardless of the standard cancellation policy.
            </p>
            
            <h2>7. Process for Requesting a Refund</h2>
            <p>
              To request a refund, please follow these steps:
            </p>
            <ol>
              <li>Log in to your StayNest account</li>
              <li>Go to "My Bookings"</li>
              <li>Select the booking you wish to cancel</li>
              <li>Click on "Request Refund" and follow the instructions</li>
            </ol>
            
            <h2>8. Refund Processing Time</h2>
            <p>
              Approved refunds are processed within 5-10 business days. The time it takes for the refund to appear in your account depends on your payment method and financial institution.
            </p>
            
            <h2>9. Disputes</h2>
            <p>
              If you have a dispute regarding a refund, please contact our customer support team at refunds@staynest.com. We will work with you and the property owner to resolve the issue.
            </p>
            
            <h2>10. Modifications to This Policy</h2>
            <p>
              StayNest reserves the right to modify this Refund Policy at any time. Any changes will be effective immediately upon posting on our website.
            </p>
            
            <p className="mt-8 text-muted-foreground">Last updated: April 29, 2025</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
