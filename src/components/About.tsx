import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Heart, Star, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Coffee,
      title: "قهوة مميزة",
      description: "نحمص حبوب القهوة بعناية فائقة لضمان أفضل طعم ونكهة"
    },
    {
      icon: Heart,
      title: "صنع بحب",
      description: "كل منتج يصنع بعناية وحب لضمان جودة استثنائية"
    },
    {
      icon: Star,
      title: "جودة عالية",
      description: "نستخدم أفضل المكونات الطبيعية في جميع منتجاتنا"
    },
    {
      icon: Users,
      title: "تجربة مميزة",
      description: "أجواء دافئة ومريحة تجعل زيارتك لا تُنسى"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-dark mb-4">
            لماذا مقهى ض؟
          </h2>
          <p className="text-lg text-coffee-medium max-w-3xl mx-auto">
            في مقهى ض، نؤمن بأن القهوة ليست مجرد مشروب، بل تجربة تجمع الناس وتخلق اللحظات الجميلة. 
            نحن ملتزمون بتقديم أفضل أنواع القهوة والحلويات الشرقية الأصيلة في أجواء دافئة ومريحة.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center shadow-warm hover:shadow-elegant transition-all duration-300 transform hover:scale-105">
              <CardContent className="pt-8 pb-6">
                <feature.icon className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold text-coffee-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-coffee-medium">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-warm rounded-lg p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-serif font-bold mb-4">قصتنا</h3>
          <p className="text-lg opacity-90 max-w-4xl mx-auto">
            بدأت رحلتنا من حلم بسيط: إنشاء مكان يجمع بين تقاليد القهوة العربية الأصيلة والحداثة العصرية.
            اليوم، مقهى ض هو وجهة محبوبة للعائلات والأصدقاء الذين يبحثون عن تجربة قهوة استثنائية
            وحلويات تذكرهم بطعم البيت الأصيل.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;