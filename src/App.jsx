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
            <a href="#experience">Experience</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p>Computer Science Student • AI & ML</p>

          <h1>
            Building software and AI projects
            <br />
            that solve real problems.
          </h1>

          <p>
            I'm Dhruv, a Computer Science student interested in
            software development, artificial intelligence, and
            machine learning.
          </p>

          <div className="buttons">
            <a href="YOUR_GITHUB_URL">GitHub</a>
            <a href="YOUR_LINKEDIN_URL">LinkedIn</a>
            <a href="YOUR_CV_URL">View CV</a>
          </div>
        </section>

        <section id="about">
          <h2>About Me</h2>
          <p>
            I am a Computer Science student specializing in AI & ML.
            I enjoy building full-stack applications, working with
            data, and learning how AI systems can solve practical
            problems.
          </p>
        </section>

        <section id="skills">
          <h2>Skills</h2>

          <div className="skills">
            <span>C++</span>
            <span>Python</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>PostgreSQL</span>
            <span>Machine Learning</span>
            <span>DSA</span>
          </div>
        </section>

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
              <p>AI • Study Assistant • Claude Project</p>
            </article>

            <article>
              <h3>Job Portal</h3>
              <p>
                A full-stack job portal with authentication,
                recruiter functionality, job management, and
                applications.
              </p>
              <p>React • Node.js • Express • PostgreSQL • Prisma</p>
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

        <section>
          <h2>Posts & Capstone</h2>
          <p>
            A space for future technical posts, project updates,
            and my final FlyRank capstone.
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