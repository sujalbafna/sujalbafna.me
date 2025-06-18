import React, { useState } from 'react';
import { Download, FolderOpen, Mail, Code, Database, Cloud, Brain, ExternalLink, Phone, MessageCircle, Github, Linkedin, Globe, Server, Palette, BarChart3, Zap, Shield, Wrench, Award, Calendar, CheckCircle, Star, ArrowUp, Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to top button visibility
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skills = {
    Frontend: {
      icon: <Palette className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
      items: ["React.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind"]
    },
    Backend: {
      icon: <Server className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      items: ["Node.js", "Firebase", "FastAPI", "Express"]
    },
    Cloud: {
      icon: <Cloud className="w-6 h-6" />,
      color: "from-sky-500 to-blue-500",
      bgColor: "from-sky-50 to-blue-50",
      borderColor: "border-sky-200",
      items: ["AWS (S3, EC2, RDS)", "Firebase"]
    },
    "Data/ML": {
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-50 to-amber-50",
      borderColor: "border-orange-200",
      items: ["Pandas", "Scikit-learn", "Python", "SQL"]
    },
    AI: {
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
      borderColor: "border-purple-200",
      items: ["OpenAI API", "ChatGPT Integration"]
    },
    Others: {
      icon: <Wrench className="w-6 h-6" />,
      color: "from-slate-500 to-gray-500",
      bgColor: "from-slate-50 to-gray-50",
      borderColor: "border-slate-200",
      items: ["Git", "VS Code", "Power BI", "MongoDB"]
    }
  };

  const internships = [
    {
      company: "SDS Forklift Training",
      role: "Web Development Intern",
      duration: "Jul 2024 – Dec 2024",
      location: "Remote",
      type: "Internship",
      description: "Developed and maintained the company's training website, focusing on responsive design and user experience optimization for industrial training services.",
      technologies: ["Firebase", "Web UI/UX", "Responsive Design", "JavaScript"],
      achievements: [
        "Built responsive training website reflecting SDS's comprehensive training offerings",
        "Implemented user-friendly navigation and modern UI/UX principles",
        "Optimized site performance and mobile responsiveness",
        "Collaborated with team to align technical solutions with business requirements"
      ],
      website: "https://www.sdsforklifttraining.com/",
      gradient: "from-blue-600 to-indigo-700",
      featured: true
    }
  ];

  const projects = [
    {
      name: "ReadSync",
      tech: "React, Node.js, AWS, Firebase",
      description: "A smart blogging platform with AI-powered title suggestions and real-time syncing.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "BillBuddies",
      tech: "JS, React, Firebase",
      description: "A clean and intuitive group expense tracker with authentication and dynamic data handling.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      name: "Zero-Code ML",
      tech: "React, FastAPI, ML, Pandas",
      description: "A no-code ML platform to upload CSVs, clean data, visualize trends, and train models without writing a line of code.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Fashionist AI",
      tech: "ChatGPT-3.5, React, Node",
      description: "A chatbot that gives personalized outfit suggestions using NLP and AI.",
      gradient: "from-rose-500 to-orange-500"
    },
    {
      name: "MediTrack Pro",
      tech: "Firebase, Inventory Mgmt, Reporting",
      description: "A complete pharmacy management system with expiry alerts, sales reports, and real-time data handling.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      name: "DataViz Wizard",
      tech: "Python, Pandas, Matplotlib",
      description: "Upload CSVs and generate beautiful charts with a friendly GUI — no coding skills required.",
      gradient: "from-amber-500 to-yellow-500"
    },
    {
      name: "SDS Forklift",
      tech: "Firebase, Web UI/UX",
      description: "An industrial training site that reflects SDS's training offerings, built with responsive design and easy-to-navigate UI.",
      gradient: "from-teal-500 to-green-500"
    }
  ];

  const certifications = [
    {
      name: "IBM Data Science Certificate",
      issuer: "IBM",
      date: "2025",
      category: "Data Science",
      featured: true,
      gradient: "from-yellow-500 to-orange-600",
      skills: ["Python", "SQL", "Data Analysis", "Machine Learning"]
    },
    {
      name: "IBM Machine Learning Certificate",
      issuer: "IBM",
      date: "2025",
      category: "Machine Learning",
      featured: true,
      gradient: "from-purple-600 to-indigo-700",
      skills: ["Supervised Learning", "Deep Learning", "Neural Networks"]
    },
    {
      name: "IBM Data Engineering Foundations",
      issuer: "IBM",
      date: "2025",
      category: "Data Science",
      featured: true,
      gradient: "from-green-600 to-teal-700",
      skills: ["Understanding Data Engineering Basics", "Working with Databases and SQL", "Using Tools like Python & Jupyter Notebooks"]
    },
    {
      name: "Python",
      issuer: "IIT Bombay",
      date: "2023",
      category: "Programming",
      featured: false,
      gradient: "from-orange-500 to-yellow-600",
      skills: ["Data Analysis & Visualization", "Machine Learning with scikit-learn", "API Development with FastAPI"]
    },
    {
      name: "Power BI",
      issuer: "Great Learning",
      date: "2025",
      category: "Analytics",
      featured: false,
      gradient: "from-green-500 to-teal-600",
      skills: ["Data Modeling & DAX", "Interactive Dashboards", "Data Transformation with Power Query"]
    },
    {
      name: "Cloud Foundation",
      issuer: "AWS",
      date: "2024",
      category: "Cloud Computing",
      featured: false,
      gradient: "from-blue-500 to-cyan-600",
      skills: ["AWS Services", "Cloud Solutions", "Cloud Deployment & Management"]
    },
    {
      name: "Introduction to Artificial Intelligence (AI)",
      issuer: "IBM",
      date: "2025",
      category: "Artificial Intelligence (AI)",
      featured: false,
      gradient: "from-cyan-500 to-blue-600",
      skills: ["Supervised Learning Basics", "Natural Language Processing (NLP)", "Working with Pre-trained Models (like ChatGPT)"]
    },
    {
      name: "Developing Front-End Apps with React",
      issuer: "IBM",
      date: "2025",
      category: "Front-End Apps with React",
      featured: false,
      gradient: "from-yellow-500 to-orange-600",
      skills: ["Creating Web Pages using React", "Using React Hooks", "Adding Page Navigation"]
    },
    {
      name: "Introduction to Deep Learning & Neural Networks with Keras",
      issuer: "IBM",
      date: "2025",
      category: "Deep Learning & Neural Networks with Keras",
      featured: false,
      gradient: "from-green-600 to-emerald-700",
      skills: ["Building Neural Networks", "Training Models", "Making Predictions"]
    },
     {
      name: "Networking Basics",
      issuer: "Cisco",
      date: "2024",
      category: "Computer Networks",
      featured: false,
      gradient: "from-cyan-500 to-blue-600",
      skills: ["Understanding IP Addressing", "Working with Cisco Routers & Switches", "Using Packet Tracer"]
    },
    {
      name: "Prompt Engineering for ChatGPT",
      issuer: "Vanderbilt University",
      date: "2025",
      category: "Prompting",
      featured: false,
      gradient: "from-cyan-500 to-blue-600",
      skills: ["Writing Clear Prompts", "Using Role-Based Prompts", "Improving Responses with Examples"]
    },
     {
      name: "Introduction to Big Data",
      issuer: "UC San Diego",
      date: "2025",
      category: "Hadoop Ecosystem",
      featured: false,
      gradient: "from-yellow-500 to-orange-600",
      skills: ["Understanding Big Data Concepts", "Familiar with Hadoop Ecosystem", "Working with Large Datasets"]
    },
     {
      name: "Data Warehouse Fundamentals",
      issuer: "IBM",
      date: "2025",
      category: "Data Management",
      featured: false,
      gradient: "from-green-600 to-emerald-700",
      skills: ["Understanding Data Warehousing Concepts", "ETL Process Knowledge", "Familiarity with Star and Snowflake Schemas"]
    },
    {
      name: "Java",
      issuer: "IIT Bombay",
      date: "2025",
      category: "Programming",
      featured: false,
      gradient: "from-cyan-500 to-blue-600",
      skills: ["Writing Basic Java Programs", "Using Object-Oriented Concepts", "Handling Input and Output"]
    },
    {
      name: "Creative Thinking- Techniques and Tools for Success",
      issuer: "Imperial College London",
      date: "2025",
      category: "Creative Thinking",
      featured: false,
      gradient: "from-cyan-500 to-blue-600",
      skills: ["Using Mind Mapping", "Applying Brainstorming Techniques", "Thinking Outside the Box"]
    },
     {
      name: "Effective Problem-Solving and Decision-Making",
      issuer: "UCI Division Of Continuing Education",
      date: "2025",
      category: "Decision-Making",
      featured: false,
      gradient: "from-yellow-500 to-orange-600",
      skills: ["Identifying Problems Clearly", "Analyzing Options", "Making Confident Decisions"]
    },
     {
      name: "GenAI in Data Analytics",
      issuer: "Meta",
      date: "2025",
      category: "Artificial Intelligence (AI)",
      featured: false,
      gradient: "from-green-600 to-emerald-700",
      skills: ["Using AI to Summarize Data", "Generating Insights Automatically", "Creating Visual Reports with AI Help"]
    }
  ];

  const featuredCertifications = certifications.filter(cert => cert.featured);
  const otherCertifications = certifications.filter(cert => !cert.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-slate-800">Sujal Bafna</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-600 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#internships" className="text-slate-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#certifications" className="text-slate-600 hover:text-blue-600 transition-colors">Certifications</a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#ads" className="text-slate-600 hover:text-blue-600 transition-colors">Ads</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-800 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Sujal Bafna
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-medium">
                Full Stack Developer | Big Data & AI Enthusiast
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-slate-700 leading-relaxed">
                A tech enthusiast passionate about Full Stack Development, Cloud Engineering, and AI. 
                I love solving real-world problems using scalable web solutions and smart data-driven insights.
              </p>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg">
                <div className="text-3xl font-bold text-blue-600">20+</div>
                <div className="text-sm text-slate-600 font-medium">Certifications</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg">
                <div className="text-3xl font-bold text-green-600">7+</div>
                <div className="text-sm text-slate-600 font-medium">Projects</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg">
                <div className="text-3xl font-bold text-purple-600">8.18</div>
                <div className="text-sm text-slate-600 font-medium">CGPA</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg">
                <div className="text-3xl font-bold text-orange-600">3+</div>
                <div className="text-sm text-slate-600 font-medium">Years Learning</div>
              </div>
            </div>

            {/* Tech Icons */}
            <div className="flex justify-center space-x-8 text-slate-400">
              <Code className="w-8 h-8 hover:text-blue-500 transition-colors" />
              <Database className="w-8 h-8 hover:text-green-500 transition-colors" />
              <Cloud className="w-8 h-8 hover:text-sky-500 transition-colors" />
              <Brain className="w-8 h-8 hover:text-purple-500 transition-colors" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
             <a
  href="https://drive.google.com/uc?export=download&id=1gc-yzFHYk-aM5uy19E8aBK8y6skACi30"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="group flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
    <Download className="w-5 h-5 group-hover:animate-bounce" />
    <span>View Resume</span>
  </button>
</a>
              <a href="https://github.com/sujalbafna?tab=repositories" target="_blank" rel="noopener noreferrer">
  <button className="group flex items-center space-x-2 bg-white hover:bg-slate-50 text-slate-800 px-8 py-4 rounded-lg font-semibold border-2 border-slate-300 hover:border-blue-300 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
    <FolderOpen className="w-5 h-5 group-hover:rotate-12 transition-transform" />
    <span>My Projects</span>
  </button>
</a>

              <a href="mailto:bafna3249@gmail.com" target="_blank" rel="noopener noreferrer">
                <button className="group flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Contact Me</span>
              </button> </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Education & Background</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  I'm currently pursuing a <strong>B.Tech in CSE – Big Data and Cloud Engineering</strong> from 
                  <strong> MIT School of Computing, Pune (2022–2026)</strong> with a CGPA of <strong>8.18</strong>.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  My technical journey blends hands-on coding with AI innovation, backed by full-stack experience and cloud expertise.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Technical Passion</h3>
                <p className="text-slate-700 leading-relaxed">
                  I enjoy exploring modern tools like <strong>React, Firebase, FastAPI, OpenAI APIs, and AWS</strong>, 
                  building everything from AI-powered apps to cloud-hosted platforms. Every project is an opportunity 
                  to push the boundaries of what's possible.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 text-center group hover:bg-blue-100 transition-colors">
                  <Code className="w-8 h-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-slate-800">Full Stack</h4>
                  <p className="text-sm text-slate-600">React, Node.js</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl border border-green-200 text-center group hover:bg-green-100 transition-colors">
                  <Database className="w-8 h-8 text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-slate-800">Big Data</h4>
                  <p className="text-sm text-slate-600">Analytics & ML</p>
                </div>
                <div className="bg-sky-50 p-6 rounded-xl border border-sky-200 text-center group hover:bg-sky-100 transition-colors">
                  <Cloud className="w-8 h-8 text-sky-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-slate-800">Cloud</h4>
                  <p className="text-sm text-slate-600">AWS, Firebase</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-200 text-center group hover:bg-purple-100 transition-colors">
                  <Brain className="w-8 h-8 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-slate-800">AI/ML</h4>
                  <p className="text-sm text-slate-600">OpenAI APIs</p>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-2xl text-white">
                <blockquote className="text-lg italic mb-4">
                  "I don't need a hard disk in my computer if I can get to the server faster."
                </blockquote>
                <div className="text-slate-300">— Steve Jobs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit spanning frontend, backend, cloud, and AI technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, data]) => (
              <div key={category} className={`bg-gradient-to-br ${data.bgColor} p-8 rounded-2xl border ${data.borderColor} group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${data.color} text-white p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform`}>
                    {data.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{category}</h3>
                </div>
                <div className="space-y-3">
                  {data.items.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-2 h-2 bg-gradient-to-r ${data.color} rounded-full mr-3 group-hover:scale-125 transition-transform`}></div>
                      <span className="text-slate-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">💼 Professional Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
              Real-world experience building production-ready solutions and contributing to business growth
            </p>
          </div>

          <div className="space-y-8">
            {internships.map((internship, index) => (
              <div key={index} className="group relative overflow-hidden bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`h-2 bg-gradient-to-r ${internship.gradient}`}></div>
                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="md:col-span-1">
                      <div className="flex items-center mb-4">
                        <div className={`bg-gradient-to-r ${internship.gradient} text-white p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform`}>
                          <Briefcase className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                            {internship.company}
                          </h3>
                          <p className="text-lg font-semibold text-slate-600">{internship.role}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-slate-600">
                          <Clock className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">{internship.duration}</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">{internship.location}</span>
                        </div>
                        <div className="inline-block">
                          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                            {internship.type}
                          </span>
                        </div>
                      </div>

                      {internship.website && (
                        <a 
                          href={internship.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                        >
                          <Globe className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
                          <span>Visit Website</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>

                    {/* Experience Details */}
                    <div className="md:col-span-2">
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-slate-800 mb-3">Project Overview</h4>
                        <p className="text-slate-700 leading-relaxed">
                          {internship.description}
                        </p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-slate-800 mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {internship.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-slate-800 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {internship.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-slate-100 text-slate-700 text-sm font-medium px-3 py-1 rounded-md border border-slate-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Open to New Opportunities</h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                I'm actively seeking internships and freelance projects where I can contribute my skills in full-stack development, 
                cloud engineering, and AI integration. Let's build something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="group flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Get In Touch</span>
                </a>
                <a
                  href="https://drive.google.com/uc?export=download&id=1gc-yzFHYk-aM5uy19E8aBK8y6skACi30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 bg-white hover:bg-slate-50 text-slate-800 px-6 py-3 rounded-lg font-semibold border-2 border-slate-300 hover:border-blue-300 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce transition-transform" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Certifications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
              Professional certifications validating expertise across multiple domains
            </p>
            <div className="flex items-center justify-center mt-4 space-x-2">
              <Award className="w-5 h-5 text-yellow-500" />
              <span className="text-2xl font-bold text-slate-800">15+</span>
              <span className="text-slate-600">Certified Skills</span>
            </div>
          </div>

          {/* Featured Certifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Featured Certifications</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredCertifications.map((cert, index) => (
                <div key={index} className="group relative overflow-hidden bg-white rounded-2xl border border-slate-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`h-2 bg-gradient-to-r ${cert.gradient}`}></div>
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <div className={`bg-gradient-to-r ${cert.gradient} text-white p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform`}>
                            <Award className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                              {cert.name}
                            </h4>
                            <p className="text-slate-600 font-medium">{cert.issuer}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center text-slate-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm">{cert.date}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {cert.category}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-slate-700 mb-2">Key Skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-md">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Additional Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherCertifications.map((cert, index) => (
                <div key={index} className="group bg-gradient-to-br from-white to-slate-50 p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className={`bg-gradient-to-r ${cert.gradient} text-white p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform`}>
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800 text-sm group-hover:text-blue-600 transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-slate-600">{cert.issuer}</p>
                    </div>
                    <span className="text-xs text-slate-500">{cert.date}</span>
                  </div>
                  
                  <div className="mb-3">
                    <span className="inline-block bg-slate-100 text-slate-700 text-xs font-medium px-2 py-1 rounded">
                      {cert.category}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="text-xs text-slate-500">+{cert.skills.length - 3} more</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
          <a
                  href="#certifications"
                  target="_blank"
                  rel="noopener noreferrer"> <button className="group flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl mx-auto">
              <Award className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>View All Certifications</span>
            </button></a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
              Innovative solutions built with cutting-edge technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {project.name}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                      {project.tech}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
  href="https://github.com/sujalbafna"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="group flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl mx-auto">
    <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
    <span>View All Projects on GitHub</span>
  </button>
</a>

          </div>
        </div>
      </section>

      {/* Ads Section */}
      <section id="ads" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Sponsored Content</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
              Supporting quality content through partnerships
            </p>
          </div>

          <div className="space-y-12">
            {/* Header Ad */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-3 rounded-xl">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Featured Advertisement</h3>
                    <p className="text-slate-600">Premium placement</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Sponsored
                </span>
              </div>
              
              {/* Google AdSense Ad Unit - Replace with your actual ad code */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8 text-center border-2 border-dashed border-gray-300">
                <div className="space-y-4">
                  <div className="text-gray-500">
                    <DollarSign className="w-12 h-12 mx-auto mb-4" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-700">Google AdSense Ad Space</h4>
                  <p className="text-sm text-gray-600">
                    This is where your Google AdSense ads will appear once configured
                  </p>
                  <div className="text-xs text-gray-500 bg-gray-50 px-3 py-2 rounded-md inline-block">
                    Ad Unit ID: ca-pub-xxxxxxxxxxxxxx
                  </div>
                </div>
              </div>
            </div>

            {/* Side by Side Ads */}
           <div className="grid md:grid-cols-2 gap-8">
 <div className="grid md:grid-cols-2 gap-8">
  {/* Display Ad */}
  <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg">
    <div className="flex items-center justify-between mb-4">
      <h4 className="text-lg font-bold text-slate-800">Display Ad</h4>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
        300x250
      </span>
    </div>
    <div className="flex justify-center items-center">
      <ins className="adsbygoogle"
           style={{ display: "inline-block", width: 300, height: 250 }}
           data-ad-client="ca-pub-5209083177847240"
           data-ad-slot="6369943514"></ins>
    </div>
  </div>

  {/* Square Ad */}
  <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg">
    <div className="flex items-center justify-between mb-4">
      <h4 className="text-lg font-bold text-slate-800">Square Ad</h4>
      <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full">
        250x250
      </span>
    </div>
    <div className="flex justify-center items-center">
      <ins className="adsbygoogle"
           style={{ display: "inline-block", width: 250, height: 250 }}
           data-ad-client="ca-pub-5209083177847240"
           data-ad-slot="8524499415"></ins>
    </div>
  </div>
</div>

{/* Banner Ad */}
<div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg">
  <div className="flex items-center justify-between mb-4">
    <h4 className="text-lg font-bold text-slate-800">Banner Advertisement</h4>
    <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full">
      728x90
    </span>
  </div>
  <div className="flex justify-center items-center">
    <ins className="adsbygoogle"
         style={{ display: "inline-block", width: 728, height: 90 }}
         data-ad-client="ca-pub-5209083177847240"
         data-ad-slot="5898336077"></ins>
  </div>
</div>
}


            {/* Ad Performance Info */}
<section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-800 to-slate-900">
  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-4">Support This Website</h3>
      <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
        The ads you see help support the development and maintenance of this website. 
        Thank you for your understanding and support!
      </p>
      <div className="flex items-center justify-center space-x-6 text-sm">
        <div className="flex items-center space-x-2">
          <CheckCircle className="w-4 h-4 text-green-400" />
          <span>Ad-free experience available</span>
        </div>
        <div className="flex items-center space-x-2">
          <Shield className="w-4 h-4 text-blue-400" />
          <span>Safe & relevant ads</span>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-300 mt-6 max-w-2xl mx-auto">
              Let's connect and discuss opportunities, projects, or just have a chat about technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <a href="mailto:bafna3249@gmail.com" className="group bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform w-fit">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Email</h3>
              <p className="text-slate-300 text-sm">bafna3249@gmail.com</p>
            </a>

            <a href="tel:+917249260870" className="group bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600 hover:border-green-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform w-fit">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
              <p className="text-slate-300 text-sm">+91 7249260870</p>
            </a>

            <a href="https://www.linkedin.com/in/sujal-bafna-70a343238/" className="group bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform w-fit">
                <Linkedin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">LinkedIn</h3>
              <p className="text-slate-300 text-sm">Connect with me</p>
            </a>

            <a href="https://github.com/sujalbafna" className="group bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600 hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform w-fit">
                <Github className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">GitHub</h3>
              <p className="text-slate-300 text-sm">View my code</p>
            </a>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://wa.me/917249260870" className="group flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>WhatsApp</span>
              </a>
            <a
  href="https://drive.google.com/uc?export=download&id=1gc-yzFHYk-aM5uy19E8aBK8y6skACi30"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="group flex items-center space-x-2 bg-slate-600 hover:bg-slate-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
    <Download className="w-5 h-5 group-hover:animate-bounce transition-transform" />
    <span>Download Resume</span>
  </button>
</a>

              
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, innovative projects, or just having a chat about technology.
            </p>
          </div>
          
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-500">
              © 2025 Sujal Bafna. Crafted with passion and powered by modern web technologies.
            </p>
          </div>
        </div>
      </footer>

       {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 z-40"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
    </div>
  );
}

export default App;
