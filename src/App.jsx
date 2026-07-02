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
    text: "Focused websites for new brands, pop-ups, founders and small businesses who need to look established quickly and launch with confidence.",
  },
  {
    number: "02",
    title: "Restaurant & hospitality sites",
    text: "Menus, galleries, locations, opening hours, bookings, contact forms and social links, shaped clearly around the customer journey.",
  },
  {
    number: "03",
    title: "Digital refreshes",
    text: "Clean improvements for existing websites that feel outdated, messy or no longer match the quality of the business in real life.",
  },
];

const process = [
  {
    title: "Discover",
    text: "We define the business, audience, goals, style and what the website actually needs to do.",
  },
  {
    title: "Shape",
    text: "I map the structure, page flow, copy direction and visual route so the site has clarity before it is built.",
  },
  {
    title: "Build",
    text: "The website is designed, developed, refined and tested across screen sizes.",
  },
  {
    title: "Launch",
    text: "Domain support, contact links, SEO basics and final checks are handled so the site is ready to share.",
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

function RouteMark() {
  return (
    <span className="route-mark" aria-hidden="true">
      <span></span>
    </span>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a href="#top" className="logo" onClick={closeMenu}>
          Cauce
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
            The Route
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
          <div className="path-line hero-path" aria-hidden="true"></div>

          <div className="hero-copy">
            <p className="eyebrow">Digital presence, shaped with direction</p>

            <h1>Look established. Launch cleanly. Grow with confidence.</h1>

            <p>
              We shape a clear digital path for independent brands that need to
              look as good online as they are in real life — with clean websites
              built around structure, clarity and launch.
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
                <p>Small studio. Clear process.</p>
                <h2>Strategy. Copy. Design. Build. Launch.</h2>
                <span>A calmer route from idea to website.</span>
              </div>
            </div>

            <div className="floating-note note-one">Direction</div>
            <div className="floating-note note-two">Structure</div>
            <div className="floating-note note-three">Launch</div>
          </div>
        </section>

        <section className="trust-strip">
          <span>Direction</span>
          <span>Website design</span>
          <span>Copy structure</span>
          <span>Launch support</span>
        </section>

        <section className="statement-section">
          <RouteMark />
          <p>
            A strong website should give your business direction online — clear
            enough to trust, simple enough to use and sharp enough to share.
          </p>
        </section>

        <section id="work" className="section work-section">
          <div className="section-heading">
            <p className="eyebrow">Selected Work</p>
            <h2>Selected work shaped with clarity, character and direction.</h2>
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
            <h2>Websites with a clear route from idea to launch.</h2>
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
            <p className="eyebrow">The Route</p>
            <h2>A calm, structured path from first idea to finished website.</h2>
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
            <h2>Ready to give your business a clearer path online?</h2>
            <p>
              Send me a message with what you’re building, where you are now and
              what you need the website to do.
            </p>

            <div className="contact-actions">
              <a
                href="https://wa.me/447723187596"
                target="_blank"
                rel="noopener noreferrer"
                className="button primary"
              >
                Message on WhatsApp
              </a>
              <a href="mailto:stucottam@gmail.com" className="button secondary">
                Email me
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
