import type { Experience } from "@/types/experience";

export const experiences: readonly Experience[] = [
  {
    organization: "National Institute of Technology Calicut",
    organizationDetail: "Research intern · Department of Electronics and Communication Engineering",
    location: "Kozhikode, Kerala",
    role: "Research Intern",
    period: "Feb 2026 – Aug 2026",
    responsibilities: [
      "Designed CMSF-Net, a causal Mamba network for GPS, IMU, and wheel-odometry sensor fusion in vehicle localization.",
      "Achieved 31.5% lower RMSE than a KalmanNet baseline on the NCLT benchmark through twelve-fold cross-validation.",
      "Built a Mamba-based radar tracker in PyTorch and extended it to cluttered multi-target scenes with GNN data association.",
    ],
  },
  {
    organization: "DSACS",
    organizationDetail: "Digital Solution and Consultancy Service, Mahatma Gandhi University",
    location: "Kottayam, Kerala",
    role: "Software / Web Development Intern",
    period: "Jun 2025 – Present",
    responsibilities: [
      "Developed and deployed web modules for university digital platforms.",
      "Contributed to a library management system and the DSACS website.",
      "Supported backend integration and web application functionality.",
      "Worked with modern web technologies and development workflows.",
    ],
  },
  {
    organization: "Riss Technologies",
    organizationDetail: "Web application development",
    location: "Kozhikode, Kerala",
    role: "Web Development Intern",
    period: "Nov 2023 – Mar 2024",
    responsibilities: [
      "Developed and maintained PHP-based web modules for client applications.",
      "Coordinated frontend and backend integration for reliable application workflows.",
    ],
  },
];
