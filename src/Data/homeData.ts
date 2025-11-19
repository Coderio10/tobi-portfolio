import ArtGallery from "../assets/art-gallery.png";
import Socialite from "../assets/sociolite.png";

export type Project = {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  tags: string[];
  screens: number;
  problemStatement: string;
  objective: string;
  objectives: string[];
  lowFidelityScreens: string[];
  highFidelityScreens: string[];
};

export const projects: Project[] = [
  {
    id: Number(Math.random() * 10),
    title: "Undefeated Art Gallery",
    category: "Brand & Mobile App Design",
    year: "2024",
    image: ArtGallery,
    description:
      "A comprehensive digital experience for art enthusiasts to discover and purchase art pieces.",
    tags: ["Mobile App", "Branding", "UI/UX"],
    screens: 8,
    problemStatement:
      "The current way of discovering and purchasing art pieces at Undefeated Art Gallery is limited to providing a comprehensive digital experience. Art enthusiasts often lack access to detailed stories or histories behind art pieces, which are essential for appreciating the value and context of the artwork. Furthermore, there is no streamlined platform for artists to share their inspiration or for buyers to conveniently purchase and choose delivery options. This gap hinders artists from effectively connecting with potential buyers and reduces the overall user experience for art collectors.",
    objective:
      "To develop a mobile application for Undefeated Art Gallery that:",
    objectives: [
      "Enables artists to upload detailed stories or histories about their art pieces when listing them for sale.",
      "Allows buyers to read and explore the background of the artwork to make informed purchase decisions.",
      "Offers buyers flexible delivery options, including doorstep delivery and gallery pickup.",
      "Creates an interactive and user-friendly platform that bridges the gap between artists and buyers, enhancing engagement and driving sales.",
    ],
    lowFidelityScreens: [],
    highFidelityScreens: [],
  },
  {
    id: Number(Math.random() * 10),
    title: "Socialite",
    category: "Mobile App Design",
    year: "2024",
    image: Socialite,
    description:
      'A revolutionary social media platform with "Record Live" feature for real-time event sharing.',
    tags: ["Mobile App", "Social Media", "UI/UX"],
    screens: 12,
    problemStatement:
      "Existing social media platforms lack a user-centric approach to recording live events, often limiting the ability to record to the event host. This restricts users who are unable to attend live events from fully engaging with the content at their convenience. As a result, audiences miss out on valuable moments and the ability to participate asynchronously, reducing inclusivity and overall platform engagement. There is a need for a solution that enables real-time recording of live events and reveals live events they care about, even when they cannot attend in real-time.",
    objective:
      "To develop Socialite, a revolutionary social media platform that:",
    objectives: [
      'Introduces a user-friendly "Record Live" feature, enabling users to record live events of interest even when they are unavailable to watch them in real time.',
      "Allows hosts to stream live event recordings at their convenience by offering deeper engagement and participation.",
      "Provides a competitive edge by surpassing existing platforms with its innovative recording functionality for all users, not just event hosts.",
      "Creates an inclusive and immersive live environment that enhances user satisfaction and redefines the live event experience on social media.",
    ],
    lowFidelityScreens: [],
    highFidelityScreens: [],
  },
  {
    id: Number(Math.random() * 10),
    title: "Simplified",
    category: "Website Design",
    year: "2023",
    image: Socialite,
    description:
      "Farm-to-consumer platform simplifying agricultural connections.",
    tags: ["Website", "E-commerce", "UI/UX"],
    screens: 6,
    problemStatement:
      "The agricultural sector faces challenges in connecting farmers directly with consumers, leading to inefficiencies and reduced profitability for farmers while consumers lack access to fresh, locally-sourced produce.",
    objective: "To develop Simplified, a farm-to-consumer platform that:",
    objectives: [
      "Connects farmers directly with consumers through an intuitive digital marketplace.",
      "Provides detailed information about farm products and their origins.",
      "Offers flexible delivery and pickup options for customers.",
      "Streamlines the ordering and fulfillment process for both farmers and buyers.",
    ],
    lowFidelityScreens: [],
    highFidelityScreens: [],
  },
  {
    id: Number(Math.random() * 10),
    title: "Fashion Hub",
    category: "E-commerce Design",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=600&fit=crop",
    description: "Modern e-commerce platform for fashion enthusiasts.",
    tags: ["E-commerce", "Fashion", "Mobile"],
    screens: 10,
    problemStatement:
      "Fashion enthusiasts struggle to find a seamless online shopping experience that combines style discovery, personalized recommendations, and easy checkout processes.",
    objective: "To develop Fashion Hub, an e-commerce platform that:",
    objectives: [
      "Provides an intuitive browsing experience with advanced filtering and search.",
      "Offers personalized style recommendations based on user preferences.",
      "Streamlines the checkout process with multiple payment options.",
      "Creates a visually stunning interface that reflects current fashion trends.",
    ],
    lowFidelityScreens: [],
    highFidelityScreens: [],
  },
  {
    id: Number(Math.random() * 10),
    title: "HealthTrack",
    category: "Health & Fitness App",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    description:
      "Comprehensive health tracking application with personalized wellness insights.",
    tags: ["Mobile App", "Health", "Analytics"],
    screens: 15,
    problemStatement:
      "Users struggle to maintain consistent health tracking and receive actionable insights from their health data across multiple metrics.",
    objective:
      "To develop HealthTrack, a comprehensive health application that:",
    objectives: [
      "Tracks multiple health metrics including activity, nutrition, and sleep.",
      "Provides personalized insights and recommendations based on user data.",
      "Integrates with popular health devices and wearables.",
      "Motivates users through goal-setting and achievement tracking.",
    ],
    lowFidelityScreens: [],
    highFidelityScreens: [],
  },
  {
    id: Number(Math.random() * 10),
    title: "TravelMate",
    category: "Travel Planning App",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    description:
      "Your perfect companion for planning and organizing travel adventures.",
    tags: ["Mobile App", "Travel", "Planning"],
    screens: 9,
    problemStatement:
      "Travelers find it challenging to organize all aspects of their trips in one place, leading to scattered information and stressful planning experiences.",
    objective: "To develop TravelMate, a travel planning application that:",
    objectives: [
      "Centralizes all trip information including flights, accommodations, and activities.",
      "Provides intelligent recommendations for destinations and activities.",
      "Enables collaborative trip planning with friends and family.",
      "Offers offline access to essential travel information.",
    ],
    lowFidelityScreens: [],
    highFidelityScreens: [],
  },
];
