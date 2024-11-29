// data/slides.ts
import { Slide } from "../types/index";
import { assets } from "../assets/images/assets";

const slides: Slide[] = [
  {
    id: 1,
    image: assets.slidersection2,
    text: "Explore the Outdoors",
    subText: "Discover the beauty of nature",
  },
  {
    id: 2,
    image: assets.slidersection1,
    text: "Find Your Adventure",
    subText: "Get ready for the thrill of a lifetime",
  },
  {
    id: 3,
    image: assets.slidersection3,
    text: "Create Memories",
    subText: "Share your experiences with friends and family",
  },
];

export default slides;
