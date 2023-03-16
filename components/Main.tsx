import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import Link from 'next/link'

interface MainProps {
    handleLink: (arg: string) => void;
}

const Main: React.FC<MainProps> = ({ handleLink }) => {

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
                    A Software Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I'm a software developer specializing in building and designing responsive front-end web applications, equipped with skills in building full stack web applications.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div
                        onClick={() => handleLink('https://www.linkedin.com/in/edgardo-cuevas-979311255/')}
                        className='rounded shadow-lg shadow-grey-400 bg-[#46a8fd] p-7 cursor-pointer hover:scale-125 text-xl ease-in duration-300'>
                        <FaLinkedinIn />
                    </div>
                    <div
                        onClick={() => handleLink('https://github.com/EdjannCuevas')}
                        className='rounded shadow-lg shadow-grey-400 bg-[#46a8fd] p-7 cursor-pointer hover:scale-125 text-xl ease-in duration-300'>
                        <FaGithub />
                    </div>
                    <Link href='/#contact' className='rounded shadow-lg shadow-grey-400 bg-[#46a8fd] p-7 cursor-pointer hover:scale-125 text-xl ease-in duration-300'>
                        <AiOutlineMail />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main;