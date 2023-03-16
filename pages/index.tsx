import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {

  const handleLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <div>
      <Head>
        <title>Ed | Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={"/favicon.ico"} />
      </Head>
      <Navbar handleLink={handleLink}/>
      <Main handleLink={handleLink}/>
      <About />
      <Skills />
      <Projects handleLink={handleLink}/>
      <Contact handleLink={handleLink}/>
    </div>
  )
}
