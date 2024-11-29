import React from "react";
import { LiaCanadianMapleLeaf } from "react-icons/lia";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

interface SocialMediaLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const Footer: React.FC = () => {
  const columnsData = [
    { columnTitle: "Tools", items: 5 },
    { columnTitle: "Features", items: 6 },
    { columnTitle: "Resources", items: 8 },
    { columnTitle: "Transparency", items: 6 },
    { columnTitle: "Support", items: 6 },
    { columnTitle: "Company", items: 5 },
  ];

  const socialMediaLinks: SocialMediaLink[] = [
    {
      href: "https://facebook.com",
      label: "Facebook",
      icon: <FaFacebook size={30} />,
    },
    {
      href: "https://twitter.com",
      label: "Twitter",
      icon: <FaTwitter size={30} />,
    },
    {
      href: "https://instagram.com",
      label: "Instagram",
      icon: <FaInstagram size={30} />,
    },
    {
      href: "https://linkedin.com",
      label: "LinkedIn",
      icon: <FaLinkedin size={30} />,
    },
    {
      href: "https://github.com",
      label: "GitHub",
      icon: <FaGithub size={30} />,
    },
  ];

  return (
    <footer className="bg-[#262626] text-white w-full h-[500px] flex justify-center items-center">
      {/* Parent div wrapping all sections */}
      <div className="flex flex-col p-6 gap-6 font-heading w-[1280px] h-[500px]">
        {/* First Div: 6 Columns with different number of items */}
        <div className="flex justify-between">
          {columnsData.map((column, index) => (
            <div key={index} className="flex flex-col gap-y-2">
              <h3 className="font-semibold text-xl">{column.columnTitle}</h3>
              <ul className="h-full w-full flex flex-col gap-y-2 text-sm font-normal">
                {Array.from({ length: column.items }).map((_, itemIndex) => (
                  <li key={itemIndex}>Item {itemIndex + 1}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Second Div: Horizontal Line */}
        <div className="h-[10px] w-full content-center">
          <div className="border-[#636363] border-t"></div>
        </div>

        {/* Third Div: Image and Social Media Icons using Flexbox */}
        <div className="flex h-[100px] w-full">
          <div className="flex items-center w-full h-full">
            <div className="w-20 h-20 flex justify-center mr-2 items-center">
              <LiaCanadianMapleLeaf size={70} />
            </div>
            <span className="font-bold text-3xl">JBG Ventures</span>
          </div>

          {/* Right: Social Media Icons and Four Words below */}
          <div className="flex flex-col gap-y-6 text-sm w-full h-full p-4">
            {/* Social Media Icons */}
            <div className="flex space-x-6 h-full w-full justify-end items-center">
              {socialMediaLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xl"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Four Words Below Icons */}
            <div className="h-full w-full text-sm flex gap-x-4 justify-end align-top">
              <p>Copyright ©2024</p>
              <p>Privacy</p>
              <p>Terms</p>
              <p>Security</p>
            </div>
          </div>

        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
