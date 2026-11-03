// Case study content. Detail pages live at /insights/[slug].

export const caseStudyEntries = {
  "industrial-ai-document-intelligence": {
    title: "Industrial AI Document Intelligence: Transforming Technical Knowledge Search",
    description:
      "How we built an AI-powered RAG system that reduced document search time by 90% for a telecommunications team managing thousands of technical specifications.",
    date: "2024-02-20",
    category: "Case Study",
    industry: "Telecommunications & Construction",
    colorKey: "green",
    challenge: {
      title: "The Challenge",
      content:
        "A leading telecommunications team specializing in large-scale construction projects (oil & gas, infrastructure) was drowning in documentation. With thousands of technical specifications, product datasheets, and compliance documents stored across SharePoint, engineers spent hours manually searching for the right equipment specifications. Critical project timelines were delayed as teams struggled to find explosion-proof radios, temperature-rated equipment, or ATEX-certified devices matching specific environmental requirements.",
    },
    solution: {
      title: "The Solution",
      content:
        "We developed a comprehensive RAG (Retrieval-Augmented Generation) system that transforms SharePoint document libraries into an intelligent knowledge base. The system extracts text from PDFs, DOCX, and XLSX files, creates vector embeddings using OpenAI's ada-002 model, and stores them in Pinecone for semantic search. Advanced specification extraction identifies temperature ranges, pressure ratings, certifications, and application types, enabling intelligent filtering beyond simple keyword matching.",
      features: [
        "AI-powered semantic search across thousands of documents",
        "Intelligent specification extraction (temperature, pressure, certifications)",
        "Hybrid search combining vector similarity and metadata filtering",
        "Real-time SharePoint synchronization",
        "Source citations with direct document links",
      ],
    },
    results: {
      title: "Results & Impact",
      metrics: [
        { value: "90%", label: "Time Reduction", description: "in document retrieval" },
        { value: "100+", label: "Documents/Hour", description: "processing capacity" },
        { value: "<2s", label: "Response Time", description: "for complex queries" },
        { value: "90%+", label: "Accuracy", description: "relevant results" },
      ],
      content:
        "Engineers can now find the exact equipment specifications in seconds instead of hours. The system handles complex queries like 'explosion-proof radios for oil platforms operating at -20°C to +60°C with ATEX certification' and returns precise, cited results. Project timelines improved significantly, and the team can focus on engineering rather than document hunting.",
    },
    techStack: [
      "Node.js",
      "React",
      "OpenAI GPT-4",
      "Pinecone Vector DB",
      "MongoDB",
      "SharePoint API",
      "Azure AD",
    ],
  },
  "hyperlocal-business-network": {
    title: "Hyperlocal Business Network: Connecting Rural Communities Digitally",
    description:
      "A comprehensive platform connecting local businesses, service providers, and customers at the grassroots level, transforming rural commerce through digital innovation.",
    date: "2024-02-15",
    category: "Case Study",
    industry: "Rural Digital Services",
    colorKey: "cyan",
    challenge: {
      title: "The Challenge",
      content:
        "A rural business community needed to bridge the digital divide. Local businesses struggled to reach customers beyond their immediate vicinity. Service providers had no centralized platform to advertise services at the panchayat level. Students and freelancers lacked opportunities to connect with local work. The entire ecosystem operated in isolation, limiting growth and economic opportunities for rural communities.",
    },
    solution: {
      title: "The Solution",
      content:
        "We built a multi-stakeholder digital platform that connects businesses, service providers, students, and customers at the grassroots level. The platform features a comprehensive service marketplace, digital wallet system, task management for students, and panchayat-level business directories. Real-time notifications, WhatsApp integration, and a robust admin dashboard ensure smooth operations across all user types.",
      features: [
        "Panchayat-level business directory and service marketplace",
        "Digital wallet system with transaction management",
        "Student task management and freelance work platform",
        "Service request workflow with instant/approval routing",
        "WhatsApp integration for notifications",
        "Comprehensive admin dashboard with analytics",
      ],
    },
    results: {
      title: "Results & Impact",
      metrics: [
        { value: "72", label: "Service Categories", description: "across 12 types" },
        { value: "100%", label: "Digital Transformation", description: "of rural commerce" },
        { value: "24/7", label: "Availability", description: "service access" },
        { value: "Multi", label: "Stakeholder Platform", description: "businesses, providers, students" },
      ],
      content:
        "The platform transformed rural business operations, enabling local businesses to reach customers digitally, service providers to advertise effectively, and students to find local opportunities. The digital wallet system streamlined transactions, while the comprehensive admin dashboard provided insights into platform usage and growth.",
    },
    techStack: [
      "Node.js",
      "Express.js",
      "React",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Azure Blob Storage",
      "WhatsApp API",
    ],
  },
  "educational-counseling-system": {
    title: "Educational Counseling System: Streamlining Student Support Operations",
    description:
      "A comprehensive counseling management platform that streamlined operations for an international school system, managing 1000+ student cases with precision and efficiency.",
    date: "2024-02-10",
    category: "Case Study",
    industry: "International Education",
    colorKey: "green",
    challenge: {
      title: "The Challenge",
      content:
        "An international school system in Oman needed a robust solution to manage complex counseling workflows. With over 1000 students requiring various counseling services, the manual paper-based system was inefficient and error-prone. Counselors struggled to track session histories, manage appointments, generate reports, and coordinate with teachers and parents. Critical student cases were at risk of falling through the cracks.",
    },
    solution: {
      title: "The Solution",
      content:
        "We developed a comprehensive counseling management system that digitizes the entire workflow from session scheduling to case reporting. The platform includes session management, case tracking, event coordination, time slot management, and comprehensive reporting. Role-based access ensures counselors, administrators, and staff have appropriate permissions while maintaining student privacy.",
      features: [
        "Session management with history tracking",
        "Case management with status workflows",
        "Event scheduling and coordination",
        "Time slot management with removal logs",
        "Comprehensive reporting and analytics",
        "File upload and document management",
        "Role-based access control",
      ],
    },
    results: {
      title: "Results & Impact",
      metrics: [
        { value: "1000+", label: "Students", description: "managed efficiently" },
        { value: "100%", label: "Digitalization", description: "of counseling workflows" },
        { value: "Real-time", label: "Tracking", description: "of all sessions" },
        { value: "Comprehensive", label: "Reporting", description: "and analytics" },
      ],
      content:
        "The system streamlined counseling operations, enabling counselors to manage student cases efficiently, track session histories, and generate comprehensive reports. The digital workflow eliminated paperwork, reduced errors, and ensured no student case was overlooked. Administrators gained real-time visibility into counseling operations and student support needs.",
    },
    techStack: [
      "Node.js",
      "Express.js",
      "React",
      "TypeScript",
      "MongoDB",
      "HTTPS/SSL",
    ],
  },
  "multi-tier-loyalty-platform": {
    title: "Multi-Tier Loyalty Platform: Scaling Enterprise Rewards",
    description:
      "An enterprise-grade loyalty system handling 35,000 daily transactions for 5,000 concurrent users, featuring multi-tier gamification and intelligent point management.",
    date: "2024-02-05",
    category: "Case Study",
    industry: "Retail & Service Industry",
    colorKey: "cyan",
    challenge: {
      title: "The Challenge",
      content:
        "A major retail and service provider needed a sophisticated loyalty program capable of handling massive scale. The system required multi-tier membership levels, complex point accumulation rules, expiration management, referral programs, and redemption workflows. With 5,000 concurrent users and 35,000 daily transactions, the platform needed enterprise-grade performance, reliability, and scalability.",
    },
    solution: {
      title: "The Solution",
      content:
        "We architected a comprehensive loyalty platform with Redis caching, MongoDB for persistence, and BullMQ for background job processing. The system features dynamic tier management, configurable point criteria, expiration rules, referral tracking, and merchant offer integration. Real-time analytics, segmentation, and campaign management provide actionable insights for marketing teams.",
      features: [
        "Multi-tier membership system with automatic upgrades/downgrades",
        "Configurable point accumulation and expiration rules",
        "Referral program with tracking and rewards",
        "Merchant offer integration and coupon management",
        "Customer segmentation and targeting",
        "Real-time analytics and reporting",
        "Background job processing for point expiration and tier updates",
        "SDK for mobile app integration",
      ],
    },
    results: {
      title: "Results & Impact",
      metrics: [
        { value: "5,000", label: "Concurrent Users", description: "daily capacity" },
        { value: "35,000", label: "Daily Transactions", description: "processed" },
        { value: "99.9%", label: "Uptime", description: "reliability" },
        { value: "Multi-Tier", label: "Gamification", description: "engagement system" },
      ],
      content:
        "The platform successfully handles enterprise-scale operations with high reliability and performance. The multi-tier system drives customer engagement, while intelligent point management ensures fair and transparent rewards. Marketing teams gained powerful segmentation and campaign tools, leading to improved customer retention and increased program participation.",
    },
    techStack: [
      "Node.js",
      "Express.js",
      "React",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Prometheus",
      "Docker",
    ],
  },
  "digital-business-identity-suite": {
    title: "Digital Business Identity Suite: Zero-Paper Corporate Networking",
    description:
      "A modern digital business card platform with QR codes and real-time analytics, eliminating paper waste while providing actionable engagement insights.",
    date: "2024-01-28",
    category: "Case Study",
    industry: "Corporate Services",
    colorKey: "green",
    challenge: {
      title: "The Challenge",
      content:
        "A corporate services company wanted to modernize their business card distribution and employee directory. Traditional paper cards were wasteful, expensive to reprint, and provided no engagement metrics. The company needed a solution that would allow employees to share contact information digitally, track engagement, and maintain a centralized employee directory accessible via web and mobile.",
    },
    solution: {
      title: "The Solution",
      content:
        "We developed a comprehensive digital business card platform featuring interactive card designs, QR code generation, and real-time analytics. The platform includes Azure AD integration for secure authentication, vCard export functionality, and a public sharing system. Each card tracks scans, views, and downloads, providing valuable engagement insights.",
      features: [
        "Interactive digital business cards with front/back design",
        "QR code generation for instant sharing",
        "Real-time analytics and engagement tracking",
        "Azure AD integration for secure authentication",
        "vCard export for address book integration",
        "Public sharing with unique URLs",
        "Admin dashboard for user management",
        "Mobile-optimized responsive design",
      ],
    },
    results: {
      title: "Results & Impact",
      metrics: [
        { value: "100%", label: "Paper Reduction", description: "zero physical cards" },
        { value: "Real-time", label: "Analytics", description: "engagement tracking" },
        { value: "Instant", label: "Sharing", description: "via QR codes" },
        { value: "Centralized", label: "Directory", description: "employee management" },
      ],
      content:
        "The platform eliminated paper waste entirely while providing superior networking capabilities. Employees can share contact information instantly via QR codes, and the analytics dashboard reveals which cards generate the most engagement. The centralized directory ensures all employee information stays current and accessible.",
    },
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Azure AD",
      "QR Code Generation",
      "Tailwind CSS",
    ],
  },
  "family-connection-platform": {
    title: "Family Connection Platform: Multi-Generational Digital Ecosystem",
    description:
      "A comprehensive family management platform combining genealogy tracking, financial management, and community engagement features for extended family networks.",
    date: "2024-01-25",
    category: "Case Study",
    industry: "Social & Community",
    colorKey: "cyan",
    challenge: {
      title: "The Challenge",
      content:
        "Extended families needed a unified platform to track genealogy, manage family finances, coordinate events, and maintain connections across generations. Traditional family trees were static and disconnected from daily family life. Families wanted a solution that combined genealogy tracking with practical features like event management, financial contributions, and family news sharing.",
    },
    solution: {
      title: "The Solution",
      content:
        "We built a comprehensive family ecosystem that goes beyond traditional genealogy. The platform features interactive family tree visualization using ReactFlow, individual member wallets for financial management, event coordination, news and announcements, and document organization. Firebase authentication ensures secure access while maintaining family privacy controls.",
      features: [
        "Interactive multi-generational family tree visualization",
        "Individual member wallets with transaction tracking",
        "Family event management and coordination",
        "News and announcement system",
        "Document organization with folder structure",
        "Relationship mapping (spouse, parent-child, extended)",
        "Privacy controls for family visibility",
        "Notification system for family activities",
      ],
    },
    results: {
      title: "Results & Impact",
      metrics: [
        { value: "Multi-Gen", label: "Family Trees", description: "unlimited generations" },
        { value: "Complete", label: "Ecosystem", description: "genealogy + finance + events" },
        { value: "Real-time", label: "Updates", description: "family activities" },
        { value: "Secure", label: "Privacy", description: "family-controlled access" },
      ],
      content:
        "The platform transformed how families connect and manage their shared history. Families can now visualize their genealogy interactively, coordinate events seamlessly, manage financial contributions transparently, and stay connected through news and announcements. The comprehensive ecosystem ensures no aspect of family life is left disconnected.",
    },
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Material-UI",
      "ReactFlow",
      "Moment.js",
    ],
  },
  "telecom-catalogue-automation": {
    title: "Telecom Catalogue Automation: AI-Powered Document Intelligence",
    description:
      "How we transformed telecom catalogue management with AI-powered automation and intelligent matching, reducing catalogue processing time by 90% and achieving 100% documentation accuracy.",
    date: "2024-03-15",
    category: "Case Study",
    industry: "Telecommunications",
    colorKey: "green",
    challenge: {
      title: "The Challenge",
      content:
        "A leading telecommunications provider specializing in large-scale infrastructure projects faced a critical bottleneck: engineers were spending hours manually searching and matching catalogues for telecom equipment. With thousands of product catalogues, technical specifications, and compliance documents scattered across multiple systems, teams struggled to find the right equipment for specific project requirements. Project timelines were consistently delayed as engineers manually cross-referenced catalogues, matched specifications, and attached relevant documentation. The manual process was error-prone, leading to inconsistent documentation and missed project deadlines. Critical infrastructure projects were at risk due to inefficient catalogue management processes.",
    },
    solution: {
      title: "The Solution",
      content:
        "We built an AI-powered catalogue automation system that intelligently matches equipment items, auto-attaches relevant catalogues, and paginates documentation according to project requirements. The system leverages natural language processing and machine learning to understand equipment specifications, environmental requirements, and compliance needs. Advanced matching algorithms identify the most relevant catalogues for each project, automatically attach them to project documentation, and organize them in a structured format. The platform integrates seamlessly with existing project management systems, ensuring engineers can access matched catalogues directly within their workflow.",
      features: [
        "AI-powered intelligent catalogue matching based on project requirements",
        "Automatic attachment of relevant catalogues to project documentation",
        "Smart pagination and document organization per project specifications",
        "Real-time synchronization with project management systems",
        "Specification extraction and intelligent filtering",
        "Compliance and certification verification",
      ],
    },
    results: {
      title: "Results & Impact",
      metrics: [
        { value: "90%", label: "Time Saved", description: "on catalogue matching processes" },
        { value: "100%", label: "Documentation Accuracy", description: "achieved through automation" },
        { value: "Hours to Minutes", label: "Processing Time", description: "reduction in catalogue matching" },
        { value: "Zero Errors", label: "Manual Matching", description: "eliminated through automation" },
      ],
      content:
        "The AI-powered catalogue automation system transformed how engineers work with telecom equipment documentation. What previously took hours of manual searching and matching now happens in minutes with automated precision. Engineers can focus on high-value engineering work instead of document management. Project timelines improved significantly, and documentation consistency reached 100% accuracy. The system freed up engineering resources, reduced project delays, and ensured all projects have complete, accurate equipment documentation.",
    },
    techStack: [
      "Node.js",
      "React",
      "AI/ML",
      "Natural Language Processing",
      "Document Automation",
      "Cloud Platform",
      "MongoDB",
      "Azure Cognitive Services",
    ],
  },
  "ev-fleet-management": {
    title: "EV Fleet Management Platform: Unified Charging Operations",
    description:
      "Transforming EV charging operations with unified fleet management and smart energy optimization, achieving 40% reduction in energy costs and real-time fleet visibility across multiple locations.",
    date: "2024-03-10",
    category: "Case Study",
    industry: "Transport",
    colorKey: "cyan",
    challenge: {
      title: "The Challenge",
      content:
        "An EV infrastructure company operating multiple charging stations across different locations faced significant operational challenges. Fleet status, charging schedules, and energy consumption data were scattered across disconnected systems with no unified view. Station managers couldn't monitor real-time charging status, optimize energy consumption, or coordinate fleet operations effectively. Energy costs were unpredictable, and charging schedules were inefficient, leading to operational bottlenecks and increased costs. The lack of centralized visibility made it impossible to make data-driven decisions about fleet operations and energy optimization.",
    },
    solution: {
      title: "The Solution",
      content:
        "We developed a comprehensive EV charging and fleet management platform that unifies all operations under a single dashboard. The platform provides real-time monitoring of all charging stations, fleet status tracking, and intelligent scheduling algorithms. Advanced energy optimization algorithms analyze consumption patterns, peak demand periods, and grid pricing to optimize charging schedules automatically. The system integrates IoT sensors from charging stations, mobile applications for fleet drivers, and cloud infrastructure for centralized data processing. Real-time analytics provide actionable insights into fleet operations, energy consumption, and cost optimization opportunities.",
      features: [
        "Real-time monitoring of charging stations and fleet status",
        "Smart scheduling algorithms for optimal charging times",
        "Energy optimization based on consumption patterns and grid pricing",
        "Unified dashboard for multi-location fleet management",
        "Mobile application for fleet drivers and station managers",
        "Predictive analytics for maintenance and energy planning",
      ],
    },
    results: {
      title: "Results & Impact",
      metrics: [
        { value: "40%", label: "Energy Cost Reduction", description: "through smart optimization" },
        { value: "Real-time", label: "Fleet Visibility", description: "across all locations" },
        { value: "Unified", label: "Operations Dashboard", description: "for complete control" },
        { value: "Optimized", label: "Charging Schedules", description: "reducing operational costs" },
      ],
      content:
        "The unified fleet management platform transformed EV charging operations from fragmented, inefficient processes into a streamlined, data-driven system. Energy costs reduced by 40% through intelligent scheduling and optimization algorithms. Real-time visibility across all locations enabled proactive decision-making and improved operational efficiency. Fleet managers can now monitor charging status, optimize schedules, and reduce costs through data-driven insights. The platform eliminated operational bottlenecks and provided the foundation for scalable fleet expansion.",
    },
    techStack: [
      "Node.js",
      "React",
      "IoT",
      "Real-time Analytics",
      "Mobile Platform",
      "Cloud Infrastructure",
      "MongoDB",
      "Redis",
    ],
  },
  "loyalty-payment-platform": {
    title: "Loyalty Payment Platform: Unified Customer Experience",
    description:
      "Building a unified loyalty and payment experience that drives customer engagement and retention, achieving 35% increase in customer retention and 2x loyalty program engagement.",
    date: "2024-03-05",
    category: "Case Study",
    industry: "Financial Services",
    colorKey: "green",
    challenge: {
      title: "The Challenge",
      content:
        "A delivery services provider struggled with disconnected loyalty programs and payment systems that created friction in the customer experience. Customers had to manage separate accounts for loyalty rewards and payments, leading to low retention rates and missed engagement opportunities. The fragmented experience caused customer frustration, as users couldn't easily track rewards, redeem points, or make seamless payments. Marketing teams lacked visibility into customer behavior across loyalty and payment touchpoints, making it impossible to create personalized offers or optimize engagement strategies. The disconnected systems resulted in low program participation and declining customer loyalty.",
    },
    solution: {
      title: "The Solution",
      content:
        "We created an integrated loyalty and payment application that combines rewards tracking, seamless payments, and personalized offers in a single mobile experience. The platform unifies loyalty points, payment processing, and customer engagement into one cohesive system. Customers can earn rewards, track points, redeem offers, and make payments all within the same application. Advanced analytics provide marketing teams with comprehensive insights into customer behavior, enabling personalized offers and targeted campaigns. The system integrates with payment gateways, loyalty program engines, and customer relationship management tools to deliver a frictionless experience.",
      features: [
        "Unified loyalty rewards and payment processing in one app",
        "Real-time points tracking and redemption",
        "Seamless payment integration with multiple gateways",
        "Personalized offers based on customer behavior and preferences",
        "Comprehensive analytics dashboard for marketing insights",
        "Push notifications for rewards, offers, and payment confirmations",
      ],
    },
    results: {
      title: "Results & Impact",
      metrics: [
        { value: "35%", label: "Customer Retention Increase", description: "through unified experience" },
        { value: "2x", label: "Loyalty Engagement", description: "program participation" },
        { value: "Frictionless", label: "Payment Experience", description: "unified with rewards" },
        { value: "Personalized", label: "Customer Offers", description: "based on behavior analytics" },
      ],
      content:
        "The integrated loyalty and payment platform transformed customer engagement and retention. Customer retention increased by 35% as users enjoyed a seamless, unified experience. Loyalty program engagement doubled as customers could easily track and redeem rewards within the payment flow. The frictionless experience eliminated customer frustration and increased transaction frequency. Marketing teams gained powerful analytics tools to create personalized offers and optimize engagement strategies. The platform created a competitive advantage through superior customer experience.",
    },
    techStack: [
      "Node.js",
      "React",
      "Mobile Development",
      "Payment Gateway Integration",
      "Real-time Analytics",
      "API Integration",
      "MongoDB",
      "Redis",
    ],
  },
  "family-community-platform": {
    title: "Family Community Platform: Connecting Generations Digitally",
    description:
      "Connecting generations through a digital platform that preserves family bonds and enables collective action, connecting 5000+ family members with 100% relationship traceability.",
    date: "2024-02-28",
    category: "Case Study",
    industry: "Community",
    colorKey: "cyan",
    challenge: {
      title: "The Challenge",
      content:
        "A large extended family spanning multiple generations and geographies struggled to maintain connections and coordinate activities. Family members were losing touch with relatives, struggling to trace relationships, and lacking a central platform for sharing news, organizing events, and managing collective initiatives. Important family milestones, events, and news were shared through fragmented channels like WhatsApp groups and email chains, making it difficult to keep everyone informed. Fundraising for family causes, event planning, and relationship discovery were all manual, time-consuming processes. The lack of a unified platform prevented the family from leveraging its collective strength and maintaining strong bonds across distances.",
    },
    solution: {
      title: "The Solution",
      content:
        "We built a comprehensive family community app with relationship mapping, family tree visualization, news feeds, event management, and collective fundraising capabilities. The platform enables family members to discover relationships, visualize family trees, share news and updates, coordinate events, and contribute to family causes. Advanced relationship mapping algorithms trace connections across generations, making it easy to understand family structure. News feeds keep everyone informed about family milestones, achievements, and important announcements. Event management tools enable seamless coordination of family gatherings, celebrations, and reunions. Integrated fundraising features allow families to collectively support causes and initiatives.",
      features: [
        "Interactive family tree visualization with relationship mapping",
        "News feeds and announcements for family updates",
        "Event management and coordination tools",
        "Collective fundraising and donation management",
        "Member profiles with relationship discovery",
        "Photo and document sharing for family memories",
      ],
    },
    results: {
      title: "Results & Impact",
      metrics: [
        { value: "5000+", label: "Family Members Connected", description: "across generations" },
        { value: "100%", label: "Relationship Traceability", description: "through family tree mapping" },
        { value: "Unified", label: "Communication Platform", description: "for all family activities" },
        { value: "Collective", label: "Action Enabled", description: "through fundraising and events" },
      ],
      content:
        "The family community platform transformed how extended families connect and coordinate. Over 5000 family members are now connected through the platform, enabling relationship discovery and maintaining bonds across distances. The family tree visualization provides 100% relationship traceability, making it easy to understand family structure and connections. News feeds and event management tools have streamlined family communication and coordination. Collective fundraising features have enabled families to support causes and initiatives together. The platform has strengthened family bonds and enabled collective action that was previously impossible.",
    },
    techStack: [
      "Node.js",
      "React",
      "Mobile Platform",
      "Graph Database",
      "Real-time Messaging",
      "Cloud Infrastructure",
      "MongoDB",
      "WebSocket",
    ],
  },
  "custom-lms-platform": {
    title: "Custom LMS Platform: Tailored Learning Management",
    description:
      "Creating a tailored learning management system that fits unique business requirements and workflows, achieving 100% workflow customization and 50% improvement in training completion rates.",
    date: "2024-02-22",
    category: "Case Study",
    industry: "Education",
    colorKey: "green",
    challenge: {
      title: "The Challenge",
      content:
        "A European training organization needed a learning management system that could accommodate their unique business processes, certification requirements, and custom training workflows. Generic off-the-shelf LMS platforms failed to meet their specific needs, forcing them to adapt their processes to fit the software rather than having software that fit their processes. Certification tracking, custom assessment workflows, and branded learning paths were impossible to implement with standard solutions. The organization struggled with low training completion rates, inefficient course management, and inability to track certifications according to their specific requirements. Training administrators spent excessive time on manual workarounds and data entry.",
    },
    solution: {
      title: "The Solution",
      content:
        "We designed and built a fully customized learning management system tailored to the organization's specific business needs. The platform features custom workflows that match their exact processes, comprehensive certification tracking aligned with their requirements, and branded learning paths that reflect their organizational identity. The system accommodates unique assessment types, custom grading rubrics, and specialized reporting needs. Advanced course management tools enable administrators to create, organize, and deliver training content exactly as their business processes require. The platform integrates seamlessly with existing systems and provides APIs for future extensibility.",
      features: [
        "Fully customized workflows matching business processes",
        "Comprehensive certification tracking and management",
        "Branded learning paths with organizational identity",
        "Custom assessment types and grading rubrics",
        "Specialized reporting and analytics",
        "API integration for extensibility",
      ],
    },
    results: {
      title: "Results & Impact",
      metrics: [
        { value: "100%", label: "Workflow Customization", description: "matching business processes" },
        { value: "50%", label: "Training Completion Improvement", description: "through tailored experience" },
        { value: "Purpose-Built", label: "Learning Platform", description: "aligned with organizational goals" },
        { value: "Zero Compromises", label: "Business Processes", description: "software adapts to needs" },
      ],
      content:
        "The custom LMS platform delivered a purpose-built learning solution that perfectly aligns with the organization's processes and goals. The platform achieved 100% workflow customization, ensuring that every feature matches their specific business requirements. Training completion rates improved by 50% as learners engaged with a system designed for their needs. Administrators eliminated manual workarounds and gained powerful tools for course management and certification tracking. The platform became a competitive advantage, enabling the organization to deliver training experiences that generic solutions couldn't match.",
    },
    techStack: [
      "Node.js",
      "React",
      "Cloud Platform",
      "Custom Development",
      "API Integration",
      "Analytics Dashboard",
      "MongoDB",
      "Express.js",
    ],
  },
  "counselling-management-system": {
    title: "Counselling Management System: Digital Student Support",
    description:
      "Transforming student counselling with secure digital case management and progress tracking, achieving 80% reduction in admin time and 100% case tracking compliance.",
    date: "2024-02-18",
    category: "Case Study",
    industry: "Healthcare",
    colorKey: "cyan",
    challenge: {
      title: "The Challenge",
      content:
        "An educational institution managing student counselling services struggled with manual, paper-based processes that were inefficient and error-prone. Student counselling cases were tracked through spreadsheets and paper files, making it difficult to track progress, maintain confidentiality, and generate insights. Counselors spent excessive time on administrative tasks instead of supporting students. Critical student cases were at risk of falling through the cracks due to poor tracking and follow-up systems. The lack of digital records made it impossible to analyze trends, identify at-risk students, or measure counseling effectiveness. Confidentiality concerns with paper files and spreadsheets created compliance risks.",
    },
    solution: {
      title: "The Solution",
      content:
        "We developed a secure digital counselling management system with comprehensive case tracking, progress monitoring, appointment scheduling, and confidential record keeping. The platform digitizes the entire counselling workflow from initial intake to case closure. Counselors can track session histories, monitor student progress, schedule appointments, and maintain secure digital records. Advanced case management features enable status tracking, follow-up reminders, and progress notes. The system includes role-based access controls to ensure confidentiality while enabling appropriate staff access. Comprehensive reporting tools provide insights into counseling trends, student needs, and program effectiveness.",
      features: [
        "Secure digital case tracking and progress monitoring",
        "Appointment scheduling and calendar management",
        "Session history and progress notes",
        "Confidential record keeping with role-based access",
        "Follow-up reminders and case status workflows",
        "Comprehensive reporting and analytics",
      ],
    },
    results: {
      title: "Results & Impact",
      metrics: [
        { value: "80%", label: "Admin Time Reduction", description: "through digital automation" },
        { value: "100%", label: "Case Tracking Compliance", description: "with digital records" },
        { value: "Secure", label: "Digital Records", description: "maintaining confidentiality" },
        { value: "Improved", label: "Student Support", description: "through better tracking" },
      ],
      content:
        "The digital counselling management system streamlined counselling operations and improved student support outcomes. Administrative time reduced by 80% as counselors could focus on supporting students instead of managing paperwork. The system achieved 100% case tracking compliance with secure digital records that maintain confidentiality while enabling appropriate access. Counselors gained powerful tools for tracking progress, scheduling follow-ups, and identifying students who need additional support. The platform eliminated the risk of cases falling through the cracks and provided insights into counseling effectiveness and student needs.",
    },
    techStack: [
      "Node.js",
      "React",
      "Secure Cloud Platform",
      "Data Encryption",
      "Workflow Automation",
      "Analytics",
      "MongoDB",
      "Express.js",
    ],
  },
};

