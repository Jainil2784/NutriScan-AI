import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './About.css'

const techStack = [
  { icon: '⚛️', name: 'React.js', desc: 'Frontend UI Library', color: '#61DAFB' },
  { icon: '🌐', name: 'HTML5', desc: 'Semantic Markup', color: '#E34F26' },
  { icon: '🎨', name: 'CSS3', desc: 'Modern Styling', color: '#1572B6' },
  { icon: '⚡', name: 'JavaScript ES6+', desc: 'Core Logic', color: '#F7DF1E' },
  { icon: '🔀', name: 'React Router', desc: 'Navigation', color: '#CA4245' },
  { icon: '🛠️', name: 'Vite', desc: 'Build Tool', color: '#646CFF' },
]

const workflow = [
  { step: '01', icon: '🏠', title: 'Home', desc: 'User lands on the NutriScan AI home page and learns about the application.' },
  { step: '02', icon: '🏥', title: 'Select Category', desc: 'User selects their health condition: Fit, Underweight, Overweight, or Obese.' },
  { step: '03', icon: '📷', title: 'Upload Image', desc: 'User uploads or captures an image of the packaged food product label.' },
  { step: '04', icon: '🤖', title: 'AI Analysis', desc: 'NutriScan AI analyzes the label, extracting nutrition facts and expiry date.' },
  { step: '05', icon: '📊', title: 'Results', desc: 'User receives a detailed health score, nutrition breakdown, and personalized recommendations.' },
]

const team = [
  {
    name: 'Priya Sharma',
    role: 'UI/UX Designer & Frontend Developer',
    icon: '👩‍💻',
    skills: ['React', 'UI Design', 'CSS'],
  },
  {
    name: 'Arjun Mehta',
    role: 'AI & ML Researcher',
    icon: '👨‍🔬',
    skills: ['Python', 'Machine Learning', 'NLP'],
  },
  {
    name: 'Sneha Patel',
    role: 'Data Analyst & Backend Developer',
    icon: '👩‍📊',
    skills: ['Data Analysis', 'Node.js', 'MongoDB'],
  },
]

const About = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="about-page">
      <div className="about-bg-orb about-orb-1" />
      <div className="about-bg-orb about-orb-2" />

      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content animate-fadeInUp">
            <div className="about-chip">About NutriScan AI</div>
            <h1 className="about-title">
              Empowering Healthier <span className="gradient-text">Food Choices</span><br/>
              with Artificial Intelligence
            </h1>
            <p className="about-desc">
              NutriScan AI is an academic mini project developed as part of the MSc IT (AI) program.
              It demonstrates how artificial intelligence can be applied to real-world healthcare challenges,
              specifically in the domain of food nutrition analysis and personalized health guidance.
            </p>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => navigate('/select-category')}
              id="about-try-btn"
            >
              Try It Now
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Project Purpose */}
      <section className="section purpose-section">
        <div className="container">
          <div className="section-header animate-fadeInUp">
            <div className="section-chip">Project Purpose</div>
            <h2>Why NutriScan AI?</h2>
            <p>Addressing a real-world healthcare challenge with AI innovation.</p>
          </div>
          <div className="purpose-grid">
            <div className="purpose-card animate-fadeInUp delay-1" id="purpose-card-1">
              <div className="purpose-icon">🎯</div>
              <h3>Problem Statement</h3>
              <p>
                Millions of people struggle to understand complex nutritional labels on packaged food products.
                The lack of personalized guidance leads to poor dietary choices and health issues.
              </p>
            </div>
            <div className="purpose-card animate-fadeInUp delay-2" id="purpose-card-2">
              <div className="purpose-icon">💡</div>
              <h3>Our Solution</h3>
              <p>
                NutriScan AI provides an intelligent system that reads food labels, analyzes nutritional content,
                and offers personalized recommendations based on the user's health condition.
              </p>
            </div>
            <div className="purpose-card animate-fadeInUp delay-3" id="purpose-card-3">
              <div className="purpose-icon">🌱</div>
              <h3>Impact</h3>
              <p>
                By making nutrition science accessible and actionable, NutriScan AI helps users make
                informed food choices that align with their personal health goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Workflow */}
      <section className="section workflow-section">
        <div className="container">
          <div className="section-header animate-fadeInUp">
            <div className="section-chip">Application Workflow</div>
            <h2>How It Works</h2>
            <p>A seamless 5-step journey from scanning to personalized insights.</p>
          </div>
          <div className="workflow-timeline">
            {workflow.map((item, index) => (
              <div
                key={index}
                className={`workflow-item animate-fadeInUp delay-${index + 1}`}
                id={`workflow-step-${index + 1}`}
              >
                <div className="workflow-step-num">{item.step}</div>
                <div className="workflow-connector" />
                <div className="workflow-card">
                  <div className="workflow-icon">{item.icon}</div>
                  <div>
                    <h4 className="workflow-title">{item.title}</h4>
                    <p className="workflow-desc">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section tech-section">
        <div className="container">
          <div className="section-header animate-fadeInUp">
            <div className="section-chip">Technology Stack</div>
            <h2>Built With Modern Tech</h2>
            <p>Leveraging cutting-edge web technologies for a premium user experience.</p>
          </div>
          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className={`tech-card animate-fadeInUp delay-${index + 1}`}
                id={`tech-card-${index}`}
                style={{ '--tech-color': tech.color }}
              >
                <span className="tech-icon">{tech.icon}</span>
                <h4 className="tech-name">{tech.name}</h4>
                <p className="tech-desc">{tech.desc}</p>
                <div className="tech-bar" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section team-section">
        <div className="container">
          <div className="section-header animate-fadeInUp">
            <div className="section-chip">Our Team</div>
            <h2>Meet the Developers</h2>
            <p>A dedicated team of MSc IT (AI) students passionate about healthcare AI.</p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div
                key={index}
                className={`team-card animate-fadeInUp delay-${index + 1}`}
                id={`team-card-${index}`}
              >
                <div className="team-avatar">
                  <span className="team-avatar-icon">{member.icon}</span>
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <div className="team-skills">
                    {member.skills.map((skill, si) => (
                      <span key={si} className="team-skill">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Info Banner */}
      <section className="about-banner-section">
        <div className="container">
          <div className="about-banner animate-fadeInUp">
            <div className="about-banner-content">
              <div className="about-banner-icon">🎓</div>
              <div>
                <h3>MSc IT (AI) Mini Project · 2026</h3>
                <p>
                  This project was developed as part of the academic curriculum for the
                  Master of Science in Information Technology (Artificial Intelligence) program.
                </p>
                <div className="about-banner-tags">
                  <span className="banner-tag">Academic Project</span>
                  <span className="banner-tag">Healthcare AI</span>
                  <span className="banner-tag">Frontend Demo</span>
                  <span className="banner-tag">Mock Data Only</span>
                </div>
              </div>
            </div>
            <div className="about-banner-orb" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
