import { useState } from "react";
import "./style.css";

const projects = [
  {
    title: "Benditos",
    type: "Brand / Website / Food Concept",
    text: "A Latin street food and Mexican pantry concept shaped for London, combining brand direction, website structure, menu thinking and launch content.",
    tags: ["Brand direction", "Website", "Menu strategy", "Launch copy"],
    image: "/images/benditos-portfolio.webp",
    className: "benditos",
  },
  {
    title: "Crudelia",
    type: "Restaurant Website",
    text: "A bold restaurant website built around craving-led copy, strong food imagery, a clear menu structure, contact flow, allergens and simple SEO.",
    tags: ["Restaurant site", "Menu page", "Contact form", "SEO"],
    image: "/images/crudelia-portfolio.webp",
    className: "crudelia",
  },
  {
    title: "Entre Calles",
    type: "Tourism / Experience Website",
    text: "A Mexico City food tour concept built around local culture, visual storytelling, bilingual structure and experience-led navigation.",
    tags: ["Tourism", "Bilingual UX", "Landing page", "Storytelling"],
    image: "/images/entrecalles-portfolio.webp",
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
    text: "Menus, galleries, locations, opening hours, bookings, contact forms and social links, designed clearly around the customer journey.",
  },
  {
    number: "03",
    title: "Digital refreshes",
    text: "Clean improvements for existing websites that feel outdated, messy or no longer match the quality of the business.",
  },
];

const process = [
  {
    title: "Discover",
    text: "We define the business, audience, goals, style and what the site actually needs to do.",
  },
  {
    title: "Design",
    text: "I shape the structure, page flow, visual direction and copy so the site feels clear and considered.",
  },
  {
    title: "Build",
    text: "The website is developed, refined and tested across screen sizes before launch.",
  },
  {
    title: "Launch",
    text: "Domain, contact links, SEO basics and final checks are handled so the site is ready to share.",
  },
];

const included = [
  "Responsive design",
  "Copy structure",
  "SEO basics",
  "Contact setup",
  "Domain support",
  "Launch support",
];

function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.className}`}>
      <div className="project-visual image-visual">
        <img src={project.image} alt={`${project.title} website preview`} />
      </div>

      <div className="project-copy">
        <p className="eyebrow small">{project.type}</p>
        <h3>{project.title}</h3>
        <p>{project.text}</p>

        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
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
            Selected Work
          </a>
          <a href="#services" onClick={closeMenu}>
            What I Build
          </a>
          <a href="#process" onClick={closeMenu}>
            How It Works
          </a>
          <a href="#included" onClick={closeMenu}>
            What’s Included
          </a>
          <a href="#contact" onClick={closeMenu}>
            Start a Project
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Websites for independent brands</p>

            <h1>Look established. Launch cleanly. Grow with confidence.</h1>

            <p>
              I create clean, considered websites for restaurants, food brands,
              creatives and founders who need more than a page online — they
              need a digital presence that feels sharp, trustworthy and ready to
              share.
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
            <div className="hero-card">
              <div className="hero-card-top">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="hero-card-inner">
                <p>Founder-led digital studio</p>
                <h2>Strategy. Copy. Design. Build. Launch.</h2>
                <span>No bloated agency process. No lifeless template feel.</span>
              </div>
            </div>

            <div className="floating-note note-one">Restaurants</div>
            <div className="floating-note note-two">Launches</div>
            <div className="floating-note note-three">Refreshes</div>
          </div>
        </section>

        <section className="trust-strip">
          <span>Brand direction</span>
          <span>Website design</span>
          <span>Copy structure</span>
          <span>Launch support</span>
        </section>

        <section className="statement-section">
          <p>
            No bloated agency process. No lifeless template feel. Just a clean,
            considered site shaped around your business.
          </p>
        </section>

        <section id="work" className="section work-section">
          <div className="section-heading">
            <p className="eyebrow">Selected Work</p>
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
            <p className="eyebrow">What I Build</p>
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

        <section id="process" className="section process-section">
          <div className="section-heading">
            <p className="eyebrow">How It Works</p>
            <h2>Clear, calm and built around launch.</h2>
          </div>

          <div className="process-grid">
            {process.map((step, index) => (
              <article key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="included" className="section included-section">
          <div className="included-panel">
            <div>
              <p className="eyebrow">What’s Included</p>
              <h2>Everything needed to launch cleanly.</h2>
            </div>

            <div className="included-list">
              {included.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div>
            <p className="eyebrow">Start a Project</p>
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
        <p>Built by Stu Studio — Websites for independent brands.</p>
      </footer>
    </>
  );
}

export default App;
