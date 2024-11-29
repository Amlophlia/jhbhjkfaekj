import React from "react";
import { assets } from "../../assets/images/assets";

const CompanyHistory: React.FC = () => (
  <div className="bg-white py-16 px-6 md:px-12 lg:px-20">
    {/* Section 1: Mission */}
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      {/* Left Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={assets.companyhistory1}
          alt="Window Design Bases"
          className="rounded-lg shadow-lg max-h-[426px] w-full object-cover"
        />
      </div>
      {/* Right Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="font-heading text-4xl font-bold text-blue-900 mb-6">
          My Mission: Helping Millions of Organizations Grow Better
        </h2>
        <p className="font-body text-lg leading-relaxed text-gray-700">
          As a senior developer and client, I believe not just in growing
          bigger, but in growing better. And growing better means aligning the
          success of your own business with the success of your customers.
          Win-win!
        </p>
      </div>
    </section>

    {/* Section 2: Story */}
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 mt-16">
      {/* Right Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="font-heading text-4xl font-bold text-blue-900 mb-6">
          My Story
        </h2>
        <p className="font-body text-lg leading-relaxed text-gray-700">
          As a senior developer and client, I believe not just in growing
          bigger, but in growing better. And growing better means aligning the
          success of your own business with the success of your customers.
          Win-win!
        </p>
      </div>
      {/* Left Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={assets.companyhistory2}
          alt="Window Design Bases"
          className="rounded-lg shadow-lg max-h-[426px] w-full object-cover"
        />
      </div>
    </section>
  </div>
);

export default CompanyHistory;
