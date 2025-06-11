
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, Award, Truck, ArrowDown } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden">
      {/* Background with enhanced gradient */}
      <div className="absolute inset-0 sweet-gradient-alt"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 opacity-30 text-6xl float-animation">🍰</div>
        <div className="absolute top-40 right-20 opacity-25 text-4xl float-animation" style={{animationDelay: '1s'}}>🧁</div>
        <div className="absolute bottom-20 left-20 opacity-30 text-5xl float-animation" style={{animationDelay: '2s'}}>🍫</div>
        <div className="absolute bottom-40 right-10 opacity-25 text-4xl float-animation" style={{animationDelay: '0.5s'}}>🍭</div>
        <div className="absolute top-60 left-1/2 opacity-20 text-3xl float-animation" style={{animationDelay: '1.5s'}}>🎂</div>
        <div className="absolute top-32 right-1/3 opacity-25 text-4xl float-animation" style={{animationDelay: '2.5s'}}>🍪</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="animate-bounce-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight text-shadow font-arabic">
              بلا حدود
              <br />
              <span className="text-yellow-200 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">
                للحلويات
              </span>
            </h1>
          </div>
          
          <div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed font-arabic">
              اكتشف عالماً من النكهات اللذيذة والحلويات الطازجة
              <br />
              مع أجود أنواع الكيك والشوكولاته والمشروبات المنعشة
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <Button size="lg" className="text-lg px-8 py-4 glass-effect hover:bg-white/20 border-white/30 text-white transition-all duration-300">
              <ShoppingBag className="ml-2 h-5 w-5" />
              تسوق الآن
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white text-sweet-brown hover:bg-white/90 border-2 border-white transition-all duration-300">
              استكشف المنتجات
              <ArrowDown className="mr-2 h-5 w-5" />
            </Button>
          </div>

          {/* Enhanced Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-slide-up" style={{animationDelay: '0.9s'}}>
            <div className="flex flex-col items-center text-center group">
              <div className="glass-effect rounded-full p-6 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-10 w-10 text-yellow-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-arabic">جودة عالية</h3>
              <p className="text-white/80 leading-relaxed">مكونات طبيعية ونكهات أصيلة من أفضل المصادر</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="glass-effect rounded-full p-6 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-10 w-10 text-yellow-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-arabic">توصيل سريع</h3>
              <p className="text-white/80 leading-relaxed">توصيل مجاني للطلبات فوق 100 ريال في نفس اليوم</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="glass-effect rounded-full p-6 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-10 w-10 text-yellow-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-arabic">ضمان الطعم</h3>
              <p className="text-white/80 leading-relaxed">إذا لم تعجبك منتجاتنا، نسترد أموالك كاملة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
