import { IconType } from "react-icons";
export interface Slide {
  id: number;
  image: string;
  text: string;
  subText: string;
}
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  companyLogo: string;
  photo: string;
  text: string;
  rating: number;
}
export interface ServiceCardData {
  id: number;
  title: string;
  heading: string;
  description: string;
  buttonText: string;
  image: string;
}
export interface FeatureResource {
  heading: string;
  date: string;
  content: string;
  imageUrl: string;
}

export interface ServiceList {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
}

export interface Card {
  id: string;
  icon: IconType;
  heading: string;
  content: string;
}
export interface CustomerSaysProps {
  title: string;
  content: string;
  imageSrc: string;
  cards: Card[];
}

export interface Testimonialpages {
  image: string;
  description: string;
  author: string;
  rating: number;
}
export interface SuccessStory {
  id: number;
  name: string;
  imageUrl: string;
  stars: number;
  content: string;
  postedTime: string;
}
export interface ActionSectionProps {
  heading: string;
  content: string;
  buttonText: string;
  buttonAction: string;
}
export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
  service: "ai" | "webDevelopment" | "social";
}
