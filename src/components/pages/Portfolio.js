import React from 'react';

import project1 from '../../images/project1.png';
import apiQuiz from '../../images/apiQuiz.png';

import mvc from '../../images/mvc.png';
// import express from '../../images/express.png'
// import sql from '../../images/sql.png'
import pwa from '../../images/pwa.png'
import dashboard from '../../images/weather dashboard.png'
import wolf from "../../images/Screenshot 2023-07-02 110820.png"


export default function Portfolio() {
  const projects = [
    {
      id: 1,
      name: 'Daily Distractions',
      description: 'Welcome to Daily Distractions your one stop shop to help you get away from your <> daily tasks, or to cure your boredom. This app allows you to chose from a multitude of different topics that will all generate a random joke, number fact, and picture. Our app does this by fetching the information from multiple APIS or (Application programming interface) to randomly pull data and display them on our website.With these tools and technologies, Daily Distractions brings you an enjoyable and engaging experience, offering a brief respite from your daily routine. Explore our diverse range of topics and let our app surprise you with random jokes, intriguing number facts, and captivating pictures. It\'s time to embrace the distraction and have some fun!',
      repo: 'https://github.com/kpetrosky/DailyDistractions',
      deployed: 'https://alexwatabe9.github.io/DailyDistractions/',
      src: project1,
      backgroundColor: '#e5446dff',
      toolsUsed: 'HTML, CSS, JavaScript, Git, GitHub, APIs'
    },
    {
      id: 2,
      name: "Web APIs Code Quiz",
      description: 'Code Quiz is an interactive web application designed to test and assess your knowledge of JavaScript fundamentals. This coding quiz simulates a typical coding assessment that you may encounter during a job interview or as part of a coding boot camp curriculum. The objective of the quiz is to gauge your progress in JavaScript and compare it to your peers. Upon accessing the quiz, you will be presented with a user-friendly interface that is clean, polished, and responsive. The quiz will begin when you click the start button, triggering a timer that will track the duration of the quiz. As soon as the quiz starts, the first question will be displayed.',
      Repo: "https://github.com/kpetrosky/Web-API-Challenge-Code-Quiz",
      deployed: 'https://kpetrosky.github.io/web-apis-challenge-code-quiz/ ',
      src: apiQuiz,
      backgroundColor: '#ff9474ff',
      toolsUsed: 'Tools: Express.js, Node.js, JavaScript, JSON, Heroku'
    },
    {
      id: 3,
      name: "The Weekly Weather Dashboard",
      description: 'Introducing a versatile app designed to provide users with comprehensive weather information for any city they input. This innovative application ensures that regardless of the chosen location, users receive a week\'s worth of detailed weather forecasts. With just a few taps, users can access essential weather data, including temperature, real-feel temperature, humidity levels, and wind conditions. But that\'s not all! This app goes beyond providing instant weather updates. It features a unique tracking system that records the cities users have previously searched for. By storing this information, users can conveniently refer back to past locations and access their respective weather forecasts at any time. Whether you\'re planning a trip, organizing outdoor activities, or simply curious about the weather, this app offers a user-friendly experience, allowing you to stay informed and make well-informed decisions based on accurate weather predictions. Stay prepared, wherever you are, with this all-inclusive weather companion.',
      Repo: "https://github.com/kpetrosky/weekly-weather-dashboard",
      deployed: 'https://kpetrosky.github.io/weekly-weather-dashboard/',
      src: dashboard,
      backgroundColor: '#ff9474ff',
      toolsUsed: 'HTML, CSS, JavaScript, Open Weather Map API, JSON'
    },
    {
      id: 4,
      name: 'Chained Wolfe MetalCrafts',
      description: 'Welcome to our website, crafted exclusively for my husband\'s burgeoning jewelry business! Although still a work in progress, we are thrilled to present an interactive platform that allows you, as a valued customer, to effortlessly explore our dazzling collection. With just a few clicks, you can explore various categories, admire exquisite pieces, and even make a purchase right here. We understand the importance of connecting with our customers, which is why we have provided an easy way for you to reach out to the talented creator behind these beautiful creations. Whether you have specific questions, require personalized recommendations, or simply wish to share your thoughts, we encourage you to get in touch. Your satisfaction is our top priority, and we are committed to providing exceptional service every step of the way.Stay tuned as we continue to refine and enhance your browsing experience. We look forward to helping you discover the perfect piece of jewelry that reflects your unique style and personality. Thank you for your support, and we can\'t wait to embark on this exciting journey with you..',
      Repo: 'https://github.com/kpetrosky/greywolfe_metalworks',
      deployed: 'https://rocky-citadel-21591-6033c3f47761.herokuapp.com/#Portfolio',
      src: wolf,
      backgroundColor: '#f5f1e3ff',
      toolsUsed: 'React, Heroku, HTML, CSS, Node.js',
    },
    {
      id: 5,
      name: "Progressive-Web-Applications-PWA-Text-Editor",
      description: 'Introducing our cutting-edge text editor web application! Designed to enhance your coding experience, this feature-rich editor provides a seamless environment for writing and managing your code. Let\'s dive into its impressive capabilities. Upon opening the application in your editor, you\'ll immediately notice its intuitive client-server folder structure. This organization allows for efficient development and easy navigation of your project.To start up the application, simply run npm run start from the root directory. In an instant, the backend will be up and running, serving the client-side of your application.Thanks to the power of webpack, your JavaScript files are bundled together seamlessly, ensuring optimal performance and efficient loading times. Additionally, by running your webpack plugins, you\'ll automatically generate essential files such as an HTML file, service worker, and manifest file. These additions enhance the functionality and accessibility of your application.',
      Repo: "https://github.com/kpetrosky/Progressive-Web-Applications-PWA-Challenge-Text-Editor",
      deployed: 'https://lit-sands-84115.herokuapp.com/',
      src: pwa,
      backgroundColor: '#cbc0d3ff',
      toolsUsed: 'Tools: Express.js, Node.js, JavaScript, JSON (JavaScript Object Notation)'
    },
    {
      id: 6,
      name: 'Full stack MVC with handlebars, express, SQL',
      description: 'In the world of technology, writing about tech concepts, advancements, and new technologies is just as crucial as creating them. Developers often spend time reading and writing technical articles and tutorials to share their expertise and insights. This week\'s application is to build a CMS-style blog site, similar to WordPress, specifically designed for developers to publish their blog posts and engage in discussions by commenting on other developers\' posts. You will create this site from scratch and deploy it to Heroku. The application will follow the MVC (Model-View-Controller) architectural pattern, utilizing Handlebars.js as the templating language, Sequelize as the ORM (Object-Relational Mapping) tool, and the express-session npm package for authentication.',
      repo: 'https://github.com/kpetrosky/MVC-model-view-controller-tech-tech-blog',
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
