import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { TypeAnimation } from 'react-type-animation'

const MainPage = () => {
  return (
    
    <div id='MainPage'>
      
       <img className='w-full h-screen cursor-pointer object-left scale-x=[-1] opacity-30 ' src="https://cdn.dribbble.com/users/1187278/screenshots/16762086/media/10ba6161c70f3edd67f34e229b62b852.gif" alt="/" />
       <div className='w-full h-full h-screnn absolute top-0 left-0 bg-white/10'>
       <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center '>
        <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Asanka Wijesooriya</h1>
           <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I am a
            <TypeAnimation
      sequence={[
        'Developer',
        2000, 
        'Coder',
        2000,
        'Coder',
        2000,
        'Software Engineer',
        2000
      ]}
      wrapper="div"
      speed={50}
      style={{ fontSize: '1em',paddingLeft: '5px',display: 'inline-block' }}
      repeat={Infinity}
    />

        </h2>
        <div className='flex justify-between pt-6 max-w-[200px] w-full'>

          <FaTwitter className='cursor-pointer' size={20} />
          <FaFacebook className='cursor-pointer' size={20}/>
          <FaLinkedin className='cursor-pointer' size={20}/>
        </div>
       </div>

       </div>
    </div>
  )
}

export default MainPage
