// Mock data for software developer portfolio

export const mockData = {
  developer: {
    name: "Alex Thompson",
    title: "Full-Stack Developer",
    location: "New York, NY",
    email: "alex.thompson@email.com",
    phone: "+1 (555) 123-4567",
    linkedin: "linkedin.com/in/alexthompson",
    github: "github.com/alexthompson",
    bio: "Passionate junior full-stack developer with expertise in modern web technologies and mobile development. Experienced with React, Angular, PHP, Laravel, C#, and Azure DevOps. Seeking opportunities to contribute to innovative projects and grow in a collaborative development environment."
  },

  skills: {
    frontend: [
      { name: "React", level: 85, color: "#61DAFB" },
      { name: "Angular", level: 80, color: "#DD0031" },
      { name: "JavaScript", level: 90, color: "#F7DF1E" },
      { name: "TypeScript", level: 75, color: "#3178C6" },
      { name: "HTML/CSS", level: 95, color: "#E34F26" }
    ],
    backend: [
      { name: "PHP", level: 85, color: "#777BB4" },
      { name: "Laravel", level: 80, color: "#FF2D20" },
      { name: "C#", level: 75, color: "#239120" },
      { name: "Node.js", level: 70, color: "#339933" },
      { name: "MySQL", level: 80, color: "#4479A1" }
    ],
    tools: [
      { name: "Azure DevOps", level: 75, color: "#0078D4" },
      { name: "Git", level: 90, color: "#F05032" },
      { name: "Docker", level: 65, color: "#2496ED" },
      { name: "VS Code", level: 95, color: "#007ACC" },
      { name: "Postman", level: 85, color: "#FF6C37" }
    ],
    mobile: [
      { name: "React Native", level: 75, color: "#61DAFB" },
      { name: "Flutter", level: 70, color: "#02569B" },
      { name: "Xamarin", level: 65, color: "#3498DB" }
    ]
  },

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with React frontend and Laravel backend. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      technologies: ["React", "Laravel", "MySQL", "Stripe API"],
      category: "Web Application",
      githubUrl: "https://github.com/alexthompson/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.com",
      bgColor: "#f8fafc",
      featured: true
    },
    {
      id: 2,
      title: "Task Management Mobile App",
      description: "Cross-platform mobile application for task management with real-time synchronization. Built using React Native with backend API integration.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      category: "Mobile Application",
      githubUrl: "https://github.com/alexthompson/task-manager-app",
      liveUrl: "https://play.google.com/store/apps/details?id=com.taskmanager",
      bgColor: "#fef3c7",
      featured: true
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard built with Angular and C# .NET backend. Features data visualization, reporting, and user management with Azure deployment.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["Angular", "C#", ".NET Core", "Azure", "SQL Server"],
      category: "Web Application",
      githubUrl: "https://github.com/alexthompson/analytics-dashboard",
      liveUrl: "https://analytics-demo.azurewebsites.net",
      bgColor: "#ecfdf5",
      featured: true
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "Mobile weather application with location-based forecasts, interactive maps, and push notifications. Deployed using Azure DevOps CI/CD pipeline.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      technologies: ["Flutter", "PHP", "OpenWeather API", "Azure DevOps"],
      category: "Mobile Application",
      githubUrl: "https://github.com/alexthompson/weather-app",
      liveUrl: "https://apps.apple.com/app/weather-forecast",
      bgColor: "#dbeafe",
      featured: false
    },
    {
      id: 5,
      title: "Blog CMS Platform",
      description: "Content management system for bloggers with rich text editor, media management, and SEO optimization. Built with PHP Laravel framework.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b4d3?w=800&h=600&fit=crop",
      technologies: ["Laravel", "Vue.js", "MySQL", "AWS S3"],
      category: "Web Application",
      githubUrl: "https://github.com/alexthompson/blog-cms",
      liveUrl: "https://blog-cms-demo.com",
      bgColor: "#fce7f3",
      featured: false
    },
    {
      id: 6,
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
      title: "Full-Stack Developer Intern",
      company: "TechStartup Inc.",
      duration: "Jun 2024 - Aug 2024",
      location: "Remote",
      description: "Developed web applications using React and Laravel. Collaborated with senior developers on feature implementation and bug fixes. Gained experience with Azure DevOps for CI/CD pipeline management.",
      technologies: ["React", "Laravel", "MySQL", "Azure DevOps"]
    },
    {
      id: 2,
      title: "Junior Web Developer",
      company: "Digital Solutions LLC",
      duration: "Jan 2024 - May 2024",
      location: "New York, NY",
      description: "Built responsive websites and web applications using modern JavaScript frameworks. Assisted in mobile app development projects and database optimization.",
      technologies: ["Angular", "PHP", "React Native", "MySQL"]
    }
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      school: "State University",
      year: "2020 - 2024",
      gpa: "3.7/4.0",
      relevant: ["Data Structures", "Software Engineering", "Database Systems", "Mobile Development"]
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