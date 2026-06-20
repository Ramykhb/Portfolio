import type { Project, ProjectCategory } from "@/types";

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "Mobile",
  "AI",
];

export const projects: Project[] = [
  {
    slug: "sitmypet-mobile-app",
    title: "SitMyPet",
    tagline:
      "A modern platform connecting pet owners with trusted pet sitters.",
    description:
      "A full-stack pet sitting platform built with React Native, Expo, NestJS, and Prisma that enables pet owners to discover nearby sitters, manage bookings, and securely care for their pets.",
    category: "Mobile",
    year: "2025",
    featured: true,
    thumbnail: "/projects/sitmypet-0.jpg",
    cover: "/projects/sitmypet-0.jpg",
    techStack: [
      "React Native",
      "Expo",
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "AWS S3",
      "JWT",
    ],
    githubUrl: "https://github.com/Ramykhb/sitmypet",
    liveUrl: "",
    overview:
      "SitMyPet is a full-stack mobile platform designed to simplify pet care services by connecting pet owners with trusted sitters. The application provides booking management, pet profile handling, sitter discovery, identity verification, and secure authentication through a modern React Native frontend and NestJS backend architecture.",
    problem:
      "Finding reliable pet sitters often involves fragmented communication, limited trust mechanisms, and inefficient booking processes. Pet owners need a centralized platform where they can discover verified sitters, manage bookings, and securely share pet information.",
    solution:
      "SitMyPet delivers an end-to-end pet sitting ecosystem with role-based functionality for owners and sitters, location-based discovery, secure authentication, profile management, document verification, and cloud-based media storage, all backed by a scalable NestJS API and Prisma-powered database layer.",
    features: [
      {
        title: "Role-Based User System",
        description:
          "Separate experiences for pet owners and sitters with dedicated permissions and workflows.",
      },
      {
        title: "Booking Management",
        description:
          "Create, manage, and track pet sitting requests through an intuitive mobile interface.",
      },
      {
        title: "Nearby Sitter Discovery",
        description:
          "Location-based search allows owners to discover available pet sitters nearby.",
      },
      {
        title: "Verification & Document Processing",
        description:
          "Identity verification, document uploads, OCR processing, and email notifications improve trust and security.",
      },
    ],
    architecture:
      "The mobile application is built using React Native and Expo, communicating with a modular NestJS backend through REST APIs. Prisma manages database interactions, AWS S3 stores uploaded files and documents, while JWT authentication secures access to protected resources.",
    architectureLayers: [
      {
        name: "Mobile Client",
        items: ["React Native", "Expo", "NativeWind", "Secure Storage"],
      },
      {
        name: "Backend API",
        items: ["NestJS", "REST APIs", "Authentication", "Role Management"],
      },
      {
        name: "Business Modules",
        items: [
          "Users",
          "Pets",
          "Bookings",
          "Verification",
          "Location Services",
        ],
      },
      {
        name: "Data & Storage",
        items: ["Prisma ORM", "PostgreSQL", "AWS S3", "Document Processing"],
      },
    ],
    screenshots: [
      {
        src: "/projects/sitmypet-1.jpeg",
        alt: "SitMyPet Role Selection",
        caption:
          "Users choose whether to continue as a pet owner or pet sitter during onboarding.",
      },
      {
        src: "/projects/sitmypet-2.jpeg",
        alt: "SitMyPet Home Screen",
        caption:
          "The main dashboard displaying pet care requests and nearby sitter opportunities.",
      },
      {
        src: "/projects/sitmypet-3.jpeg",
        alt: "SitMyPet Post Details Screen",
        caption:
          "Detailed view of a pet care request with requirements, location, and booking information.",
      },
      {
        src: "/projects/sitmypet-4.jpeg",
        alt: "SitMyPet Create Post Screen",
        caption:
          "Form interface for creating and publishing new pet care requests.",
      },
    ],
    challenges: [
      {
        title: "Multi-Role Platform Design",
        description:
          "Supporting both pet owners and sitters required carefully designed authorization flows and role-specific experiences throughout the application.",
      },
      {
        title: "Document Verification Pipeline",
        description:
          "Implementing OCR processing, secure document uploads, and identity verification while maintaining a smooth user experience required integrating multiple services and workflows.",
      },
    ],
    lessons: [
      "A modular NestJS architecture greatly improves maintainability as features scale.",
      "Role-based access control should be designed early to avoid authorization complexity later.",
      "Cloud storage and document processing workflows benefit from clear separation of concerns.",
      "Strong TypeScript typing across frontend and backend reduces integration bugs.",
    ],
  },
  {
    slug: "expoalalam-car-dealership",
    title: "ExpoAlAlam",
    tagline:
      "A modern car dealership platform to browse, buy, and manage car listings.",
    description:
      "A full-stack car dealership web platform that allows users to explore car collections, view detailed listings, and interact with a seamless buying experience. It also includes an admin dashboard for managing cars, categories, and inventory.",
    category: "Full Stack",
    year: "2026",
    featured: false,
    thumbnail: "/projects/expoalalam-0.jpg",
    cover: "/projects/expoalalam-0.jpg",
    techStack: ["React", "TypeScript", "Node.js", "MySQL", "AWS S3"],
    githubUrl: "",
    liveUrl: "",
    overview:
      "ExpoAlAlam is a modern car dealership platform designed to streamline the process of browsing and managing vehicle listings. It provides users with curated car collections, detailed vehicle pages, and a smooth exploration experience, while also offering an admin dashboard for managing inventory and publishing new listings.",
    problem:
      "Car buyers often face fragmented listings across multiple platforms with inconsistent data and limited filtering options. Dealers also lack a unified system to efficiently manage inventory and showcase vehicles online.",
    solution:
      "ExpoAlAlam centralizes car listings into a single platform with structured collections, advanced filtering, and a dedicated admin panel for managing cars, categories, and availability in real time.",
    architecture:
      "ExpoAlAlam is built as a full-stack web application using Next.js for the frontend and a Node.js backend. Prisma manages database access with PostgreSQL, while authentication and admin access control ensure secure inventory management. The system is designed with a clear separation between public car browsing features and restricted admin operations.",
    architectureLayers: [
      {
        name: "Frontend",
        items: ["Next.js", "TypeScript", "UI Components", "State Management"],
      },
      {
        name: "Backend",
        items: ["Node.js", "REST APIs", "Authentication", "Admin Services"],
      },
      {
        name: "Business Logic",
        items: ["Car Listings", "Inventory Management", "Filtering System"],
      },
      {
        name: "Data Layer",
        items: ["Prisma ORM", "MySQL", "Relational Schema"],
      },
    ],
    features: [
      {
        title: "Car Collections & Listings",
        description:
          "Browse curated collections of cars with detailed specifications and images.",
      },
      {
        title: "Admin Dashboard",
        description:
          "Secure admin login to add, update, and manage car listings and inventory.",
      },
      {
        title: "Advanced Search & Filtering",
        description:
          "Easily find cars based on brand, model, price, and other key attributes.",
      },
    ],
    screenshots: [
      {
        src: "/projects/expoalalam-1.jpeg",
        alt: "ExpoAlAlam Home Screen",
        caption: "Landing page of ExpoAlAlam.",
      },
      {
        src: "/projects/expoalalam-2.jpeg",
        alt: "ExpoAlAlam Collections Screen",
        caption: "Collections screen displaying categorized car listings.",
      },
      {
        src: "/projects/expoalalam-3.jpeg",
        alt: "ExpoAlAlam Car Details Screen",
        caption: "Detailed car view with specifications and images.",
      },
      {
        src: "/projects/expoalalam-4.jpeg",
        alt: "ExpoAlAlam About Us Page",
        caption: "About us page describing the dealership and mission.",
      },
      {
        src: "/projects/expoalalam-5.jpeg",
        alt: "ExpoAlAlam Contact Us Page",
        caption: "Contact page with form and dealership contact information.",
      },
    ],
    challenges: [
      {
        title: "Inventory Management System",
        description:
          "Designing a scalable system for managing dynamic car listings and categories required careful schema planning.",
      },
      {
        title: "Admin Authentication & Security",
        description:
          "Securing the admin panel while maintaining a smooth content management experience required robust authentication flows.",
      },
    ],
    lessons: [
      "A clear separation between user-facing and admin functionality simplifies system design.",
      "Consistent data modeling is crucial for scalable inventory systems.",
      "Role-based access control is essential for secure administrative features.",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
