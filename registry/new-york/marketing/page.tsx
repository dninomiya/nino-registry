import Header from "@/registry/new-york/header/header";
import HeroSection from "@/registry/new-york/hero-section/hero-section";
import FeaturesSection from "@/registry/new-york/features-section/features-section";
import PricingSection from "@/registry/new-york/pricing-section/pricing-section";
import TestimonialsSection from "@/registry/new-york/testimonials-section/testimonials-section";
import FaqSection from "@/registry/new-york/faq-section/faq-section";
import CtaSection from "@/registry/new-york/cta-section/cta-section";
import Footer from "@/registry/new-york/footer/footer";

export default function MarketingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </>
  );
}
