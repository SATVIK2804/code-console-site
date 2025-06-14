const CommandHandler = {
  execute: (command: string): string[] => {
    const [cmd, ...args] = command.split(' ');
    
    switch (cmd) {
      case 'help':
      case 'h':
        return [
          "Available commands:",
          "  help, h          - <span class='text-red-400'>Show this help message</span>",
          "  about, whoami    - <span class='text-green-400'>Learn about me</span>",
          "  projects, ls     - <span class='text-blue-400'>View my projects</span>",
          "  skills           - <span class='text-yellow-400'>See my technical skills</span>",
          "  contact          - <span class='text-red-400'>Get in touch</span>",
          "  experience       - <span class='text-green-400'>View work experience</span>",
          "  education        - <span class='text-blue-400'>Academic background</span>",
          "  clear, cls       - <span class='text-yellow-400'>Clear terminal</span>",
          "  github           - <span class='text-red-400'>Open GitHub profile</span>",
          "  linkedin         - <span class='text-green-400'>Open LinkedIn profile</span>",
          "  resume           - <span class='text-blue-400'>Download resume</span>"
        ];

      case 'about':
      case 'whoami':
        return [
          "Hi there! I'm Jason Myers 👋",
          "",
          "I'm a passionate Full Stack Developer with expertise in:",
          "• Modern web technologies (React, Node.js, TypeScript)",
          "• Cloud platforms and DevOps practices",
          "• Building scalable and user-friendly applications",
          "",
          "When I'm not coding, you'll find me exploring new technologies,",
          "contributing to open source projects, or enjoying the great outdoors.",
          "",
          "Fun fact: I'm equally comfortable in the terminal as I am in the browser!"
        ];

      case 'projects':
      case 'ls':
        return [
          "📁 Recent Projects:",
          "",
          "🚀 E-Commerce Platform",
          "   Tech: React, Node.js, PostgreSQL, AWS",
          "   A full-stack e-commerce solution with real-time inventory",
          "   Live: https://ecommerce-demo.jasonmyers.dev",
          "",
          "📱 Task Management App",
          "   Tech: React Native, Firebase, Redux",
          "   Cross-platform mobile app for team collaboration",
          "   Live: https://taskapp.jasonmyers.dev",
          "",
          "🤖 AI Chat Bot",
          "   Tech: Python, OpenAI API, FastAPI",
          "   Intelligent customer service automation",
          "   Live: https://chatbot-demo.jasonmyers.dev",
          "",
          "🌐 Portfolio Website",
          "   Tech: React, TypeScript, Tailwind CSS",
          "   This terminal-themed portfolio you're viewing right now!",
          "   Live: https://jasonmyers.dev",
          "",
          "Type 'github' to see more projects on GitHub"
        ];

      case 'skills':
        return [
          "💻 Technical Skills:",
          "",
          "Languages:",
          "  JavaScript/TypeScript  ████████████ 95%",
          "  Python                 ██████████   85%",
          "  Java                   ████████     70%",
          "  Go                     ██████       60%",
          "",
          "Frontend:",
          "  React/Next.js          ████████████ 95%",
          "  Vue.js                 ████████     75%",
          "  HTML5/CSS3             ████████████ 90%",
          "  Tailwind CSS           ███████████  85%",
          "",
          "Backend:",
          "  Node.js/Express        ████████████ 90%",
          "  Python/Django          █████████    80%",
          "  PostgreSQL/MongoDB     ████████     75%",
          "",
          "DevOps & Tools:",
          "  Docker/Kubernetes      ████████     75%",
          "  AWS/GCP                ███████      70%",
          "  Git/GitHub             ████████████ 95%"
        ];

      case 'experience':
        return [
          "💼 Work Experience:",
          "",
          "Senior Full Stack Developer | TechCorp Inc.",
          "📅 2022 - Present",
          "• Led development of microservices architecture serving 1M+ users",
          "• Reduced application load time by 40% through optimization",
          "• Mentored junior developers and established coding standards",
          "",
          "Full Stack Developer | StartupXYZ",
          "📅 2020 - 2022",
          "• Built MVP from scratch using React and Node.js",
          "• Implemented CI/CD pipelines reducing deployment time by 60%",
          "• Collaborated with cross-functional teams in agile environment",
          "",
          "Frontend Developer | WebSolutions LLC",
          "📅 2018 - 2020",
          "• Developed responsive web applications for 20+ clients",
          "• Improved user engagement by 35% through UX optimization",
          "• Integrated third-party APIs and payment systems"
        ];

      case 'education':
        return [
          "🎓 Education:",
          "",
          "Bachelor of Science in Computer Science",
          "University of Technology | 2014 - 2018",
          "• GPA: 3.8/4.0",
          "• Relevant Coursework: Data Structures, Algorithms, Web Development",
          "• Senior Project: Machine Learning for Stock Price Prediction",
          "",
          "Certifications:",
          "• AWS Certified Solutions Architect",
          "• Google Cloud Professional Developer",
          "• MongoDB Certified Developer"
        ];

      case 'contact':
        return [
          "📬 Get In Touch:",
          "",
          "📧 Email: jason.myers@email.com",
          "💼 LinkedIn: linkedin.com/in/jasonmyers",
          "🐙 GitHub: github.com/jasonmyers",
          "🐦 Twitter: @jasonmyers_dev",
          "🌐 Website: jasonmyers.dev",
          "",
          "I'm always open to discussing new opportunities,",
          "collaborations, or just having a chat about technology!",
          "",
          "Response time: Usually within 24 hours ⚡"
        ];

      case 'github':
        return [
          "🐙 Opening GitHub profile...",
          "https://github.com/jasonmyers",
          "",
          "Check out my repositories and contributions!"
        ];

      case 'linkedin':
        return [
          "💼 Opening LinkedIn profile...",
          "https://linkedin.com/in/jasonmyers",
          "",
          "Let's connect professionally!"
        ];

      case 'resume':
        return [
          "📄 Downloading resume...",
          "resume_jason_myers.pdf",
          "",
          "Resume download initiated! Check your downloads folder."
        ];

      case 'clear':
      case 'cls':
        // This will be handled by the parent component
        window.location.reload();
        return [];

      case '':
        return [];

      default:
        return [
          `Command not found: ${command}`,
          "Type 'help' to see available commands."
        ];
    }
  }
};

export default CommandHandler;
