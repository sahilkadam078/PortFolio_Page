// Data - Projects
const projects = [
  {
    id: 1,
    title: "Airbnb Clone",
    description: "A full-stack clone of Airbnb with listings, routing, and dynamic content rendering.",
    techStack: ["Node.js", "Express", "MongoDB", "EJS"],
    category: "Full-Stack",
    level: "Intermediate",
    type: "Practice",
    liveLink: "https://airbnb-clone-sahil.onrender.com/listings",
    githubLink: "https://github.com/sahilkadam078/Major_Projects/tree/main/AirBnb_Clone"
  },
  {
    id: 2,
    title: "Portfolio Page",
    description: "My first personal portfolio page built while learning web development basics.",
    techStack: ["HTML", "CSS"],
    category: "Frontend",
    level: "Beginner",
    type: "College",
    liveLink: "https://sahilkadam078.github.io/PortFolio_Page/index.html",
    githubLink: "https://github.com/sahilkadam078/PortFolio_Page"
  },
  {
    id: 3,
    title: "Smart Waste Management Portal (EcoTrack)",
    description: "A web portal designed to spread awareness and manage waste efficiently as part of a smart city initiative.",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: "Full-Stack",
    level: "Intermediate",
    type: "College",
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 4,
    title: "Simon Says Game",
    description: "A memory-based game implemented using JavaScript event handling.",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    level: "Beginner",
    type: "Practice",
    liveLink: "https://sahilkadam078.github.io/HTML_CSS_JS_Mini_Project/Simon_Says_Game/public/index.html",
    githubLink: "https://github.com/sahilkadam078/HTML_CSS_JS_Mini_Project/tree/main/Simon_Says_Game"
  },
  {
    id: 5,
    title: "Rock Paper Scissors Game",
    description: "A simple browser-based game using JavaScript logic and DOM manipulation.",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    level: "Beginner",
    type: "Practice",
    liveLink: "https://sahilkadam078.github.io/HTML_CSS_JS_Mini_Project/Rock_Paper_Scissors_Game/Public/index.html",
    githubLink: "https://github.com/sahilkadam078/HTML_CSS_JS_Mini_Project/tree/main/Rock_Paper_Scissors_Game"
  },
  {
    id: 6,
    title: "To-Do App",
    description: "A task management app with add, delete, and mark-complete features.",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    level: "Beginner",
    type: "Practice",
    liveLink: "https://sahilkadam078.github.io/HTML_CSS_JS_Mini_Project/to_do_app/public/index.html",
    githubLink: "https://github.com/sahilkadam078/HTML_CSS_JS_Mini_Project/tree/main/to_do_app"
  },
  {
    id: 7,
    title: "Professional Website",
    description: "A clean and responsive personal portfolio website showcasing skills and projects.",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    level: "Intermediate",
    type: "Practice",
    liveLink: "https://sahilkadam078.github.io/HTML_CSS_Mini_Project/Professional_Website/index.html",
    githubLink: "https://github.com/sahilkadam078/HTML_CSS_Mini_Project/tree/main/Professional_Website"
  },
  {
    id: 8,
    title: "Spotify UI Clone",
    description: "A frontend clone of Spotify focusing on layout, responsiveness, and UI accuracy.",
    techStack: ["HTML", "CSS"],
    category: "Frontend",
    level: "Beginner",
    type: "Practice",
    liveLink: "https://sahilkadam078.github.io/HTML_CSS_Mini_Project/Project_2/public/index.html",
    githubLink: "https://github.com/sahilkadam078/HTML_CSS_Mini_Project/tree/main/Project_2"
  },
  {
    id: 9,
    title: "Amazon UI Clone",
    description: "A responsive Amazon homepage clone built to practice real-world UI layouts.",
    techStack: ["HTML", "CSS"],
    category: "Frontend",
    level: "Beginner",
    type: "Practice",
    liveLink: "https://sahilkadam078.github.io/HTML_CSS_Mini_Project/Project_3/public/index.html",
    githubLink: "https://github.com/sahilkadam078/HTML_CSS_Mini_Project/tree/main/Project_3"
  },
  
  {
    id: 10,
    title: "Sidebar Menu Project",
    description: "An interactive sidebar navigation menu built using JavaScript.",
    techStack: ["HTML", "CSS"],
    category: "Frontend",
    level: "Beginner",
    type: "Practice",
    liveLink: "https://sahilkadam078.github.io/HTML_CSS_Mini_Project/Project_1/public/index.html",
    githubLink: "https://github.com/sahilkadam078/HTML_CSS_Mini_Project/tree/main/Project_1"
  }
];



// Data - Timeline
const timelineData = [
  {
    month: "2026 (Current)",
    title: "MERN Stack Learning",
    achievement: "Building full-stack projects using MongoDB, Express, React, and Node.js."
  },
  {
    month: "Dec 2025",
    title: "Backend Fundamentals",
    achievement: "Learned Node.js, Express, REST APIs, SQL and MongoDB basics."
  },
  {
    month: "Oct 2024",
    title: "JavaScript Deep Dive",
    achievement: "Improved JavaScript fundamentals, DOM manipulation, and ES6 concepts."
  },
  {
    month: "Aug 2025",
    title: "Frontend Development",
    achievement: "Built responsive websites using HTML, CSS, and basic JavaScript."
  },
  {
    month: "June 2025",
    title: "Started Web Development",
    achievement: "Began learning web development alongside BSc Computer Science studies."
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
