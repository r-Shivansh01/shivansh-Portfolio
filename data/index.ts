import { Github, Linkedin, Mail } from "lucide-react";

const data = {
  home: {
    name: "Shivansh Rao",
    description: "Software Engineer specializing in #backend_systems, #cloud_computing, and building robust #AI__tools.",
    cvLink: "/Shivansh_Resume.pdf",
  },
  sidebar: {
    links: [
      {
        name: "github",
        link: "https://github.com/r-Shivansh01",
        icon: Github,
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/rshivansh1",
        icon: Linkedin,
      },
      {
        name: "email",
        link: "mailto:rshivansh1594@gmail.com",
        icon: Mail,
      }
    ],
  },
  about: {
    description: "Hello! I'm Shivansh Rao, a dedicated Computer Science engineering student at LPU. I specialize in Python, C++, and Java, with strong hands-on experience in cloud platforms like AWS, Azure, and Google Cloud. I am deeply passionate about building decentralized applications, AI-powered security tools, and scalable systems. My strengths include strong problem-solving skills, adaptability, and a collaborative team player mindset.",
    image: "/imgs/about-image.png",
    numbers: [
      { name: "PROJECTS", number: 3 },
      { name: "CERTIFICATES", number: 2 },
      { name: "PROBLEMS-SOLVED", number: 150 },
    ],
  },
  projects: {
    description: "Here are some of the projects I've recently been working on.",
    projects: [
      {
        id: 1,
        title: "TimeCapsule – Time Locked Secure Data Storage",
        description: "Engineered a secure, decentralized data vault utilizing distributed storage architecture (IPFS) and automated state-execution logic. Developed an intuitive, React-based frontend interface for handling time-lock parameters and implemented robust CI/CD workflows utilizing CodeRabbit.",
        image: "/projects-imgs/social.png",
        githubLink: "#",
        previewLink: "#",
      },
      {
        id: 2,
        title: "Git Guard AI – AI-Powered Security Tool",
        description: "Developed a proactive Python-based security tool leveraging an ML model to detect sensitive information (API keys, secrets) within code before commits. Implemented automated scanning of staged files to reduce data exposure risks with 97% accuracy.",
        image: "/projects-imgs/notes.png",
        githubLink: "#",
        previewLink: "#",
      },
      {
        id: 3,
        title: "PinSearch – Automated Reverse Image Search",
        description: "Architected a Python-based automation tool to trace the original sources of Pinterest posts using Reverse Image Search APIs and global web indexing. Implemented error-handling protocols to manage varying web structures and rate-limiting robustly.",
        image: "/projects-imgs/quran.png",
        githubLink: "#",
        previewLink: "#",
      },
    ],
  },
  education: [
    {
      institution: "Lovely Professional University",
      location: "Punjab, India",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      cgpa: "8.01",
      duration: "Aug' 2023 – Present"
    },
    {
      institution: "Kendriya Vidyalaya Godhra",
      location: "Gujarat, India",
      degree: "Intermediate",
      cgpa: "77%",
      duration: "Apr' 2021 – Mar' 2022"
    },
    {
      institution: "Kendriya Vidyalaya Godhra",
      location: "Gujarat, India",
      degree: "Matriculation",
      cgpa: "92%",
      duration: "Apr' 2019 – Mar' 2020"
    }
  ],
  certificates: [
    { title: "AWS Cloud Foundation Course Badge", issuer: "AWS", date: "Jan' 2025 – May 2025" },
    { title: "Social Networks", issuer: "NPTEL IIT Madras", date: "Jan' 2025 – Apr' 2025" }
  ],
  training: [
    {
      title: "Summer Training | Mastering C++",
      duration: "Jun 2025 - Jul 2025",
      description: "Completed a structured skill-development program covering OOP, STL, memory management, recursion, and dynamic programming. Gained hands-on experience solving algorithmic problems and working on modular, clean industry-standard code designs. Strengthened problem-solving abilities through weekly assignments.",
      grade: "Earned a Certificate of Merit with Grade A"
    }
  ],
  achievements: [
    "Earned top badges in competitive coding platforms for consistence performance: Nov' 2025",
    "Solved 150+ coding problems across GFG, LeetCode and HackerRank: Oct' 2025"
  ],
  technologies: {
    skills: [
      { id: 1, name: "python", src: "/skills/python.svg", link: "#" },
      { id: 2, name: "c++", src: "/skills/cpp.svg", link: "#" },
      { id: 3, name: "java", src: "/skills/java.svg", link: "#" },
      { id: 4, name: "aws", src: "/skills/aws.svg", link: "#" },
      { id: 5, name: "azure", src: "/skills/azure.svg", link: "#" },
      { id: 6, name: "docker", src: "/skills/docker.svg", link: "#" },
      { id: 7, name: "mysql", src: "/skills/mysql.svg", link: "#" },
      { id: 8, name: "github", src: "/skills/github.svg", link: "#" },
    ],
  },
  contact: {
    email: "rshivansh1594@gmail.com",
    mobile: "+91-7874337736"
  },
};

export default data;
