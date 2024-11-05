import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Syed Shan-e-Ali, a passionate MERN stack developer with a strong background in web development. 
          Currently, I am in my 5th semester at the University of Management and Technology (UMT) in Lahore, 
          maintaining a CGPA of 3.69. I have a year of experience in developing impactful and visually engaging 
          software solutions that make a difference.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          Pursuing Bachelor's Degree in IT, UMT Lahore, Current CGPA: 3.69
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          Proficient in JavaScript, HTML, CSS, and ReactJS Experienced with MongoDB, Express.js, Node.js Strong grasp of 
          modern web design principles Excellent problem-solving skills and a collaborative mindset
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          MERN Stack Developer, 1 Year of experience in developing full-stack web applications. 
          Contributed to various freelance projects, focusing on responsive design, API integration, and performance optimization.
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to utilize my skills and creativity to build innovative web solutions that exceed expectations 
          and positively impact the digital world. I am committed to continuous learning and growth, 
          always seeking new challenges to enhance my expertise.
        </p>
      </div>
    </div>
  );
}

export default About;
