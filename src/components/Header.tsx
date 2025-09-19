import { Button } from "@/components/ui/button";
import { Coffee, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Coffee className="h-8 w-8 text-warm-brown" />
          <h1 className="text-2xl font-serif font-bold text-foreground">ض</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-warm-brown transition-colors">الرئيسية</a>
          <a href="#coffee" className="text-foreground hover:text-warm-brown transition-colors">القهوة</a>
          <a href="#sweets" className="text-foreground hover:text-warm-brown transition-colors">الحلويات</a>
          <a href="#bakery" className="text-foreground hover:text-warm-brown transition-colors">المخبوزات</a>
          <a href="#about" className="text-foreground hover:text-warm-brown transition-colors">عنا</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-primary-foreground">
            اتصل بنا
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col p-4 space-y-4">
            <a href="#home" className="text-foreground hover:text-warm-brown transition-colors py-2">الرئيسية</a>
            <a href="#coffee" className="text-foreground hover:text-warm-brown transition-colors py-2">القهوة</a>
            <a href="#sweets" className="text-foreground hover:text-warm-brown transition-colors py-2">الحلويات</a>
            <a href="#bakery" className="text-foreground hover:text-warm-brown transition-colors py-2">المخبوزات</a>
            <a href="#about" className="text-foreground hover:text-warm-brown transition-colors py-2">عنا</a>
            <Button variant="outline" className="border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-primary-foreground w-full">
              اتصل بنا
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;