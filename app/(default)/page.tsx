export const metadata = {
  title: "Home - OASIS",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import LastMessage from "@/components/last-message";
import Cta from "@/components/cta";
import Feactures from "@/components/feactures";
import Architecture from "@/components/architecture";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <Feactures />
      <Architecture />
      <FeaturesPlanet />
      {/* <LastMessage /> */}
      <FAQ />
      {/* <LargeTestimonial /> */}
      <Cta />
    </>
  );
}
