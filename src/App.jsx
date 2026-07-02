import { useState } from "react";
import "./style.css";

const projects = [
  {
    title: "Benditos",
    category: "Brand / Website / Food Concept",
    description:
      "A Latin street food, Mexican honey and pantry concept shaped for London, combining brand direction, website structure, menu thinking and launch content.",
    services: ["Brand direction", "Website", "Menu strategy", "Launch copy"],
    className: "benditos",
  },
  {
    title: "Crudelia",
    category: "Restaurant Website",
    description:
      "A bold restaurant website built around craving-led copy, strong food imagery, clear menu structure, contact flow, allergens and simple SEO.",
    services: ["Restaurant site", "Menu page", "Contact form", "SEO"],
    className: "crudelia",
  },
  {
    title: "Entre Calles",
    category: "Tourism / Experience Website",
    description:
      "A Mexico City food tour concept built around local culture, visual storytelling, bilingual structure and experience-led navigation.",
    services: ["Tourism", "Bilingual UX", "Landing page", "Storytelling"],
    className: "entrecalles",
  },
];

const services = [
  {
    number: "01",
    title: "Launch websites",
    text: "Focused websites for new brands, pop-ups, founders and small businesses who need to look established quickly.",
  },
  {
    number: "02",
    title: "Restaurant & hospitality sites",
    text: "Clean digital homes for menus, locations, opening hours, galleries, bookings, contact forms and social links.",
  },
  {
    number: "03",
    title: "Digital refreshes",
    text: "Refined updates for businesses with existing websites that feel outdated, messy or no longer match the brand.",
  },
];

const included = [
  "Responsive design",
  "Copy structure",
  "Contact setup",
  "SEO basics",
  "Domain support",
  "Launch support",
];

function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.className}`}>
      <div className="project-visual">
        <div className="browser-bar">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="mockup-window">
          <div className="mockup-label">{project.category}</div>
          <div className="mockup-title">{project.title}</div>
          <div className="mockup-lines">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className="project-content">
        <p className="eyebrow small">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tag-list">
          {project.services.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>

        <a href="#contact" className="text-link">
          Discuss a similar project
        </a>
      </div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a href="#top" className="logo" onClick={closeMenu}>
          Built by Stu Studio
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-dropdown ${menuOpen ? "open" : ""}`}>
          <a href="#work" onClick={closeMenu}>
            Selected work
          </a>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
          <a href="#included" onClick={closeMenu}>
            What’s included
          </a>
          <a href="#process" onClick={closeMenu}>
            Process
          </a>
          <a href="#contact" onClick={closeMenu}>
            Start a project
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Digital design for independent brands</p>

            <h1>
              Sharp websites for brands that need to look established from day
              one.
            </h1>

            <p>
              Built by Stu Studio creates clean, considered websites for food
              brands, restaurants, creatives and independent businesses.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="button primary">
                Start a project
              </a>
              <a href="#work" className="button secondary">
                View selected work
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="studio-card">
              <div className="studio-card-top">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="studio-card-content">
                <p>Featured direction</p>
                <h2>Benditos</h2>
                <span>Brand · Website · Launch</span>
              </div>
            </div>

            <div className="floating-note note-one">Strategy</div>
            <div className="floating-note note-two">Copy</div>
            <div className="floating-note note-three">Design</div>
          </div>
        </section>

        <section className="statement-section">
          <p>
            Strategy. Copy. Design. Build. Launch.
          </p>
          <span>
            A lean studio approach for brands that need a polished digital
            presence without agency noise.
          </span>
        </section>

        <section id="work" className="section work-section">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Built for brands with taste, story and ambition.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Digital presence, shaped properly.</h2>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article key={service.title}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="included" className="section included-section">
          <div className="included-panel">
            <div>
              <p className="eyebrow">What’s included</p>
              <h2>Everything needed to launch cleanly.</h2>
            </div>

            <div className="included-list">
              {included.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section process-section">
          <div className="process-panel">
            <div>
              <p className="eyebrow">Process</p>
              <h2>Clear, calm and built around launch.</h2>
            </div>

            <div className="process-steps">
              <div>
                <span>01</span>
                <p>We define the business, audience, style and purpose.</p>
              </div>

              <div>
                <span>02</span>
                <p>I shape the structure, visual direction and site copy.</p>
              </div>

              <div>
                <span>03</span>
                <p>The website is built, refined and tested across screens.</p>
              </div>

              <div>
                <span>04</span>
                <p>You launch with a polished site ready to send people to.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div>
            <p className="eyebrow">Start a project</p>
            <h2>Ready to give your business a sharper online presence?</h2>
            <p>
              Send me a message with what you’re building, where you are now and
              what you need the website to do.
            </p>

            <div className="contact-actions">
              <a
                href="https://wa.me/44YOURNUMBER"
                target="_blank"
                rel="noopener noreferrer"
                className="button primary"
              >
                Message on WhatsApp
              </a>

              <a href="mailto:hello@example.com" className="button secondary">
                Email Stu
              </a>
            </div>

            <p className="contact-note">
              Replace the WhatsApp number and email with your real details.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Built by Stu Studio — Digital design for independent brands.</p>
      </footer>
    </>
  );
}

export default App;
