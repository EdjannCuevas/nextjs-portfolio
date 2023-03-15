import Image from 'next/image'
import React from 'react'
import AboutPhoto from '../public/images/about.png'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-20'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
              <p className='text-xl tracking-widest uppercase text-[#46a8fd]'>About</p>
              <h2 className='py-4'>Who I am</h2>
              <div className='w-full justify-center items-center'>
                <p>Hello! My name is <span className='text-[#46a8fd]'>Edgardo Cuevas</span> , and I'm a software engineer based in Kanagawa. I'm passionate about building high-quality software that makes people's lives easier and more enjoyable.</p><br />
                <p>When I'm not coding, you can usually find me indulging in my other passions. I'm a huge movie buff and love nothing more than settling in for a marathon session of my favorite films. I also like to stay active by working out and going for walks while listening to podcasts.</p><br/>
                <p>One of the things I love about software engineering is that it's a constantly evolving field. There's always something new to learn, whether it's a new programming language, a new tool or framework, or a new approach to problem-solving. I'm always up for a challenge and love pushing myself to grow and improve as a developer. </p><br />
                <p>If you're looking for a software engineer who is passionate about their work and brings a unique blend of technical skills and creative thinking to the table, I'd love to hear from you. Let's work together to build something amazing!</p>
              </div>
            </div>
            <div className='py-20 flex justify-center items-center'>
              <Image
                className='w-[300px] lg:w-[600px] rounded shadow-lg shadow-grey-400 border-3 cursor-pointer hover:scale-105 ease-in duration-300'
                src={AboutPhoto}
                alt='group project'
              />
            </div>
        </div>
    </div>
  )
}

export default About