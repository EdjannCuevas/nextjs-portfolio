import Image from 'next/image'
import React from 'react'
import HandsOn from '../public/images/about/hands-on.png'
import Work from '../public/images/about/work.jpg'
import CC28 from '../public/images/about/cc28.jpg'

const About = () => {
  return (
    <div
      id='about'
      className='w-full h-auto p-4 flex items-center py-24'
    >
        <div className='max-w-[1240px] m-auto flex'>
          <div className='col-span-2'>
            <div className='w-full border-b-2 p-2 flex items-center justify-center'>
              <p className='text-3xl font-bold tracking-widest uppercase text-[#46a8fd]'>
                about
              </p>
            </div>
            <div className='w-full justify-center items-center shadow-lg bg-white text-black border-2 bg-opacity-25 md:hover:scale-95 ease-in duration-500 rounded-3xl mt-5'>
              <div className='p-6 md:p-10'>
                <p className='indent-5'>
                  Hello! My name is <span className='text-[#368dda] font-bold'>Edgardo Cuevas</span>, and I'm a <span className='text-[#368dda] font-bold'>Software Developer</span> based in Kanagawa. I'm passionate about building high-quality software that makes people's lives easier and more enjoyable.
                </p>
                <br />
                <p className='indent-5'>
                  When I'm not coding, you can usually find me indulging in my other passions. I'm a huge movie buff and love nothing more than settling in for a marathon session of my favorite films. I also like to stay active by working out and going for walks while listening to podcasts.
                </p>
                <br/>
                <p className='indent-5'>One of the things I love about software engineering is that it's a constantly evolving field. There's always something new to learn, whether it's a new programming language, a new tool or framework, or a new approach to problem-solving. I'm always up for a challenge and love pushing myself to grow and improve as a developer. </p><br />
                <p className='indent-5'>
                  If you're looking for a software engineer who is passionate about their work and brings a unique blend of technical skills and creative thinking to the table, I'd love to hear from you. Let's work together to build something amazing!
                </p>
              </div>
              <div className='flex flex-col justify-center items-center md:flex-row md:justify-evenly md:items-end p-10 bg-[#1f2937] bg-opacity-50 rounded-b-3xl'>
                <div className='p-1'>
                  <Image
                    className='w-[400px] hover:scale-105 lg:max-h-[300px] md:w-[350px] rounded shadow-lg shadow-grey-400 border-3 cursor-pointer md:hover:scale-125 ease-in duration-300'
                    src={Work}
                    alt='photo 2'
                  />
                </div>
                <div className='p-1'>
                  <Image
                    className='w-[400px] hover:scale-105 lg:max-h-[500px] md:w-[400px] rounded shadow-lg shadow-grey-400 border-3 cursor-pointer md:hover:scale-125 ease-in duration-300'
                    src={CC28}
                    alt='photo 1'
                  />
                </div>
                <div className='p-1'>
                  <Image
                      className='w-[300px] hover:scale-105 lg:max-h-[300px] rounded shadow-lg shadow-grey-400 border-3 cursor-pointer md:hover:scale-125 ease-in duration-300'
                      src={HandsOn}
                      alt='photo 3'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About