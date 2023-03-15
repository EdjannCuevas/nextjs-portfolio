import React, { useState } from 'react'
import Pantry from './Pantry'

const Projects = () => {

  return (
    <div
      id='projects'
      className='w-full md:h-screen p-2 flex py-20'
    >
        <div className='max-w-[1240px] m-auto flex flex-col md:flex lg:grid grid-cols-3 gap-8'>
            <div className='col-span-1'>
              <p className='text-xl tracking-widest uppercase text-[#46a8fd]'>
                Projects
              </p>
              <h2 className='py-4'>
                Pantry
              </h2>
            </div>
            <div className='col-span-2'>
              <Pantry/>
            </div>
        </div>
    </div>
  )
}

export default Projects