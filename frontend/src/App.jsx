import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const [journeyEntries, setJourneyEntries] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/journey')
      .then((res) => res.json())
      .then((data) => setJourneyEntries(data));
  }, []);

  return (
    <div>
      <h1>My Website</h1>
      <p>Backend says: {message}</p>
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <strong>{p.title}</strong>
            <p>{p.description}</p>
            <button>Visit</button>
          </div>
        ))}
      </div>
      <h2>My Journey</h2>
      {journeyEntries.map((entry) => (
        <div className="journey-entry" key={entry.title}>
          <h3>{entry.title}</h3>
          <p><em>{entry.date}</em></p>
          <p>{entry.content}</p>
        </div>
      ))}

      <section id="about">...</section>
      <section id="projects">...</section>
      <section id="journey">...</section>

      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#journey">Journey</a>
      </nav>

    </div>
  );
}


export default App;