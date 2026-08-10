import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

{/* Selected Projects */}
<section id="projects" className="section projects-section">
  <div className="section-label">
    <span>03</span>
    SELECTED WORK
  </div>

  <div className="projects-header">
    <h2>
      Things I&apos;ve
      <br />
      <span>been building.</span>
    </h2>

    <p>
      A selection of projects across electronics, software,
      data, and technology — from ongoing experiments to
      systems I&apos;m actively developing.
    </p>
  </div>

  <div className="projects-list">
    {projects.map((project) => (
      <ProjectCard
        key={project.id}
        project={project}
        featured={project.featured}
      />
    ))}
  </div>

  <div className="projects-footer">
    <a href="/projects" className="view-all-projects">
      View all projects
      <span>↗</span>
    </a>
  </div>


</section>

const skills = [
  "Electronics",
  "Embedded Systems",
  "Python",
  "Data Analysis",
  "Next.js",
  "React",
  "JavaScript",
  "Git & GitHub",
];

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <Link href="#" className="logo">
            YK<span>.</span>
          </Link>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="nav-button">
            Let&apos;s talk <span>↗</span>
          </a>
        </div>
      </nav>

      {/* Hero */}
<section className="hero-section">
  <div className="hero-main">
    {/* Right Content */}
    <div className="hero-visual">
      <div className="hero-image-wrap">
        {/* <Image src="/yk.png" alt="Khem Raj Yatri — Electronics, Software and Technology" width={1200} height={800} className="w-full h-auto" priority /> */}
        <Image src="/yk.webp" alt="Khem Raj Yatri — Electronics, Software and Technology" width={800} height={533} className="w-full h-auto" priority />
      </div>
    </div>

     {/* Left Visual */}
    <div className="hero-content">
      <div className="availability">
        <span className="status-dot" />
        <h2>Building &amp; learning</h2>
      </div>

      <p className="eyebrow">ELECTRONICS · SOFTWARE · DATA</p>

      <h1>
        Building things
        <br />
        <span>that make sense.</span>
      </h1>

      <p className="hero-description">
        I&apos;m Khem Raj Yatri — an electronics and technology enthusiast
        exploring hardware, software, data and real-world problem solving
        through personal projects.
      </p>

      <div className="hero-actions">
        <a href="#projects" className="primary-button">
          Explore my work <span>↓</span>
        </a>

        <a href="#about" className="secondary-button">
          More about me
        </a>
      </div>
    </div>

  </div>

  {/* Bottom Meta
  <div className="hero-meta">
    <div>
      <span>BASED IN</span>
      <strong>NEPAL</strong>
    </div>

    <div>
      <span>FOCUS</span>
      <strong>TECH &amp; BUILDING</strong>
    </div>

    <div className="scroll-indicator">
      <span>SCROLL TO EXPLORE</span>
      <div className="scroll-line" />
    </div>
  </div> */}
