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
    },
    {
      id: 2,
      name: "Eggs",
      description: true,
      Repo: "",
      deployed: '',
      src: '',
    },
    {
      id: 3,
      name: "Milk",
      description: true,
      Repo: "",
      deployed: '',
      src: '',
    },
    {
      id: 4,
      name: "Web APIs Challenge Code Quiz",
      description: true,
      Repo: "https://github.com/kpetrosky/web-apis-challenge-code-quiz",
      deployed: 'https://kpetrosky.github.io/web-apis-challenge-code-quiz/',
      src: '',
    },
    {
      id: 5,
      name: "Milk",
      description: true,
      Repo: "",
      deployed: '',
      src: '',
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
            <div className="card">
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
