# Tobi's Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. This project showcases clean design, smooth animations, and optimal performance.

## 🔗 Links

- **Live Site**: [View Live](https://theoyesolaoluwatobi.netlify.app/)
- **Client**: Oyesola Oluwatobi [Last Name]
- **Role**: [Product Designer]

## 📋 Project Overview

This portfolio was developed to showcase Tobi's work, skills, and professional experience through a clean, modern web interface. The site emphasizes user experience with smooth animations, intuitive navigation, and fast load times.

### Key Objectives
- Create a memorable first impression for potential clients/employers
- Showcase projects with detailed case studies
- Provide easy contact and social media integration
- Ensure excellent performance across all devices
- Maintain accessibility standards (WCAG 2.1 AA)

## ✨ Features

### Design & UX
- **Modern UI/UX**: Clean, minimalist design with attention to typography and spacing
- **Smooth Animations**: Framer Motion for fluid page transitions and scroll animations
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Dark/Light Mode**: Theme toggle with persistent user preference
- **Interactive Elements**: Hover effects, micro-interactions, and engaging CTAs

### Technical Features
- **Fast Performance**: Lighthouse score 95+ across all metrics
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Lazy Loading**: Images and components load on-demand
- **Form Validation**: Contact form with real-time validation
- **Email Integration**: Working contact form with email notifications
- **Analytics Ready**: Google Analytics integration

### Sections
- **Hero**: Eye-catching introduction with animated elements
- **About**: Professional background and expertise
- **Projects**: Portfolio showcase with filtering and detailed views
- **Skills**: Technical and soft skills visualization
- **Experience**: Timeline of work history
- **Testimonials**: Client/colleague recommendations
- **Contact**: Multi-channel contact options with working form
- **Blog** *(optional)*: Articles and insights

## 🛠️ Tech Stack

### Core
- **React 18** - UI library
- **TypeScript** - Type safety and better DX
- **Vite** - Lightning-fast build tool and dev server

### Styling & Animation
- **Tailwind CSS** / **Styled Components** - Styling solution
- **Framer Motion** - Animation library
- **React Icons** - Icon library

### Forms & Validation
- **React Hook Form** - Form state management
- **Zod** / **Yup** - Schema validation
- **EmailJS** / **Resend** - Email service integration

### Utilities
- **React Router** - Client-side routing
- **React Helmet** - SEO meta tags management
- **Intersection Observer API** - Scroll animations

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Coderio10/tobi-portfolio.git
cd tobi-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GA_TRACKING_ID=your_ga_id
```

4. **Start development server**
```bash
npm run dev
```

5. **Open browser**
Navigate to `http://localhost:5173`

## 📦 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
npm run format       # Format code with Prettier
```

## 🏗️ Project Structure

```
tobi-portfolio/
├── public/
│   ├── images/          # Static images
│   ├── resume.pdf       # Downloadable resume
│   └── favicon.ico
├── src/
│   ├── assets/          # Images, fonts, icons
│   ├── components/
│   │   ├── layout/      # Header, Footer, Layout
│   │   ├── sections/    # Hero, About, Projects, etc.
│   │   ├── ui/          # Reusable UI components
│   │   └── common/      # Shared components
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   ├── styles/          # Global styles
│   ├── types/           # TypeScript types
│   ├── utils/           # Helper functions
│   ├── constants/       # Site content and configuration
│   ├── App.tsx
│   └── main.tsx
├── .env.example
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Customization Guide

### Updating Content

All site content is centralized in `src/constants/`:

```typescript
// src/constants/siteContent.ts
export const siteContent = {
  hero: {
    name: "Tobi",
    title: "Full Stack Developer",
    description: "Building beautiful digital experiences...",
  },
  projects: [...],
  skills: [...],
  // etc.
}
```

### Changing Theme Colors

Update theme in `tailwind.config.js` or your styling solution:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
      // ...
    }
  }
}
```

### Adding New Sections

1. Create component in `src/components/sections/`
2. Import in `App.tsx` or relevant page
3. Add content to `src/constants/siteContent.ts`

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository in the Vercel dashboard.

### Netlify

```bash
npm run build
npx netlify-cli deploy --prod --dir=dist
```

### GitHub Pages

```bash
npm run build
npx gh-pages -d dist
```

## ⚡ Performance Optimizations

- **Code Splitting**: Dynamic imports for routes and heavy components
- **Image Optimization**: WebP format with fallbacks, lazy loading
- **Bundle Size**: Tree-shaking and minification
- **Caching**: Service worker for offline capability
- **Font Loading**: `font-display: swap` for faster text rendering

### Lighthouse Scores
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Sufficient color contrast (WCAG AA)
- Focus indicators
- Skip to main content link

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Known Issues

- None currently

Report bugs by [opening an issue](https://github.com/Coderio10/tobi-portfolio/issues).





## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Developer

**Anointed Kayode**

- GitHub: [@Coderio10](https://github.com/Coderio10)
- LinkedIn: [anointedkayode](https://www.linkedin.com/in/anointedkayode)
- Email: kayodeanointed@gmail.com
- Portfolio: [www.behance.net/anointedkayode]


*Built with ❤️ by Anointed Kayode*
