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
            <div className=''>
                <p className='uppercase text-sm tracking-widest'>
                    Make the web a better place with every line of code
                </p>
                <h1 className='pt-3'>
                    <span className='text-[#46a8fd]'>ED CUEVAS</span>
                </h1>
                <h1 className='py-2'>
                    A Software Developer
                </h1>
                <div className='flex items-center justify-between max-w-[430px] m-auto py-4'>
                    <div
                        onClick={() => handleLink('https://www.linkedin.com/in/edgardo-cuevas-979311255/')}
                        className='flex items-center justify-center rounded-3xl shadow-2xl bg-[#46a8fd] w-24 h-24 cursor-pointer hover:scale-125 ease-in duration-300'>
                        <FaLinkedinIn className='text-white w-8 h-8'/>
                    </div>
                    <div
                        onClick={() => handleLink('https://github.com/EdjannCuevas')}
                        className='flex items-center justify-center rounded-3xl shadow-2xl bg-[#46a8fd] w-24 h-24 cursor-pointer hover:scale-125 ease-in duration-300'>
                        <FaGithub className='text-white w-8 h-8'/>
                    </div>
                    <Link href='/#contact' className='flex items-center justify-center rounded-3xl shadow-2xl bg-[#46a8fd] w-24 h-24 cursor-pointer hover:scale-125 ease-in duration-300'>
                        <AiOutlineMail className='text-white w-8 h-8'/>
                    </Link>
                </div>
                <p className='py-4 max-w-[70%] m-auto'>
                    I'm a software developer specializing in building and designing responsive front-end web applications, equipped with skills in building full stack web applications.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main;