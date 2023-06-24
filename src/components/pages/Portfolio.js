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
      toolsUsed: ''
    },
    {
      id: 2,
      name: 'SQL Challenge Employee Tracker',
      description: 'The SQL Challenge: Employee Tracker is a command-line application designed to help business owners efficiently manage their company\'s employee database. Built using Node.js, Inquirer, and MySQL, this application provides an intuitive interface for viewing and organizing departments, roles, and employees within the company.\n\nAs a business owner, you can easily navigate through various options to perform essential tasks such as viewing all departments, roles, and employees, adding new departments, roles, and employees, updating employee roles, and deleting employees. This Employee Tracker is an indispensable tool for managing and organizing your company\'s workforce.\n\nThe SQL Challenge: Employee Tracker is built using modern JavaScript technologies and follows best practices for code structure and organization. It incorporates command-line interfaces (CLIs) to provide an efficient and user-friendly experience. With the SQL Challenge: Employee Tracker, you can ensure your employee database remains up to date and accessible, saving time and resources for your business.',
      src: apiQuiz,
      repo: 'https://github.com/kpetrosky/SQL-Challenge-Employee-Tracker',
      deployed: 'https://watch.screencastify.com/v/m3nkzd9RcgqnyzR2tkQx',
      src: sql,
      backgroundColor: '#dee2ffff',
      toolsUsed: 'Node.js,  Inquirer MySQL, Command-line Interface (CLI)',
    },
    {
      id: 3,
      name: "Web APIs Challenge Code Quiz",
      description: 'The Web APIs Challenge: Code Quiz is an interactive web application designed to test and assess your knowledge of JavaScript fundamentals. This coding quiz simulates a typical coding assessment that you may encounter during a job interview or as part of a coding boot camp curriculum. The objective of the quiz is to gauge your progress in JavaScript and compare it to your peers.Upon accessing the quiz, you will be presented with a user-friendly interface that is clean, polished, and responsive. The quiz will begin when you click the start button, triggering a timer that will track the duration of the quiz. As soon as the quiz starts, the first question will be displayed',
      Repo: "https://github.com/kpetrosky/web-apis-challenge-code-quiz",
      deployed: 'https://kpetrosky.github.io/web-apis-challenge-code-quiz/',
      src: apiQuiz,
      backgroundColor: '#ff9474ff',
      toolsUsed: 'Tools: HTML, CSS, JavaScript'
    },
    {
      id: 4,
      name: "Express.js-Challenge-Note-Taker",
      description: 'The Note Taker challenge requires you to develop a web application called Note Taker that allows users to write and save notes. The front end of the application has already been created, and your task is to build the back end using Express.js. The application should be able to store and retrieve note data from a JSON file.To successfully complete this challenge, you will need to connect the front end and back end of the application and deploy the entire application to Heroku. As a small business owner, the user story for this application is to provide the ability to write and save notes. This feature allows users to organize their thoughts and keep track of tasks that need to be completed.',
      Repo: "https://github.com/kpetrosky/Express.js-Challenge-Note-Taker",
      deployed: 'https://dashboard.heroku.com/apps/frozen-headland-23136',
      src: express,
      backgroundColor: '#e8aeb7ff',
      toolsUsed: 'Tools: Express.js, Node.js, JavaScript, JSON, Heroku',
    },
    {
      id: 5,
      name: "Progressive-Web-Applications-PWA-Challenge-Text-Editor",
      description: 'Create a Note Taker application that allows users to write and save notes. The application\'s front end has already been developed, and your task is to build the back end using Express.js. You will also need to connect the front end and back end, and finally deploy the entire application to Heroku. The Note Taker application targets small business owners, providing them with a convenient way to write and save notes. This feature enables users to organize their thoughts and keep track of tasks they need to complete.',
      Repo: "https://github.com/kpetrosky/Progressive-Web-Applications-PWA-Challenge-Text-Editor",
      deployed: 'https://dashboard.heroku.com/apps/lit-sands-84115/',
      src: pwa,
      backgroundColor: '#cbc0d3ff',
      toolsUsed: 'Tools: Express.js, Node.js, JavaScript, JSON (JavaScript Object Notation)'
    },
    {
      id: 6,
      name: 'Full stack MVC with handlebars, express, SQL',
      description: 'In the world of technology, writing about tech concepts, advancements, and new technologies is just as crucial as creating them. Developers often spend time reading and writing technical articles and tutorials to share their expertise and insights. This week\'s challenge is to build a CMS-style blog site, similar to WordPress, specifically designed for developers to publish their blog posts and engage in discussions by commenting on other developers\' posts. You will create this site from scratch and deploy it to Heroku. The application will follow the MVC (Model-View-Controller) architectural pattern, utilizing Handlebars.js as the templating language, Sequelize as the ORM (Object-Relational Mapping) tool, and the express-session npm package for authentication.',
      repo: 'https://github.com/kpetrosky/MVC-Model-View-Controller-MVC-Challenge-Tech-Blog',
      deployed: 'https://frozen-lake-62666.herokuapp.com/',
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
