export const metadata = {
  title: "Home - OASIS",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import Feactures from "@/components/feactures";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <Feactures />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
