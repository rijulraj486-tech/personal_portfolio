import type { ResearchProject } from "@/types/research-project";

export const researchProjects: readonly ResearchProject[] = [
  {
    title: "CMSF-Net: Causal Mamba Sensor Fusion for Robust Vehicle Localization",
    description: "A causal Mamba network for vehicle localization that fuses GPS, IMU, and wheel-odometry streams. It achieved 31.5% lower RMSE than a KalmanNet baseline on the NCLT benchmark and is under review at the IEEE ISIF Sensor Data Fusion Symposium 2026.",
    topics: ["Python", "PyTorch", "Mamba / State Space Models", "Sensor Fusion", "GPS", "IMU", "Wheel Odometry", "Deep Learning"],
  },
  {
    title: "Radar-Based Multi-Target Tracking Using Deep State-Space Models",
    description: "A PyTorch Mamba-based tracker with learned residual correction for radar tracking. The work compares against EKF and KalmanNet baselines, then extends to cluttered multi-target scenes using Hungarian-algorithm data association and GOSPA evaluation.",
    topics: ["Python", "PyTorch", "Mamba / State Space Models", "Radar Tracking", "Deep Learning", "Multi-Target Tracking"],
  },
];
