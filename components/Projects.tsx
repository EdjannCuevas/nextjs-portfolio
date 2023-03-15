import React, { useState } from 'react'
import pic from '../public/images/projects/addIngredients.png'
import pic2 from '../public/images/projects/recipesPage.png'
import pic3 from '../public/images/projects/ingredientsListsPage.png'
import pic4 from '../public/images/projects/loginPage.png'

const Projects = () => {
  const slides = [ pic, pic2, pic3, pic4 ];

  return (
    <div
      id='projects'
      className='w-full md:h-screen p-2 flex py-20'
    >
        <div className='max-w-[1240px] m-auto flex flex-col md:grid grid-cols-3 gap-8'>
            <div className='col-span-1'>
              <p className='text-xl tracking-widest uppercase text-[#46a8fd]'>
                Projects
              </p>
              <h2 className='py-4'>
                Pantry
              </h2>
            </div>
            <div className='col-span-2 w-full'>
              <div style={{backgroundImage: "url(/images/projects/addIngredients.png)"}}>
                sdfdfgdfgsdfsdsdfdkjsdfnsdfjngsadfgdsadfgdsasdf
              </div>
            </div>
        </div>
    </div>
  )
}

export default Projects