// All site content lives here. Edit the data below and refresh the page.

const skills = {
  Cloud: ["AWS", "GCP", "Azure"],
  Containers: ["Docker", "Kubernetes", "Helm"],
  IaC: ["Terraform", "Ansible", "CloudFormation"],
  "CI/CD": ["GitHub Actions", "GitLab CI", "Jenkins", "ArgoCD"],
  Observability: ["Prometheus", "Grafana"],
  Scripting: ["Bash", "Python"],
};

const shots = [
  { src: "images/shot-desktop.jpg", label: "~/workstation" },
  { src: "images/shot-terminal.jpg", label: "$ kubectl get pods" },
  { src: "images/shot-monitoring.jpg", label: "grafana · infra overview" },
];

const gh = "https://github.com/praful0419/";

const projects = [
  {
    name: "devops-cicd-pipeline",
    desc: "End-to-end CI/CD: GitHub webhook triggers Jenkins, builds a Docker image, pushes to Amazon ECR and deploys on EC2.",
    tags: ["Jenkins", "Docker", "AWS ECR", "EC2"],
    stat: "CI/CD",
    url: gh + "devops-cicd-pipeline",
  },
  {
    name: "Snappy-chat-app",
    desc: "Real-time chat application using React, Node.js and Socket.io with MongoDB.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    stat: "JavaScript",
    url: gh + "Snappy-chat-app",
  },
  {
    name: "simple-html-website",
    desc: "DevOps project hosting a simple website using GitHub Pages.",
    tags: ["HTML", "GitHub Pages"],
    stat: "HTML",
    url: gh + "simple-html-website",
  },
  {
    name: "Flask-app",
    desc: "Simple Python Flask application ready for container deployment.",
    tags: ["Python", "Flask", "Docker"],
    stat: "Python",
    url: gh + "Flask-app",
  },
  {
    name: "simple-java-project",
    desc: "Java application used for build automation and CI pipeline practice.",
    tags: ["Java", "Maven", "Jenkins"],
    stat: "Java",
    url: gh + "simple-java-project",
  },
];

const experience = [
  {
    role: "DevOps Engineer",
    co: "Softogrid Solutions Pvt. Ltd.",
    time: "5 years",
    note: "CI/CD automation with Jenkins, AWS cloud infrastructure, Docker and Kubernetes deployments, Terraform and monitoring with Prometheus & Grafana.",
  },
];

// ---------- rendering ----------

function renderSkills() {
  const grid = document.getElementById("skill-grid");
  if (!grid) return;
  grid.innerHTML = Object.entries(skills)
    .map(
      ([group, items]) => `
        <div class="skill-card">
          <h3>${group}</h3>
          <div class="skill-tags">
            ${items.map((s) => `<span>${s}</span>`).join("")}
          </div>
        </div>`,
    )
    .join("");
}

function renderShots() {
  const grid = document.getElementById("shot-grid");
  if (!grid) return;
  grid.innerHTML = shots
    .map(
      (s) => `
        <figure class="shot">
          <img src="${s.src}" alt="${s.label}" loading="lazy" width="1024" height="640" />
          <figcaption>${s.label}</figcaption>
        </figure>`,
    )
    .join("");
}

function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;
  grid.innerHTML = projects
    .map(
      (p) => `
        <a class="project-card" href="${p.url}" target="_blank" rel="noreferrer">
          <div class="project-top">
            <h3 class="project-name">${p.name}</h3>
            <span class="project-stat">${p.stat}</span>
          </div>
          <p class="project-desc">${p.desc}</p>
          <div class="project-tags">
            ${p.tags.map((t) => `<span>#${t}</span>`).join("")}
          </div>
          <p class="project-more">→ view on GitHub</p>
        </a>`,
    )
    .join("");
}

function renderExperience() {
  const list = document.getElementById("timeline");
  if (!list) return;
  list.innerHTML = experience
    .map(
      (e) => `
        <li>
          <p class="time">${e.time}</p>
          <h3>${e.role} · <span>${e.co}</span></h3>
          <p class="note">${e.note}</p>
        </li>`,
    )
    .join("");
}

function renderYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderShots();
  renderProjects();
  renderExperience();
  renderYear();
});
