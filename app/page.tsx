import CoffeeScroll from '@/components/CoffeeScroll';
import BrandStatement from '@/components/coffee/BrandStatement';
import CoffeeCollection from '@/components/coffee/CoffeeCollection';
import SignatureCoffee from '@/components/coffee/SignatureCoffee';
import ProcessSection from '@/components/coffee/ProcessSection';
import PopularFlavours from '@/components/coffee/PopularFlavours';
import BrandStory from '@/components/coffee/BrandStory';
import Newsletter from '@/components/coffee/Newsletter';
import Footer from '@/components/coffee/Footer';
import CoffeeDock from '@/components/navigation/CoffeeDock';

export default function Home() {
  return (
    <>
      {/* Hero — existing scroll animation (untouched) */}
      <div id="home">
        <CoffeeScroll />
      </div>

      {/* New sections — begin after the animation */}
      <BrandStatement />
      <CoffeeCollection />
      <SignatureCoffee />
      <ProcessSection />
      <PopularFlavours />
      <BrandStory />
      <Newsletter />
      <Footer />

      {/* Floating dock navigation */}
      <CoffeeDock />
    </>
  );
}
