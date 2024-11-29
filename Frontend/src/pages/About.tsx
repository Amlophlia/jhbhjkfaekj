import React from "react";
import Hero from "../components/about/Hero";
import CustomerSay from '../components/about/CustomerSay';
import { customerSay } from '../data/customerSay';
import { assets } from "../assets/images/assets";
import CompanyHistory from "../components/about/CompanyHistory";
import ServicesList from "../components/about/ServicesList";

const About: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col gap-20">
      <Hero />
      <CompanyHistory />
      <CustomerSay
        title="Why Choose Us?"
        content="We offer reliable and high-quality services that meet the expectations of our customers. Our team is dedicated to delivering exceptional value."
        imageSrc={assets.CustomerFeedback}
        cards={customerSay}
      />
      <ServicesList />
    </div>
  );
};

export default About;
