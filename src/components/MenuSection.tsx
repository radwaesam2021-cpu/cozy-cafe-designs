import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import sweetsImage from "@/assets/sweets-display.jpg";
import bakedGoodsImage from "@/assets/baked-goods.jpg";

const MenuSection = () => {
  const coffeeMenu = [
    { name: "إسبريسو", description: "قهوة إيطالية أصيلة مركزة", price: "15 ريال" },
    { name: "كابتشينو", description: "مزيج رائع من الإسبريسو والحليب المرغي", price: "18 ريال" },
    { name: "لاتيه", description: "قهوة ناعمة مع الحليب وطبقة من الرغوة", price: "20 ريال" },
    { name: "قهوة عربية", description: "قهوة عربية تقليدية بالهيل والزعفران", price: "12 ريال" },
  ];

  const sweets = [
    { name: "كنافة", description: "حلوى شرقية بالجبن والقطر", price: "25 ريال" },
    { name: "بقلاوة", description: "طبقات العجين المقرمشة مع المكسرات", price: "22 ريال" },
    { name: "معمول", description: "حلوى محشوة بالتمر أو الجوز", price: "18 ريال" },
    { name: "مهلبية", description: "حلوى باردة بالحليب والورد", price: "15 ريال" },
  ];

  const bakery = [
    { name: "كرواسان", description: "معجنات فرنسية طازجة ومقرمشة", price: "8 ريال" },
    { name: "مناقيش", description: "فطائر شرقية بالزعتر والجبن", price: "12 ريال" },
    { name: "خبز فرنسي", description: "خبز طازج يخبز يومياً", price: "5 ريال" },
    { name: "دونات", description: "معجنات محلاة متنوعة النكهات", price: "10 ريال" },
  ];

  return (
    <div className="py-20 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-dark mb-4">قائمتنا المميزة</h2>
          <p className="text-lg text-coffee-medium max-w-2xl mx-auto">
            اكتشف مجموعة متنوعة من القهوة المحمصة طازجاً والحلويات المصنوعة بحب والمخبوزات الطازجة
          </p>
        </div>

        {/* Coffee Section */}
        <section id="coffee" className="mb-20">
          <h3 className="text-3xl font-serif font-semibold text-coffee-dark mb-8 text-center">القهوة</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coffeeMenu.map((item, index) => (
              <Card key={index} className="shadow-warm hover:shadow-elegant transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-coffee-dark font-serif">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-gold">{item.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sweets Section */}
        <section id="sweets" className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif font-semibold text-coffee-dark mb-8">الحلويات</h3>
              <div className="grid gap-6">
                {sweets.map((item, index) => (
                  <Card key={index} className="shadow-warm hover:shadow-elegant transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-coffee-dark font-serif">{item.name}</CardTitle>
                          <CardDescription>{item.description}</CardDescription>
                        </div>
                        <p className="text-xl font-bold text-gold">{item.price}</p>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={sweetsImage} 
                alt="حلويات شرقية" 
                className="rounded-lg shadow-elegant w-full h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Bakery Section */}
        <section id="bakery">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src={bakedGoodsImage} 
                alt="مخبوزات طازجة" 
                className="rounded-lg shadow-elegant w-full h-96 object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-serif font-semibold text-coffee-dark mb-8">المخبوزات</h3>
              <div className="grid gap-6">
                {bakery.map((item, index) => (
                  <Card key={index} className="shadow-warm hover:shadow-elegant transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-coffee-dark font-serif">{item.name}</CardTitle>
                          <CardDescription>{item.description}</CardDescription>
                        </div>
                        <p className="text-xl font-bold text-gold">{item.price}</p>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MenuSection;