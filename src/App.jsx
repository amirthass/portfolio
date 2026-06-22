import "./App.css";

function App() {
  return (
    <div className="container">
<header className="hero">
  <div className="hero-left">
    <p className="greeting">Hi, I'm</p>

    <h1>Amirtha S S</h1>
    <br></br>
    <h2>Aspiring Full Stack Developer</h2>

    <p className="hero-text">
      Passionate about building modern web applications
      using the MERN Stack and solving challenging
      coding problems through Data Structures and Algorithms.
    </p>

    <div className="hero-buttons">
      <a
        href="https://github.com/amirthass"
        target="_blank"
        rel="noreferrer"
        className="btn"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/amirtha-sathies-818199329/"
        target="_blank"
        rel="noreferrer"
        className="btn"
      >
        LinkedIn
      </a>

      <a
        href="https://leetcode.com/u/AmirthaSS/"
        target="_blank"
        rel="noreferrer"
        className="btn"
      >
        LeetCode
      </a>
    </div>
  </div>

  <div className="hero-right">
    <img
      src="/amir.png"
      alt="Amirtha"
      className="profile-image"
    />
  </div>
</header>

      <section className="card">
        <h2>About Me</h2>
        <p>
          I am a Computer Science and Design student at Kongu Engineering
          College. I enjoy building web applications, learning new technologies,
          and solving coding challenges. Currently, I am strengthening my
          skills in MERN Stack development and Data Structures & Algorithms.
        </p>
      </section>

      <section className="card">
        <h2>Skills</h2>
        <div className="skills">
          <span>Java</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>Git</span>
          <span>GitHub</span>
        </div>
      </section>
<section className="card">
  <h2>💼 Projects</h2>

  <div className="project">
    <h3>🚗 Toll Management System</h3>

    <p>
      Built a DBMS-based toll management system for vehicle tracking and
      automated toll collection.
    </p>

    <ul>
      <li>
        Designed MySQL tables for vehicles, toll plazas, and transactions
        with optimized database relationships.
      </li>

      <li>
        Generated toll collection reports and maintained transaction
        records using SQL queries.
      </li>

      <li>
        Improved data management and reporting efficiency through
        structured database design.
      </li>
    </ul>
  </div>

  <div className="project">
    <h3>🌐 Disaster Mesh – Emergency Communication System</h3>

    <p>
      Built a mesh networking solution for communication during network
      outages caused by natural disasters.
    </p>

    <ul>
      <li>
        Implemented peer-to-peer message routing between nearby devices
        without relying on centralized infrastructure.
      </li>

      <li>
        Enabled reliable communication in low-connectivity environments.
      </li>

      <li>
        Enhanced emergency response by ensuring message delivery during
        critical situations.
      </li>
    </ul>
  </div>
</section>

      <section className="card">
        <h2>Education</h2>
        <p>B.E Computer Science and Design</p>
        <p>Kongu Engineering College</p>
        <p>CGPA : 8.19  </p>
      </section>

      <section className="card">
        <h2>Coding Profiles</h2>

        <ul>
          <li>
            <a
              href="https://github.com/amirthass"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>

          <li>
            <a
              href="https://leetcode.com/u/AmirthaSS/"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/amirtha-sathies-818199329/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>

      <section className="card">
        <h2>Contact</h2>
        <p>Email: amirthass.24csd@kongu.edu</p>
        <p>Location: Tamil Nadu, India</p>
      </section>

      <footer>
        <p>© 2026 Amirtha S S. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;