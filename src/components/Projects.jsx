import React from 'react'
import Projectsitem from './Projectsitem'
import botImg from '../assets/bot.jpg'
import blogsImg from '../assets/blogs.jpg'
import CurrencyAppImg from '../assets/CurrencyApp.jpg'
import blogs2Img from '../assets/blogs2.jpg'



const Projects = () => {
  return (
    <div id='Projects' className=' max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] '>Projects</h1>
        <p className='text-center py-8'>
            This is my blog post project using css,javascript,php like wise  ,
        </p>
<div className='grid sm:grid-cols-2 gap-12'>
  <Projectsitem img={botImg} title='My Bot Project'/>
  <Projectsitem img={blogsImg} title='My blogs1 Project'/>
  <Projectsitem img={CurrencyAppImg} title='My CurrencyApp Project'/>
  <Projectsitem img={blogs2Img} title='My blogs2 Project'/>
</div>
    </div>
  )
}

export default Projects
