import './index.css'
import profileImage from '../assets/Media.jpg'

const navItems = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact']

const skills = [
  'React',
  'JavaScript',
  'TypeScript',
  'HTML5',
  'CSS3',
  'Responsive Design',
  'UI/UX',
  'GitHub',
  'Git',
  'Figma',
  'Bootstrap',
  'Tailwind CSS',
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
  { value: '2+', label: 'Years building' },
  { value: '8+', label: 'Projects launched' },
  { value: '100%', label: 'Client-focused' },
]

const education = [
  {
    course: 'Bachelor of Engineering in Computer Science',
    school: 'Pallavan College of Engineering, Anna University',
    year: '2014 - 2018',
  },
  {
    course: 'Higher Secondary Education',
    school: 'St. Andrews Higher Secondary School',
    year: '2012 - 2014',
  },
]

const experience = [
  {
    role: 'Frontend Developer',
    company: 'Freelance / Startup Work',
    period: '2024 - Present',
    details:
      'Developed responsive interfaces, polished user experiences, and modern landing pages using React, JavaScript, and UI design principles.',
  },
  {
    role: 'Web Development Intern',
    company: 'Internship / Training Program',
    period: '2023 - 2024',
    details:
      'Built interactive web components, improved layout responsiveness, and supported UI implementation for real-world projects.',
  },
]

function Index() {
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
                Hello, I’m <span>Harikrishnan</span>
              </h1>
              <p className="headline-tag">Creative Frontend Developer</p>
              <p className="lead">
                I’m a frontend developer focused on building clean, responsive,
                and user-friendly web experiences with modern UI patterns and
                performance-first thinking.
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
                <div className="image-wrap">
                  <img src={profileImage} alt="Harikrishnan profile" />
                </div>
                <div className="profile-text">
                  <p className="label">Available for work</p>
                  <h2>Harikrishnan</h2>
                  <p className="role-text">Frontend Developer</p>
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
                  <span>Phone</span>
                  <strong>+91 8681920928</strong>
                </li>
                <li>
                  <span>Email</span>
                  <strong>harikrish7676@gmail.com</strong>
                </li>
                <li>
                  <span>GitHub</span>
                  <strong>
                    <a
                      href="https://github.com/hariirah803"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: '#f8fafc', textDecoration: 'none' }}
                    >
                      hariirah803
                    </a>
                  </strong>
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
                I enjoy crafting modern and intuitive interfaces that combine strong
                visual design with smooth user interactions. My work focuses on
                creating polished experiences that are easy to use and easy to trust.
              </p>
            </div>
            <div className="about-card">
              <p>
                With experience in frontend development, I design responsive layouts,
                improve usability, and turn ideas into functional interfaces that feel
                fast, clean, and professional across devices.
              </p>
            </div>
          </div>
        </section>

        <section className="section education" id="education">
          <div className="container section-heading">
            <p className="eyebrow">Education</p>
            <h2>Academic journey</h2>
          </div>

          <div className="container education-grid">
            {education.map((item) => (
              <div className="education-card" key={item.course}>
                <span className="edu-year">{item.year}</span>
                <h3>{item.course}</h3>
                <p>{item.school}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section experience" id="experience">
          <div className="container section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Professional journey</h2>
          </div>

          <div className="container education-grid">
            {experience.map((item) => (
              <div className="education-card" key={item.role}>
                <span className="edu-year">{item.period}</span>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
                <p style={{ marginTop: '0.75rem' }}>{item.details}</p>
              </div>
            ))}
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a className="primary-btn" href="tel:+918681920928">
                +91 8681920928
              </a>
              <a className="secondary-btn" href="mailto:harikrish7676@gmail.com">
                harikrish7676@gmail.com
              </a>
              <a
                className="secondary-btn"
                href="https://github.com/hariirah803"
                target="_blank"
                rel="noreferrer"
              >
                GitHub: hariirah803
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Index
