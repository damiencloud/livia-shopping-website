import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#" className="inline-block font-serif text-3xl font-semibold tracking-wide mb-6">
              Livia Fashion
            </a>
            <p className="text-background/70 mb-8 max-w-xs font-light">
              Elevating everyday wear with comfortable, stylish, and high-quality fashion for kids and women.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Shop</h4>
            <ul className="space-y-4 text-background/70">
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kids Collection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ladies Fashion</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Information</h4>
            <ul className="space-y-4 text-background/70">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-background/70">
              <li>
                <a href="tel:7012879774" className="hover:text-white transition-colors">
                  +91 7012879774
                </a>
              </li>
              <li>
                <a href="mailto:hello@liviafashion.com" className="hover:text-white transition-colors">
                  hello@liviafashion.com
                </a>
              </li>
              <li>
                <span className="block">Available Mon-Sat</span>
                <span>10:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-background/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Livia Fashion. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
