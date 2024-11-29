import React from "react";

const Header: React.FC = () => {
  return (
    <nav className="shadow-md w-full z-50 font-heading transition duration-300 ease-in-out sticky top-0 bg-white flex justify-center items-center">
      <div className="container  p-10  flex justify-between items-center h-20 w-[1280px]">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="/">MyLogo</a>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a href="/" className="text-jetBlack hover:text-blue">
            Home
          </a>
          <a href="/about" className="text-jetBlack hover:text-blue">
            About Us
          </a>

          {/* Services Dropdown */}
          <div className="relative group">
            <a
              href="#services"
              className="text-jetBlack hover:text-blue flex items-center"
            >
              Services
              <svg
                className="ml-2 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            <div className="absolute bg-white shadow-lg w-48 mt-2 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300">
              <a
                href="#ai-solutions"
                className="block px-4 py-2 text-jetBlack hover:text-blue"
              >
                AI Solutions
              </a>
              <a
                href="#web-development"
                className="block px-4 py-2 text-jetBlack hover:text-blue"
              >
                Web Development
              </a>
              <a
                href="#social-media-management"
                className="block px-4 py-2 text-jetBlack hover:text-blue"
              >
                Social Media Management
              </a>
            </div>
          </div>

          <a href="#pricing" className="text-jetBlack hover:text-blue">
            Pricing
          </a>
          <a href="/testimonials" className="text-jetBlack hover:text-blue">
            Testimonials
          </a>
          <a href="#resources" className="text-jetBlack hover:text-blue">
            Resources
          </a>
          <a href="/contact" className="text-jetBlack hover:text-blue">
            Contact Us
          </a>
        </div>

        {/* CTA Button */}
        <div className="bg-blue text-white px-6 py-3 rounded-full shadow-lg border-2 border-blue-600 hover:bg-dark-blue hover:shadow-xl transition duration-300">
          <a href="#get-started">Get Started</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
