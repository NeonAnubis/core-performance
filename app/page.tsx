import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Services from "@/components/Services";
import CoreOfferings from "@/components/CoreOfferings";
import HowWeWork from "@/components/HowWeWork";
import CoreSystems from "@/components/CoreSystems";
import PilotPartners from "@/components/PilotPartners";
import WhyCore from "@/components/WhyCore";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <Services />
      <CoreOfferings />
      <HowWeWork />
      <CoreSystems />
      <PilotPartners />
      <WhyCore />
      <FinalCTA />
    </>
  );
}
