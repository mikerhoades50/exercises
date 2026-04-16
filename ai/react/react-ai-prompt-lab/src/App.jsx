import { useState } from 'react';
import './App.css';

function App() {
  const [selectedExample, setSelectedExample] = useState(null);
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [summaryResult, setSummaryResult] = useState('');
  const [blogTitles, setBlogTitles] = useState([]);
  const [labNotes, setLabNotes] = useState('Add your own prompt-writing ideas, observations, or learnings here...');

  // Sample paragraph for the summarization example
  const sampleParagraph = "Artificial intelligence is rapidly transforming various industries by automating repetitive tasks, providing deep insights from large datasets, and enabling machines to learn from experience. However, the adoption of AI also raises important ethical questions regarding privacy, bias, and job displacement that society must carefully address.";

  const promptExamples = [
    "Write a short welcome message for a website.",
    "Summarize a paragraph in simple language.",
    "Create three blog title ideas about coding."
  ];

  const handleExampleClick = (example, index) => {
    setSelectedExample(index);

    if (index === 0) {
      // 1. Welcome Message
      setWelcomeMessage("Welcome to our website! We're excited you're here. Discover new ideas, learn valuable skills, and join a community that loves technology.");
      setSummaryResult('');
      setBlogTitles([]);
    } 
    else if (index === 1) {
      // 2. Summary
      setSummaryResult("AI is quickly changing many industries. It helps by doing boring tasks automatically, understanding huge amounts of data, and learning from experience. At the same time, we need to be careful about privacy, unfair bias, and people losing their jobs.");
      setWelcomeMessage('');
      setBlogTitles([]);
    } 
    else if (index === 2) {
      // 3. Blog Titles - This was missing in your view, now clearly added
      setBlogTitles([
        "How Coding Changed My Life: From Complete Beginner to Building Real Apps",
        "10 Must-Know Coding Habits That Separate Good Developers from Great Ones",
        "Why Learning to Code in 2026 is Easier and More Powerful Than Ever Before"
      ]);
      setWelcomeMessage('');
      setSummaryResult('');
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>AI Prompt Lab</h1>
        <p>Brent is kinda a big deal.</p>
      </header>

      {/* Brent Image */}
      <div className="image-container">
        <img src="/img/brent.jpg" alt="Brent" className="brent-image" />
      </div>

      <div className="main-content">
        {/* Prompt Examples */}
        <section className="section">
          <h2>Prompt Examples</h2>
          <div className="examples-grid">
            {promptExamples.map((example, index) => (
              <div 
                key={index}
                className={`example-card ${selectedExample === index ? 'active' : ''}`}
                onClick={() => handleExampleClick(example, index)}
              >
                <p>{example}</p>
                <small>Click to generate result ↓</small>
              </div>
            ))}
          </div>
        </section>

        {/* Results Area - This is where the welcome, summary, and blog titles appear */}
        {selectedExample !== null && (
          <section className="section results-section">
            <h2>AI Generated Output</h2>
            
            {/* Welcome Message Result */}
            {welcomeMessage && (
              <div className="result-box">
                <h3>Short Welcome Message</h3>
                <p className="welcome-text">{welcomeMessage}</p>
              </div>
            )}

            {/* Summary Result */}
            {summaryResult && (
              <div className="result-box">
                <h3>Original Paragraph:</h3>
                <p className="original">{sampleParagraph}</p>
                
                <h3>Simple Summary:</h3>
                <p className="summary">{summaryResult}</p>
              </div>
            )}

            {/* Blog Titles Result - Now clearly shown */}
            {blogTitles.length > 0 && (
              <div className="result-box">
                <h3>Three Blog Title Ideas About Coding</h3>
                <ul className="titles-list">
                  {blogTitles.map((title, i) => (
                    <li key={i}>• {title}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* Prompt Writing Tips */}
        <section className="section">
          <h2>Prompt Writing Tips</h2>
          <ul className="tips-list">
            <li><strong>Be clear</strong> about what you want.</li>
            <li><strong>Include useful context.</strong></li>
            <li><strong>Ask for the format</strong> you need.</li>
            <li><strong>Revise weak prompts</strong> and test again.</li>
          </ul>
        </section>

        {/* Lab Notes */}
        <section className="section">
          <h2>Lab Notes</h2>
          <textarea
            value={labNotes}
            onChange={(e) => setLabNotes(e.target.value)}
            placeholder="Write your own prompt ideas or learnings here..."
            rows="5"
          />
        </section>
      </div>

      <footer className="footer">
        <p>Brent Rocks!.</p>
        <p>AI Prompt Lab — Built with React + Vite</p>
      </footer>
    </div>
  );
}

export default App;