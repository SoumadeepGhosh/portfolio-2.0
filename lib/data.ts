import type { IconType } from "react-icons"
import {
 SiJavascript,
  SiC,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiPycharm,
  SiIntellijidea,
  SiCanva,
  SiFigma,
  SiFirebase,
  SiRedux,
  SiPython,
 
  SiDotnet,
  SiNumpy,
  SiPandas,
  SiStreamlit,
  SiMysql,
  SiPostman,
  SiVisualstudio,
  SiFlux, // Added Redux
} from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { TbBrandVscode , TbBrandCSharp} from "react-icons/tb" // Import TbBrandVscode


export const personalData = {
  name: "Soumadeep Ghosh",
  tagline: "Full Stack Developer",
  email: "ghoshsoumadeep98@gmail.com",
  phone: "+91-8653980889",
  linkedin: "https://www.linkedin.com/in/soumadeep-ghosh/",
  github: "https://github.com/SoumadeepGhosh",
  leetcode: "https://leetcode.com/SoumadeepGhosh/",
  resumeDownloadLink: "/Soumadeep_Ghosh_Resume.pdf", // Placeholder, ensure you place your resume PDF in the public folder
  dynamicRoles: ["Full Stack Developer", "Creative Coder", "Problem Solver", "MERN Stack Expert"],
}

export const profileSummary = `Motivated full-stack web developer with expertise in Java, JavaScript, and MERN stack technologies. Recently completed final year of B.Tech, with a strong passion for building scalable applications and solving real-world problems. Experienced in collaborative development and project-based learning, eager to contribute to dynamic tech teams.`

export const skills: { name: string; icon: string }[] = [
  // 🔹 Programming Languages
  { name: "Java", icon: "FaJava" },
  { name: "C", icon: "SiC" },
  { name: "C#", icon: "TbBrandCSharp" },
  { name: "Python", icon: "SiPython" },
  { name: "JavaScript", icon: "SiJavascript" },

  // 🔹 Frameworks & Libraries
  { name: "React.js", icon: "SiReact" },
  { name: "Next.js", icon: "SiNextdotjs" },
  { name: "Node.js", icon: "SiNodedotjs" },
  { name: "Express.js", icon: "SiExpress" },
  { name: "Redux", icon: "SiRedux" },
  { name: "Flux", icon: "SiFlux" },
  { name: ".NET Core", icon: "SiDotnet" },
  { name: "Streamlit", icon: "SiStreamlit" },

  // 🔹 Python Libraries
  { name: "NumPy", icon: "SiNumpy" },
  { name: "Pandas", icon: "SiPandas" },

  // 🔹 Databases
  { name: "PostgreSQL", icon: "SiPostgresql" },
  { name: "MySQL", icon: "SiMysql" },
  { name: "MongoDB", icon: "SiMongodb" },

  // 🔹 Web Technologies
  { name: "HTML", icon: "SiHtml5" },
  { name: "CSS", icon: "SiCss3" },
  { name: "Bootstrap", icon: "SiBootstrap" },

  // 🔹 Tools & IDEs
  { name: "VS Code", icon: "TbBrandVscode" },
  { name: "Visual Studio", icon: "SiVisualstudio" },
  { name: "PyCharm", icon: "SiPycharm" },
  { name: "IntelliJ IDEA", icon: "SiIntellijidea" },
  { name: "Postman", icon: "SiPostman" },

  // 🔹 Design & Cloud
  { name: "Firebase", icon: "SiFirebase" },
  { name: "Canva", icon: "SiCanva" },
  { name: "Figma", icon: "SiFigma" },
]

