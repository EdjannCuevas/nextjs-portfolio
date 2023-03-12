import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Main = ({ handleLink }) => {

  return (
    <div id='main' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    Let&apos;s build something together
                </p>
                <h1>
                    Hi, I'm <span className='text-[#46a8fd]'>Ed</span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    A Front-End Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I'm a Full-Stack web developer specializing in building and designing responsive front-end web applications while learning back-end technologies.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaLinkedinIn onClick={() => handleLink('https://www.linkedin.com/in/edgardo-cuevas-979311255/')}/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaGithub onClick={() => handleLink('https://github.com/EdjannCuevas')}/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineMail/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <BsFillPersonLinesFill/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main;