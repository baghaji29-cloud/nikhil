import { FullProfile } from '../types/profile';

export const studentSample: FullProfile = {
  personalInfo: {
    fullName: 'Aria Bennett',
    email: 'aria.bennett@cs.university.edu',
    phone: '+1 (555) 234-8901',
    cityState: 'Austin, Texas',
    linkedIn: 'https://linkedin.com/in/ariabennett-tech',
    github: 'https://github.com/ariabennett',
    portfolio: 'https://ariabennett.dev',
    headline: 'Software Engineering Graduate & Cloud Systems Enthusiast',
  },
  professionalSummary: {
    summary:
      'Proactive Computer Science senior with a strong foundation in distributed systems, full-stack web architectures, and algorithmic problem solving. Passionate about building performant, human-centric software solutions.',
    educationalBackground:
      'Pursuing B.Tech in Computer Science & Engineering (Senior Year) with 3.92 CGPA and consistent Dean’s Honor List honors.',
    keySkillsOverview:
      'Core proficiency in TypeScript, React, Node.js, Python, PostgreSQL, and AWS cloud deployment with containerization workflows.',
    careerGoals:
      'Seeking a full-time Software Engineer role to engineer scalable backend microservices, resilient distributed databases, and high-conversion client web apps.',
    coreStrengths:
      'Proven track record of shipping production features, leading collegiate hackathon teams, and translating ambiguous business requirements into testable code.',
  },
  education: {
    collegeName: 'University of Texas at Austin',
    degree: 'Bachelor of Technology (B.Tech)',
    branch: 'Computer Science & Engineering',
    currentYearSem: '4th Year / 8th Semester',
    graduationYear: '2026',
    cgpa: '3.92 / 4.00 (94.2%)',
    class12School: 'Westlake Senior High School',
    class12Board: 'State Board / AP Scholar',
    class12Percentage: '96.4%',
    class12Year: '2022',
    class10School: 'St. Andrews Academy',
    class10Board: 'National Merit Board',
    class10Percentage: '97.8%',
    class10Year: '2020',
  },
  technicalSkills: {
    programmingLanguages: ['TypeScript', 'JavaScript (ES6+)', 'Python', 'Java', 'C++', 'SQL'],
    webDevelopment: ['React 19', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS', 'HTML5 / Semantic Web', 'RESTful APIs', 'WebSockets'],
    databaseManagement: ['PostgreSQL', 'MongoDB', 'Redis Caching', 'Prisma ORM', 'Supabase'],
    devTools: ['Git', 'GitHub Actions CI/CD', 'VS Code', 'Docker', 'Postman', 'Linux / Bash', 'Vite'],
    frameworksLibraries: ['Redux Toolkit', 'Zustand', 'FastAPI', 'PyTorch Basics', 'Lucide Icons'],
    otherTechnicalSkills: ['System Design Basics', 'Microservices Architecture', 'OAuth2 / JWT Security', 'Agile / Scrum', 'Unit Testing (Jest/Vitest)'],
  },
  softSkills: [
    'Communication Skills',
    'Leadership',
    'Teamwork',
    'Problem Solving',
    'Time Management',
    'Critical Thinking',
    'Adaptability',
    'Quick Learning',
    'Creativity',
    'Decision Making',
  ],
  projects: [
    {
      id: 'p1',
      name: 'OmniStream — Real-Time Collaborative Canvas',
      overview: 'High-concurrency collaborative vector whiteboard supporting 50+ simultaneous editors with millisecond delta synchronization.',
      problemSolves: 'Eliminates latency stutter and state merge conflicts during remote multi-designer wireframing sessions.',
      technologies: ['React', 'TypeScript', 'WebSockets', 'Canvas API', 'Redis Pub/Sub', 'Tailwind CSS'],
      keyFeatures: 'Conflict-free replicated data types (CRDT), infinite zoom canvas, multi-cursor presence, instant PNG/SVG vector export, room permission guards.',
      individualRole: 'Architected client-side delta sync engine and implemented spatial quad-tree bounding box collision detection.',
      achievementsResults: 'Benchmarked sub-15ms sync latency across transatlantic test nodes; adopted by 4 university design labs with 2,400+ monthly active sessions.',
      githubUrl: 'https://github.com/ariabennett/omnistream-canvas',
      liveUrl: 'https://omnistream.live',
    },
    {
      id: 'p2',
      name: 'PulseMed — AI Triage & Prescription Analyzer',
      overview: 'HIPAA-compliant patient intake portal that parses clinical prescriptions and surfaces drug-drug contraindication flags.',
      problemSolves: 'Prevents medication interaction oversights in high-volume emergency outpatient clinics.',
      technologies: ['Python', 'FastAPI', 'Gemini AI API', 'PostgreSQL', 'Docker', 'React'],
      keyFeatures: 'OCR handwriting scan, contraindication alerts, severity scoring, FHIR export compliance, clinician audit trail.',
      individualRole: 'Developed FastAPI pipeline with structured JSON schema output and secure end-to-end payload encryption.',
      achievementsResults: 'Won 1st Place at National HealthTech Hackathon ($10,000 grant) evaluated by 5 certified physicians.',
      githubUrl: 'https://github.com/ariabennett/pulsemed-triage',
      liveUrl: 'https://pulsemed.health',
    },
    {
      id: 'p3',
      name: 'AeroQuery — In-Memory Columnar Database Engine',
      overview: 'Lightweight in-memory SQL execution engine written in C++ with SIMD vectorization for ultra-fast time-series filtering.',
      problemSolves: 'Provides single-digit microsecond analytics over streaming sensor metrics without heavy OLAP infrastructure.',
      technologies: ['C++20', 'SIMD Intrinsic', 'CMake', 'Google Benchmark', 'GTest'],
      keyFeatures: 'Custom memory pool allocator, vectorized hash joins, lock-free ring buffer queries, zero-copy CSV parsing.',
      individualRole: 'Sole creator; researched query vectorization papers and implemented vectorized dictionary encoding.',
      achievementsResults: 'Outperformed SQLite by 4.2x in 10-million row aggregate queries with under 12MB RAM footprint.',
      githubUrl: 'https://github.com/ariabennett/aeroquery-core',
      liveUrl: 'https://github.com/ariabennett/aeroquery-core',
    },
  ],
  internships: [
    {
      id: 'int1',
      company: 'Cloudflare',
      position: 'Software Engineering Intern — Edge Platforms',
      duration: '3 Months (Summer 2025)',
      startDate: 'June 2025',
      endDate: 'August 2025',
      responsibilities:
        'Engineered edge worker telemetry routing services handling over 140 million HTTP requests daily across global points of presence.',
      tasksPerformed:
        'Developed streaming parser in TypeScript/Rust, integrated distributed tracing headers, and optimized worker cold-boot caching routines.',
      technologiesUsed: ['TypeScript', 'Cloudflare Workers', 'Rust', 'Kafka', 'Grafana', 'Git'],
      achievementsLearnings:
        'Reduced P99 telemetry ingestion latency by 28% and received written return offer commendation from Staff Engineering leadership.',
    },
    {
      id: 'int2',
      company: 'Stripe',
      position: 'Frontend & API Engineering Intern',
      duration: '3 Months (Fall 2024)',
      startDate: 'September 2024',
      endDate: 'December 2024',
      responsibilities:
        'Collaborated with the merchant dashboard team to modernize invoice dispute workflows and localization across 18 regional currencies.',
      tasksPerformed:
        'Built accessible design system components in React, audited WCAG AA color contrast, and streamlined webhook payload validation.',
      technologiesUsed: ['React', 'TypeScript', 'Jest', 'REST APIs', 'Storybook', 'Figma'],
      achievementsLearnings:
        'Shipped 4 production merchant portal modules decreasing disputed resolution turnaround time by 18 hours per ticket.',
    },
  ],
  workExperience: [
    {
      id: 'work1',
      company: 'University Computer Systems Laboratory',
      jobTitle: 'Head Undergraduate Teaching Assistant — CS 314',
      employmentType: 'Part-time',
      duration: '1 Year 4 Months',
      startDate: 'January 2024',
      endDate: 'Present',
      keyResponsibilities:
        'Conduct weekly lab sessions for 140+ undergraduate students covering Data Structures, Algorithmic Analysis, and Java System Design.',
      majorContributions:
        'Designed automated test autograder using Docker sandboxes, reducing grading turnaround from 7 days to 4 hours.',
      achievementsResults:
        'Awarded Departmental Outstanding TA Award with an average student rating of 4.94 / 5.00 across 3 consecutive semesters.',
    },
  ],
  certifications: [
    {
      id: 'c1',
      name: 'AWS Certified Solutions Architect — Associate (SAA-C03)',
      issuingOrg: 'Amazon Web Services',
      completionDate: 'November 2024',
      skillsLearned: 'VPC design, IAM policies, Multi-region high availability, S3 lifecycle, ECS/EKS container orchestration.',
      verificationLink: 'https://aws.amazon.com/verification/SAA-8392104',
    },
    {
      id: 'c2',
      name: 'Meta Front-End Developer Professional Certificate',
      issuingOrg: 'Meta / Coursera',
      completionDate: 'April 2024',
      skillsLearned: 'Advanced React patterns, State machines, Performance profiling, Automated integration testing.',
      verificationLink: 'https://coursera.org/verify/professional-cert/META-9921',
    },
  ],
  achievements: [
    {
      id: 'ach1',
      title: '1st Place Winner — HackMIT National Collegiate Hackathon',
      category: 'Hackathon',
      organization: 'MIT TechX',
      year: '2024',
      description: 'Selected 1st out of 380+ university teams for building an open-source decentralized disaster relief routing protocol.',
    },
    {
      id: 'ach2',
      title: 'Top 1.5% Global Rank (Knight Title) — LeetCode',
      category: 'Coding Competition',
      organization: 'LeetCode',
      year: '2024',
      description: 'Achieved contest rating of 2,140+ with 700+ problems solved across Dynamic Programming, Graphs, and Segment Trees.',
    },
    {
      id: 'ach3',
      title: 'Grace Hopper Student Scholar & Academic Fellowship',
      category: 'Scholarship',
      organization: 'AnitaB.org',
      year: '2025',
      description: 'Awarded full conference fellowship recognizing academic excellence and contribution to undergraduate STEM mentorship.',
    },
  ],
  extracurriculars: [
    {
      id: 'ext1',
      activityName: 'ACM Student Chapter — Open Source Development Lead',
      category: 'College Club & Society',
      role: 'Director of Engineering',
      description: 'Organized weekend open-source sprints, taught Git fundamentals to 250+ freshmen, and mentored 12 student project repos.',
    },
    {
      id: 'ext2',
      activityName: 'Girls Who Code Campus Chapter',
      category: 'Volunteering',
      role: 'Peer Mentor & Workshop Lead',
      description: 'Volunteered 60+ hours mentoring high school girls in web development and foundational computational thinking.',
    },
  ],
  leadership: [
    {
      id: 'lead1',
      title: 'Lead Organizer & Technical Director — Longhorn Hack 2025',
      organization: 'University Innovation Council',
      duration: '8 Months',
      keyImpact:
        'Directed a 14-person student committee, raised $42,000 in industry sponsorships, and successfully hosted 600 in-person collegiate hackers.',
    },
    {
      id: 'lead2',
      title: 'Undergraduate Curriculum Representative',
      organization: 'Department of Computer Science',
      duration: '1 Year',
      keyImpact:
        'Liaised between 900+ CS students and faculty senate to introduce new modern courses in Cloud Engineering and Generative AI systems.',
    },
  ],
  languages: [
    { id: 'l1', language: 'English', proficiency: 'Native' },
    { id: 'l2', language: 'Spanish', proficiency: 'Professional' },
    { id: 'l3', language: 'Hindi', proficiency: 'Intermediate' },
  ],
  relevantCoursework: [
    'Data Structures and Algorithms',
    'Database Management Systems',
    'Operating Systems',
    'Computer Networks',
    'Object-Oriented Programming',
    'Software Engineering',
    'Artificial Intelligence',
    'Machine Learning',
    'Web Development',
    'Distributed Systems',
    'Computer Architecture',
    'Information Security',
  ],
  additionalInfo: {
    technicalInterests: [
      'High-Performance Distributed Systems',
      'Fault-Tolerant Consensus Protocols (Raft/Paxos)',
      'Vector Search & RAG Architecture',
      'WebAssembly & Rust Runtime Optimization',
    ],
    openSourceContributions:
      'Active contributor to Turborepo and Vite ecosystem; authored npm package "react-glass-spring" with 18,000+ weekly downloads.',
    researchWork:
      'Co-authored research paper on "Adaptive Cache Eviction in Distributed Edge Nodes" accepted at IEEE Undergraduate Systems Workshop 2025.',
    relevantHobbies: ['Competitive Chess (USCF 1720)', 'Long-Distance Marathon Running', 'Analog Synthesizer Design'],
    professionalInterests: [
      'Cloud Infrastructure Optimization',
      'Developer Tooling & Developer Experience (DevEx)',
      'Open Source Tool Sustainability',
    ],
  },
};

export const professionalSample: FullProfile = {
  personalInfo: {
    fullName: 'Marcus Vance',
    email: 'marcus.vance@techlead.io',
    phone: '+1 (415) 890-4521',
    cityState: 'San Francisco, CA',
    linkedIn: 'https://linkedin.com/in/marcus-vance',
    github: 'https://github.com/marcusvance',
    portfolio: 'https://marcusvance.tech',
    headline: 'Senior Staff Software Engineer & Cloud Architect',
  },
  professionalSummary: {
    summary:
      'Results-driven Senior Software Engineer with 6+ years of expertise designing distributed microservices, multi-region cloud infrastructures, and high-throughput real-time APIs. Adept at leading cross-functional squads to ship mission-critical applications.',
    educationalBackground:
      'B.S. in Computer Science from University of California, Berkeley (Graduated Magna Cum Laude, 3.88 GPA).',
    keySkillsOverview:
      'System Architecture, Go, TypeScript/Node.js, React, Kubernetes, Kafka, PostgreSQL, Terraform, and AWS Cloud Native Ecosystem.',
    careerGoals:
      'Targeting Principal / Staff Architect roles to scale developer platforms, streamline multi-tenant SaaS reliability, and mentor high-velocity engineering teams.',
    coreStrengths:
      'Bridging complex software architecture with commercial business outcomes; proven experience reducing infra cloud spend by 35% while maintaining 99.99% uptime.',
  },
  education: {
    collegeName: 'University of California, Berkeley',
    degree: 'Bachelor of Science (B.S.)',
    branch: 'Electrical Engineering & Computer Sciences (EECS)',
    currentYearSem: 'Graduated Magna Cum Laude',
    graduationYear: '2020',
    cgpa: '3.88 / 4.00',
    class12School: 'Mission San Jose High School',
    class12Board: 'California High School Regents',
    class12Percentage: '98.2%',
    class12Year: '2016',
    class10School: 'Fremont Junior Academy',
    class10Board: 'California State Board',
    class10Percentage: '97.5%',
    class10Year: '2014',
  },
  technicalSkills: {
    programmingLanguages: ['Go (Golang)', 'TypeScript', 'Python', 'Java', 'Rust', 'SQL / PLpgSQL'],
    webDevelopment: ['React', 'Next.js', 'Node.js', 'GraphQL Apollo', 'gRPC / Protocol Buffers', 'Tailwind CSS', 'WebRTC'],
    databaseManagement: ['PostgreSQL (TimescaleDB)', 'Redis Cluster', 'Cassandra', 'Snowflake', 'Elasticsearch'],
    devTools: ['Kubernetes (K8s)', 'Docker', 'Terraform (IaC)', 'GitHub Actions', 'Datadog', 'Prometheus', 'Helm'],
    frameworksLibraries: ['Express', 'Gin Web Framework', 'FastAPI', 'Apache Kafka', 'Zustand', 'OpenTelemetry'],
    otherTechnicalSkills: ['Event-Driven Architecture', 'Chaos Engineering', 'Zero-Downtime Migration', 'SOC-2 Compliance', 'Capacity Planning'],
  },
  softSkills: [
    'Leadership',
    'Strategic Thinking',
    'Communication Skills',
    'Problem Solving',
    'Teamwork',
    'Decision Making',
    'Critical Thinking',
    'Time Management',
    'Adaptability',
    'Mentorship',
  ],
  projects: [
    {
      id: 'p_prof_1',
      name: 'ChronosFlow — Distributed Workflow Orchestrator',
      overview: 'Open-source distributed durable execution engine capable of processing 100,000 scheduled task events per second.',
      problemSolves: 'Provides resilient step-function executions across disparate microservices without state loss during pod restarts.',
      technologies: ['Go', 'gRPC', 'PostgreSQL', 'Redis', 'Docker', 'React Admin Console'],
      keyFeatures: 'Durable execution, automatic exponential retry jitter, DAG visualizer, idempotent step recording, tenant rate-limiting.',
      individualRole: 'Creator & Lead Maintainer; designed state machine commit loop and Raft metadata log storage.',
      achievementsResults: 'Over 3,400 GitHub stars, deployed in production across 8 mid-sized fintech startups processing $14M in recurring invoices.',
      githubUrl: 'https://github.com/marcusvance/chronosflow',
      liveUrl: 'https://chronosflow.dev',
    },
    {
      id: 'p_prof_2',
      name: 'Vanguard — Zero-Trust Cloud Access Gateway',
      overview: 'High-performance reverse proxy enforcing identity-aware access control and device posture validation.',
      problemSolves: 'Replaced legacy VPN bottlenecks with instant browser-based bastion connectivity for 1,200 remote engineers.',
      technologies: ['Rust', 'eBPF', 'OAuth2 OIDC', 'Envoy Proxy', 'TypeScript'],
      keyFeatures: 'Single Sign-On (Okta/Google), real-time session revocation, packet level auditing, mutual TLS (mTLS).',
      individualRole: 'Lead Security Architect; authored eBPF packet inspection hooks and client dashboard interface.',
      achievementsResults: 'Eliminated external unauthorized probe breaches and reduced internal connection setup latency from 4.2s to 180ms.',
      githubUrl: 'https://github.com/marcusvance/vanguard-gateway',
      liveUrl: 'https://vanguard.network',
    },
  ],
  internships: [
    {
      id: 'int_prof_1',
      company: 'Uber Technologies',
      position: 'Systems & Infrastructure Engineering Intern',
      duration: '4 Months (Summer 2019)',
      startDate: 'May 2019',
      endDate: 'August 2019',
      responsibilities:
        'Worked on the core driver dispatch matching routing engine handling geospatial geospatial hexagonal H3 binning.',
      tasksPerformed:
        'Refactored dispatch caching pipelines in Go and improved dynamic surge pricing event listeners.',
      technologiesUsed: ['Go', 'Apache Kafka', 'H3 Spatial Index', 'Docker', 'Linux'],
      achievementsLearnings:
        'Reduced surge recalculation latency by 22% during peak ride-hail rush hours across Greater Chicago metro.',
    },
  ],
  workExperience: [
    {
      id: 'work_prof_1',
      company: 'Northwave Labs (Fintech Series B)',
      jobTitle: 'Senior Staff Software Engineer — Platform & Core Data',
      employmentType: 'Full-time',
      duration: '2 Years 8 Months',
      startDate: 'March 2023',
      endDate: 'Present',
      keyResponsibilities:
        'Lead a squad of 8 senior and staff engineers architecting ledger settlement pipelines processing $850M+ in annualized transactions.',
      majorContributions:
        'Spearheaded transition from monolith to event-driven microservices architecture utilizing Apache Kafka and transactional outbox patterns.',
      achievementsResults:
        'Achieved 99.995% service uptime, lowered AWS annual cloud expenditure by $320,000, and slashed P95 API response times from 340ms to 48ms.',
    },
    {
      id: 'work_prof_2',
      company: 'Datadrive Corporation',
      jobTitle: 'Senior Software Engineer — Distributed Systems',
      employmentType: 'Full-time',
      duration: '2 Years 9 Months',
      startDate: 'June 2020',
      endDate: 'February 2023',
      keyResponsibilities:
        'Built real-time metric ingestion pipelines and time-series clustering engines for multi-cloud enterprise clients.',
      majorContributions:
        'Authored custom Raft consensus state machine in Go and automated multi-region failover tests.',
      achievementsResults:
        'Promoted to Senior Engineer in 18 months; authored 6 core engineering RFCs that became company-wide platform standards.',
    },
  ],
  certifications: [
    {
      id: 'c_prof_1',
      name: 'CKA: Certified Kubernetes Administrator',
      issuingOrg: 'Cloud Native Computing Foundation (CNCF)',
      completionDate: 'March 2023',
      skillsLearned: 'Cluster architecture, RBAC, CNI networking, storage orchestration, disaster recovery.',
      verificationLink: 'https://cncf.io/verify/CKA-992144',
    },
    {
      id: 'c_prof_2',
      name: 'Google Cloud Professional Cloud Architect',
      issuingOrg: 'Google Cloud',
      completionDate: 'July 2022',
      skillsLearned: 'Enterprise cloud migration, VPC peering, BigQuery pipelines, high-availability architecture.',
      verificationLink: 'https://google.accredited.com/verify/PCA-7740',
    },
  ],
  achievements: [
    {
      id: 'ach_prof_1',
      title: 'Company Engineering Excellence Award',
      category: 'Recognition',
      organization: 'Northwave Labs',
      year: '2024',
      description: 'Recognized for leading the zero-downtime database migration of 40TB financial ledger records with zero customer disruption.',
    },
    {
      id: 'ach_prof_2',
      title: 'Keynote Speaker — GopherCon Global 2023',
      category: 'Technical',
      organization: 'GopherCon',
      year: '2023',
      description: 'Delivered technical keynote on "High-Concurrency Lockless Caching in Go Microservices" to 2,000+ engineers.',
    },
  ],
  extracurriculars: [
    {
      id: 'ext_prof_1',
      activityName: 'SF Open Source Engineering Circle',
      category: 'Technical Community',
      role: 'Co-Founder & Monthly Host',
      description: 'Host monthly deep-dive tech talks in downtown San Francisco featuring distributed systems and database authors.',
    },
    {
      id: 'ext_prof_2',
      activityName: 'CodeInTheCommunity Youth Mentorship',
      category: 'Volunteering',
      role: 'Volunteer Instructor',
      description: 'Volunteer bi-weekly teaching Python and algorithmic thinking to underrepresented high school students.',
    },
  ],
  leadership: [
    {
      id: 'lead_prof_1',
      title: 'Technical Lead & Architectural Review Board Member',
      organization: 'Northwave Labs Engineering',
      duration: '2 Years',
      keyImpact:
        'Established engineering hiring bar, interviewed 120+ candidates, and authored the 2024-2026 corporate technology roadmap.',
    },
    {
      id: 'lead_prof_2',
      title: 'Senior Engineering Mentor',
      organization: 'Plato Mentorship Network',
      duration: '3 Years',
      keyImpact:
        'Mentored 18 early-stage tech leads on engineering strategy, team psychological safety, and 1-on-1 career progression frameworks.',
    },
  ],
  languages: [
    { id: 'lp1', language: 'English', proficiency: 'Native' },
    { id: 'lp2', language: 'French', proficiency: 'Fluent' },
    { id: 'lp3', language: 'German', proficiency: 'Intermediate' },
  ],
  relevantCoursework: [
    'Operating Systems & System Programming',
    'Advanced Computer Networks',
    'Distributed Systems',
    'Database Management Systems',
    'Computer Architecture',
    'Cryptography & Security',
    'Algorithms & Complexity Theory',
  ],
  additionalInfo: {
    technicalInterests: [
      'Kernel Bypass Networking & eBPF',
      'Distributed Transaction Protocols (Two-Phase Commit, Saga)',
      'Deterministic Simulation Testing (Jepsen)',
      'Green Computing & Cloud Power Efficiency',
    ],
    openSourceContributions:
      'Author of ChronosFlow and Vanguard; contributed upstream patches to Envoy Proxy and Golang runtime garbage collection.',
    researchWork:
      'Undergraduate research published in UC Berkeley EECS Tech Report: "Formal Verification of Distributed Locking in Partitioned Networks".',
    relevantHobbies: ['Mountain Biking', 'Specialty Espresso Roasting', 'Mechanical Keyboard Fabrication'],
    professionalInterests: [
      'Resilient Platform Engineering',
      'Fintech Settlement Engines',
      'Engineering Culture & Scaled Architecture',
    ],
  },
};

export const emptyProfile: FullProfile = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    cityState: '',
    linkedIn: '',
    github: '',
    portfolio: '',
    headline: '',
  },
  professionalSummary: {
    summary: '',
    educationalBackground: '',
    keySkillsOverview: '',
    careerGoals: '',
    coreStrengths: '',
  },
  education: {
    collegeName: '',
    degree: '',
    branch: '',
    currentYearSem: '',
    graduationYear: '',
    cgpa: '',
    class12School: '',
    class12Board: '',
    class12Percentage: '',
    class12Year: '',
    class10School: '',
    class10Board: '',
    class10Percentage: '',
    class10Year: '',
  },
  technicalSkills: {
    programmingLanguages: [],
    webDevelopment: [],
    databaseManagement: [],
    devTools: [],
    frameworksLibraries: [],
    otherTechnicalSkills: [],
  },
  softSkills: [
    'Communication Skills',
    'Leadership',
    'Teamwork',
    'Problem Solving',
    'Time Management',
    'Critical Thinking',
    'Adaptability',
    'Quick Learning',
    'Creativity',
    'Decision Making',
  ],
  projects: [],
  internships: [],
  workExperience: [],
  certifications: [],
  achievements: [],
  extracurriculars: [],
  leadership: [],
  languages: [
    { id: 'l1', language: 'English', proficiency: 'Fluent' },
  ],
  relevantCoursework: [],
  additionalInfo: {
    technicalInterests: [],
    openSourceContributions: '',
    researchWork: '',
    relevantHobbies: [],
    professionalInterests: [],
  },
};
