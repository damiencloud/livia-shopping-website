import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Shop", href: "#featured" },
    { name: "Collections", href: "#collections" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 z-50">
            <span className="font-serif text-2xl font-semibold tracking-wide text-foreground">
              Livia Fashion
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide uppercase"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4 border-l border-border pl-6">
              <button className="text-foreground/80 hover:text-primary transition-colors relative group">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1.5 w-4 h-4 rounded-full bg-accent text-[10px] font-bold text-accent-foreground flex items-center justify-center scale-0 group-hover:scale-100 transition-transform">
                  0
                </span>
              </button>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden z-50">
            <button className="text-foreground/80">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg p-6 flex flex-col gap-6 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
