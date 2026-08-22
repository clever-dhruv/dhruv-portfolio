import AIAgent from "./AIAgent";
function App() {
  return (
    <div>
      <header>
        <nav>
          <h2>Dhruv Budhwani</h2>

          <div>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#agent">AI Agent</a>
            <a href="#experience">Experience</a>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="agent">
  <h2>Personal AI Agent</h2>

  <p>
    Ask my AI agent about my projects, skills, experience,
    and technical interests.
  </p>

  <AIAgent />
</section>
        <section className="hero">
          <p>AI/ML Developer • Computer Science Student</p>

          <h1>
            I build practical AI systems
            <br />
            that solve real problems.
          </h1>

          <p>
            I'm Dhruv, a Computer Science student focused on
            artificial intelligence, machine learning, and
            full-stack development.
          </p>

          <div className="buttons">
            <a href="YOUR_GITHUB_URL">GitHub</a>
            <a href="YOUR_LINKEDIN_URL">LinkedIn</a>
            <a href="YOUR_CV_URL">View CV</a>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <h2>About Me</h2>

          <p>
            I enjoy turning ideas into working software. My focus is
            on building practical AI-powered applications while
            strengthening my foundations in software development,
            machine learning, and problem solving.
          </p>

          <p>
            Currently, I'm exploring LLMs, AI agents, APIs, and
            modern full-stack development through projects and
            hands-on learning.
          </p>
        </section>

        {/* AI STACK */}
        <section id="skills">
          <h2>AI & Technical Stack</h2>

          <div className="skills">
            <span>Python</span>
            <span>C++</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>PostgreSQL</span>
            <span>Machine Learning</span>
            <span>LLMs</span>
            <span>AI Agents</span>
            <span>Git & GitHub</span>
            <span>DSA</span>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <h2>Projects</h2>

          <div className="projects">
            <article>
              <h3>Personal AI Study Coach</h3>

              <p>
                An AI study assistant that uses personal study
                material to explain concepts, generate practice
                questions, evaluate answers, and identify weak areas.
              </p>

              <p>AI • Study Assistant • LLM</p>
            </article>

            <article>
              <h3>Job Portal</h3>

              <p>
                A full-stack job portal with authentication,
                recruiter functionality, job management, and
                applications.
              </p>

              <p>
                React • Node.js • Express • PostgreSQL • Prisma
              </p>
            </article>

            <article>
              <h3>Talkify</h3>

              <p>
                A full-stack chat application built to explore
                real-time communication and modern web development.
              </p>

              <p>React • Node.js • Express</p>
            </article>
          </div>
        </section>

        {/* PERSONAL AI AGENT */}
        <section id="agent">
          <h2>Personal AI Agent</h2>

          <article>
            <h3>Meet Dhruv AI</h3>

            <p>
              An AI agent built as part of my FlyRank capstone.
              It understands my projects, skills, experience, and
              technical interests so visitors can interact with
              my portfolio conversationally.
            </p>

            <p>
              The goal is simple: instead of only reading my
              portfolio, you can ask questions and explore my work
              through an AI interface.
            </p>

            <div className="buttons">
              <a href="#agent">Try Dhruv AI</a>
              <a href="YOUR_AGENT_GITHUB_URL">View Agent Code</a>
            </div>
          </article>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <h2>Experience</h2>

          <article>
            <h3>FlyRank — ML Internship</h3>

            <p>
              Working on practical machine learning and AI agent
              projects as part of the FlyRank internship program.
            </p>
          </article>
        </section>

        {/* CAPSTONE */}
        <section id="capstone">
          <h2>FlyRank Capstone</h2>

          <p>
            Building a personal AI-powered portfolio that combines
            AI fluency, personal branding, and a working AI agent.
          </p>

          <p>
            This project documents what I learn, what I build,
            what breaks, and how I improve the system.
          </p>
        </section>
      </main>

      <footer>
        <p>© 2026 Dhruv Budhwani</p>
      </footer>
    </div>
  );
}

export default App;