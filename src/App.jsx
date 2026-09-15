import './App.css'

const hostingOptions = [
  'GitHub Pages',
  'Netlify',
  'Vercel',
  'Cloudflare Pages',
]

function App() {
  return (
    <div className="response-page">
      <header className="topbar">
        <div className="container nav-bar">
          <div className="brand">HK</div>
          <span className="tag">Open Source Hosting Ready</span>
        </div>
      </header>

      <main className="container hero-panel">
        <section className="hero-copy">
          <p className="eyebrow">Portfolio Response Page</p>
          <h1>
            Thanks for visiting my page.<span> It is ready to go live.</span>
          </h1>
          <p className="lead">
            This portfolio is built with React and prepared for open-source hosting.
            It can be deployed easily on GitHub Pages, Netlify, Vercel, or similar
            free hosting platforms.
          </p>

          <div className="cta-row">
            <a className="primary-btn" href="https://github.com" target="_blank" rel="noreferrer">
              Open GitHub
            </a>
            <a className="secondary-btn" href="mailto:hello@harikrishnan.dev">
              Contact Me
            </a>
          </div>
        </section>

        <aside className="info-card" aria-label="Hosting options">
          <h2>Hosting options</h2>
          <ul>
            {hostingOptions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </main>
    </div>
  )
}

export default App
