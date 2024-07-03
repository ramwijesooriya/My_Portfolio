import React from 'react'
import Workitem from './Workitem'

const data = [
    {
        year: '2022',
        title:'Undergraduat Software Engineer Degree',
        duration:'Stil Following',
        details:'I am following stil that degree in University of Sacaragamuwa'

    },
    {
        year: '2022',
        title:'Undergraduat Software Engineer Degree',
        duration:'Stil Following',
        details:'I am following stil that degree in University of Sacaragamuwa'
    }
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
