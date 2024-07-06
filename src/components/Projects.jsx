import React from 'react';
import Projectsitem from './Projectsitem'; // Adjusted the import path
import portfolioImg from '../assets/portfolio.jpg';
import blogsImg from '../assets/blogs.jpg';
import CurrencyAppImg from '../assets/CurrencyApp.jpg';
import botImg from '../assets/bot.jpg'; // Corrected the image name

const Projects = () => {
  return (
    <div id='Projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
        This is my Projects.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <Projectsitem img={blogsImg} title='My Blogs Website Project'/>
        <Projectsitem img={portfolioImg} title='My Portfolio Project'/>
        <Projectsitem img={CurrencyAppImg} title='Currency-exchange-rates-tracker-and-analyzer Project'/>
        <Projectsitem img={botImg} title='My Chat Bot Project'/> {/* Corrected the title */}
      </div>
    </div> 
  );
}

export default Projects;
