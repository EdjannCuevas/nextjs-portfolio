import Image from 'next/image'
import React from 'react'
import Pantry from './Pantry'
import BookXChange from './BookXChange'
import Portfolio from './Portfolio'
import Firebase from '../public/images/skills/firebase.png'
import Javascript from '../public/images/skills/javascript.png'
import Spring from '../public/images/skills/spring.png'
import Node from '../public/images/skills/node.png'
import ReactLogo from '../public/images/skills/react.png'
import Postgres from '../public/images/skills/postgres.png'
import Typescript from '../public/images/skills/typescript.png'
import JavaLogo from '../public/images/skills/javalogo.png'
import Tailwind from '../public/images/skills/tailwind.png'
import NextJS from '../public/images/skills/nextjs.png'
import { FiLink, FiGithub } from 'react-icons/fi'
import Pantryv2 from './Pantryv2'

interface ProjectsProps {
  handleLink: (arg: string) => void,
  darkMode: boolean,
}

const Projects: React.FC<ProjectsProps> = ({ handleLink, darkMode }) => {

  return (
    <div
      id='projects'
      className='w-full lg:h-auto p-4 py-24'
    >
      <div className='max-w-[1240px] mx-auto flex-col justify-center h-auto'>
        <div className='w-full border-b-2 p-2 flex items-center justify-center'>
          <p className='text-3xl font-bold tracking-widest uppercase text-[#46a8fd]'>
            projects
          </p>
        </div>
        <div className='flex flex-col justify-center h-full pt-5'>
        <div className='project'>
            <div className='col-span-1'>
              <div className='flex justify-start items-center'>
                <h2 className='py-4'>
                  Pantry/v2
                </h2>
                <div className='rounded p-1 m-2 bg-[#45a7fd] text-white hover:scale-105 ease-in duration-300 cursor-pointer'>
                  <FiLink
                    size={20}
                    onClick={() => handleLink('https://pantry2.herokuapp.com/')}
                  />
                </div>
                <div className='rounded p-1 m-2 bg-[#45a7fd] text-white hover:scale-105 ease-in duration-300 cursor-pointer'>
                  <FiGithub
                    size={20}
                    onClick={() => handleLink('https://github.com/EdjannCuevas/pantry-2.0')}
                  />
                </div>
              </div>
              <p>Pantry is a web app that helps users manage their pantry inventory and find recipes using ingredients they already have at home. With a simple interface and easy-to-use features, Pantry makes meal planning and grocery shopping a breeze.</p>
              <div className='w-full'>
                <h3 className='text-xl py-5'>
                  Stack:
                </h3>
                <div className='grid grid-cols-2 m-1'>
                  <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Image
                      alt='/'
                      width={35}
                      src={Javascript}
                    />
                    <h3 className='pl-2'>JavaScript</h3>
                  </div>
                  <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Image
                      alt='/'
                      width={35}
                      src={Node}
                    />
                    <h3 className='pl-2'>NodeJS</h3>
                  </div>
                  <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Image
                      alt='/'
                      width={35}
                      src={Typescript}
                    />
                    <h3 className='pl-2'>Typescript</h3>
                  </div>
                  <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Image
                      alt='/'
                      width={35}
                      src={Postgres}
                    />
                    <h3 className='pl-2'>PostgreSQL</h3>
                  </div>
                  <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Image
                      alt='/'
                      width={35}
                      src={Tailwind}
                    />
                    <h3 className='pl-2'>Tailwind</h3>
                  </div>
                  <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Image
                      alt='/'
                      width={35}
                      src={ReactLogo}
                    />
                    <h3 className='pl-2'>ReactJS</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-2 md:pt-5 lg:pt-8'>
              <Pantryv2 handleLink={handleLink}/>
            </div>
          </div>
          <div className='project'>
            <div className='col-span-1'>
            <div className='flex justify-start items-center'>
                <h2 className='py-4'>
                  Book X Change
                </h2>
                <div className='rounded p-1 m-2 bg-[#45a7fd] text-white hover:scale-105 ease-in duration-300 cursor-pointer'>
                  <FiLink
                    size={20}
                    onClick={() => handleLink('https://www.youtube.com/watch?v=f1bMJRe4qgs&t=98s')}
                  />
                </div>
                <div className='rounded p-1 m-2 bg-[#45a7fd] text-white hover:scale-105 ease-in duration-300 cursor-pointer'>
                  <FiGithub
                    size={20}
                    onClick={() => handleLink('https://github.com/Binder-team')}
                  />
                </div>
              </div>
              <p>Book X Change is an Android app that allows users to swap their used books with others in their area, using a swipe left or right interface reminiscent of Tinder. It's an easy and fun way to trade books and connect with other book lovers in your community.</p>
              <div className='w-full'>
                <h3 className='text-xl py-5'>
                  Stack:
                </h3>
                <div className='grid grid-cols-2 m-1'>
                  <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Image
                      alt='/'
                      width={35}
                      src={JavaLogo}
                    />
                    <h3 className='pl-2'>Java</h3>
                  </div>
                  <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Image
                      alt='/'
                      width={35}
                      src={Spring}
                    />
                    <h3 className='pl-2'>Spring</h3>
                  </div>
                  <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Image
                      alt='/'
                      width={35}
                      src={Typescript}
                    />
                    <h3 className='pl-2'>Typescript</h3>
                  </div>
                  <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Image
                      alt='/'
                      width={35}
                      src={Postgres}
                    />
                    <h3 className='pl-2'>PostgreSQL</h3>
                  </div>
                  <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Image
                      alt='/'
                      width={35}
                      src={ReactLogo}
                    />
                    <h3 className='pl-2'>ReactNative</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-2 md:pt-5 lg:pt-8'>
              <BookXChange handleLink={handleLink}/>
            </div>
          </div>
        </div>
        <div className='project'>
            <div className='col-span-1'>
              <div className='flex justify-start items-center'>
                <h2 className='py-4'>
                  Portfolio
                </h2>
                <div className='rounded p-1 m-2 bg-[#45a7fd] text-white hover:scale-105 ease-in duration-300 cursor-pointer'>
                  <FiLink
                    size={20}
                    onClick={() => handleLink('https://edgardocuevas.herokuapp.com/')}
                  />
                </div>
                <div className='rounded p-1 m-2 bg-[#45a7fd] text-white hover:scale-105 ease-in duration-300 cursor-pointer'>
                  <FiGithub
                    size={20}
                    onClick={() => handleLink('https://github.com/EdjannCuevas/nextjs-portfolio')}
                  />
                </div>
              </div>
              <p>This is a developer portfolio created using Tailwind and React with TypeScript, featuring a modern and minimalist design with a responsive user interface.</p>
              <div className='w-full'>
                <h3 className='text-xl py-5'>
                  Stack:
                </h3>
                <div className='grid grid-cols-2 m-1'>
                  <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Image
                      alt='/'
                      width={35}
                      src={Javascript}
                    />
                    <h3 className='pl-2'>JavaScript</h3>
                  </div>
                  <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Image
                      alt='/'
                      width={35}
                      src={Tailwind}
                    />
                    <h3 className='pl-2'>Tailwind</h3>
                  </div>
                  <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Image
                      alt='/'
                      width={35}
                      src={Typescript}
                    />
                    <h3 className='pl-2'>Typescript</h3>
                  </div>
                  <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Image
                      alt='/'
                      width={35}
                      src={NextJS}
                    />
                    <h3 className='pl-2'>NextJS</h3>
                  </div>
                  <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Image
                      alt='/'
                      width={35}
                      src={ReactLogo}
                    />
                    <h3 className='pl-2'>ReactJS</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-2 md:pt-5 lg:pt-8'>
              <Portfolio handleLink={handleLink} darkMode={darkMode}/>
            </div>
        </div>
          <div className='project'>
            <div className='col-span-1'>
              <div className='flex justify-start items-center'>
                <h2 className='py-4'>
                  Pantry
                </h2>
                <div className='rounded p-1 m-2 bg-[#45a7fd] text-white hover:scale-105 ease-in duration-300 cursor-pointer'>
                  <FiLink
                    size={20}
                    onClick={() => handleLink('https://pantry2.herokuapp.com/')}
                  />
                </div>
                <div className='rounded p-1 m-2 bg-[#45a7fd] text-white hover:scale-105 ease-in duration-300 cursor-pointer'>
                  <FiGithub
                    size={20}
                    onClick={() => handleLink('https://github.com/EdjannCuevas/pantry-app')}
                  />
                </div>
              </div>
              <p>Pantry is a web app that helps users manage their pantry inventory and find recipes using ingredients they already have at home. With a simple interface and easy-to-use features, Pantry makes meal planning and grocery shopping a breeze.</p>
              <div className='w-full'>
                <h3 className='text-xl py-5'>
                  Stack:
                </h3>
                <div className='grid grid-cols-2 m-1'>
                  <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Image
                      alt='/'
                      width={35}
                      src={Javascript}
                    />
                    <h3 className='pl-2'>JavaScript</h3>
                  </div>
                  <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Image
                      alt='/'
                      width={35}
                      src={Node}
                    />
                    <h3 className='pl-2'>NodeJS</h3>
                  </div>
                  <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Image
                      alt='/'
                      width={35}
                      src={Typescript}
                    />
                    <h3 className='pl-2'>Typescript</h3>
                  </div>
                  <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Image
                      alt='/'
                      width={35}
                      src={Postgres}
                    />
                    <h3 className='pl-2'>PostgreSQL</h3>
                  </div>
                  <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Image
                      alt='/'
                      width={35}
                      src={Firebase}
                    />
                    <h3 className='pl-2'>Firebase</h3>
                  </div>
                  <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Image
                      alt='/'
                      width={35}
                      src={ReactLogo}
                    />
                    <h3 className='pl-2'>ReactJS</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-2 md:pt-5 lg:pt-8'>
              <Pantry handleLink={handleLink}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects