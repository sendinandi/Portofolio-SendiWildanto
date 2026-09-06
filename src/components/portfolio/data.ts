import sendiPhoto from "@/assets/FotoSendi.jpg";
import sipda from "@/assets/Home_AISIPDA.png";
import monitoring from "@/assets/Kegiatan.png";
import employment from "@/assets/Tableau.png";
import eda from "@/assets/Malnutrisi.png";
import coffee from "@/assets/Export_Coffee.png";
import sentiment from "@/assets/Sentimen.png";
import recyclebud from "@/assets/Recyclebud_home.png";
import officeapp from "@/assets/officeapp.png";
import biImage from "@/assets/experience-bi.jpeg";
import diskominfoImage from "@/assets/experience-diskominfo.jpeg";
import ksmCyberImage from "@/assets/org-ksm-cyber.jpeg";

export const PHOTO_URL = sendiPhoto;
export const LINKEDIN_URL = "https://www.linkedin.com/in/sendi-wildanto-192a38282/";
export const GITHUB_URL = "https://github.com/sendinandi";
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
    image: ksmCyberImage,
  },
];

export const projects = [
  {
    title: "OFFICE APP – Database & Document Assistant",
    category: "AI / LLM / Database / Web Application",
    description:
      "Enhanced an existing HR Office application with AI-powered capabilities for conversational data retrieval, employee evaluation, document processing, and contextual AI responses.",
    tech: ["PHP", "CodeIgniter", "MySQL", "Groq API", "LLM", "NL2SQL", "OCR"],
    image: officeapp,
    featured: true,
  },
  {
    title: "SIPDA Analytics Platform",
    category: "Data Analytics / Machine Learning / Web Application",
    description:
      "Developed a web-based analytics platform integrating statistical analysis, forecasting, anomaly detection, and AI-powered recommendations to support data-driven decision making.",
    tech: ["Python", "Streamlit", "MySQL", "Scikit-learn", "Machine Learning"],
    image: sipda,
    featured: true,
    githuburl: "https://github.com/sendinandi/AI_SIPDA",
  },
  {
    title: "Government Activity Realization Monitoring System",
    category: "System Analysis / Business Intelligence",
    description:
      "Designed and developed a web-based monitoring information system for government activity realization, integrating requirements analysis, database design, validation workflows, and interactive dashboards.",
    tech: ["System Analysis", "UML", "MySQL", "Dashboard", "Web Development"],
    image: monitoring,
    featured: true,
    githuburl: "https://github.com/sendinandi/Goverment_Activity",
  },
  {
    title: "Employment Placement Analytics Dashboard",
    category: "Data Analytics / Data Visualization",
    description:
      "Developed an interactive Tableau dashboard using Kota Bekasi Open Data to analyze employment placement and workforce distribution trends. Cleaned and transformed the data, then conducted exploratory analysis to identify monthly trends, gender composition, and dominant employment placement channels, translating the findings into interactive visualizations for public information and stakeholder decision-making.",
    tech: ["Tableau", "Excel", "Data Visualization", "Analytics", "Open Data"],
    image: employment,
    featured: true,
    url: "https://opendata.bekasikota.go.id/visualisasi/jumlah-penempatan-kerja-kota-bekasi-tahun-2022-2023",
  },
  {
    title: "Global Coffee Export Analytics Dashboard",
    category: "Data Analytics / Business Intelligence",
    description:
      "Conducted exploratory analysis of global coffee trade data to compare Indonesia and Brazil across export value, volume, price per kilogram, growth, and commodity composition, with findings presented through an interactive Streamlit dashboard.",
    tech: ["Python", "Pandas", "Streamlit", "Plotly", "Data Analysis"],
    image: coffee,
    featured: false,
    url: "https://drive.google.com/drive/folders/10Xu3Eh3TQOchm1ank_XmC0wsQzcK1yJH?usp=sharing",
  },
  {
    title: "Exploratory Data Analysis of Malnutrition",
    category: "Data Analytics / EDA",
    description:
      "Performed data cleaning, exploratory analysis, and visualization on global malnutrition datasets to identify trends, correlations, and distributions.",
    tech: ["Python", "Pandas", "Matplotlib", "Data Analysis", "Visualization"],
    image: eda,
    featured: false,
    url: "https://docs.google.com/document/d/1XIH1U0TPDNZrTtYHY1RQoKSv5M-tgqBe/edit",
  },
  {
    title: "Social Media Sentiment Analysis",
    category: "NLP / Data Analytics",
    description:
      "Implemented VADER-based sentiment analysis to classify public opinions from social media data and identify sentiment patterns.",
    tech: ["Python", "VADER", "NLP", "Data Analysis", "Text Analytics"],
    image: sentiment,
    featured: false,
    url: "https://colab.research.google.com/drive/1BbZJQB2Mh3ZFGd2orI8wsWVZV4bDccad?usp=sharing",
  },
  {
    title: "RecycleBud Innovation Project",
    category: "AI / Computer Vision / Innovation",
    description:
      "Developed a sustainability-focused innovation concept using AI and computer vision to identify recyclable materials and support waste management.",
    tech: ["Python", "AI", "Computer Vision", "Hugging Face", "Sustainability"],
    image: recyclebud,
    featured: false,
    url: "https://heart-heart-guide.lovable.app/",
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
    image: biImage,
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
    image: diskominfoImage,
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
    url: "https://drive.google.com/file/d/1DvC6G3iyykJOPppBqKUsNYmiTWJL5eNZ/view?usp=sharing",
  },
  {
    name: "Intermediate - Structured Query Language (SQL)",
    issuer: "DataCamp",
    issued: "Issued July 2026",
    expires: "Expires July 2029",
    url: "https://drive.google.com/file/d/1DrwoEgFUgza6tCCM5wdaw7VlXBvtJ2fA/view?usp=sharing",
  },
  {
    name: "Microsoft Power BI – Data Preparation, Transformation & Dashboard",
    issuer: "Myskill",
    issued: "Issued February 2025",
    expires: "No Expiration",
    url: "https://drive.google.com/file/d/1g2TJHSz16j2o8QxeVK9dE7TUXegJkfqp/view?usp=sharing",
  },
  {
    name: "System Analyst – Certificate of Competence",
    issuer: "BNSP – LSP Universitas Pembangunan Nasional Veteran Jakarta",
    issued: "Issued November 2025",
    expires: "Expires November 2028",
    url: "https://drive.google.com/file/d/1_eAc41xJTOAaazGMmsoeW7zgv-ALTD4z/view?usp=sharing",
  },
];
