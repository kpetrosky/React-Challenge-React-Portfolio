import React from 'react';

import project1 from '../../images/project1.png';
import apiQuiz from '../../images/apiQuiz.png';

import mvc from '../../images/mvc.png';
import express from '../../images/express.png'
import sql from '../../images/sql.png'
import pwa from '../../images/pwa.png'


export default function Portfolio() {
  const projects = [
    {
      id: 1,
      name: 'Daily Distractions',
      description: 'Welcome to Daily Distractions your one stop shop to help you get away from your mundane daily tasks, or to cure your boredom. This app allows you to chose from a multitude of different topics that will all generate a random joke, number fact, and picture. Our app does this by fetching the information from multiple APIS or (Application programming interface) to randomly pull data and display them on our website.With these tools and technologies, Daily Distractions brings you an enjoyable and engaging experience, offering a brief respite from your daily routine. Explore our diverse range of topics and let our app surprise you with random jokes, intriguing number facts, and captivating pictures. It\'s time to embrace the distraction and have some fun!',
      repo: 'https://github.com/AlexWatabe9/DailyDistractions',
      deployed: 'https://alexwatabe9.github.io/DailyDistractions/',
      src: project1,
      backgroundColor: '#e5446dff',
      toolsUsed: 'HTML, CSS, JavaScript, Git, GitHub, APIs'
    },
    {
      id: 2,
      name: "Web APIs Code Quiz",
      description: '•	Code Quiz is an interactive web application designed to test and assess your knowledge of JavaScript fundamentals. This coding quiz simulates a typical coding assessment that you may encounter during a job interview or as part of a coding boot camp curriculum. The objective of the quiz is to gauge your progress in JavaScript and compare it to your peers. Upon accessing the quiz, you will be presented with a user-friendly interface that is clean, polished, and responsive. The quiz will begin when you click the start button, triggering a timer that will track the duration of the quiz. As soon as the quiz starts, the first question will be displayed.',
      Repo: "https://github.com/kpetrosky/web-apis-application-code-quiz",
      deployed: 'https://kpetrosky.github.io/web-apis-challenge-code-quiz/ ',
      src: apiQuiz,
      backgroundColor: '#ff9474ff',
      toolsUsed: 'Tools: Express.js, Node.js, JavaScript, JSON, Heroku'
    },
    {
      id: 3,
      name: "Weekly Weather Dashboard",
      description: '',
      Repo: "https://github.com/kpetrosky/weekly-weather-dashboard",
      deployed: 'https://kpetrosky.github.io/weekly-weather-dashboard/',
      src: apiQuiz,
      backgroundColor: '#ff9474ff',
      toolsUsed: ''
    },
    {
      id: 4,
      name: "Mern",
      description: '',
      Repo: "",
      deployed: ' ',
      src: apiQuiz,
      backgroundColor: '#ff9474ff',
      toolsUsed: ''
    },
    {
      id: 5,
      name: "Progressive-Web-Applications-PWA-Text-Editor",
      description: ' The task is to build a text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria. It will several data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline',
      Repo: "https://github.com/kpetrosky/Progressive-Web-Applications-PWA-application-Text-Editor",
      deployed: 'https://dashboard.heroku.com/apps/lit-sands-84115/',
      src: pwa,
      backgroundColor: '#cbc0d3ff',
      toolsUsed: 'Tools: Express.js, Node.js, JavaScript, JSON (JavaScript Object Notation)'
    },
    {
      id: 6,
      name: 'Full stack MVC with handlebars, express, SQL',
      description: 'In the world of technology, writing about tech concepts, advancements, and new technologies is just as crucial as creating them. Developers often spend time reading and writing technical articles and tutorials to share their expertise and insights. This week\'s application is to build a CMS-style blog site, similar to WordPress, specifically designed for developers to publish their blog posts and engage in discussions by commenting on other developers\' posts. You will create this site from scratch and deploy it to Heroku. The application will follow the MVC (Model-View-Controller) architectural pattern, utilizing Handlebars.js as the templating language, Sequelize as the ORM (Object-Relational Mapping) tool, and the express-session npm package for authentication.',
      repo: 'https://github.com/kpetrosky/MVC-Model-View-Controller-MVC-application-Tech-Blog',
      deployed: 'https://salty-retreat-66567-6f83efb5ca5c.herokuapp.com/',
      src: mvc,
      backgroundColor: '#a74482ff',
      toolsUsed: 'Express.js, APIs, Handlebars.js, Sequelize, Heroku.',
    },
  ];

  return (
    <div>
      <h1 className="text-center">Portfolio Page</h1>
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
                <p className="card-text" style={{ fontSize: '18px' }}>{project.description}{project.toolsUsed}</p>
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
