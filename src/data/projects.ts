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
    year: "2026",
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
        src: "/projects/sitmypet-1.jpg",
        alt: "SitMyPet Role Selection",
        caption:
          "Users choose whether to continue as a pet owner or pet sitter during onboarding.",
      },
      {
        src: "/projects/sitmypet-2.jpg",
        alt: "SitMyPet Home Screen",
        caption:
          "The main dashboard displaying pet care requests and nearby sitter opportunities.",
      },
      {
        src: "/projects/sitmypet-3.jpg",
        alt: "SitMyPet Post Details Screen",
        caption:
          "Detailed view of a pet care request with requirements, location, and booking information.",
      },
      {
        src: "/projects/sitmypet-4.jpg",
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
    slug: "lumea",
    title: "Lumea",
    tagline:
      "A modern social media platform with real-time messaging, private profiles, and rich social interactions.",
    description:
      "A full-stack social media application built with React, Node.js, MySQL, Socket.IO, and Supabase Storage that enables users to create posts, interact with others, chat in real time, and manage their profiles.",
    category: "Full Stack",
    year: "2025",
    featured: true,
    thumbnail: "/projects/lumea-0.jpg",
    cover: "/projects/lumea-0.jpg",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "JavaScript",
      "MySQL",
      "Socket.IO",
      "JWT",
      "Supabase Storage",
    ],
    githubUrl: "https://github.com/Ramykhb/Lumea",
    liveUrl: "https://lumea-lb.site",
    overview:
      "Lumea is a full-stack social media platform inspired by modern social networking applications. Users can create and interact with posts, discover other profiles, communicate through real-time messaging, receive notifications, and customize their account privacy, all within a responsive React frontend powered by a Node.js backend.",
    problem:
      "Building a social media platform requires combining content sharing, user relationships, messaging, notifications, and privacy into a seamless experience while maintaining performance and scalability. Managing these interconnected features efficiently presents both architectural and database design challenges.",
    solution:
      "Lumea delivers a complete social networking experience through a React frontend and Node.js backend backed by MySQL. Socket.IO enables instant messaging, JWT secures authentication, and Supabase Storage manages uploaded profile images while users can create content, interact with others, and manage their privacy settings.",
    architecture:
      "Lumea follows a client-server architecture where React provides the user interface and communicates with a Node.js and Express backend through REST APIs. Socket.IO handles real-time messaging while MySQL stores users, posts, comments, messages, followers, and notifications. JWT secures protected routes, and Supabase Storage stores user profile images.",
    architectureLayers: [
      {
        name: "Frontend",
        items: ["React", "React Router", "Context API", "Responsive UI"],
      },
      {
        name: "Backend API",
        items: ["Node.js", "Express", "REST APIs", "JWT Authentication"],
      },
      {
        name: "Real-Time Services",
        items: ["Socket.IO", "Instant Messaging", "Online Presence"],
      },
      {
        name: "Data & Storage",
        items: [
          "MySQL",
          "Supabase Storage",
          "Users",
          "Posts",
          "Comments",
          "Messages",
          "Notifications",
        ],
      },
    ],
    features: [
      {
        title: "Social Feed",
        description:
          "Create, like, comment on, save, and delete posts while browsing either the global feed or posts from followed users.",
      },
      {
        title: "User Profiles",
        description:
          "Customize profiles with profile pictures, follower statistics, privacy settings, and personal posts.",
      },
      {
        title: "Private Accounts",
        description:
          "Users can switch between public and private profiles, controlling who can follow and view their content.",
      },
      {
        title: "Following System",
        description:
          "Follow and unfollow users while viewing followers and following lists.",
      },
      {
        title: "Profile Search",
        description:
          "Quickly search for other users and navigate directly to their profiles.",
      },
      {
        title: "Real-Time Messaging",
        description:
          "Chat instantly with other users through Socket.IO-powered real-time messaging.",
      },
      {
        title: "Notification System",
        description:
          "Receive notifications for follows, likes, comments, and other social interactions.",
      },
      {
        title: "Account Management",
        description:
          "Upload profile pictures, change passwords, and reset forgotten passwords securely.",
      },
    ],
    screenshots: [
      {
        src: "/projects/lumea-1.jpg",
        alt: "Login Screen",
        caption:
          "Login screen allowing users to securely access their accounts.",
      },
      {
        src: "/projects/lumea-2.jpg",
        alt: "Signup Screen",
        caption: "Registration page for creating a new Lumea account.",
      },
      {
        src: "/projects/lumea-3.jpg",
        alt: "Main Feed",
        caption: "Browse either all posts or posts from followed users.",
      },
      {
        src: "/projects/lumea-4.jpg",
        alt: "Likes List",
        caption: "View everyone who has liked a specific post.",
      },
      {
        src: "/projects/lumea-5.jpg",
        alt: "Saved Posts",
        caption: "Access posts that have been saved for later.",
      },
      {
        src: "/projects/lumea-6.jpg",
        alt: "Search Profiles",
        caption: "Search for users across the platform.",
      },
      {
        src: "/projects/lumea-7.jpg",
        alt: "User Profile",
        caption:
          "Profile page displaying posts, followers, and following counts.",
      },
      {
        src: "/projects/lumea-8.jpg",
        alt: "Private Profile",
        caption: "Private profile view shown to users without access.",
      },
      {
        src: "/projects/lumea-9.jpg",
        alt: "Chat Screen",
        caption: "Real-time messaging between users using Socket.IO.",
      },
      {
        src: "/projects/lumea-10.jpg",
        alt: "Notifications",
        caption: "Notification center displaying recent activity.",
      },
      {
        src: "/projects/lumea-11.jpg",
        alt: "Privacy Settings",
        caption: "Choose whether the account is public or private.",
      },
      {
        src: "/projects/lumea-12.jpg",
        alt: "Followers & Following",
        caption: "View followers and following lists.",
      },
      {
        src: "/projects/lumea-13.jpg",
        alt: "Dark Mode",
        caption: "Toggle between light and dark themes.",
      },
      {
        src: "/projects/lumea-14.jpg",
        alt: "Change Password",
        caption: "Update the account password securely.",
      },
      {
        src: "/projects/lumea-15.jpg",
        alt: "Forgot Password",
        caption: "Password recovery and reset workflow.",
      },
    ],
    challenges: [
      {
        title: "Real-Time Messaging",
        description:
          "Keeping conversations synchronized between multiple users while maintaining responsive performance required carefully integrating Socket.IO with the REST API.",
      },
      {
        title: "Designing Social Relationships",
        description:
          "Implementing followers, private profiles, saved posts, likes, comments, and notifications required careful relational database design to keep queries efficient and data consistent.",
      },
    ],
    lessons: [
      "Separating REST APIs from WebSocket events makes real-time applications easier to maintain.",
      "Planning the database schema early is essential when building interconnected social features.",
      "Reusable React components significantly improve scalability and maintainability.",
      "JWT authentication and proper authorization are critical when implementing privacy controls.",
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
    githubUrl: "https://github.com/Ramykhb/expo-al-alam-website",
    liveUrl: "https://expoalalam.com",
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
        src: "/projects/expoalalam-1.jpg",
        alt: "ExpoAlAlam Home Screen",
        caption: "Landing page of ExpoAlAlam.",
      },
      {
        src: "/projects/expoalalam-2.jpg",
        alt: "ExpoAlAlam Collections Screen",
        caption: "Collections screen displaying categorized car listings.",
      },
      {
        src: "/projects/expoalalam-3.jpg",
        alt: "ExpoAlAlam Car Details Screen",
        caption: "Detailed car view with specifications and images.",
      },
      {
        src: "/projects/expoalalam-4.jpg",
        alt: "ExpoAlAlam About Us Page",
        caption: "About us page describing the dealership and mission.",
      },
      {
        src: "/projects/expoalalam-5.jpg",
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
  {
    slug: "green-power",
    title: "Green Power",
    tagline:
      "An interactive educational platform for learning about next-generation battery technologies.",
    description:
      "A frontend educational website built with HTML, CSS, and JavaScript that teaches next-generation battery technologies through structured lessons, embedded videos and structured educational content.",
    category: "Frontend",
    year: "2025",
    featured: false,
    thumbnail: "/projects/green-power-0.jpg",
    cover: "/projects/green-power-0.jpg",
    techStack: ["HTML", "CSS", "JavaScript", "YouTube Embeds"],
    githubUrl: "https://github.com/Ramykhb/MLTM-Project-II",
    liveUrl: "https://green-power-mltm.netlify.app",
    overview:
      "Green Power is an educational web platform designed to introduce learners to modern battery technologies, energy storage systems, and the future of sustainable energy through engaging lessons, visual content, embedded educational videos, and knowledge assessments.",
    problem:
      "Understanding emerging battery technologies can be challenging due to the technical concepts involved and the rapid pace of innovation in energy storage.",
    solution:
      "Green Power provides a structured learning experience combining visual explanations and video-based lessons that help learners understand modern battery technologies and energy storage systems.",
    architecture:
      "The platform is built entirely with HTML, CSS, and JavaScript. Course content is delivered through images and embedded YouTube videos, while client-side quiz logic evaluates learner progress and certificate eligibility.",
    architectureLayers: [
      {
        name: "Presentation Layer",
        items: ["HTML", "CSS", "Responsive Design"],
      },
      {
        name: "Learning Content",
        items: ["Course Material", "Images", "YouTube Videos"],
      },
      {
        name: "Interactive Features",
        items: ["Course Navigation", "Learning Resources"],
      },
    ],
    features: [
      {
        title: "Battery Technology Course",
        description:
          "Structured lessons covering lithium-ion batteries, solid-state batteries, and emerging energy storage technologies.",
      },
      {
        title: "Embedded Video Learning",
        description:
          "Integrated YouTube videos provide additional explanations and real-world industry insights.",
      },
      {
        title: "Visual Learning Resources",
        description:
          "Images and illustrations help explain complex battery and energy storage concepts.",
      },
      {
        title: "Sustainable Energy Education",
        description:
          "Learn about the role of advanced batteries in renewable energy and future technologies.",
      },
    ],
    screenshots: [
      {
        src: "/projects/green-power-1.jpg",
        alt: "Green Power Homepage",
        caption: "Landing page introducing the Green Power learning platform.",
      },
      {
        src: "/projects/green-power-2.jpg",
        alt: "Green Power Course Page",
        caption:
          "Course page containing learning material, images, and embedded videos.",
      },
      {
        src: "/projects/green-power-3.jpg",
        alt: "Green Power About Us Page",
        caption:
          "About Us page presenting the mission and team behind the platform.",
      },
      {
        src: "/projects/green-power-4.jpg",
        alt: "Green Power Contact Us Page",
        caption:
          "Contact page allowing learners to reach out with questions and feedback.",
      },
    ],
    challenges: [
      {
        title: "Simplifying Technical Concepts",
        description:
          "Presenting advanced battery technologies and energy storage concepts in a beginner-friendly format required careful content organization and visual explanations.",
      },
      {
        title: "Educational Content Organization",
        description:
          "Structuring technical battery concepts into clear, engaging lessons required balancing technical accuracy with accessibility for beginners.",
      },
    ],
    lessons: [
      "Well-structured educational content improves learner engagement and comprehension.",
      "Visual learning resources help simplify complex technical concepts.",
      "Clear course structure improves learner engagement and retention.",
    ],
  },
  {
    slug: "qubit-pioneers",
    title: "Qubit Pioneers",
    tagline:
      "An interactive educational platform for learning the fundamentals of quantum computing.",
    description:
      "A frontend educational website built with HTML, CSS, and JavaScript that teaches quantum computing through structured lessons, embedded videos, interactive quizzes, and certificate generation.",
    category: "Frontend",
    year: "2024",
    featured: false,
    thumbnail: "/projects/qubit-pioneers-0.jpg",
    cover: "/projects/qubit-pioneers-0.jpg",
    techStack: ["HTML", "CSS", "JavaScript", "YouTube Embeds"],
    githubUrl: "https://github.com/Ramykhb/MLTM-Project",
    liveUrl: "https://qubit-pioneers.netlify.app",
    overview:
      "Qubit Pioneers is an educational web platform designed to introduce learners to quantum computing concepts through engaging lessons, visual content, embedded educational videos, and knowledge assessments.",
    problem:
      "Quantum computing can be difficult for beginners to approach due to its abstract concepts and lack of accessible learning resources.",
    solution:
      "Qubit Pioneers provides a structured learning experience combining visual explanations, video-based lessons, and interactive quizzes that reinforce understanding. Learners who successfully complete the quiz can earn a certificate of completion.",
    architecture:
      "The platform is built entirely with HTML, CSS, and JavaScript. Course content is delivered through images and embedded YouTube videos, while client-side quiz logic evaluates learner progress and certificate eligibility.",
    architectureLayers: [
      {
        name: "Presentation Layer",
        items: ["HTML", "CSS", "Responsive Design"],
      },
      {
        name: "Learning Content",
        items: ["Course Material", "Images", "YouTube Videos"],
      },
      {
        name: "Interactive Features",
        items: ["Quiz System", "Certificate Validation"],
      },
    ],
    features: [
      {
        title: "Quantum Computing Course",
        description:
          "Structured lessons introducing core quantum computing concepts and terminology.",
      },
      {
        title: "Embedded Video Learning",
        description:
          "Integrated YouTube videos provide additional explanations and visual demonstrations.",
      },
      {
        title: "Interactive Quiz",
        description:
          "Learners can test their knowledge through quizzes covering course material.",
      },
      {
        title: "Certificate Generation",
        description:
          "Users who successfully complete the assessment can receive a completion certificate.",
      },
    ],
    screenshots: [
      {
        src: "/projects/qubit-pioneers-1.jpg",
        alt: "Qubit Pioneers Homepage",
        caption:
          "Landing page introducing the Qubit Pioneers learning platform.",
      },
      {
        src: "/projects/qubit-pioneers-2.jpg",
        alt: "Qubit Pioneers Course Page",
        caption:
          "Course page containing learning material, images, and embedded videos.",
      },
      {
        src: "/projects/qubit-pioneers-3.jpg",
        alt: "Qubit Pioneers About Us Page",
        caption:
          "About Us page presenting the mission and team behind the platform.",
      },
      {
        src: "/projects/qubit-pioneers-4.jpg",
        alt: "Qubit Pioneers Contact Us Page",
        caption:
          "Contact page allowing learners to reach out with questions and feedback.",
      },
    ],
    challenges: [
      {
        title: "Simplifying Complex Concepts",
        description:
          "Presenting advanced quantum computing topics in a beginner-friendly format required careful content organization and visual explanations.",
      },
      {
        title: "Assessment Design",
        description:
          "Creating quizzes that accurately measure understanding while remaining engaging for learners required balancing difficulty and accessibility.",
      },
    ],
    lessons: [
      "Educational content is more effective when paired with interactive assessments.",
      "Visual learning resources help simplify complex technical concepts.",
      "Clear course structure improves learner engagement and retention.",
    ],
  },
  {
    slug: "gaming-lounge-pos",
    title: "Gaming Lounge POS",
    tagline:
      "A desktop point-of-sale and player management system built for gaming lounges.",
    description:
      "A JavaFX-based POS and gaming lounge management system that handles player accounts, playtime tracking, snack sales, coupon redemption, transaction management, receipt generation, and administrative operations.",
    category: "Full Stack",
    year: "2025",
    featured: false,
    thumbnail: "/projects/gaming-lounge-pos-0.jpg",
    cover: "/projects/gaming-lounge-pos-0.jpg",
    techStack: ["Java", "JavaFX", "CSS", "MySQL", "Java Mail", "QR Codes"],
    githubUrl: "https://github.com/Ramykhb/GamingLoungePOS",
    liveUrl: "",
    overview:
      "Gaming Lounge POS is a desktop application designed for gaming cafés and lounges. It provides separate interfaces for administrators and players, allowing efficient management of customers, snacks, coupons, transactions, and gameplay time while delivering a streamlined customer experience.",
    problem:
      "Gaming lounges often rely on manual processes for tracking customer playtime, snack purchases, coupons, and payments, leading to inefficiencies and inaccurate records.",
    solution:
      "The system centralizes lounge operations by providing automated playtime tracking, POS functionality, QR coupon redemption, transaction history, receipt generation, and comprehensive administrative tools in a single desktop application.",
    architecture:
      "The application is built using JavaFX for the desktop interface, CSS for custom styling, and MySQL for persistent storage. Background threads continuously track active player sessions, while role-based interfaces separate administrative operations from player functionality.",
    architectureLayers: [
      {
        name: "Desktop Client",
        items: ["JavaFX", "CSS Styling", "Player Interface", "Admin Interface"],
      },
      {
        name: "Business Logic",
        items: [
          "Time Tracking",
          "POS Operations",
          "Coupon Management",
          "Transactions",
        ],
      },
      {
        name: "Gaming Features",
        items: ["Memory Game", "Snake Game", "Session Control"],
      },
      {
        name: "Data Layer",
        items: ["MySQL", "Users", "Snacks", "Transactions", "Coupons"],
      },
    ],
    features: [
      {
        title: "Automated Playtime Tracking",
        description:
          "A dedicated thread tracks session duration while decrementing remaining purchased playtime in real time.",
      },
      {
        title: "Point of Sale System",
        description:
          "Players can purchase snacks and additional playtime directly through the application.",
      },
      {
        title: "QR Coupon Redemption",
        description:
          "Administrators generate QR coupons that players can scan to claim bonus playtime.",
      },
      {
        title: "Receipt Generation & Email Delivery",
        description:
          "Transactions can be printed as receipts and sent to customers through email.",
      },
      {
        title: "Mini Games",
        description:
          "Includes Memory Game and Snake Game that players can access while they have active playtime.",
      },
    ],
    screenshots: [
      {
        src: "/projects/gaming-lounge-pos-1.jpg",
        alt: "Register Screen",
        caption: "Player registration screen for creating new accounts.",
      },
      {
        src: "/projects/gaming-lounge-pos-2.jpg",
        alt: "Login Screen",
        caption: "Authentication screen for administrators and players.",
      },
      {
        src: "/projects/gaming-lounge-pos-3.jpg",
        alt: "Player Home Screen",
        caption:
          "Dashboard displaying player statistics and remaining playtime.",
      },
      {
        src: "/projects/gaming-lounge-pos-4.jpg",
        alt: "Snack Shop",
        caption: "Player snack shop for purchasing food and beverages.",
      },
      {
        src: "/projects/gaming-lounge-pos-5.jpg",
        alt: "Transaction History",
        caption: "Player transaction history and purchase records.",
      },
      {
        src: "/projects/gaming-lounge-pos-6.jpg",
        alt: "Memory Game",
        caption: "Built-in memory game available to active players.",
      },
      {
        src: "/projects/gaming-lounge-pos-7.jpg",
        alt: "Snake Game",
        caption: "Classic snake game integrated into the platform.",
      },
      {
        src: "/projects/gaming-lounge-pos-8.jpg",
        alt: "Admin Dashboard",
        caption:
          "Administrative dashboard showing sales and customer statistics.",
      },
      {
        src: "/projects/gaming-lounge-pos-9.jpg",
        alt: "Manage Users",
        caption: "User management interface for administrators.",
      },
      {
        src: "/projects/gaming-lounge-pos-10.jpg",
        alt: "Add User",
        caption: "Form for creating and editing player accounts.",
      },
      {
        src: "/projects/gaming-lounge-pos-11.jpg",
        alt: "Manage Snacks",
        caption: "Snack inventory management screen.",
      },
      {
        src: "/projects/gaming-lounge-pos-12.jpg",
        alt: "Add Snack",
        caption: "Interface for adding and updating snack products.",
      },
      {
        src: "/projects/gaming-lounge-pos-13.jpg",
        alt: "Generate Coupon",
        caption: "QR coupon generation screen for bonus playtime rewards.",
      },
      {
        src: "/projects/gaming-lounge-pos-14.jpg",
        alt: "Admin Transactions",
        caption: "Administrative transaction history and reporting page.",
      },
    ],
    challenges: [
      {
        title: "Real-Time Session Management",
        description:
          "Implementing reliable background-thread time tracking while keeping the user interface responsive required careful synchronization and state management.",
      },
      {
        title: "Role-Based Desktop Experience",
        description:
          "Designing distinct workflows for players and administrators while sharing the same application architecture required a flexible permission system.",
      },
    ],
    lessons: [
      "JavaFX provides a powerful foundation for complex desktop business applications.",
      "Background threads must be carefully managed when updating time-sensitive user data.",
      "Role-based design greatly improves maintainability for multi-user systems.",
      "Combining POS operations with customer session tracking creates a more efficient gaming lounge workflow.",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
