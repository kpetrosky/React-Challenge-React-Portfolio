import React from 'react';

import project1 from '../../images/project1.png';
import apiQuiz from '../../images/apiQuiz.png';
import mod5 from '../../images/mod 5.png';
import mvc from '../../images/mvc.png';
import express from '../../images/express.png'
import sql from '../../images/sql.png'
import pwa from '../../images/pwa.png'


export default function Portfolio() {
  const projects = [
    {
      id: 1,
      name: "Daily Distractions",
      description: true,
      Repo: "https://github.com/AlexWatabe9/DailyDistractions",
      deployed: 'https://alexwatabe9.github.io/DailyDistractions/',
      src: project1,
      backgroundColor: '#e5446dff',
    },
    {
      id: 2,
      name: "SQL Challenge Employee Tracker",
      description: true,
      Repo: "https://github.com/kpetrosky/SQL-Challenge-Employee-Tracker",
      deployed: 'https://watch.screencastify.com/v/m3nkzd9RcgqnyzR2tkQx',
      src: sql,
      backgroundColor: '#dee2ffff',
    },
    {
      id: 3,
      name: "Web APIs Challenge Code Quiz",
      description: true,
      Repo: "https://github.com/kpetrosky/web-apis-challenge-code-quiz",
      deployed: 'https://kpetrosky.github.io/web-apis-challenge-code-quiz/',
      src: apiQuiz,
      backgroundColor: '#ff9474ff',
    },
    {
      id: 4,
      name: "Express.js-Challenge-Note-Taker",
      description: true,
      Repo: "https://github.com/kpetrosky/Express.js-Challenge-Note-Taker",
      deployed: 'https://dashboard.heroku.com/apps/frozen-headland-23136',
      src: express,
      backgroundColor: '#e8aeb7ff',
    },
    {
      id: 5,
      name: "Progressive-Web-Applications-PWA-Challenge-Text-Editor",
      description: true,
      Repo: "https://github.com/kpetrosky/Progressive-Web-Applications-PWA-Challenge-Text-Editor",
      deployed: 'https://dashboard.heroku.com/apps/lit-sands-84115/',
      src: pwa,
      backgroundColor: '#cbc0d3ff',
    },
    {
      id: 6,
      name: "Full stack MVC with handlebars, express, SQL",
      description: true,
      Repo: "https://github.com/kpetrosky/MVC-Model-View-Controller-MVC-Challenge-Tech-Blog",
      deployed: 'https://frozen-lake-62666.herokuapp.com/',
      src: mvc,
      backgroundColor: '#a74482ff',
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
              <img src={project.src} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: '24px' }}>{project.name}</h5>
                <p className="card-text" style={{ fontSize: '18px' }}>This challenge is exciting. Check it out!</p>
                <a href={project.Repo} target="_blank" className="btn btn-primary me-3">Github Repo</a>
                <a href={project.deployed} target="_blank" className="btn btn-primary">Deployed Application</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
