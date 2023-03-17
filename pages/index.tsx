import React, { useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  const [darkMode, setDarkMode] = React.useState(false);

  const handleLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  function toggleDarkMode() {
      setDarkMode(prevDarkMode => !prevDarkMode);
  }

  return (
    <div className={`${darkMode ? 'dark' : 'light'}`}>
      <Head>
        <title>Ed | Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={"/favicon.ico"} />
      </Head>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} handleLink={handleLink}/>
      <Main handleLink={handleLink}/>
      <Skills handleLink={handleLink}/>
      <Projects handleLink={handleLink}/>
      <About />
      <Contact handleLink={handleLink}/>
    </div>
  )
}
