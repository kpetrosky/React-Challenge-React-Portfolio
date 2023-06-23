import React from 'react';
import { Container } from 'react-bootstrap';
import backgroundImage1 from '../../images/background/background.jpg'

export default function About() {
  const divStyle = {
    color: 'black',
    backgroundColor: '#e5446dff',
    padding: '20px',
    // backgroundImage: `url(${backgroundImage1})`
  };

  return (
    <Container>
      <div style={divStyle}>
        <h1 className="text-center">About me</h1>
        <p>
          Hello, I’m Krystal Petrosky, a passionate Full Stack engineer with a love for creating engaging and robust applications. While I am relatively new to the Full Stack community, I have developed a strong foundation in various technologies such as React, SQL, MERN, HTML/CSS, JavaScript, Node.js, ORM, MVC, and many others. I thrive on challenges and enjoy finding innovative solutions to complex problems.
        </p>

        <p>
          Throughout my career, I have worked on a diverse range of projects, each contributing to my growth and expanding my skill set. As a lead 1st-grade teacher, I not only guided peers who were starting out as teachers but also fostered a growth mindset in young minds. During my Full Stack Bootcamp, I collaborated on team projects that aimed to create exceptional user experiences. I have also worked on individual projects, honing my skills and resourcefulness to deliver high-quality results consistently.
        </p>

        <p>
          I excel in problem-solving, a skill that has been invaluable in my previous teaching career as well as in coding. My attention to detail, strong problem-solving abilities, and dedication to continuous learning enable me to adapt quickly to new technologies and industry trends. I am always eager to expand my knowledge and stay ahead in this dynamic field.
        </p>

        <p>
          In addition to my technical skills, I am a collaborative team player. While I can take charge when needed, I value open communication, mutual respect, and the exchange of ideas to foster creativity and achieve project success. I believe that collaboration and teamwork are essential for bringing ideas to life.
        </p>

        <p>
          Beyond work, I am an avid reader, particularly enjoying romance stories with a satisfying happily ever after. I am also working on writing my own novel, which challenges me to persevere and complete ambitious projects. Additionally, I am passionate about web development and love exploring new technologies and frameworks. Solving coding challenges is another interest of mine, as it helps me think critically, optimize code efficiency, and find elegant solutions to complex problems, all of which are crucial for success as a Full Stack Developer.
        </p>

        <p>
          Thank you for taking the time to explore my portfolio. I am thrilled to share my projects and experiences with you. If you have any inquiries or collaboration opportunities, please feel free to reach out. Let’s create something amazing together!
        </p>
      </div>
    </Container>
  );
}