// Regular insights (existing)

// Listing metadata: which services and industries each study relates to,
// and whether it appears in listings (duplicates stay reachable by URL only).
const caseStudyMeta = {
  "industrial-ai-document-intelligence": { services: ["ai-engineering", "ai-ml", "data-engineering"], industries: ["manufacturing"], accent: "blue" },
  "multi-tier-loyalty-platform": { services: ["product-engineering", "fintech-engineering", "cloud-engineering"], industries: ["retail-ecommerce"], accent: "orange" },
  "ev-fleet-management": { services: ["product-engineering", "cloud-engineering", "integration-engineering", "data-analytics"], industries: [], accent: "cyan" },
  "educational-counseling-system": { services: ["product-engineering", "enterprise-software"], industries: ["education", "healthcare"], accent: "blue" },
  "loyalty-payment-platform": { services: ["fintech-engineering", "integration-engineering", "product-engineering"], industries: ["finance-banking", "retail-ecommerce"], accent: "orange" },
  "telecom-catalogue-automation": { services: ["ai-engineering", "process-automation", "enterprise-software"], industries: ["manufacturing"], accent: "cyan" },
  "hyperlocal-business-network": { services: ["product-engineering", "fintech-engineering"], industries: [], accent: "blue" },
  "custom-lms-platform": { services: ["enterprise-software", "product-engineering", "design-engineering"], industries: ["education"], accent: "orange" },
  "digital-business-identity-suite": { services: ["product-engineering", "design-engineering"], industries: ["real-estate"], accent: "cyan" },
  "family-connection-platform": { services: ["product-engineering", "design-engineering", "cloud-engineering"], industries: [], accent: "blue" },
  "family-community-platform": { services: ["product-engineering"], industries: [], accent: "orange", listed: false },
  "counselling-management-system": { services: ["product-engineering"], industries: ["healthcare"], accent: "cyan", listed: false },
};

const order = Object.keys(caseStudyMeta);

export const caseStudies = order.map((slug) => ({
  slug,
  ...caseStudyEntries[slug],
  listed: true,
  ...caseStudyMeta[slug],
}));

export const listedCaseStudies = caseStudies.filter((c) => c.listed);

export const featuredCaseStudies = [
  "industrial-ai-document-intelligence",
  "multi-tier-loyalty-platform",
  "ev-fleet-management",
  "educational-counseling-system",
].map((slug) => caseStudies.find((c) => c.slug === slug));

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug);

export const caseStudiesForService = (serviceSlug, limit = 2) =>
  listedCaseStudies.filter((c) => c.services.includes(serviceSlug)).slice(0, limit);

export const caseStudiesForIndustry = (industrySlug, limit = 2) =>
  listedCaseStudies.filter((c) => c.industries.includes(industrySlug)).slice(0, limit);
