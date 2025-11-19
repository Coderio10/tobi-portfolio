import ArtGallery from '../assets/art-gallery.png';
import Socialite from '../assets/sociolite.png';

export type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
};

export const projects: Project[] = [
    {
      id: Number(Math.random() * 10),
      title: 'Undefeated Art Gallery',
      category: 'Brand & Mobile App Design',
      image: ArtGallery
    },
    {
        id: Number(Math.random() * 10),
        title: 'Socialite',
        category: 'Mobile App Design',
        image: Socialite,
    },
    {
        id: Number(Math.random() * 10),
        title: 'Simplified',
        category: 'Website Design',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    },
    {
        id: Number(Math.random() * 10),
        title: 'Socialite',
        category: 'Mobile App Design',
        image: Socialite
    }
]