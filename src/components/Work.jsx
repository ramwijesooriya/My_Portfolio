import React from 'react'
import Workitem from './Workitem'

const data = [
    {
        year: '2022 - 2026',
        title:'Software Engineering An Undergraduate Degree',
        duration:'Stil Following',
        details:'I following a Bachelor of Science in Software Engineering, where I gained comprehensive knowledge and hands-on experience in various aspects of software development.My coursework and projects have equipped me with skills in - Programming Languages: Proficient in C, Java, Python, C++, and JavaScript.Web Development: Experienced in building responsive web applications using HTML, CSS, React, and Node.js.Database Management: Skilled in working with MySQL and MongoDB.Software Engineering Principles: Strong understanding of software development life cycle, agile methodologies, and version control with Git.IoT and AI: Developed IoT solutions for device connectivity and control, and implemented AI algorithms to enhance application functionality.Tools and Platforms: Familiar with Docker, AWS, and other development tools.My education has provided me with a solid foundation in software engineering, preparing me to tackle complex problems and create innovative solutions.,'
        

    },
    {
      year: '2024',
      title:'An enthusiastic',
      duration:'Stil Following',
      details:'As an enthusiastic Software Engineer, I have worked on various projects involving web development, IoT, and AI. My experience includes developing scalable applications using React, creating IoT solutions to connect and control devices, and implementing AI algorithms to enhance user experiences. I am passionate about leveraging cutting-edge technologies to build innovative solutions that solve real-world problems.'
      

  },
    //can add other works {}
    
];

const Work = () => {
  return (
    
    <div id='work' className='max-w-[1040px m-auto md:pl-20 p-4 py-16' >

        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {data.map((item,idx)=>(
<Workitem 
key={idx} 
year={item.year} 
title={item.title} 
duration={item.duration} 
details={item.details}
 />

      ))}
    </div>
    
  );
};

export default Work
