import "./App.css";

const skills = {
  core: ["JavaScript", "React.js", "Node.js", "MongoDB", "Java"],
  supporting: ["HTML", "CSS", "Express.js", "Git", "GitHub"],
};

const projects = [
  {
    icon: "🚗",
    title: "Toll Management System",
    tech: "Database Management System",
    desc: "A DBMS-based toll management system for vehicle tracking and automated toll collection. Designed optimized MySQL schemas for vehicles, toll plazas, and transactions — enabling efficient report generation and data management.",
    tags: ["MySQL", "DBMS", "SQL Queries", "Database Design"],
    github: "https://github.com/amirthass",
  },
  {
    icon: "🌐",
    title: "Disaster Mesh",
    tech: "Emergency Communication System",
    desc: "A mesh networking solution enabling peer-to-peer communication during network outages caused by natural disasters — no centralized infrastructure required. Ensures reliable message delivery in low-connectivity emergency environments.",
    tags: ["Mesh Networking", "P2P", "Emergency Tech"],
    github: "https://github.com/amirthass",
  },
];

const profiles = [
  {
    emoji: "🐙",
    label: "GitHub",
    sub: "amirthass",
    href: "https://github.com/amirthass",
  },
  {
    emoji: "💻",
    label: "LeetCode",
    sub: "AmirthaSS",
    href: "https://leetcode.com/u/AmirthaSS/",
  },
  {
    emoji: "🔗",
    label: "LinkedIn",
    sub: "amirtha-sathies",
    href: "https://www.linkedin.com/in/amirtha-sathies-818199329/",
  },
];

function App() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="pf-root">
      {/* Background orbs */}
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />

      <div className="pf-wrap">
        {/* Navbar */}
        <nav className="pf-nav">
          <span className="pf-logo">Amirtha S S</span>
          <div className="pf-nav-links">
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("projects")}>Projects</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </div>
        </nav>

        {/* Hero */}
        <header className="pf-hero">
          <div className="pf-hero-left">
            <div className="pf-badge">
              <span className="pf-badge-dot" />
              Open to opportunities
            </div>

            <h1 className="pf-name">
              Hi, I'm<br />
              <span className="pf-name-gradient">Amirtha S S</span>
            </h1>

            <p className="pf-role">
              Aspiring <em>Full Stack Developer</em>
            </p>

            <p className="pf-bio">
              Passionate about building modern web applications using the MERN
              Stack and solving challenging coding problems through Data
              Structures and Algorithms.
            </p>

            <div className="pf-btns">
              <a
                href="https://github.com/amirthass"
                target="_blank"
                rel="noreferrer"
                className="pf-btn primary"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/amirtha-sathies-818199329/"
                target="_blank"
                rel="noreferrer"
                className="pf-btn ghost"
              >
                LinkedIn
              </a>
              <a
                href="https://leetcode.com/u/AmirthaSS/"
                target="_blank"
                rel="noreferrer"
                className="pf-btn ghost"
              >
                LeetCode
              </a>
            </div>

            <div className="pf-stats">
              <div className="pf-stat">
                <span className="pf-stat-num">8.19</span>
                <span className="pf-stat-label">CGPA</span>
              </div>
              <div className="pf-stat">
                <span className="pf-stat-num">2+</span>
                <span className="pf-stat-label">Projects</span>
              </div>
              <div className="pf-stat">
                <span className="pf-stat-num">10+</span>
                <span className="pf-stat-label">Skills</span>
              </div>
            </div>
          </div>

          <div className="pf-hero-right">
            <div className="pf-avatar-wrap">
              <div className="pf-avatar-glow" />
              <div className="pf-avatar-inner">
                <img
                  src="/amir.png"
                  alt="Amirtha S S"
                  className="pf-avatar-img"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="pf-avatar-fallback">AS</div>
              </div>
            </div>
          </div>
        </header>

        {/* About */}
        <section className="pf-section" id="about">
          <div className="pf-section-header">
            <span className="pf-section-label">About me</span>
            <div className="pf-section-line" />
          </div>
          <div className="glass">
            <p className="pf-about-text">
              I'm a Computer Science and Design student at Kongu Engineering
              College. I enjoy building web applications, learning new
              technologies, and solving real-world coding challenges. Currently
              strengthening my skills in MERN Stack development and Data
              Structures & Algorithms — always looking to build things that
              actually matter.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="pf-section">
          <div className="pf-section-header">
            <span className="pf-section-label">Skills</span>
            <div className="pf-section-line" />
          </div>
          <div className="pf-skills-grid">
            {skills.core.map((s) => (
              <span key={s} className="pf-skill core">
                {s}
              </span>
            ))}
            {skills.supporting.map((s) => (
              <span key={s} className="pf-skill">
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="pf-section" id="projects">
          <div className="pf-section-header">
            <span className="pf-section-label">Projects</span>
            <div className="pf-section-line" />
          </div>
          {projects.map((p) => (
            <div className="glass pf-proj" key={p.title}>
              <div className="pf-proj-header">
                <div className="pf-proj-icon">{p.icon}</div>
                <div>
                  <div className="pf-proj-title">{p.title}</div>
                  <div className="pf-proj-tech">{p.tech}</div>
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="pf-proj-link"
                >
                  View →
                </a>
              </div>
              <p className="pf-proj-desc">{p.desc}</p>
              <div className="pf-proj-tags">
                {p.tags.map((t) => (
                  <span key={t} className="pf-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="pf-section">
          <div className="pf-section-header">
            <span className="pf-section-label">Education</span>
            <div className="pf-section-line" />
          </div>
          <div className="glass pf-edu">
            <div className="pf-edu-icon">🎓</div>
            <div>
              <div className="pf-edu-degree">B.E Computer Science and Design</div>
              <div className="pf-edu-college">Kongu Engineering College</div>
              <div className="pf-edu-gpa">★ CGPA: 8.19</div>
            </div>
          </div>
        </section>

        {/* Coding Profiles */}
        <section className="pf-section">
          <div className="pf-section-header">
            <span className="pf-section-label">Coding profiles</span>
            <div className="pf-section-line" />
          </div>
          <div className="pf-profiles">
            {profiles.map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="pf-profile-link"
              >
                <span className="pf-profile-emoji">{p.emoji}</span>
                <span className="pf-profile-name">{p.label}</span>
                <span className="pf-profile-sub">{p.sub}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="pf-section" id="contact">
          <div className="pf-section-header">
            <span className="pf-section-label">Contact</span>
            <div className="pf-section-line" />
          </div>
          <div className="glass pf-contact">
            <div className="pf-contact-row">
              <div className="pf-contact-icon">✉️</div>
              <a href="mailto:amirthass.24csd@kongu.edu">
                amirthass.24csd@kongu.edu
              </a>
            </div>
            <div className="pf-contact-row">
              <div className="pf-contact-icon">📍</div>
              <span>Tamil Nadu, India</span>
            </div>
          </div>
        </section>

        <footer className="pf-footer">
          Built with passion by{" "}
          <span className="pf-footer-name">Amirtha S S</span> · 2026
        </footer>
      </div>
    </div>
  );
}

export default App;