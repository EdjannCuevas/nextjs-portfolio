import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Contact = ({ handleLink }) => {
  return (
    <div id='contact' className='w-full md:h-screen p-2 flex items-center py-20'>
        <div className='w-full m-auto flex items-center justify-center'>
            <div className='w-full md:w-[600px] lg:w-[600px] border-2 rounded p-5 shadow-lg'>
              <div className='flex flex-row justify-around items-stretch'>
                <div
                  onClick={() => handleLink('https://www.linkedin.com/in/edgardo-cuevas-979311255/')} 
                  className='rounded shadow-lg shadow-grey-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
                <div
                   onClick={() => handleLink('https://github.com/EdjannCuevas')}
                  className='rounded shadow-lg shadow-grey-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub />
                </div>
              </div>
              <form>
                <div className='flex flex-col py-2 w-full h-auto bg-red'>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-3'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-3'>Email</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='email'
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-3'>Subject</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-3'>Message</label>
                    <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows={10}></textarea>
                  </div>
                </div>
                <button className='w-full p-5 mt-5'>Send Message</button>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Contact