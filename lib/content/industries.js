// Industry content. Each entry renders at /industries/[slug].

export const industries = [
  {
    slug: "healthcare",
    title: "Healthcare",
    summary: "Patient management, telemedicine and healthcare data.",
    lede: "Software for clinics, hospitals and care providers, built for compliance and for the staff who use it every day.",
    image: null,
    capabilities: [
      { title: "Telemedicine platforms", description: "Secure video consultations and remote patient monitoring." },
      { title: "Clinical decision support", description: "Models that help flag risk and prioritize cases." },
      { title: "EHR integration", description: "Connect electronic health records into one patient view." },
      { title: "Healthcare analytics", description: "Insight into operations, capacity and outcomes." },
    ],
    outcomes: [
      { title: "Better patient care", description: "Staff spend more time with patients and less on paperwork." },
      { title: "Smoother operations", description: "Scheduling, beds and resources managed in one place." },
      { title: "Regulatory compliance", description: "Designed for HIPAA, GDPR and local health regulations." },
      { title: "Lower administrative cost", description: "Fewer manual steps in everyday processes." },
    ],
    useCases: [
      { title: "Remote monitoring", description: "Connected devices that track patient vitals between visits." },
      { title: "Hospital operations", description: "Bed management and staff scheduling from one system." },
    ],
  },
  {
    slug: "finance-banking",
    title: "Finance & Banking",
    summary: "Payments, loyalty, fraud detection and digital banking.",
    lede: "Secure, compliant systems for banks, payment providers and fintech companies.",
    image: "/images/photos/tablet-trading.jpg",
    capabilities: [
      { title: "Digital banking", description: "Customer-facing banking apps and back-office systems." },
      { title: "Fraud detection", description: "Real-time transaction monitoring and risk scoring." },
      { title: "Trading systems", description: "Market data, order management and execution." },
      { title: "Risk analytics", description: "Credit, market and operational risk reporting." },
      { title: "Distributed ledgers", description: "Blockchain where it solves a real reconciliation problem." },
      { title: "Regulatory reporting", description: "Automated, auditable submissions." },
    ],
    outcomes: [
      { title: "Stronger security", description: "Layered protection against fraud and cyber threats." },
      { title: "Better customer experience", description: "Consistent service across every channel." },
      { title: "Faster decisions", description: "Live data for lending and investment." },
      { title: "Simpler compliance", description: "Automated checks and reporting." },
    ],
    useCases: [
      { title: "Fraud prevention", description: "Monitor transactions and block suspicious activity as it happens." },
      { title: "Automated advice", description: "Investment suggestions based on risk profile and goals." },
    ],
  },
  {
    slug: "retail-ecommerce",
    title: "Retail & E-commerce",
    summary: "Commerce platforms, loyalty and inventory.",
    lede: "Commerce, loyalty and inventory systems that keep stores, warehouses and online channels in step.",
    image: null,
    capabilities: [
      { title: "E-commerce platforms", description: "Storefronts built to convert and to scale for peak seasons." },
      { title: "Personalization", description: "Recommendations based on behavior and purchase history." },
      { title: "Inventory management", description: "Stock visibility across stores and warehouses." },
      { title: "Omnichannel POS", description: "One view of the customer online and in store." },
      { title: "Supply chain visibility", description: "Track orders from supplier to shelf." },
      { title: "Loyalty programs", description: "Points, tiers and rewards that bring customers back." },
    ],
    outcomes: [
      { title: "Higher conversion", description: "Relevant recommendations raise order value." },
      { title: "Leaner inventory", description: "Fewer stockouts and less overstock." },
      { title: "Repeat customers", description: "Consistent experience across channels." },
      { title: "Faster response", description: "React to demand and trends sooner." },
    ],
    useCases: [
      { title: "Loyalty at scale", description: "Multi-tier rewards handling tens of thousands of daily transactions." },
      { title: "Warehouse automation", description: "Systems that speed up picking and fulfilment." },
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    summary: "IoT, predictive maintenance and document automation.",
    lede: "Connected operations, predictive maintenance and automated documentation for industrial teams.",
    image: "/images/photos/factory-floor.jpg",
    capabilities: [
      { title: "Industrial IoT", description: "Collect and use data from machines and sensors." },
      { title: "Predictive maintenance", description: "Schedule maintenance before equipment fails." },
      { title: "Digital twins", description: "Virtual models of lines and plants for testing changes." },
      { title: "Supply chain automation", description: "Procurement and logistics with fewer manual steps." },
      { title: "Quality inspection", description: "Computer vision for consistent product checks." },
      { title: "Smart factory", description: "Production data connected across the plant." },
    ],
    outcomes: [
      { title: "Less downtime", description: "Failures predicted and prevented." },
      { title: "Consistent quality", description: "Automated inspection on every unit." },
      { title: "Higher throughput", description: "Better use of lines and resources." },
      { title: "Resilient supply chain", description: "Live visibility and faster adjustment." },
    ],
    useCases: [
      { title: "Technical document search", description: "AI search across thousands of equipment specifications." },
      { title: "Line simulation", description: "Test production changes on a digital twin first." },
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    summary: "Property management, tenant apps and analytics.",
    lede: "Property management, tenant experience and analytics tools for developers, owners and operators.",
    image: null,
    capabilities: [
      { title: "Smart building management", description: "Energy, access and maintenance in one system." },
      { title: "Virtual tours", description: "3D and AR viewings for remote buyers and tenants." },
      { title: "Property management", description: "Leases, payments and maintenance requests." },
      { title: "Real estate analytics", description: "Market, occupancy and portfolio reporting." },
      { title: "Tenant apps", description: "Service requests, amenities and communication." },
      { title: "Automated valuation", description: "Valuation models based on market data." },
    ],
    outcomes: [
      { title: "Efficient operations", description: "Routine property tasks automated." },
      { title: "Happier tenants", description: "Faster responses and better communication." },
      { title: "Better valuations", description: "Decisions grounded in market data." },
      { title: "Lower energy use", description: "Smarter building systems." },
    ],
    useCases: [
      { title: "Access control", description: "Keyless entry and visitor management." },
      { title: "Remote viewings", description: "Immersive tours for overseas buyers." },
    ],
  },
  {
    slug: "education",
    title: "Education",
    summary: "Learning platforms, student support and administration.",
    lede: "Learning platforms and student support systems for schools, universities and training providers.",
    image: null,
    capabilities: [
      { title: "Learning management systems", description: "Custom LMS platforms that match your programs." },
      { title: "Student analytics", description: "Track progress and spot students who need support." },
      { title: "Virtual classrooms", description: "Live and recorded teaching online." },
      { title: "Education apps", description: "Mobile tools for students, parents and staff." },
      { title: "Digital assessment", description: "Online exams, grading and feedback." },
      { title: "Campus management", description: "Admissions, timetables and records." },
    ],
    outcomes: [
      { title: "Personalized learning", description: "Paths that adapt to each student." },
      { title: "More engagement", description: "Interactive content and timely feedback." },
      { title: "Less admin", description: "Enrolment, grading and records streamlined." },
      { title: "Clear insight", description: "Performance data for teachers and leaders." },
    ],
    useCases: [
      { title: "Student counseling", description: "Case management for 1,000+ students with secure records." },
      { title: "Online proctoring", description: "Secure, scalable remote examinations." },
    ],
  },
];

export const getIndustry = (slug) => industries.find((i) => i.slug === slug);

