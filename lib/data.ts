export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
  featured: boolean;
}

export interface Service {
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export const PERSONAL_INFO = {
  name: "Naveen",
  brandName: "NAVEEN.",
  tagline: "BUILD. RANK. GROW.",
  heroHeadingLine1: "I BUILD DIGITAL",
  heroHeadingLine2: "EXPERIENCES.",
  title: "Full-Stack Developer & Digital Growth Specialist",
  subTitle: "Building modern full-stack web applications, responsive digital experiences, and growth-focused solutions for businesses.",
  aboutText1: "I craft high-performance, modern full-stack web applications that don't just look visually impressive—they are engineered to scale, rank higher, convert visitors, and accelerate business growth.",
  aboutText2: "With expertise spanning modern Next.js/React frontend development, server-side APIs, database integration, search engine optimization (SEO), and digital marketing, I help brands establish a commanding online presence.",
  email: "contact@naveen.dev",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  whatsapp: "https://wa.me",
};

export const PROJECTS: Project[] = [
  {
    id: "chillfix-air-solution",
    title: "ChillFix Air Solution",
    category: "Full-Stack Web & Local SEO",
    shortDescription: "Full-stack service business website engineered with responsive frontend UI, backend booking request flows, local SEO dominance, and fast loading speeds.",
    description: "A complete full-stack web solution designed for an HVAC service provider featuring clean responsive layouts, structured booking CTA flows, server-side form handling, and optimized local search engine architecture.",
    tags: ["Next.js", "React", "Node.js / APIs", "Local SEO"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop",
    link: "#",
    featured: true,
  },
  {
    id: "eloria",
    title: "ELORIA",
    category: "Full-Stack E-Commerce & UI",
    shortDescription: "Full-stack e-commerce platform with dynamic product galleries, database-driven product management, and high-contrast responsive interface.",
    description: "Modern digital commerce application focused on full-stack architecture, visual storytelling, intuitive navigation, fast page loads, and smooth interactive product views.",
    tags: ["Next.js", "TypeScript", "REST APIs", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    link: "#",
    featured: true,
  },
  {
    id: "personal-portfolio",
    title: "Personal Freelance Studio",
    category: "Full-Stack Portfolio & Growth",
    shortDescription: "Cinematic, high-end freelance full-stack developer portfolio featuring video hero backgrounds, motion storytelling, and responsive UI.",
    description: "Personal brand platform positioning Naveen's complete digital offering across full-stack development, API integration, SEO strategy, and digital marketing.",
    tags: ["Next.js", "TypeScript", "Motion", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    link: "#",
    featured: true,
  },
];

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "FULL-STACK WEB DEVELOPMENT",
    shortDesc: "End-to-end web applications built across frontend, backend and data layer.",
    fullDesc: "End-to-end web applications built across the frontend, backend and data layer, with responsive interfaces and business-focused functionality.",
    features: [
      "Full-Stack Next.js / React Web Apps",
      "Backend REST APIs & Server-Side Logic",
      "Database Integration & Form Processing",
      "Performance & PageSpeed Optimization"
    ]
  },
  {
    number: "02",
    title: "LANDING PAGES",
    shortDesc: "Conversion-focused landing pages for products, services & campaigns.",
    fullDesc: "High-impact single and multi-page landing experiences designed to capture attention, communicate core value, and convert traffic into clients.",
    features: [
      "High-Converting Visual Hierarchy",
      "Fast Loading Interactive UI",
      "Clear CTA & Lead Capture Placement",
      "A/B Ready Component Structure"
    ]
  },
  {
    number: "03",
    title: "SEO (SEARCH ENGINE OPTIMIZATION)",
    shortDesc: "Search-friendly website structure, keyword architecture & organic growth.",
    fullDesc: "Strategic technical, on-page, and local SEO implementation to help your website rank on Google, gain organic visibility, and drive qualified leads.",
    features: [
      "Technical & On-Page SEO",
      "Semantic HTML & Metadata Optimization",
      "Keyword & Intent Research",
      "Speed & Core Web Vitals Optimization"
    ]
  },
  {
    number: "04",
    title: "DIGITAL MARKETING",
    shortDesc: "Digital marketing & social media support designed around business growth.",
    fullDesc: "Comprehensive digital growth strategies leveraging targeted content, social media channels, brand positioning, and analytics.",
    features: [
      "Brand Positioning & Digital Strategy",
      "Social Media Campaign Support",
      "Content Architecture & Messaging",
      "Digital Presence Growth"
    ]
  },
  {
    number: "05",
    title: "UI / UX DESIGN",
    shortDesc: "Clean, modern interfaces focused on usability and visual quality.",
    fullDesc: "Editorial, high-end digital design systems crafted with obsessive detail, strong typography, crisp visual contrast, and natural user flows.",
    features: [
      "User Interface Design System",
      "Interactive Motion Prototypes",
      "White & Dark Contrast Systems",
      "Accessibility & UX Consistency"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "FULL-STACK DEVELOPMENT",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js / REST APIs", "Database & API Integration"]
  },
  {
    title: "DIGITAL GROWTH",
    items: ["SEO", "On-Page SEO", "Keyword Research", "Digital Marketing", "Social Media Marketing", "Core Web Vitals"]
  },
  {
    title: "DESIGN / TOOLS",
    items: ["Canva", "Figma", "DaVinci Resolve", "GitHub", "Vercel", "VS Code", "Git"]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "DISCOVER",
    subtitle: "Understanding your business core",
    description: "We dive deep into your business goals, target audience, competitive landscape, and key performance objectives to establish a clear full-stack strategy.",
    deliverables: ["Project Roadmap", "Audience Analysis", "Technical & API Strategy"]
  },
  {
    step: "02",
    title: "DESIGN",
    subtitle: "Architecting visual excellence",
    description: "Designing modern, high-converting interface layouts with strong typography, clean visual hierarchy, and engaging micro-interactions.",
    deliverables: ["UI/UX Prototypes", "Design System", "Mobile Responsive Layouts"]
  },
  {
    step: "03",
    title: "BUILD",
    subtitle: "Engineering full-stack code",
    description: "Developing custom, performant Next.js/React applications with server-side logic, API endpoints, Motion animations, and semantic HTML for search indexing.",
    deliverables: ["Full-Stack Web Application", "SEO Optimization", "Cross-Browser Testing"]
  },
  {
    step: "04",
    title: "GROW",
    subtitle: "Driving continuous digital success",
    description: "Deploying your digital experience, setting up analytics, supporting organic SEO expansion, and refining digital marketing touchpoints.",
    deliverables: ["Vercel Deployment", "SEO Monitoring Setup", "Digital Marketing Strategy"]
  }
];
