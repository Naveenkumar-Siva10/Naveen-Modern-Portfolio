export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  shortDescription: string;
  description: string;
  workPerformed: string[];
  servicesInvolved: string[];
  tags: string[];
  image: string;
  link?: string;
  github?: string;
  featured: boolean;
  isLiveVerified?: boolean;
  isDemoProject?: boolean;
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

export interface Experience {
  company: string;
  role: string;
  period: string;
  duration: string;
  description: string;
  highlights: string[];
}

export const PERSONAL_INFO = {
  name: "Naveen",
  brandName: "NAVEEN.",
  tagline: "BUILD • RANK • GROW",
  heroHeadingLine1: "I BUILD DIGITAL",
  heroHeadingLine2: "EXPERIENCES.",
  title: "Full-Stack Developer & Digital Growth Specialist",
  subTitle: "Building modern full-stack web applications, responsive digital experiences, and growth-focused solutions for businesses.",
  positioningStatement: "I don't only build websites. I understand how websites, advertising, SEO, local search and conversion work together to help businesses generate enquiries and customers.",
  aboutText1: "I craft high-performance, modern full-stack web applications and digital growth systems engineered to rank higher, convert visitors, and accelerate business growth.",
  aboutText2: "With expertise combining Next.js/React development, server-side APIs, Google Ads, Meta Ads, On-Page SEO, and Google Business Profile optimization, I help brands establish a commanding online presence.",
  email: "naveenwbdigital@gmail.com",
  phone: "+91 86086 04519",
  whatsappNumber: "+91 86086 04519",
  whatsappUrl: "https://wa.me/918608604519",
  location: "New Perungalathur, Chennai, Tamil Nadu, India",
  locationShort: "New Perungalathur, Chennai, India",
  locationAvailability: "Available for projects across Chennai and remote projects worldwide.",
  googleMapsUrl: "https://maps.google.com/?q=New+Perungalathur,+Chennai,+Tamil+Nadu,+India",
  github: "https://github.com",
  linkedin: "https://www.linkedin.com/in/naveen-digital-1a601242b/",
};

