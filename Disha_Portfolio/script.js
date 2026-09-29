const RESUME_URL = "assets/Disha_Makkar_Resume.pdf"; 

const projects = [
  {
    title: "HackOS – iOS App",
    date: "In progress",
    status: "Currently building · iOS",
    symbol: "▣",
    description: "Building a comprehensive hackathon management platform that automates the entire hackathon lifecycle, from participant registration and team formation to problem statement management, submissions, judging, leaderboards, and result announcements. Designed to streamline operations for organizers and provide participants with a seamless end-to-end hackathon experience.",
    tags: ["Swift", "SwiftUI", "iOS","Hackathon Management"],
    github: "",
    demo: ""
  },
  {
  title: "Enterprise Knowledge Agent",
  date: "September 2026",
  symbol: "✧",
  description: "Developed an AI-powered Enterprise Knowledge Agent for Chitkara University that enables users to ask enterprise-related questions and receive detailed, context-aware answers through an interactive chatbot. Built to simplify access to institutional and enterprise knowledge by making information easier to query and understand.",
  tags: ["AI", "LLMs", "RAG", "Python", "Microsoft Foundry"],
  github: "",
  demo: "YOUR_DEPLOYED_LINK_HERE"
  },
  {
  title: "Customer Churn Prediction Using Machine Learning",
  date: "April 2026",
  symbol: "▥",
  description:"Built a machine learning model to predict customer churn through data cleaning, EDA, and feature analysis. Trained and compared multiple classification algorithms, including Logistic Regression, Decision Tree, and Random Forest, using ROC-AUC curves and performance metrics for evaluation.",
  tags: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "EDA",
    "Classification",
    "Random Forest",
    "Decision Tree",
    "Logistic Regression",
    "ROC-AUC"
  ],
  github: "",
  demo: ""
},
  {
  title: "IoT Smart Cradle – Baby Monitoring System",
  date: "October 2025",
  symbol: "⌁",
  description: "Developed an IoT-based smart cradle using ESP32 and multiple sensors to monitor a baby's comfort. Integrated sound detection to activate a fan when the baby cries and send email notifications to parents, along with a moisture sensor to detect a wet diaper. The system also incorporated temperature and motion monitoring to support real-time monitoring and automated responses.",
  tags: [
    "ESP32",
    "IoT",
    "Embedded Systems",
    "Sensors",
    "Hardware Automation",
    "Email Notifications"
  ],
  github: "",
  demo: ""
},
  {
  title: "Online Learning Platform – Udemy Clone",
  date: "August 2025",
  symbol: "▣",
  description: "Developed an Udemy-inspired online learning platform where users can explore and purchase courses. Initially built using Django, the application was subsequently recreated using Flask with API integration, strengthening skills in backend development, web frameworks, and API-based communication.",
  tags: [
    "Python",
    "Django",
    "Flask",
    "REST APIs",
    "Backend Development",
    "Web Development"
  ],
  github: "",
  demo: ""
},
  {
  title: "Solve Smart – Multi-Functional Calculator",
  date: "December 2024",
  symbol: "＋",
  description: "Developed a multi-functional calculator web application featuring standard and scientific calculations, fractional operations, logarithmic functions, standard deviation, loan EMI calculations, and a BMI calculator. Built an interactive interface to simplify mathematical computations and everyday financial and health-related calculations.",
  tags: [
    "HTML",
    "CSS",
    "JavaScript",
    "Scientific Computing",
    "Financial Calculations",
    "Statistical Analysis"
  ],
  github: "",
  demo: ""
}
];

const certificates = [
  { title: "Develop AI Apps and Agents on Azure", issuer: "Microsoft", date: "September 2026", category: "Microsoft & Azure", verificationUrl: "certifications/azure_project.pdf" },
  { title: "Design and Manage Analytics Solutions Using Power BI", issuer: "Microsoft", date: "September 2026", category: "Microsoft & Azure", verificationUrl: "certifications/powerbi.pdf" },
  { title: "Data Analytics Job Simulation", issuer: "Deloitte · Forage", date: "April 2026", category: "Forage & Virtual Experiences", verificationUrl: "certifications/deloitte certificate.pdf" },
  { title: "Basics of Python", issuer: "Infosys Springboard", date: "August 2026", category: "Coursera & Infosys", verificationUrl: "certifications/infosys_certificate_python.pdf" },
  { title: "Java Programming Fundamentals", issuer: "Infosys Springboard", date: "April 2026", category: "Coursera & Infosys", verificationUrl: "certifications/java_infosys.pdf" },
  { title: "Network Fundamentals", issuer: "Infosys Springboard", date: "August 2026", category: "Coursera & Infosys", verificationUrl: "certifications/cndc.pdf" },
  { title: "Introduction to IoT and Digital Transformation", issuer: "Cisco Networking Academy", date: "December 2025", category: "Cisco Networking Academy", verificationUrl: "certifications/iot.pdf" },
  { title: "GenAI Fundamentals", issuer: "Certificate issuer to confirm", date: "July 2025", category: "Workshops & Participation", verificationUrl: "certifications/genAI.pdf" },
  { title: "Azure Data Fundamentals", issuer: "Microsoft", date: "August 2025", category: "Microsoft & Azure", verificationUrl: "certifications/MicrosoftAzureFundamentals.pdf" },
  { title: "Azure AI Fundamentals", issuer: "Microsoft", date: "November 2024", category: "Microsoft & Azure", verificationUrl: "certifications/azureAIFundamantals.pdf" },
  { title: "Natural Disaster Risk in Infrastructure Projects", issuer: "Coursera", date: "November 2024", category: "Coursera & Infosys", verificationUrl: "certifications/natural.pdf" },
  { title: "Entrepreneurship: Launching an Innovative Business", issuer: "Coursera", date: "March 2026", category: "Coursera & Infosys", verificationUrl: "certifications/entrepreneurship_final.pdf" },
  { title: "Agnirva Space Internship Program", issuer: "Agnirva Space", date: "March 2025", category: "Forage & Virtual Experiences", verificationUrl: "certifications/AGNIRVASPACE.pdf" },
  {title: "Introduction to Cybersecurity",issuer: "Cisco Networking Academy · Chitkara University CoE",date: "January 2025", category: "Coursera & Infosys",verificationUrl: "certifications/cyberSecurity.pdf"},
  {title: "Game Design: Art and Concepts",issuer: "CalArts · Coursera",date: "January 2025", category: "Coursera & Infosys",verificationUrl: "certifications/gameDesign.pdf"}
];

