import { Testimonial } from "../types/index";
import { assets } from "../assets/images/assets";
import { Testimonialpages } from "../types/index";

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Joey Petrunoff",
    role: "Marketing Manager",
    companyLogo: "lensabl",
    photo: assets.testimonialImage1,
    text: "As a marketing team with a lot on our plates, Buffer is a crucial tool in our brand-building efforts.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rodrigo Hyago",
    role: "Social Media Content Manager",
    companyLogo: "Happy Socks",
    photo: assets.testimonialImage2,
    text: "Buffer makes it easy for us to monitor all of our engagement and strengthen the connection with our audience.",
    rating: 4,
  },
  {
    id: 3,
    name: "Joe Loria",
    role: "Content Manager",
    companyLogo: "Mercy for Animals",
    photo: assets.testimonialImage3,
    text: "Buffer saves us, literally, hours and in turn helps us spread our message even further.",
    rating: 5,
  },
  {
    id: 4,
    name: "Luis Cancel",
    role: "Managing Editor",
    companyLogo: "Huckberry",
    photo: assets.testimonialImage4,
    text: "Buffer has made sharing our story and building our brand on social media so much easier.",
    rating: 4,
  },
  {
    id: 5,
    name: "Luis Cancel",
    role: "Managing Editor",
    companyLogo: "Huckberry",
    photo: assets.testimonialImage5,
    text: "Buffer has made sharing our story and building our brand on social media so much easier.",
    rating: 4,
  },
  {
    id: 6,
    name: "Luis Cancel",
    role: "Managing Editor",
    companyLogo: "Huckberry",
    photo: assets.testimonialImage6,
    text: "Buffer has made sharing our story and building our brand on social media so much easier.",
    rating: 4,
  },
  {
    id: 7,
    name: "Luis Cancel",
    role: "Managing Editor",
    companyLogo: "Huckberry",
    photo: assets.testimonialImage7,
    text: "Buffer has made sharing our story and building our brand on social media so much easier.",
    rating: 4,
  },
];

export const testimonialpages: Testimonialpages[] = [
  {
    image: assets.testimonialImage3,
    description:
      "Praesent nec magna ac pede cursus pellentesque at quis justo.",
    author: "Jane Smith",
    rating: 5,
  },
  {
    image: assets.testimonialImage1,
    description:
      "Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis.",
    author: "Samuel Lee",
    rating: 3,
  },
  {
    image: assets.testimonialImage2,
    description:
      "Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis.",
    author: "Samuel Lee",
    rating: 2,
  },
  {
    image: assets.testimonialImage2,
    description:
      "Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis.",
    author: "Samuel Lee",
    rating: 2,
  },
];