export const projects = [
  // Featured Projects - moved to top
  {
    title: "AI Career Coach - LAKASHAI",
    stack: "Next.js, Neon DB, Clerk, Inngest, Chart.js, Google Gemini API",
    description:
      "Built an AI-powered platform to help users generate resumes and cover letters tailored to their domain. Integrated Neon DB for scalable PostgreSQL storage and used Clerk for authentication. Included interactive growth dashboards and industry insights through charts and live data.",
    github: "https://github.com/SoumadeepGhosh/LAKASHAI",
    live: "https://lakashai.vercel.app",
    image: "/lakshAi.mp4", // Updated to GIF
  },
  {
    title: "E-Commerce Website",
    stack: "MERN Stack, Stripe Payment, React.js, Node.js",
    description:
      "Developed a fully functional e-commerce platform using the MERN stack. Integrated Stripe payment gateway for secure online transactions. Implemented user authentication, product listing, and order management features.",
    github: "https://github.com/SoumadeepGhosh/ECommerce-Client",
    live: "https://e-commerce-client-ivory-psi.vercel.app",
    image: "/ecom.mp4", // Updated to GIF
  },
  {
    title: "Collaborative Real-Time Code Editor",
    stack: "React.js, Socket.IO, Node.js, JavaScript",
    description:
      "Developed a real-time collaborative code editor using React and Socket.IO. Implemented support for multiple programming languages including Java, C++, JavaScript, and Python. Enabled live collaboration with friends, displaying real-time updates and edits seamlessly.",
    github: "https://github.com/SoumadeepGhosh/Realtime-Code-Editor.git",
    live: "https://realtime-code-editor-xxfx.onrender.com",
    image: "/codeeditor.mp4", // Updated to GIF
  },
  // Other Projects
  {
    title: "CHATTY – Real-Time Chat App",
    stack: "React, Firebase, Tailwind CSS",
    description:
      "A real-time chat application using Firebase authentication and Firestore. Users can join instantly, send messages, and view messages live.",
    github: "https://github.com/SoumadeepGhosh/Chatty", // Replace with actual GitHub link
    live: "#", // Replace with actual live link or remove if not available
    image: "/chatty.png", // Replace with actual image/GIF
  },
  {
    title: "Jarvis – AI Voice Assistant (Browser-based)",
    stack: "HTML, JavaScript, Web Speech API",
    description:
      "A browser-based voice assistant that takes voice commands to perform tasks like opening websites, speaking text, and more.",
    github: "https://github.com/SoumadeepGhosh/Jarvis-AI-Voice-Assistant", // Replace with actual GitHub link
    live: "#", // Replace with actual live link or remove if not available
    image: "/jarvis.png", // Replace with actual image/GIF
  },
  {
    title: "NoteNest – Online Note Keeping App",
    stack: "React, Node.js, Express, MongoDB, JWT",
    description:
      "A secure and user-friendly note-taking web app. Supports authentication, CRUD operations, and responsive design.",
    github: "https://github.com/SoumadeepGhosh/NoteNest", // Replace with actual GitHub link
    live: "#", // Replace with actual live link or remove if not available
    image: "/note.mp4", // Replace with actual image/GIF
  },
  {
    title: "BookStore – Book Management & Shopping App",
    stack: "React, Redux, Node.js, Express",
    description:
      "A fully functional book store with features like adding to cart, browsing categories, and viewing book details.",
    github: "https://github.com/SoumadeepGhosh/BookStore", // Replace with actual GitHub link
    live: "#", // Replace with actual live link or remove if not available
    image: "/book.mp4", // Replace with actual image/GIF
  },
]

export const education = [
  {
    institution: "Techno International Batanagar",
    location: "Kolkata, India",
    degree: "B.Tech in Computer Science and Engineering",
    gpa: "CGPA: 8.23/10 (up to 7th sem)",
    period: "July 2021 – June 2025",
  },
  {
    institution: "Goaltore High School (HS)",
    location: "WBCHSE Board",
    degree: "Higher Secondary",
    percentage: "Percentage: 76.8%",
    period: "2021",
  },
  {
    institution: "Goaltore High School (HS)",
    location: "WBBSC Board",
    degree: "Secondary",
    percentage: "Percentage: 76.7%",
    period: "2019",
  },
]

export const certificationsAchievements = [
  {
    type: "Certification",
    title: "The Complete 2024 Web Development Bootcamp",
    platform: "Udemy",
    date: "Jan 2024",
    description: "A comprehensive bootcamp covering modern web development technologies from front-end to back-end.",
  },
  {
    type: "Certification",
    title: "Backend Development Course",
    platform: "Physics Wallah",
    date: "Mar 2023",
    description: "In-depth course on backend development principles, APIs, and database management.",
  },
  {
    type: "Certification",
    title: "Industrial Training – Web Development Series",
    platform: "Self-paced",
    date: "Aug 2022",
    description: "Practical training series focusing on full-stack web development projects and best practices.",
  },
  {
    type: "Achievement",
    title: "Solved 100+ problems on LeetCode.",
    platform: "LeetCode",
    date: "Ongoing",
    description: "Demonstrated strong algorithmic and data structure skills by solving over 100 coding challenges.",
  },
  {
    type: "Achievement",
    title: "Earned 3 stars in Python on HackerRank.",
    platform: "HackerRank",
    date: "Dec 2022",
    description: "Achieved a high ranking on HackerRank, showcasing proficiency in Python programming.",
  },
  {
    type: "Achievement",
    title: "Secured 1st position in PRAYAS Inter-College Project Competition.",
    platform: "PRAYAS Competition",
    date: "Apr 2023",
    description: "Led a team to win first place in a competitive inter-college project showcase.",
  },
]

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  // { name: "Testimonials", href: "#testimonials" }, Removed Testimonials nav link
  { name: "Contact", href: "#contact" },
]

// Mapping string names to actual icon components
export const iconComponents: { [key: string]: IconType } = {
  FaJava,
  SiJavascript,
  SiC,
  SiPython,
  TbBrandCSharp,
  SiDotnet,
  SiNumpy,
  SiPandas,
  SiStreamlit,
  SiFlux,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  TbBrandVscode,
  SiVisualstudio,
  SiPycharm,
  SiIntellijidea,
  SiPostman,
  SiCanva,
  SiFigma,
  SiFirebase,
  SiRedux,
}
