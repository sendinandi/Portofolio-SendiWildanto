import sipda from "@/assets/project-sipda.jpg";
import monitoring from "@/assets/project-monitoring.jpg";
import employment from "@/assets/project-employment.jpg";
import eda from "@/assets/project-eda.jpg";
import sentiment from "@/assets/project-sentiment.jpg";
import recyclebud from "@/assets/project-recyclebud.jpg";

export const CV_URL = "/Sendi-Wildanto-CV.pdf";
export const PHOTO_URL = "/sendi-photo.jpg";
export const LINKEDIN_URL = "https://www.linkedin.com/in/sendiwildanto";
export const GITHUB_URL = "https://github.com/sendiwildanto";
export const EMAIL = "sendiwildanto@gmail.com";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export const education = {
  school: "Universitas Pembangunan Nasional \u201cVeteran\u201d Jakarta",
  degree: "Bachelor of Information Systems",
  period: "Aug 2022 \u2013 Aug 2026",
  gpa: "GPA 3.86 / 4.00",
};

export const organizations = [
  {
    name: "KSM Cyber Security",
    role: "Head of Academic Division",
    period: "Feb 2024 \u2013 Jan 2025",
    description:
      "Coordinated academic programs and learning activities, managed academic division initiatives, and supported cybersecurity learning activities within the organization.",
  },
];

export const projects = [
  {
    title: "SIPDA Analytics Platform",
    category: "Data Analytics / Machine Learning / Web Application",
    description:
      "Developed a web-based analytics platform integrating statistical analysis, forecasting, anomaly detection, and AI-powered recommendations to support data-driven decision making.",
    tech: ["Python", "Streamlit", "MySQL", "Scikit-learn", "Machine Learning"],
    image: sipda,
    featured: true,
  },
  {
    title: "Government Activity Realization Monitoring System",
    category: "System Analysis / Business Intelligence",
    description:
      "Designed and developed a web-based monitoring information system for government activity realization, integrating requirements analysis, database design, validation workflows, and interactive dashboards.",
    tech: ["System Analysis", "UML", "MySQL", "Dashboard", "Web Development"],
    image: monitoring,
    featured: true,
  },
  {
    title: "Employment Placement Analytics Dashboard",
    category: "Data Analytics / Data Visualization",
    description:
      "Developed an interactive Tableau dashboard using Kota Bekasi Open Data to analyze employment placement and workforce distribution trends.",
    tech: ["Tableau", "Excel", "Data Visualization", "Analytics", "Open Data"],
    image: employment,
    featured: true,
  },
  {
    title: "Exploratory Data Analysis of Malnutrition",
    category: "Data Analytics / EDA",
    description:
      "Performed data cleaning, exploratory analysis, and visualization on global malnutrition datasets to identify trends, correlations, and distributions.",
    tech: ["Python", "Pandas", "Matplotlib", "Data Analysis", "Visualization"],
    image: eda,
    featured: false,
  },
  {
    title: "Social Media Sentiment Analysis",
    category: "NLP / Data Analytics",
    description:
      "Implemented VADER-based sentiment analysis to classify public opinions from social media data and identify sentiment patterns.",
    tech: ["Python", "VADER", "NLP", "Data Analysis", "Text Analytics"],
    image: sentiment,
    featured: false,
  },
  {
    title: "RecycleBud Innovation Project",
    category: "AI / Computer Vision / Innovation",
    description:
      "Developed a sustainability-focused innovation concept using AI and computer vision to identify recyclable materials and support waste management.",
    tech: ["Python", "AI", "Computer Vision", "Hugging Face", "Sustainability"],
    image: recyclebud,
    featured: false,
  },
];

export const experiences = [
  {
    role: "Internal Control Officer Intern",
    company: "Bank Indonesia",
    period: "Aug 2025 – Feb 2026",
    points: [
      "Built business intelligence dashboards in Microsoft Power BI to support internal control monitoring and reporting.",
      "Developed internal workflow tools with Power Apps and SharePoint to streamline data collection and validation.",
      "Supported business process improvement through structured reporting and documentation.",
    ],
    tags: ["Business Intelligence", "Power BI", "Power Apps", "SharePoint", "Reporting"],
  },
  {
    role: "Data Analyst Intern",
    company: "Diskominfostandi Kota Bekasi",
    period: "Mar 2025 – Jul 2025",
    points: [
      "Analyzed government datasets with SQL and Python to surface trends supporting regional decision making.",
      "Built interactive dashboards in Power BI, Tableau, and Streamlit for monitoring and public reporting.",
      "Translated stakeholder needs into requirements for data products and monitoring systems.",
    ],
    tags: ["Data Analysis", "Power BI", "Tableau", "Streamlit", "SQL / Python", "Government Data"],
  },
];

export const skillGroups = [
  {
    title: "Data Analytics",
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "Excel",
      "Data Cleaning",
      "EDA",
      "Statistical Analysis",
    ],
  },
  {
    title: "Business Intelligence",
    items: [
      "Power BI",
      "Tableau",
      "Streamlit",
      "Dashboard Development",
      "Data Visualization",
      "KPI Monitoring",
    ],
  },
  { title: "Database", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  {
    title: "System Analysis",
    items: ["Requirements Analysis", "UML", "Business Process Modeling", "Database Design"],
  },
  {
    title: "Machine Learning",
    items: ["Scikit-learn", "Isolation Forest", "Forecasting", "NLP", "VADER"],
  },
];

export const certifications = [
  {
    name: "Data Analyst – Certificate of Competence",
    issuer: "Special Skill Indonesia",
    issued: "Issued July 2026",
    expires: "Expires July 2028",
  },
  {
    name: "Structured Query Language (SQL)",
    issuer: "Dicoding Indonesia",
    issued: "Issued July 2026",
    expires: "Expires July 2029",
  },
];
