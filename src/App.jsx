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

const packages = [
  {
    title: "Website Refresh",
    price: "From £350",
    timeline: "1–2 weeks",
    text: "A cleaner, sharper version of an existing site that feels outdated, messy or no longer matches the quality of the business.",
    bestFor: ["Outdated websites", "Messy layouts", "Better copy structure"],
  },
  {
    title: "Launch Site",
    price: "From £450",
    timeline: "1–2 weeks",
    text: "A clean one-page website for new brands, founders, pop-ups and small businesses that need to look established quickly.",
    bestFor: ["New businesses", "Portfolio launches", "Simple service pages"],
  },
  {
    title: "Restaurant Site",
    price: "From £750",
    timeline: "2–3 weeks",
    text: "A focused website for restaurants, cafés and food brands, built around menus, imagery, opening hours, contact details and local SEO basics.",
    bestFor: ["Restaurants", "Street food brands", "Cafés"],
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
        <a href="#top" className="logo" onClick={closeMenu} aria-label="Cauce home">
          <span className="logo-mark">
            <span></span>
          </span>
          <span className="logo-text">Cauce</span>
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
          <a href="#packages" onClick={closeMenu}>
            Starting Points
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

        <section id="packages" className="section packages-section">
          <div className="section-heading">
            <p className="eyebrow">Starting Points</p>
            <h2>Simple website packages for independent brands at different stages.</h2>
          </div>

          <div className="packages-grid">
            {packages.map((item) => (
              <article key={item.title} className="package-card">
                <div className="package-top">
                  <h3>{item.title}</h3>
                  <div>
                    <strong>{item.price}</strong>
                    <span>{item.timeline}</span>
                  </div>
                </div>

                <p>{item.text}</p>

                <div className="package-best">
                  <span>Best for</span>
                  <ul>
                    {item.bestFor.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                <a href="#contact" className="text-link">
                  Start with this
                </a>
              </article>
            ))}
          </div>

          <div className="packages-note">
            <p>
              Projects from £350. Launch sites from £450. Final pricing depends
              on structure, content, features and launch support.
            </p>
            <a href="#contact">Send a message and I’ll suggest the simplest route.</a>
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
          <div className="contact-inner">
            <div className="contact-copy">
              <p className="eyebrow">Start a Project</p>
              <h2>Ready to give your business a clearer path online?</h2>
              <p>
                Send a few details about what you’re building, where you are now
                and what you need the website to do.
              </p>

              <div className="contact-details">
                <a
                  href="https://wa.me/447723187596"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
                <a href="mailto:stucottam@gmail.com">stucottam@gmail.com</a>
              </div>
            </div>

            <form
              className="contact-form"
              action="https://formspree.io/f/mvzjwqeg"
              method="POST"
            >
              <div className="form-row">
                <label>
                  Name
                  <input type="text" name="name" placeholder="Your name" required />
                </label>

                <label>
                  Business name
                  <input
                    type="text"
                    name="business"
                    placeholder="Business / brand name"
                  />
                </label>
              </div>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  required
                />
              </label>

              <label>
                What do you need?
                <select name="project_type" required defaultValue="">
                  <option value="" disabled>
                    Choose one
                  </option>
                  <option value="Launch Site">Launch Site</option>
                  <option value="Restaurant Site">Restaurant Site</option>
                  <option value="Website Refresh">Website Refresh</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </label>

              <div className="form-row">
                <label>
                  Budget range
                  <select name="budget" defaultValue="">
                    <option value="" disabled>
                      Choose one
                    </option>
                    <option value="£350–£500">£350–£500</option>
                    <option value="£500–£750">£500–£750</option>
                    <option value="£750–£1,200">£750–£1,200</option>
                    <option value="£1,200+">£1,200+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </label>

                <label>
                  Timeline
                  <select name="timeline" defaultValue="">
                    <option value="" disabled>
                      Choose one
                    </option>
                    <option value="ASAP">ASAP</option>
                    <option value="1–2 weeks">1–2 weeks</option>
                    <option value="2–4 weeks">2–4 weeks</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </label>
              </div>

              <label>
                Project details
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me a little about the business, the website you need and any links or references."
                  required
                ></textarea>
              </label>

              <input type="hidden" name="_subject" value="New Cauce project enquiry" />

              <button type="submit" className="button primary">
                Send project enquiry
              </button>
            </form>
          </div>
        </section>

        <footer className="site-footer">
          <div>
            <a href="#top" className="footer-logo">
              Cauce
            </a>
            <p>Website design for independent brands.</p>
          </div>

          <div className="footer-links">
            <a href="mailto:stucottam@gmail.com">stucottam@gmail.com</a>
            <a
              href="https://wa.me/447723187596"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/stucottam"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>

          <span>© 2026 Cauce</span>
        </footer>
      </main>
    </>
  );
}

export default App;
