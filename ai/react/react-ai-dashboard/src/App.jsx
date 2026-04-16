import { useState } from 'react'
import './App.css'

function App() {
  const [projects, setProjects] = useState(12)
  const [prompts, setPrompts] = useState(34)
  const [timeSaved, setTimeSaved] = useState(8)

  return (
    <div className="dashboard">
      <header className="header">
        <h1>AI Dashboard Starter</h1>
        <p className="subtitle">Edited to make Brent the Great Happy :-).</p>
      </header>

      {/* Image */}
      <div className="image-container">
        <img src="/img/brent.jpg" alt="Brent" className="brent-image" />
      </div>

      <section className="tools-section">
        <h2>AI Tools</h2>
        <div className="tools-grid">
          <div className="tool-card">
            <h3>1. Prompt Optimizer</h3>
            <p>Automatically improves your prompts for better AI responses using advanced prompt engineering techniques.</p>
          </div>
          <div className="tool-card">
            <h3>2. Content Generator</h3>
            <p>Creates high-quality blog posts, social media content, emails, and marketing copy in seconds.</p>
          </div>
          <div className="tool-card">
            <h3>3. Code Assistant</h3>
            <p>Helps you write, debug, and explain code in multiple programming languages with real-time suggestions.</p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <h2>Dashboard Stats</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <strong>Projects analyzed:</strong> {projects}
          </div>
          <div className="stat-item">
            <strong>Prompts tested:</strong> {prompts}
          </div>
          <div className="stat-item">
            <strong>Time saved:</strong> {timeSaved} hours
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Best bootcamp instructor ever!.</p>
        <p>Built with React + Vite • {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App