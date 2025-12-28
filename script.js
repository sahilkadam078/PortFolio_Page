// Data - Projects
const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing products, orders, and customer analytics. Features dark mode and real-time data visualization.",
    techStack: ["React", "Tailwind CSS", "Recharts", "Node.js"],
    category: "Full-Stack",
    level: "Advanced",
    type: "Real-world",
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    title: "Task Master API",
    description: "RESTful API for a task management application with JWT authentication, role-based access control, and advanced filtering.",
    techStack: ["Node.js", "Express", "MongoDB", "Jest"],
    category: "Backend",
    level: "Intermediate",
    type: "Practice",
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "Portfolio V1",
    description: "My first portfolio website built with simple HTML and CSS. A great learning experience in responsive design.",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    level: "Beginner",
    type: "College",
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 4,
    title: "AI Chat Interface",
    description: "A clean, responsive chat interface integration with OpenAI's API. Supports markdown rendering and code highlighting.",
    techStack: ["Vue.js", "OpenAI API", "CSS Modules"],
    category: "Frontend",
    level: "Intermediate",
    type: "Practice",
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 5,
    title: "Social Media Graph",
    description: "Backend service to model social relationships using a graph database. Optimized for friend suggestion queries.",
    techStack: ["Python", "Neo4j", "Flask"],
    category: "Backend",
    level: "Advanced",
    type: "Real-world",
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 6,
    title: "Weather Widget",
    description: "A minimal weather widget that detects user location and shows current forecast. Uses local storage for preferences.",
    techStack: ["Vanilla JS", "OpenWeather API", "CSS"],
    category: "Frontend",
    level: "Beginner",
    type: "Practice",
    liveLink: "#",
    githubLink: "#"
  }
];

// Data - Timeline
const timelineData = [
  {
    month: "Dec 2024",
    title: "Mastering Next.js",
    achievement: "Built a full-stack blog with Server Components."
  },
  {
    month: "Oct 2024",
    title: "Backend Deep Dive",
    achievement: "Learned System Design patterns and Microservices."
  },
  {
    month: "Aug 2024",
    title: "Advanced React",
    achievement: "Contributed to a major open-source UI library."
  },
  {
    month: "Jun 2024",
    title: "First Freelance Gig",
    achievement: "Delivered a custom Shopify theme for a client."
  },
  {
    month: "Jan 2024",
    title: "Started Journey",
    achievement: "Completed Full-Stack Bootcamp with distinction."
  }
];

// DOM Elements
const projectsGrid = document.getElementById('projects-grid');
const searchInput = document.getElementById('project-search');
const categoryFilter = document.getElementById('filter-category');
const levelFilter = document.getElementById('filter-level');
const timelineContainer = document.getElementById('timeline-container');
const themeToggle = document.getElementById('theme-toggle');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  renderProjects(projects);
  renderTimeline(timelineData);
  lucide.createIcons();
  
  // Set initial theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
});

// --- Functions ---

function createProjectCard(project) {
  const techHtml = project.techStack.map(tech => `<span class="tech-pill">${tech}</span>`).join('');
  
  return `
    <div class="project-card fade-in">
      <div class="project-header">
        <div class="project-badges">
          <span class="badge badge-${project.category.replace(' ', '-')}">${project.category}</span>
          <span class="badge badge-level">${project.level}</span>
        </div>
        <div class="project-type" style="color: var(--text-secondary); font-size: 0.8rem;">
          ${project.type}
        </div>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-tech">
          ${techHtml}
        </div>
        <div class="project-links">
          <a href="${project.liveLink}" class="link-btn" style="color: var(--primary-color);">
            <i data-lucide="external-link" style="width:16px;"></i> Live Demo
          </a>
          <a href="${project.githubLink}" class="link-btn" style="color: var(--text-primary);">
            <i data-lucide="github" style="width:16px;"></i> Code
          </a>
        </div>
      </div>
    </div>
  `;
}

function renderProjects(projectsToRender) {
  projectsGrid.innerHTML = projectsToRender.map(createProjectCard).join('');
  // Re-initialize icons for new elements
  lucide.createIcons();
}

function filterProjects() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;
  const selectedLevel = levelFilter.value;

  const filtered = projects.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm) || 
      project.techStack.some(tech => tech.toLowerCase().includes(searchTerm));
    
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || project.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  renderProjects(filtered);
}

function renderTimeline(data) {
  const html = data.map((item, index) => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-date">${item.month}</span>
        <h4 class="timeline-title">${item.title}</h4>
        <p class="timeline-achievement">${item.achievement}</p>
      </div>
    </div>
  `).join('');
  
  timelineContainer.innerHTML = html;
}

// --- Event Listeners ---

// Search & Filter
searchInput.addEventListener('input', filterProjects);
categoryFilter.addEventListener('change', filterProjects);
levelFilter.addEventListener('change', filterProjects);

// Theme Toggle
themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// Mobile Menu
mobileMenuBtn.addEventListener('click', () => {
  const isDisplay = mobileMenu.style.display === 'flex';
  mobileMenu.style.display = isDisplay ? 'none' : 'flex';
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    mobileMenu.style.display = 'none'; // Close mobile menu on click
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Add animation classes to sections
document.querySelectorAll('.section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(section);
});
