import Image from 'next/image'
import React from 'react'
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

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 py-20'>
        <div className='max-w-[1240px] mx-auto flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#46a8fd]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image
                      alt='/'
                      src={Html}
                      width='30'
                      height='30'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>HTML</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image
                      alt='/'
                      src={Css}
                      width='30'
                      height='30'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>CSS</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image
                      alt='/'
                      src={Javascript}
                      width='30'
                      height='30'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Javascript</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image
                      alt='/'
                      src={Node}
                      width='30'
                      height='30'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>NodeJS</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image
                      alt='/'
                      src={Reactlogo}
                      width='30'
                      height='30'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>React</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image
                      alt='/'
                      src={Github1}
                      width='30'
                      height='30'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Github</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image
                      alt='/'
                      src={Firebase}
                      width='30'
                      height='30'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Firebase</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image
                      alt='/'
                      src={Mongo}
                      width='30'
                      height='30'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>MongoDB</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image
                      alt='/'
                      src={Nextjs}
                      width='30'
                      height='30'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>NextJS</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image
                      alt='/'
                      src={Tailwind}
                      width='30'
                      height='30'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Tailwind</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image
                      alt='/'
                      src={Postgres}
                      width='30'
                      height='30'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Postgres</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image
                      alt='/'
                      src={Typescript}
                      width='30'
                      height='30'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Typescript</h3>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Skills