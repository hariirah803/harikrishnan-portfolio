import './App.css'

const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact']

const skills = [
  'React',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Responsive Design',
  'UI/UX',
  'Git',
  'Figma',
]

const projects = [
  {
    title: 'Portfolio Website',
    type: 'Personal Brand',
    description:
      'A modern portfolio experience designed to showcase projects, skills, and professional identity with a clean visual direction.',
  },
  {
    title: 'Business Landing Page',
    type: 'Marketing UI',
    description:
      'A conversion-focused landing page with strong hierarchy, simple messaging, and polished responsive sections.',
  },
  {
    title: 'Dashboard Interface',
    type: 'Product Design',
    description:
      'An analytics dashboard concept built to present data clearly, efficiently, and in a user-friendly layout.',
  },
]

const stats = [
  { value: '3+', label: 'Years building' },
  { value: '12', label: 'Projects launched' },
  { value: '100%', label: 'Client-focused' },
]

function App() {
  return (
    <div className="portfolio-app">
      <header className="topbar">
        <div className="container nav-bar">
          <div className="brand">HK</div>
          <nav className="nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </nav>
          <a className="nav-button" href="#contact">
            Hire Me
          </a>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Frontend Developer • UI Enthusiast</p>
              <h1>
                I design and build <span>digital experiences</span> people remember.
              </h1>
              <p className="lead">
                I’m Harikrishnan, a frontend developer focused on creating clean,
                responsive, and user-friendly interfaces that blend design and
                functionality.
              </p>

              <div className="cta-row">
                <a className="primary-btn" href="#projects">
                  View Projects
                </a>
                <a className="secondary-btn" href="#contact">
                  Contact Me
                </a>
              </div>

              <div className="stats-row" aria-label="Portfolio highlights">
                {stats.map(({ value, label }) => (
                  <div key={label} className="stat-card">
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="profile-panel" aria-label="Profile summary">
              <div className="profile-card">
                <div className="avatar">H</div>
                <div>
                  <p className="label">Available for work</p>
                  <h2>Harikrishnan</h2>
                </div>
              </div>

              <ul className="info-list">
                <li>
                  <span>Role</span>
                  <strong>Frontend Developer</strong>
                </li>
                <li>
                  <span>Focus</span>
                  <strong>Responsive UI</strong>
                </li>
                <li>
                  <span>Email</span>
                  <strong>hello@harikrishnan.dev</strong>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="container section-heading">
            <p className="eyebrow">About Me</p>
            <h2>Turning ideas into polished user experiences.</h2>
          </div>

          <div className="container about-grid">
            <div className="about-card">
              <p>
                I enjoy building interfaces that look modern, feel intuitive, and
                serve real user needs. My work balances visual design, layout
                consistency, and performance.
              </p>
            </div>
            <div className="about-card">
              <p>
                From concept to implementation, I focus on responsive design,
                accessibility, and thoughtful interactions that elevate the overall
                digital experience.
              </p>
            </div>
          </div>
        </section>

        <section className="section projects" id="projects">
          <div className="container section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected work</h2>
          </div>

          <div className="container project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <span className="badge">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills" id="skills">
          <div className="container section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Tools and strengths</h2>
          </div>

          <div className="container skill-list">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container contact-box">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let’s build your next great digital experience.</h2>
            </div>
            <a className="primary-btn" href="mailto:hello@harikrishnan.dev">
              hello@harikrishnan.dev
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
