import Image from 'next/image'
import React, { useState } from 'react'
import Pantry from './Pantry'
import Html from '../public/images/skills/html.png'
import Css from '../public/images/skills/css.png'
import Firebase from '../public/images/skills/firebase.png'
import Github1 from '../public/images/skills/github1.png'
import Javascript from '../public/images/skills/javascript.png'
import Mongo from '../public/images/skills/mongo.png'
import Nextjs from '../public/images/skills/nextjs.png'
import Node from '../public/images/skills/node.png'
import Reactlogo from '../public/images/skills/react.png'
import Tailwind from '../public/images/skills/tailwind.png'
import Postgres from '../public/images/skills/postgres.png'
import Typescript from '../public/images/skills/typescript.png'

interface ProjectsProps {
  handleLink: (arg: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ handleLink }) => {

  return (
    <div
      id='projects'
      className='w-full p-4 py-20'
    >
      <div>
        <p className='text-xl tracking-widest uppercase text-[#46a8fd]'>
          Projects
        </p>
        <div className='max-w-[1240px] mx-auto flex flex-col md:grid lg:grid grid-cols-3 pt-4 gap-8'>
          <div className='col-span-1'>
            <h2 className='py-4'>
              Pantry
            </h2>
            <p>Pantry is a web app that helps users manage their pantry inventory and find recipes using ingredients they already have at home. With a simple interface and easy-to-use features, Pantry makes meal planning and grocery shopping a breeze.</p>
            <div className='w-full'>
              <h3 className='text-xl py-5'>
                Stack:
              </h3>
              <div className='grid grid-cols-2 m-1'>
                <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <Image
                    alt='/'
                    src={Javascript}
                  />
                  <h3 className='pl-2'>JavaScript</h3>
                </div>
                <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <Image
                    alt='/'
                    src={Node}
                  />
                  <h3 className='pl-2'>NodeJS</h3>
                </div>
                <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <Image
                    alt='/'
                    src={Typescript}
                  />
                  <h3 className='pl-2'>Typescript</h3>
                </div>
                <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <Image
                    alt='/'
                    src={Postgres}
                  />
                  <h3 className='pl-2'>PostgreSQL</h3>
                </div>
                <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <Image
                    alt='/'
                    src={Firebase}
                  />
                  <h3 className='pl-2'>Firebase</h3>
                </div>
                <div className='flex items-center m-2 w-[25px] md:w-[30px] lg:w-[45px] rounded shadow-lg shadow-grey-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <Image
                    alt='/'
                    src={Reactlogo}
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