import { Card } from '../types';
import { FaRegHandshake, FaBoxOpen, FaHeadset } from 'react-icons/fa';

export const customerSay: Card[] = [
  {
    id: '1',
    icon: FaRegHandshake, 
    heading: 'Our Service',
    content: 'We provide excellent service, tailored to meet the needs of our customers.',
  },
  {
    id: '2',
    icon: FaBoxOpen, 
    heading: 'Quality Products',
    content: 'Our products are top quality, made to last and ensure customer satisfaction.',
  },
  {
    id: '3',
    icon: FaHeadset, 
    heading: 'Customer Support',
    content: 'Our support team is here to assist you with any issues or questions you may have.',
  },
];
