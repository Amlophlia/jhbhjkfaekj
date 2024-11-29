import { SuccessStory } from '../types/index';
import { assets } from '../assets/images/assets';

export const successStories: SuccessStory[] = [
  {
    id: 1,
    name: 'John Doe',
    imageUrl: assets.Image1, 
    stars: 5,
    content: 'This is an inspiring success story of John Doe. He overcame challenges and achieved great success!',
    postedTime: 'Posted on November 1, 2024',
  },
  {
    id: 2,
    name: 'Jane Smith',
    imageUrl: assets.Image2, 
    stars: 4,
    content: 'Jane Smith transformed her career by learning new skills and pushing through adversity. Here is her journey.',
    postedTime: 'Posted on November 5, 2024', 
  },
  {
    id: 3,
    name: 'Alice Johnson',
    imageUrl: assets.Image3, 
    stars: 5,
    content: 'Alice Johnson took on new projects, grew her network, and turned her dreams into reality. This is her success story.',
    postedTime: 'Posted on November 10, 2024',
  },
];
