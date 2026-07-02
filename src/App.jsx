import { useState } from "react";
import "./style.css";

const projects = [
  {
    title: "Benditos",
    type: "Brand / Website / Food Concept",
    description:
      "A Latin street food, Mexican honey and pantry concept created for London, built around bold flavour, warm branding and a clean digital presence.",
    tags: ["Branding", "Menu", "Website", "Launch Copy"],
    className: "benditos",
  },
  {
    title: "Crudelia",
    type: "Restaurant Website",
    description:
      "A bold, modern food website built around corn, salsa, slow braises, fresh toppings and proper cravings.",
    tags: ["Restaurant", "Menu", "SEO", "Contact Form"],
    className: "crudelia",
  },
  {
    title: "Entre Calles",
    type: "Travel / Experience Website",
    description:
      "A clean Mexico City food tour concept built around local culture, strong imagery and easy bilingual navigation.",
    tags: ["Tourism", "Bilingual", "Landing Page", "UX"],
    className: "entrecalles",
  },
];

function ProjectMockup({ project }) {
  return (
    <article className={`project-card ${project.className}`}>
      <div className="project-visual">
        <div className="browser-bar">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="mockup-screen">
          <div className="mockup-nav"></div>
          <div className="mockup-title">{project.title}</div>
          <div className="mockup-line wide"></div>
          <div className="mockup-line"></div>
          <div className="mockup-button"></div>
        </div>
      </div>

      <div className="project-content">
        <p className="project-type">{project.type}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <a href="#top" className="logo" onClick={closeMenu}>
          Built by Stu
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
            Work
          </a>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
          <a href="#process" onClick={closeMenu}>
            Process
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Web design for small businesses</p>

            <h1>Websites that look sharp, feel simple and actually work.</h1>

            <p>
              Clean, modern websites for restaurants, cafés, food brands,
              creatives and independent businesses who need to look professional
              online without making things complicated.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="button dark">
                Start a project
              </a>
              <a href="#work" className="button light">
                See the work
              </a>
            </div>
          </div>

          <div className="hero-showcase">
            <div className="showcase-card main-card">
              <div className="mini-browser">
                <div></div>
                <div></div>
                <div></div>
              </div>

              <div className="showcase-inner">
                <p>Featured project</p>
                <h2>Benditos</h2>
                <span>Brand · Website · Food Concept</span>
              </div>
            </div>

            <div className="floating-card card-one">Restaurant sites</div>

            <div className="floating-card card-two">Brand launches</div>
          </div>
        </section>

        <section className="intro-strip">
          <span>One-page sites</span>
          <span>Restaurant websites</span>
          <span>Website refreshes</span>
          <span>Launch pages</span>
        </section>

        <section id="work" className="section work-section">
          <div className="section-heading">
            <p className="eyebrow">Recent work</p>
            <h2>Visual sites with flavour, story and purpose.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectMockup key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="section-heading">
            <p className="eyebrow">What I do</p>
            <h2>Simple sites for real businesses.</h2>
          </div>

          <div className="services-grid">
            <article>
              <span>01</span>
              <h3>One-page websites</h3>
              <p>
                A clean online presence for small businesses, pop-ups,
                freelancers and new ideas.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Restaurant websites</h3>
              <p>
                Menus, opening hours, location, gallery, contact forms and
                social links.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Website refreshes</h3>
              <p>
                Tidy up an outdated or messy website and make it feel polished
                again.
              </p>
            </article>
          </div>
        </section>

        <section id="process" className="section process-section">
          <div className="process-panel">
            <div>
              <p className="eyebrow">Process</p>
              <h2>Clear, quick and straightforward.</h2>
            </div>

            <div className="process-steps">
              <div>
                <span>01</span>
                <p>We talk about what you need.</p>
              </div>

              <div>
                <span>02</span>
                <p>I design the structure, style and copy.</p>
              </div>

              <div>
                <span>03</span>
                <p>I build the website and polish the details.</p>
              </div>

              <div>
                <span>04</span>
                <p>You launch with a clean site ready to share.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div>
            <p className="eyebrow">Start a project</p>

            <h2>Need a simple website that looks proper?</h2>

            <p>
              Send me a message with what you’re building and what kind of site
              you need.
            </p>

            <a
              href="https://wa.me/447723187596"
              target="_blank"
              rel="noopener noreferrer"
              className="button cream"
            >
              Message me on WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Built by Stu — Simple websites for small businesses.</p>
      </footer>
    </>
  );
}

export default App;
