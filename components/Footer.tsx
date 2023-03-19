import React from 'react'
import Image from 'next/image'
import logo from '../public/images/navLogo.png'

interface FooterProps {
  handleLink: (arg: string) => void;
}

const Footer: React.FC<FooterProps> = ({ handleLink }) => {
  return (
    <div className='bg-gray-900 text-white w-full h-auto p-3 flex flex-col justify-center items-center'>
      <p className='text-sm p-2' >Edgardo Cuevas Jr.</p>
      <div className='md:grid grid-cols-3 divide-x-2 gap-80'>
        <div className='flex justify-center items-center'>
          <Image
              src={logo}
              width='100'
              height='100'
              alt='/logo'
          />
        </div>
        <div className='p-2'>
          <p className='text-sm'>Projects</p>
            <br/>
            <p
              onClick={() => handleLink('https://github.com/EdjannCuevas/pantry-app')}
              className='text-sm hover:border-b'>
              Pantry
            </p>
            <p
              onClick={() => handleLink('https://github.com/Binder-team')}
              className='text-sm hover:border-b'>
              BooksXChange
            </p>
            <p
              onClick={() => handleLink('https://github.com/EdjannCuevas/nextjs-portfolio')}
              className='text-sm hover:border-b'>
              Portfolio
            </p>
        </div>
        <div className='p-2'>
          <p className='text-sm'>Socials</p>
            <br/>
            <p
              onClick={() => handleLink('https://www.linkedin.com/in/edgardo-cuevas-979311255/')}
              className='text-sm hover:border-b'>
              LinkedIn
            </p>
            <p
              onClick={() => handleLink('https://github.com/EdjannCuevas')}
              className='text-sm hover:border-b'>
              Github
            </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;