const projectGrid = document.getElementById("projectsGrid");
const certificateGrid = document.getElementById("certificateGrid");
const filterBar = document.getElementById("certificateFilters");

function safeLink(url, label, primary = false) {
  if (!url) {
    return `<span class="button button-outline button-disabled" aria-disabled="true" title="Add a real link in script.js">${label}</span>`;
  }
  return `<a class="button ${primary ? "button-primary" : "button-outline"}" href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`;
}

function renderProjects() {
  projectGrid.innerHTML = projects.map((project) => `
    <article class="project-card card">
      <div class="project-visual"><span class="visual-symbol" aria-hidden="true">${project.symbol}</span></div>
      <div class="project-content">
        <div class="project-title-row"><h3>${project.title}</h3><span class="project-date ${project.status ? "project-status" : ""}">${project.status || project.date}</span></div>
        <p>${project.description}</p>
        <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
        <div class="project-actions">${safeLink(project.github, "⌘ &nbsp; View Code", true)}${safeLink(project.demo, "Live Demo")}</div>
      </div>
    </article>
  `).join("");
}

const categories = ["All", "Microsoft & Azure", "Coursera & Infosys", "Cisco Networking Academy", "Forage & Virtual Experiences", "Workshops & Participation"];

function renderFilters() {
  filterBar.innerHTML = categories.map((category, index) =>
    `<button class="filter-button ${index === 0 ? "active" : ""}" type="button" data-category="${category}">${category}</button>`
  ).join("");
  filterBar.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-category]");
    if (!button) return;
    filterBar.querySelectorAll("button").forEach(item => item.classList.toggle("active", item === button));
    renderCertificates(button.dataset.category);
  });
}

function renderCertificates(filter = "All") {
  const shown =
    filter === "All"
      ? certificates
      : certificates.filter(cert => cert.category === filter);

  document.getElementById("certificateCount").textContent =
    `${certificates.length} learning milestones`;

  certificateGrid.innerHTML = shown.map(cert => `
    <article class="cert-card card">
      <h3>${cert.title}</h3>

      <div class="cert-meta">
        ${cert.issuer}<br>
        ${cert.date}
      </div>

      ${
        cert.verificationUrl
          ? `<a
               class="button button-outline"
               href="${cert.verificationUrl}"
               target="_blank"
               rel="noopener noreferrer"
             >View Certificate ↗</a>`
          : `<span
               class="button button-outline button-disabled"
               aria-disabled="true"
             >Link to be added</span>`
      }
    </article>
  `).join("");
}

function setupResumeButtons() {
  const buttons = [document.getElementById("navResume"), document.getElementById("heroResume")];
  buttons.forEach((button) => {
    if (!button) return;
    if (RESUME_URL) {
      button.href = RESUME_URL;
      button.setAttribute("download", "Disha_Makkar_Resume.pdf");
      button.removeAttribute("title");
    } else {
      button.href = "#contact";
      button.title = "Add your resume PDF path to RESUME_URL in script.js";
      button.addEventListener("click", (event) => {
        event.preventDefault();
        alert("To enable your resume download, add your PDF to the website folder and set RESUME_URL at the top of script.js.");
      });
    }
  });
}

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuToggle.textContent = isOpen ? "×" : "☰";
  });
  navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  }));
}

// Day / night theme. The selection is remembered in this browser.
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  let savedTheme = "light";
  try { savedTheme = localStorage.getItem("portfolio-theme") || "light"; } catch (error) { /* Storage may be unavailable. */ }
  if (savedTheme === "dark") document.body.classList.add("dark-theme");

  function updateThemeButton() {
    const isDark = document.body.classList.contains("dark-theme");
    themeToggle.textContent = isDark ? "☀" : "☾";
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    themeToggle.title = isDark ? "Switch to light mode" : "Switch to dark mode";
  }

  updateThemeButton();
  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    try { localStorage.setItem("portfolio-theme", isDark ? "dark" : "light"); } catch (error) { /* Theme still works without storage. */ }
    updateThemeButton();
  });
}

renderProjects();
renderFilters();
renderCertificates();
setupResumeButtons();
document.getElementById("year").textContent = new Date().getFullYear();


