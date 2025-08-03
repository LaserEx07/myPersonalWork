export const mockData = {
  developer: {
    name: "Junrel Ejurango",
    title: "Full-Stack Developer",
    location: "Cebu City, Philippines",
    email: "junrelejurango@gmail.com",
    phone: "+63 9940670162",
    linkedin: "linkedin.com/in/junrelejurango",
    github: "github.com/LaserEx07",
    bio: "Passionate Junior Full-Stack Developer with expertise in modern web Technologies and Mobile development. Experienced with React, Angular, PHP, Laravel, C#, and Azure DevOps. Seeking opportunities to contribute to innovative projects and grow in a collaborative development environment."
  },

  skills: {
    frontend: [
      { name: "React", level: 75, color: "#61DAFB" },
      { name: "Angular", level: 70, color: "#DD0031" },
      { name: "JavaScript", level: 65, color: "#F7DF1E" },
      { name: "TypeScript", level: 75, color: "#3178C6" },
      { name: "HTML/CSS", level: 95, color: "#E34F26" }
    ],
    backend: [
      { name: "PHP", level: 65, color: "#777BB4" },
      { name: "Laravel", level: 60, color: "#FF2D20" },
      { name: "C#", level: 75, color: "#239120" },
      { name: "Node.js", level: 70, color: "#339933" },
      { name: "MySQL", level: 60, color: "#4479A1" }
    ],
    tools: [
      { name: "Azure DevOps", level: 65, color: "#0078D4" },
      { name: "Git", level: 80, color: "#F05032" },
      { name: "Docker", level: 60, color: "#2496ED" },
      { name: "VS Code", level: 95, color: "#007ACC" },
      { name: "Postman", level: 85, color: "#FF6C37" }
    ],
    mobile: [
      { name: "Angular", level: 75, color: "#61DAFB" },
      { name: "Android Studio", level: 60, color: "#02569B" },
      { name: "Ionic Framework ", level: 65, color: "#3498DB" }
    ]
  },

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with React frontend and Laravel backend. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "/assets/city.jpg",
      technologies: ["React", "Laravel", "MySQL", "Postman", "Swagger"],
      category: "Web Application",
      githubUrl: "https://github.com/LaserEx07/mobile_ionic.git",
      liveUrl: "https://github.com/LaserEx07/mobile_ionic.git",
      bgColor: "#f8fafc",
      featured: true
    },
    {
      id: 2,
      title: "Alerto - Mobile App",
      description: "Cross-platform mobile application for real time evacuation mapping, designed to help users to navigate to the nearest evacuation area during emergency disasters. Built using React Native with backend API integration.",
      image: "/assets/app_icon.png",
      technologies: ["Angular", "Node.js", "Laravel", "OpenStreet Map"],
      category: "Mobile Application",
      githubUrl: "https://github.com/LaserEx07/mobile_ionic.git",
      liveUrl: "https://github.com/LaserEx07/mobile_ionic.git",
      bgColor: "#fef3c7",
      featured: true
    },
    {
      id: 3,
      title: "Empowering Young Innovators at the Capstone Hackathon 2025",
      description: "Content management system for bloggers with rich text editor, media management, and SEO optimization. Built with PHP Laravel framework.",
      image: "/assets/MAPPING.png",
      technologies: ["Laravel", "PHP", "MySQL"],
      category: "Web Application",
      githubUrl: "https://github.com/LaserEx07/",
      liveUrl: "https://github.com/LaserEx07/",
      bgColor: "#fce7f3",
      featured: true
    },
    
    
    {
      id: 5,
      title: "Blog Content Management System",
      description: "Content management system for bloggers with rich text editor, media management, and SEO optimization. Built with PHP Laravel framework.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b4d3?w=800&h=600&fit=crop",
      technologies: ["Laravel", "Vue.js", "MySQL", "AWS S3"],
      category: "Web Application",
      githubUrl: "https://github.com/LaserEx07/",
      liveUrl: "https://github.com/LaserEx07/",
      bgColor: "#fce7f3",
      featured: false
    },
    {
      id: 4,
      title: "Inventory Management System",
      description: "Enterprise inventory management solution with barcode scanning, reporting, and multi-location support. Integrated with Azure Active Directory.",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=800&h=600&fit=crop",
      technologies: ["C#", "WPF", "SQL Server", "Azure AD"],
      category: "Desktop Application",
      githubUrl: "https://github.com/alexthompson/inventory-system",
      liveUrl: null,
      bgColor: "#f3e8ff",
      featured: false
    }
  ],

  experience: [
    {
      id: 1,
      title: "Software Developer Intern",
      company: "Knowles Electronics Philippines",
      duration: "Jun 2025 - December 2025",
      location: "Lapu-Lapu City, Cebu",
      description: "Developed web applications using React and C#. Collaborated with senior developers on feature implementation and bug fixes. Gained experience with Azure DevOps.",
      technologies: ["React", "C#", "SQL Server Management Studio", "Azure DevOps"]
    },
   
  ],

  education: [
    {
      id: 1,
      degree: "Associate of Computer Technology - Major in Software Development",
      school: "University of San-Jose Recoletos",
      year: "2023 - 2026",
      relevant: ["Data Structures", "Software Engineering", "Database Systems", "Mobile Development", "Web Technologies"]
    }
  ],

  certifications: [
    {
      id: 1,
      name: "Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "March 2024",
      credentialId: "AZ900-2024-001"
    },
    {
      id: 2,
      name: "React Developer Certification",
      issuer: "Meta",
      date: "January 2024",
      credentialId: "META-REACT-2024"
    }
  ]
};

export default mockData;