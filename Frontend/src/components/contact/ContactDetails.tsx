import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; 
import { assets } from '../../assets/images/assets';


const ContactDetails: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      {/* First div with image in the center */}
      <div className="mb-6 h-[400px] w-[400px]">
        <img 
          src={assets.Contact}
          alt="Example" 
          className="rounded-full w-full h-full"
        />
      </div>

      {/* Three divs below the image */}
      <div className="w-full max-w-md">
        {/* First div - Location icon and city name */}
        <div className="flex items-center justify-between mb-4 p-4 border-b bg-white rounded-lg shadow-md">
          <div className="flex items-center">
            {/* React Icon for location */}
            <FaMapMarkerAlt className="w-5 h-5 mr-3 text-blue" />
            <span className="text-lg">New York</span>
          </div>
          <div>
            <span className="text-sm text-gray-600">City</span>
          </div>
        </div>

        {/* Second div - Call icon and phone number */}
        <div className="flex items-center justify-between mb-4 p-4 border-b bg-white rounded-lg shadow-md">
          <div className="flex items-center">
            {/* React Icon for phone */}
            <FaPhoneAlt className="w-5 h-5 mr-3 text-green" />
            <span className="text-lg">+1 (555) 123-4567</span>
          </div>
          <div>
            <span className="text-sm text-gray-600">Phone</span>
          </div>
        </div>

        {/* Third div - Message icon and email */}
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
          <div className="flex items-center">
            {/* React Icon for message */}
            <FaEnvelope className="w-5 h-5 mr-3 text-red-500" />
            <span className="text-lg">example@example.com</span>
          </div>
          <div>
            <span className="text-sm text-gray-600">Email</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
