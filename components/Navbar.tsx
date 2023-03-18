import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { BsLinkedin, BsGithub, BsToggleOn, BsToggleOff } from 'react-icons/bs'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import logo from 'public/images/navLogo.png'

interface NavBarProps {
    handleLink: (arg: string) => void,
    toggleDarkMode: () => void,
    darkMode: boolean,
}

const Navbar: React.FC<NavBarProps> = ({ handleLink, toggleDarkMode, darkMode }) => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);


    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            }
            else setShadow(false);
        };
        window.addEventListener('scroll', handleShadow);
    },[]);

    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div className={shadow ? `fixed w-full h-20 shadow-xl z-[100] ${darkMode ? 'dark' : 'light'}` : `fixed w-full h-20 z-[100] ${darkMode ? 'dark' : ''}`}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Link className='scroll-false' href='/'>
                <Image
                    src={logo}
                    alt='/logo'
                    width='90'
                    height='25'
                    unoptimized
                />
            </Link>
        <div>
            <ul className='hidden md:flex'>
                <div
                    className="ml-5 text-3xl"
                    onClick={toggleDarkMode}
                >
                    {
                        darkMode
                        ?
                        <div className='flex'>
                            <MdDarkMode/>
                            <div className='ml-1 cursor-pointer hover:scale-110 ease-in duration 300'>
                                <BsToggleOff/>
                            </div>
                        </div>
                        :
                        <div className='flex'>
                            <MdLightMode/>
                            <div className='ml-1 cursor-pointer hover:scale-110 ease-in duration 300'>
                                <BsToggleOn/>
                            </div>
                        </div>
                    }
                </div>
                <Link className='scroll-false' href='/'>
                    <li className='ml-10 text-lg uppercase hover:border-b'>Home</li>
                </Link>
                <Link className='scroll-false' href='/#skills'>
                    <li className='ml-10 text-lg uppercase hover:border-b'>Skills</li>
                </Link>
                <Link className='scroll-false' href='/#projects'>
                    <li className='ml-10 text-lg uppercase hover:border-b'>Projects</li>
                </Link>
                <Link className='scroll-false' href='/#about'>
                    <li className='ml-10 text-lg uppercase hover:border-b'>About</li>
                </Link>
                <Link className='scroll-false' href='/#contact'>
                    <li className='ml-10 text-lg uppercase hover:border-b'>Contact</li>
                </Link>
            </ul>
            <div onClick={handleNav} className='md:hidden cursor-pointer'>
                <AiOutlineMenu size={25}/>
            </div>
        </div>
    </div>
    <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70': ''}>
        <div className={nav
            ? `fixed left-0 top-0 w-[75%] sm:w=[60%] md:w-[45%] h-screen p-10 ease-in duration-500 ${darkMode ? 'dark' : 'light'}`
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }>
            <div>
                <div className='flex w-full items-center justify-between'>
                    <Link
                        className='scroll-false'
                        onClick={handleNav}
                        href='/'>
                        <Image
                            src={logo}
                            width='87'
                            height='35'
                            alt='/logo'
                        />
                    </Link>
                    <div onClick={handleNav} className='rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer'>
                        <AiOutlineClose/>
                    </div>
                </div>
                <div className='border-b border-grey-300 my-4'>
                </div>
            </div>
            <div className='py-4 flex-col'>
                <ul className='uppercase'>
                    <div
                        className="mb-2 text-3xl"
                        onClick={toggleDarkMode}
                    >
                        {
                            darkMode
                            ?
                            <div className='flex'>
                                <MdDarkMode/>
                                <div className='ml-1 cursor-pointer hover:scale-110 ease-in duration 300'>
                                    <BsToggleOff/>
                                </div>
                            </div>
                            :
                            <div className='flex'>
                                <MdLightMode/>
                                <div className='ml-1 cursor-pointer hover:scale-110 ease-in duration 300'>
                                    <BsToggleOn/>
                                </div>
                            </div>
                        }
                    </div>
                    <Link className='hover:scale-200 ease-in duration-300' onClick={() => setNav(false)} href='/'>
                        <li className='py-4 text-sm'>Home</li>
                    </Link>
                    <Link onClick={() => setNav(false)} href='/#skills'>
                        <li className='py-4 text-sm'>Skills</li>
                    </Link>
                    <Link onClick={() => setNav(false)} href='/#projects'>
                        <li className='py-4 text-sm'>Projects</li>
                    </Link>
                    <Link onClick={() => setNav(false)} href='/#about'>
                        <li className='py-4 text-sm'>About</li>
                    </Link>
                    <Link onClick={() => setNav(false)} href='/#contact'>
                        <li className='py-4 text-sm'>Contacts</li>
                    </Link>
                </ul>
                <div className='pt-10'>
                    <p className='uppercase'>
                        Let&apos;s Connect!
                    </p>
                    <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                        <div
                            onClick={() => handleLink('https://www.linkedin.com/in/edgardo-cuevas-979311255/')}
                            className='rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300'>
                            <BsLinkedin />
                        </div>
                        <div
                            onClick={() => handleLink('https://github.com/EdjannCuevas')}
                            className='rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300'>
                            <BsGithub />
                        </div>
                        <Link
                            href='/#contact'
                            className='rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300'
                            onClick={() => setNav(false)}   
                        >
                            <AiOutlineMail />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

  )
}

export default Navbar