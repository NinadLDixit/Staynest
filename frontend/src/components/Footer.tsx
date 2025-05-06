
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">StayNest</h3>
            <p className="text-muted-foreground">
              Finding your perfect PG accommodation in Bangalore made simple, secure, and hassle-free.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/listings" className="text-muted-foreground hover:text-primary transition-colors">
                  Browse PGs
                </Link>
              </li>
              <li>
                <Link to="/listings?filter=boys" className="text-muted-foreground hover:text-primary transition-colors">
                  Boys PGs
                </Link>
              </li>
              <li>
                <Link to="/listings?filter=girls" className="text-muted-foreground hover:text-primary transition-colors">
                  Girls PGs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-4">Information</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/list-property" className="text-muted-foreground hover:text-primary transition-colors">
                  List Your Property
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-muted-foreground hover:text-primary transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} StayNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
