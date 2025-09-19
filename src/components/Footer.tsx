import { Coffee, MapPin, Phone, Clock, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-gold" />
              <h3 className="text-2xl font-serif font-bold">مقهى ض</h3>
            </div>
            <p className="text-coffee-light mb-4">
              وجهتك المثالية للقهوة المميزة والحلويات الطازجة في أجواء دافئة ومريحة.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-6 w-6 text-gold hover:text-cream cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gold hover:text-cream cursor-pointer transition-colors" />
              <Facebook className="h-6 w-6 text-gold hover:text-cream cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-4 text-gold">معلومات التواصل</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gold" />
                <span className="text-coffee-light">الرياض، حي الملك فهد</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold" />
                <span className="text-coffee-light">+966 11 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-gold" />
                <span className="text-coffee-light">السبت - الخميس: 6:00ص - 12:00م</span>
              </div>
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-4 text-gold">القائمة</h4>
            <div className="space-y-2">
              <a href="#coffee" className="block text-coffee-light hover:text-cream transition-colors">القهوة</a>
              <a href="#sweets" className="block text-coffee-light hover:text-cream transition-colors">الحلويات</a>
              <a href="#bakery" className="block text-coffee-light hover:text-cream transition-colors">المخبوزات</a>
              <a href="#about" className="block text-coffee-light hover:text-cream transition-colors">عنا</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-4 text-gold">خدماتنا</h4>
            <div className="space-y-2">
              <span className="block text-coffee-light">توصيل للمنازل</span>
              <span className="block text-coffee-light">حجز المناسبات</span>
              <span className="block text-coffee-light">قهوة مخصصة</span>
              <span className="block text-coffee-light">ورش القهوة</span>
            </div>
          </div>
        </div>

        <div className="border-t border-coffee-medium pt-8 text-center">
          <p className="text-coffee-light">
            © 2024 مقهى ض. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;