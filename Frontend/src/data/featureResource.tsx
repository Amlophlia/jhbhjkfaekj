import { FeatureResource } from "../types";
import { assets } from "../assets/images/assets";
export const featureResource: FeatureResource[] = [
  {
    heading: "Resource 1",
    date: "2024-11-22",
    content:
      "Some content for the first resource. This could be a brief description or summary.",
    imageUrl: assets.AiFeature,
  },
  {
    heading: "Resource 2",
    date: "2024-11-23",
    content:
      "Some content for the second resource. This could be a brief description or summary.",
    imageUrl: assets.WebFeature,
  },
  {
    heading: "Resource 3",
    date: "2024-11-24",
    content:
      "Some content for the third resource. This could be a brief description or summary.",
    imageUrl: assets.SocialFeature,
  },
];