export const CORPORATE_EXPERIENCE: Experience[] = [
  {
    company: "Cognizant",
    role: "Corporate Professional Experience",
    period: "2 Years",
    duration: "2+ Years Corporate Experience",
    description: "2 years of structured corporate professional experience working within enterprise environments, following rigorous business processes, professional communication standards, and delivering high-quality project deliverables.",
    highlights: [
      "2 years of corporate professional experience in enterprise environments",
      "Experience working in a structured professional environment",
      "Professional client and stakeholder communication standards",
      "Cross-functional team collaboration and agile workflows",
      "Established business processes and accountable project delivery",
      "Strong foundation in professional delivery and responsibility"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "chillfix-air-solution",
    title: "ChillFix Air Solution",
    client: "HVAC & Air Conditioning Solutions",
    category: "Full-Stack Web & Local Growth",
    shortDescription: "Complete digital growth platform for an HVAC service business spanning custom web development, Google Business Profile optimization, and local lead generation.",
    description: "End-to-end digital implementation for ChillFix Air Solution. Developed a high-performance, mobile-responsive service platform integrated with Google Business Profile optimization and local digital marketing. The system is engineered to capture real business enquiries and support customer requests through to completed deals.",
    workPerformed: [
      "Custom responsive website development",
      "Google Business Profile setup and local search optimization",
      "Local digital marketing strategy",
      "Lead generation and enquiry capture workflows",
      "Supporting the process through to completed deals"
    ],
    servicesInvolved: [
      "Full-Stack Web Development",
      "Google Business Profile",
      "Local SEO",
      "Lead Generation & Conversion"
    ],
    tags: ["Next.js", "React", "Google Business Profile", "Local SEO", "Lead Gen"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop",
    link: "https://chillfixairsolution.in",
    featured: true,
    isLiveVerified: true,
    isDemoProject: false,
  },
  {
    id: "eloria",
    title: "ELORIA",
    client: "Personal / Demo Project — Built by Naveen",
    category: "Full-Stack Web & Beauty Platform",
    shortDescription: "Professional beauty service website experience featuring responsive design, service showcase, interactive gallery, booking flows, WhatsApp integration, and custom Admin Panel content management.",
    description: "A complete full-stack beauty service platform built by Naveen as a personal demo project (not client work). Demonstrates modern responsive web development, professional UI/UX, intuitive booking/contact pathways, direct WhatsApp inquiry routing, and a custom backend Admin Panel for seamless content and service data management.",
    workPerformed: [
      "Responsive website development & modern UI/UX",
      "Service presentation & portfolio gallery showcase",
      "Booking / contact flow & WhatsApp integration",
      "Custom Admin Panel / content management capability",
      "Full website implementation"
    ],
    servicesInvolved: [
      "Full-Stack Web Development",
      "UI/UX Engineering",
      "Admin Panel & Data Management",
      "Conversion & WhatsApp Integration"
    ],
    tags: ["Next.js", "React", "Tailwind CSS", "Admin Panel", "WhatsApp Integration"],
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
    link: "https://eloria-beauty-beta.vercel.app/",
    featured: true,
    isLiveVerified: true,
    isDemoProject: true,
  },
  {
    id: "masala-manufacturer",
    title: "Masala Manufacturer",
    client: "Food & Spice Manufacturing Business",
    category: "Paid Advertising & Conversion",
    shortDescription: "High-conversion digital advertising and web infrastructure focused on qualified lead generation via Meta Ads and Google Ads campaigns.",
    description: "Targeted advertising and digital presence project for a traditional masala manufacturing enterprise. Designed high-converting landing experiences coupled with precision Meta Ads (Facebook/Instagram) and Google Ads campaigns focused specifically on driving genuine wholesale and retail business enquiries.",
    workPerformed: [
      "Website and landing page optimization",
      "Meta Ads (Facebook & Instagram) campaign architecture",
      "Google Ads search and intent targeting",
      "Conversion-focused advertising creative strategy",
      "High-quality lead generation and inquiry routing"
    ],
    servicesInvolved: [
      "Google Ads",
      "Meta Ads",
      "Landing Page Development",
      "Lead Generation & Conversion"
    ],
    tags: ["Google Ads", "Meta Ads", "Landing Pages", "Lead Generation", "CRO"],
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    isLiveVerified: false,
    isDemoProject: false,
  },
  {
    id: "personal-portfolio",
    title: "Personal Freelance Studio",
    client: "Naveen Freelance Studio",
    category: "Full-Stack Web & Brand Platform",
    shortDescription: "Cinematic, editorial full-stack developer portfolio featuring high-contrast typography, interactive media, and growth-focused positioning.",
    description: "Personal brand web platform positioning Naveen's unified offering across full-stack web engineering, paid advertising campaigns, search engine optimization, and business conversion strategy.",
    workPerformed: [
      "Full-stack Next.js and React architecture",
      "Editorial typography and responsive UI system",
      "Interactive media showreel integration",
      "On-page SEO and performance optimization"
    ],
    servicesInvolved: [
      "Full-Stack Web Development",
      "UI/UX Engineering",
      "On-Page SEO"
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Motion", "On-Page SEO"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    link: "/",
    featured: true,
    isLiveVerified: true,
    isDemoProject: false,
  },
];

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "GOOGLE ADS",
    shortDesc: "Targeted search and conversion campaigns designed to capture active intent.",
    fullDesc: "Strategic Google Ads management including comprehensive campaign setup, intent-based keyword targeting, high-converting ad copy, conversion tracking, ongoing bid optimization, and performance monitoring to turn searchers into enquiries.",
    features: [
      "Campaign Setup & Account Structure",
      "High-Intent Keyword Research & Negative Keyword Filtering",
      "Conversion Tracking & Analytics Integration",
      "Ad Copywriting & A/B Creative Testing",
      "Ongoing Bid Optimization & Performance Monitoring"
    ]
  },
  {
    number: "02",
    title: "META ADS",
    shortDesc: "Precision Facebook and Instagram advertising engineered for audience engagement and leads.",
    fullDesc: "End-to-end Meta advertising campaigns across Facebook and Instagram. We craft audience segmentation, compelling visual creative strategies, lead-form setups, and continuous campaign optimization to drive real customer interest.",
    features: [
      "Custom & Lookalike Audience Targeting",
      "Facebook & Instagram Ad Placement Strategy",
      "High-Impact Creative & Copy Strategy",
      "Lead Generation & Instant Form Workflows",
      "Campaign Retargeting & Optimization"
    ]
  },
  {
    number: "03",
    title: "LEAD GENERATION & CONVERSION",
    shortDesc: "Campaigns and landing experiences designed around actual enquiries and deals.",
    fullDesc: "Holistic lead generation frameworks connecting traffic sources directly to conversion-optimized landing flows. Focused strictly on generating high-intent business enquiries rather than vanity traffic metrics.",
    features: [
      "Enquiry & Deal-Focused Funnel Architecture",
      "Conversion Rate Optimization (CRO)",
      "Form Friction Reduction & Call-to-Action Strategy",
      "Lead Notification & Inquiry Routing Setup",
      "Direct WhatsApp & Call Conversion Flows"
    ]
  },
  {
    number: "04",
    title: "FULL-STACK WEB DEVELOPMENT",
    shortDesc: "Modern, responsive websites and full-stack web applications built for speed and scale.",
    fullDesc: "Custom web development using modern technologies like Next.js, React, TypeScript, and Tailwind CSS. We build high-performance, responsive, accessible websites with robust backend APIs, secure forms, and intuitive user experiences.",
    features: [
      "Modern Next.js & React Applications",
      "Backend REST APIs & Server-Side Data Handling",
      "Fast Page Load Speeds & Core Web Vitals Optimization",
      "Mobile-First Responsive Layouts across all devices",
      "Database Integration & Secure Form Systems"
    ]
  },
  {
    number: "05",
    title: "ON-PAGE SEO",
    shortDesc: "Technical and on-page optimization to improve Google visibility and organic rankings.",
    fullDesc: "Comprehensive on-page and technical SEO implementation. We optimize site architecture, semantic HTML tags, metadata, content structure, internal linking, and mobile usability to help your business achieve higher organic visibility.",
    features: [
      "Semantic HTML5 & Heading Hierarchy Structure",
      "Custom Meta Titles, Descriptions & Open Graph Tags",
      "Content Structure & Keyword Intent Alignment",
      "Internal Linking & Site Navigation Optimization",
      "Technical Core Web Vitals & Speed Enhancements"
    ]
  },
  {
    number: "06",
    title: "GOOGLE BUSINESS PROFILE",
    shortDesc: "Complete setup, category optimization, and local SEO to dominate local search.",
    fullDesc: "Full Google Business Profile setup and optimization for local businesses. We refine categories, service listings, business information, photos, and local search signals to maximize visibility when nearby customers search for your services.",
    features: [
      "Profile Setup, Verification & Category Optimization",
      "Detailed Service Listings & Business Information",
      "Local SEO Optimization & Search Visibility Improvements",
      "Photo Uploads, Updates & Product Cataloging",
      "Local Customer Engagement & Enquiry Acceleration"
    ]
  },
  {
    number: "07",
    title: "HIGH-CONVERTING LANDING PAGES",
    shortDesc: "Focused landing pages designed around campaigns, services, and conversion goals.",
    fullDesc: "Dedicated landing pages designed specifically to support advertising campaigns and promotional initiatives. Every element—from headline hierarchy to CTA placement—is engineered to guide visitors toward sending an enquiry.",
    features: [
      "Single-Goal Campaign Landing Architecture",
      "High-Impact Editorial Typography & Visual Clarity",
      "Direct Click-to-WhatsApp & Direct Contact CTAs",
      "Ultra-Fast Mobile Performance",
      "Frictionless Lead Capture Form Integration"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "FULL-STACK DEVELOPMENT",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Node.js / REST APIs",
      "HTML5 / Semantic Web",
      "CSS3 / Responsive UI",
      "Git / GitHub"
    ]
  },
  {
    title: "PAID ADS & MARKETING",
    items: [
      "Google Ads (Search & Display)",
      "Meta Ads (Facebook & Instagram)",
      "Lead Generation Funnels",
      "Conversion Rate Optimization (CRO)",
      "Campaign Performance Monitoring",
      "Audience Targeting & Retargeting"
    ]
  },
  {
    title: "SEO & LOCAL SEARCH",
    items: [
      "On-Page SEO",
      "Google Business Profile Optimization",
      "Local SEO Strategy",
      "Technical SEO & Site Structure",
      "Keyword & Search Intent Analysis",
      "Core Web Vitals & PageSpeed"
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "DISCOVER",
    subtitle: "Understanding your business & conversion goals",
    description: "We analyze your business model, target audience, competitive advantages, and conversion objectives to formulate an integrated full-stack and marketing strategy.",
    deliverables: ["Project Scope & Strategy", "Audience & Intent Analysis", "Technical & Marketing Roadmap"]
  },
  {
    step: "02",
    title: "ARCHITECT",
    subtitle: "Designing conversion-first interfaces & campaigns",
    description: "Creating high-converting layouts, persuasive messaging, clear CTA pathways, and tailored campaign structures that resonate with your ideal customers.",
    deliverables: ["Responsive UI Wireframes", "High-Converting Copy Hierarchy", "Ad Campaign Architecture"]
  },
  {
    step: "03",
    title: "BUILD & OPTIMIZE",
    subtitle: "Engineering full-stack code, SEO & ad systems",
    description: "Developing fast, responsive Next.js applications, implementing on-page SEO, configuring Google Business Profile, and launching targeted Google/Meta ad campaigns.",
    deliverables: ["Production Web Application", "On-Page SEO & Metadata", "Active Ad Campaigns & Tracking"]
  },
  {
    step: "04",
    title: "CONVERT & SCALE",
    subtitle: "Capturing leads & driving business enquiries",
    description: "Monitoring enquiry volume, optimizing landing page performance, refining ad bidding, and supporting continuous business growth.",
    deliverables: ["Enquiry & Lead Monitoring", "Ongoing Campaign Optimization", "Continuous Growth Support"]
  }
];