</section>
      {/* What I Work On */}
      <section className="section work-section">
        <div className="section-label">
          <span>01</span>
          WHAT I WORK ON
        </div>

        <div className="work-header">
          <h2>
            From circuits
            <br />
            <span>to software.</span>
          </h2>
         
            I like working across different layers of technology — from physical
            electronics and embedded systems to software, data, and practical
            problem solving.
          
        </div>

        <div className="work-grid">

          {/* Electronics */}
          <article className="work-card">
            <div className="work-card-top">
              <span>01</span>
              <span className="work-card-icon">⌁</span>
            </div>

            <div className="work-card-content">
              <h3>Electronics &amp; Embedded</h3>

              <p>
                Exploring circuits, microcontrollers, embedded systems, hardware
                troubleshooting, and practical electronics projects.
              </p>

              <div className="work-tags">
                <span>STM32</span>
                <span>ESP32</span>
                <span>Embedded</span>
                <span>Hardware</span>
              </div>
            </div>
          </article>

          {/* Software */}
          <article className="work-card">
            <div className="work-card-top">
              <span>02</span>
              <span className="work-card-icon">&lt;/&gt;</span>
            </div>

            <div className="work-card-content">
              <h3>Software &amp; Web</h3>

              <p>
                Building practical software and web applications while learning
                modern development tools, frameworks, and programming workflows.
              </p>

              <div className="work-tags">
                <span>Python</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Next.js</span>
              </div>
            </div>
          </article>

          {/* Data */}
          <article className="work-card">
            <div className="work-card-top">
              <span>03</span>
              <span className="work-card-icon">⌁</span>
            </div>

            <div className="work-card-content">
              <h3>Data &amp; Financial Tech</h3>

              <p>
                Working with financial market data, technical analysis, and the
                development of data-driven tools for the Nepalese stock market.
              </p>

              <div className="work-tags">
                <span>Data Analysis</span>
                <span>Pandas</span>
                <span>Trading Systems</span>
                <span>NEPSE</span>
              </div>
            </div>
          </article>

        </div>
      </section>
      {/* About */}
      <section id="about" className="section about-section">
        <div className="section-label">
          <span>02</span>
          ABOUT ME
        </div>

        <div className="about-grid">
          <div className="about-profile">            
            {/* <div className="about-profile-mark">YK<span>.</span></div> */}
              <div className="hero-image-wrap">
                <Image src="/yk2.png" alt="Khem Raj Yatri — Electronics, Software and Technology" width={1200} height={800} className="w-full h-auto" priority />
              </div>
          </div>

          <div className="about-story">
            <p>Hi<br></br>
              I&apos;m Khem Raj Yatri, an Electronics and technology enthusiast with a
              growing interest in software, data, and practical problem solving.
            </p>

            <p>
              My journey started with electronics and hardware — understanding
              circuits, components, microcontrollers, embedded systems, and the
              process of troubleshooting things that don&apos;t work as expected.
              Over time, that curiosity expanded beyond hardware into programming
              and software development.
            </p>

            <p>
              Today, I work across different layers of technology: experimenting
              with embedded systems, building web applications, working with Python
              and data, and turning ideas into practical projects.
            </p>

            <p>
              One of my ongoing projects is a{" "}
              <strong>NEPSE data-driven trading system</strong>, where I&apos;m
              exploring historical market data, technical indicators, analysis
              pipelines, and systematic ways of turning data into useful insights.
            </p>

            <p>
              I&apos;m still learning, experimenting, breaking things, fixing them,
              and building again. This portfolio is a record of that process — the
              projects I build, the technologies I explore, and the things I learn
              along the way.
            </p>

            <div className="about-quote">
              <span>“</span>
              <p>
                I&apos;m less interested in simply using technology than in
                understanding what&apos;s behind it and building something of my own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section skills-section">
        <div className="section-label">
          <span>03</span>
          SKILLS &amp; TOOLS
        </div>

        {/* <div className="skills-heading">
          <h2>
            Tools I use to
            <br />
            <span>turn ideas into reality.</span>
          </h2>
        </div> */}

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>
              {/* <span>0{index + 1}</span> */}
              <strong>{skill}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Projects */}
      <section id="projects" className="section projects-section">
        <div className="section-label">
          <span>04</span>
          SELECTED WORK
        </div>

        <div className="projects-header">
          <h3 style={{ color: "#fff704" }}>
            Things I&apos;ve been building.
          </h3>

          {/* <p>
            A selection of projects across electronics, software,
            data, and technology — from ongoing experiments to
            systems I&apos;m actively developing.
          </p> */}
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={project.featured}
            />
          ))}
        </div>
        
        <div className="projects-footer">
          <a href="/projects" className="view-all-projects">
            View all projects
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="contact-grid" />

        <div className="contact-inner">
          <div className="section-label light">
            <span>05</span>
            CONTACT
          </div>

          <div className="contact-content">
            <div className="contact-main">
              <p className="contact-eyebrow">
                HAVE AN IDEA OR JUST WANT TO TALK?
              </p>

              <h2>
                Let&apos;s build
                <br />
                <span>something interesting.</span>
              </h2>

              <p className="contact-description">
                Whether it&apos;s a project, collaboration, technical discussion,
                or just an interesting idea — feel free to reach out.
              </p>

              <a
                href="mailto:khemrajpaneru32@gmail.com"
                className="contact-button"
              >
                Get in touch
                <span>↗</span>
              </a>
            </div>

            <div className="contact-links">
              <a
                href="https://github.com/RajKhem"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-link-name">GitHub</span>
                <span className="contact-link-arrow">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/khem-raj-paneru-ba409825b/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-link-name">LinkedIn</span>
                <span className="contact-link-arrow">↗</span>
              </a>

              <a
                href="https://www.facebook.com/Khemrajpaneru729"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-link-name">Facebook</span>
                <span className="contact-link-arrow">↗</span>
              </a>

              <a
                href="https://www.instagram.com/khemraaj_yatri/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-link-name">Instagram</span>
                <span className="contact-link-arrow">↗</span>
              </a>

              <a
                href="mailto:khemrajpaneru32@gmail.com"
                className="contact-link"
              >
                <span className="contact-link-name">Email</span>
                <span className="contact-link-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div>
          <a href="#"><span className="footer-logo">YK<span>.</span></span></a>         
          <p>Personal portfolio · 2026</p>
        </div>

        <div className="footer-right">
          <span>Designed &amp; built with curiosity.</span>
          {/* <a href="#">Back to top ↑</a> */}
        </div>
      </footer>
    </main>
  );
}