import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-coffee.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-coffee-dark/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 animate-fade-in">
          مقهى ض
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
          حيث تلتقي القهوة المميزة بالحلويات الأصيلة في أجواء دافئة ومريحة
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-warm text-primary-foreground hover:shadow-warm transition-all duration-300 transform hover:scale-105"
          >
            اكتشف القائمة
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-coffee-dark transition-all duration-300"
          >
            احجز طاولة
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown className="h-8 w-8" />
      </div>
    </section>
  );
};

export default Hero;