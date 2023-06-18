import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      name: "Daily Distractions",
      description: true,
      Repo: "https://github.com/AlexWatabe9/DailyDistractions",
      deployed: 'https://alexwatabe9.github.io/DailyDistractions/',
      src: "./public/project1.png",
      backgroundColor: '#e5446dff',
    },
    {
      id: 2,
      name: "SQL Challenge Employee Tracker",
      description: true,
      Repo: "https://github.com/kpetrosky/SQL-Challenge-Employee-Tracker",
      deployed: 'https://watch.screencastify.com/v/m3nkzd9RcgqnyzR2tkQx',
      src: '',
      backgroundColor: '#dee2ffff',
    },
    {
      id: 3,
      name: "Third-Party APIs Challenge: Work Day Scheduler",
      description: true,
      Repo: " https://kpetrosky.github.io/Third-Party-APIs-Challenge-Work-Day-Scheduler/",
      deployed: 'https://github.com/kpetrosky/Third-Party-APIs-Challenge-Work-Day-Scheduler',
      src: '',
      backgroundColor: '#82aba1ff',
    },
    {
      id: 4,
      name: "Web APIs Challenge Code Quiz",
      description: true,
      Repo: "https://github.com/kpetrosky/web-apis-challenge-code-quiz",
      deployed: 'https://kpetrosky.github.io/web-apis-challenge-code-quiz/',
      src: '',
      backgroundColor: '#ff9474ff',
    },
    {
      id: 5,
      name: "Express.js-Challenge-Note-Taker",
      description: true,
      Repo: "https://github.com/kpetrosky/Express.js-Challenge-Note-Taker",
      deployed: 'https://dashboard.heroku.com/apps/frozen-headland-23136',
      src: '',
      backgroundColor: '#e8aeb7ff',
    },
    {
      id: 6,
      name: "Progressive-Web-Applications-PWA-Challenge-Text-Editor",
      description: true,
      Repo: "https://github.com/kpetrosky/Progressive-Web-Applications-PWA-Challenge-Text-Editor",
      deployed: 'https://dashboard.heroku.com/apps/lit-sands-84115/',
      src: '',
      backgroundColor: '#cbc0d3ff',
    },
  ];

  return (
    <div>
      <h1>Portfolio Page</h1>
      <p>
        {/* Rest of the content */}
      </p>
      <div className='row'>
        {projects.map(project => (
          <div className='col-md-4 col-sm-12' key={project.id}>
            <div className="card" style={{ backgroundColor: project.backgroundColor }}>
              {/* Render project details */}
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Click for more information</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
