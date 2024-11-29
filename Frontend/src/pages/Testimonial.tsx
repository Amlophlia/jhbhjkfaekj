import React from "react";
import Hero from "../components/testimonial/Hero";
import Testimonials from "../components/testimonial/Testimonials";
import SuccessStories from "../components/testimonial/SuccessStories";
import ActionSection from "../components/testimonial/ActionSection";

const Testimonial: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <Hero />
      <Testimonials />
      <SuccessStories />

      <ActionSection
        heading="Ready to take the next step?"
        content="Join thousands of others who have transformed their lives and careers. Start your journey today!"
        buttonText="Get Started"
        buttonAction="/about"
      />
    </div>
  );
};

export default Testimonial;
