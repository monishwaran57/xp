export const personalInfo = {
  name: "MONISHWARAN C",
  email: "monishwaran41046@gmail.com",
  phone: "+91 7868049170",
  location: "Chennai, Tamil Nadu",
  linkedin: {
    url: "https://linkedin.com/in/mongineer",
    display: "linkedin.com/in/mongineer"
  },
  github: {
    url: "https://github.com/monishwaran57",
    display: "github.com/monishwaran57"
  }
};

export const experiences = [
  {
    company: "Bapon IT Services - Software Engineer",
    duration: "July 2025 - Present",
    projects: [
      {
        title: "SkillfulSense - Web Assessment Platform",
        description: "Led the development of a comprehensive web assessment platform (live at skillfulsense.com) offering topic-based assessments, AI-powered interviews, and personalized learning pathways with integrated certification.",
        achievements: [
          "Architected and developed 40+ RESTful API endpoints using FastAPI with decoupled microservices architecture",
          "Integrated dual payment gateways (Razorpay for India, Stripe for global markets) for seamless transactions",
          "Implemented AI-powered assessment generation using DeepSeek-Chat for MCQ and coding challenges",
          "Built real-time AI interview system with Agora meeting channels, GPT-4o, and AWS Polly for voice synthesis",
          "Developed intelligent voice assistant using GPT-4o-mini-realtime-preview accepting audio tokens directly for faster responses",
          "Created post-session helpful links feature powered by GPT-4.1 with web search capabilities",
          "Deployed backend across 6 Lambda functions following decoupled architecture; voice agent on EC2 with auto-scaling",
          "Integrated Google Custom Search API and YouTube Data API for curated free course recommendations",
          "Calculated infrastructure costs and determined minimum user threshold for cost recovery",
          "Managed AWS Cognito for user authentication and SES for email notifications"
        ],
        techStack: ["Python FastAPI", "MongoDB", "AWS Lambda", "EC2", "GPT-4o", "Agora", "Razorpay", "Stripe"]
      }
    ]
  },
  {
    company: "Bapon IT Services - Backend Developer Intern",
    duration: "December 2024 - June 2025",
    projects: [
      {
        title: "Hyr-Sense - AI Interview Platform",
        description: "Enhanced existing AI-powered interview platform with cloud recording capabilities and real-time processing features.",
        achievements: [
          "Implemented cloud recording functionality using Agora's API, storing interview sessions on AWS S3",
          "Developed automated recording triggers integrated with start/end interview endpoints",
          "Configured secure AWS credentials management for cloud storage operations"
        ],
        techStack: ["Python FastAPI", "MongoDB", "Agora SDK", "AWS S3", "React"]
      },
      {
        title: "SenseScript - Meeting Transcription & Summarization",
        description: "Built serverless backend for meeting audio processing application enabling transcription and intelligent summarization.",
        achievements: [
          "Designed complete RESTful API architecture using FastAPI",
          "Integrated AWS Transcribe for accurate audio-to-text conversion",
          "Implemented GPT-4o for generating concise meeting summaries",
          "Deployed serverless backend on AWS Lambda with API Gateway",
          "Configured AWS Cognito for secure user pool management"
        ],
        techStack: ["FastAPI", "AWS Lambda", "AWS Transcribe", "GPT-4o", "Cognito", "MongoDB"]
      },
      {
        title: "HRSuite - Timesheet Management Portal",
        description: "Developed comprehensive HR management system replacing Zoho People with custom-built solution for organizational needs.",
        achievements: [
          "Engineered 90+ API endpoints handling timesheets, leave management, attendance, documents, projects, and jobs",
          "Implemented role-based access control (RBAC) for secure multi-level permissions",
          "Utilized PostgreSQL with SQLAlchemy ORM for optimized database operations",
          "Configured AWS Cognito SSO integration with Azure Directory for seamless authentication",
          "Set up AWS SES for automated email notifications and alerts"
        ],
        techStack: ["FastAPI", "PostgreSQL", "SQLAlchemy", "AWS SES", "Cognito", "Azure AD"]
      }
    ]
  }
];

export const personalProjects = [
  {
    title: "Pipe Diameter Optimizer (opti.mklabs.work)",
    description: "Developed web application automating water distribution pipeline diameter optimization, reducing manual iteration time by 80%.",
    achievements: [
      "Built optimization algorithm considering velocity constraints, residual head requirements, and endpoint specifications",
      "Created FastAPI endpoints for sample template download and optimization processing",
      "Implemented Excel file manipulation using Pandas for input/output handling",
      "Deployed backend on AWS Lambda with S3-hosted frontend",
      "Configured Route 53 for custom domain DNS management"
    ],
    techStack: ["Python", "Pandas", "FastAPI", "AWS Lambda", "S3", "Route 53"]
  }
];

export const education = [
  {
    degree: "Bachelor of Engineering in Mechanical Engineering",
    institution: "A.C.G.C.E.T, Karaikudi",
    duration: "2019 - 2023",
    grade: "CGPA: 8.1/10"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "SVS Matriculation Higher Secondary School, Muthupet",
    duration: "2018 - 2019",
    grade: "Percentage: 85%"
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "SVS Matriculation Higher Secondary School, Muthupet",
    duration: "2016 - 2017",
    grade: "Percentage: 97%"
  }
];

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    score: "96.2%"
  }
];

export const technicalSkills = [
  "Python",
  "FastAPI",
  "MongoDB",
  "PostgreSQL",
  "SQLAlchemy",
  "AWS (Lambda, EC2, S3, SES, Cognito, Transcribe, Polly)",
  "GPT-4o",
  "DeepSeek",
  "OpenAI Whisper",
  "Agora SDK",
  "React",
  "Razorpay",
  "Stripe",
  "Git/GitHub",
  "Pandas",
  "RESTful APIs",
  "Microservices",
  "Serverless Architecture"
];