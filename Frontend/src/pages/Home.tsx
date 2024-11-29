import React from "react";
import ServiceCards from "../components/home/ServiceCards.tsx";
import Hero from "../components/home/Hero.tsx";
import TestimonialSlider from "../components/home/TestimonialSlider.tsx";
import FeaturedResources from "../components/home/FeaturedResources.tsx";

const Home: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col gap-20">
      <Hero />
      <ServiceCards />
      <TestimonialSlider />
      <FeaturedResources />
    </div>
  );
};

export default Home;
