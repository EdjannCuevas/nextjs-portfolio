import Image from 'next/image'
import React, { useState, useEffect, use } from 'react'
import Html from '../public/images/skills/html.png'
import Css from '../public/images/skills/css.png'
import Firebase from '../public/images/skills/firebase.png'
import Github1 from '../public/images/skills/github1.png'
import Javascript from '../public/images/skills/javascript.png'
import Mui from '../public/images/skills/mui.png'
import Nextjs from '../public/images/skills/nextjs.png'
import Node from '../public/images/skills/node.png'
import ReactLogo from '../public/images/skills/react.png'
import Tailwind from '../public/images/skills/tailwind.png'
import Postgres from '../public/images/skills/postgres.png'
import Typescript from '../public/images/skills/typescript.png'
import JavaLogo from '../public/images/skills/javalogo.png'
import Spring from '../public/images/skills/spring.png'
import Repositories from './Repositories'
import { GrPowerReset } from 'react-icons/gr'

interface SkillsProps {
  handleLink: (arg: string) => void;
}

const Skills: React.FC<SkillsProps> = ({ handleLink }) => {
  const [javascript, setJavascript] = useState(false);
  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [firebase, setFirebase] = useState(false);
  const [github, setGithub] = useState(false);
  const [materialUI, setMaterialUI] = useState(false);
  const [react, setReact] = useState(false);
  const [tailwind, setTailwind] = useState(false);
  const [postgres, setPostgres] = useState(false);
  const [typescript, setTypescript] = useState(false);
  const [node, setNode] = useState(false);
  const [nextJs, setNextJs] = useState(false);
  const [java, setJava] = useState(false);
  const [reactNative, setReactNative] = useState(false);
  const [spring, setSpring] = useState(false);
  const [pantry, setPantry] = useState(false);
  const [binderClient, setBinderClient] = useState(false);
  const [binderServer, setBinderServer] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const [isResetLoading, setIsResetLoading] = useState(false);

  useEffect(() => {
    const handleDisplayRepo = () => {
      if ((html || css || javascript || typescript || materialUI || firebase || react || github || postgres || node)
        && (!java && !tailwind && !nextJs && !reactNative && !spring)) {
          setPantry(true);
      } else setPantry(false);

      if ((html || css || javascript || typescript || reactNative || github)
      && (!java && !tailwind && !nextJs && !materialUI && !firebase && !react && !postgres && !node && !spring)) {
        setBinderClient(true);
      } else setBinderClient(false);

      if ((java || postgres || spring || github)
      && (!html && !tailwind && !nextJs && !typescript && !reactNative && !materialUI && !firebase && !react && !css && !node && !javascript)) {
        setBinderServer(true);
      } else setBinderServer(false);

      if ((html || css || javascript || typescript || tailwind || nextJs || react || github)
        && (!java && !reactNative && !firebase && !materialUI && !spring && !postgres && !node)) {
          setPortfolio(true);
      } else setPortfolio(false);
    }
    handleDisplayRepo();
  },[
    javascript,
    html,
    css,
    firebase,
    github,
    materialUI,
    react,
    tailwind,
    postgres,
    typescript,
    node,
    nextJs,
    java,
    reactNative,
    spring,
  ]);

  const allFalse = (
    !java &&
    !html &&
    !css &&
    !firebase &&
    !github &&
    !materialUI &&
    !react &&
    !tailwind &&
    !typescript &&
    !node &&
    !postgres &&
    !nextJs &&
    !java &&
    !reactNative &&
    !spring
  );

  const handleReset = () => {
    setIsResetLoading(true)
    setJavascript(false);
    setHtml(false);
    setCss(false);
    setFirebase(false);
    setGithub(false);
    setMaterialUI(false);
    setReact(false);
    setTailwind(false);
    setPostgres(false);
    setTypescript(false);
    setNode(false);
    setNextJs(false);
    setJava(false);
    setReactNative(false);
    setSpring(false); 
    setTimeout(() => {
      setIsResetLoading(false);
    }, 1000);
  };
  
  const handleHtml = () => {
    setHtml(!html);
  }

  const handleCss = () => {
    setCss(!css);
  }

  const handleJavascript = () => {
    setJavascript(!javascript);
  }

  const handleFirebase = () => {
    setFirebase(!firebase);
  }

  const handleGithub = () => {
    setGithub(!github);
  }

  const handleMaterialUI = () => {
    setMaterialUI(!materialUI);
  }

  const handleReact = () => {
    setReact(!react);
  }

  const handleTailwind = () => {
    setTailwind(!tailwind);
  }

  const handlePostgres = () => {
    setPostgres(!postgres);
  }

  const handleTypescript = () => {
    setTypescript(!typescript);
  }

  const handleNode = () => {
    setNode(!node);
  }

  const handleNextJs = () => {
    setNextJs(!nextJs);
  }

  const handleJava = () => {
    setJava(!java);
  }

  const handleReactNative = () => {
    setReactNative(!reactNative);
  }

  const handleSpring = () => {
    setSpring(!spring);
  }


  return (
    <div
      id='skills'
      className='w-full lg:h-auto p-4 py-24'>
        <div className='max-w-[1250px] mx-auto flex-col justify-center h-full'>
          <div className='w-full border-b-2 p-2 flex items-center justify-center'>
            <p className='text-3xl font-bold tracking-widest uppercase text-[#46a8fd]'>
              Skills
            </p>
          </div>
          <div className='flex items-center justify-center'>
            <p
              className='uppercase text-s py-4 tracking-widest'
            >
              select any tech skill or combinations to access the Github Repositories below
            </p>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-8  gap-2 md:gap-2'>
            <div
              onClick={handleHtml}
              className={`p-6 ${html ? 'text-[#46a8fd]' : 'hover:scale-105 ease-in duration-300'} cursor-pointer`}
            >
              <div className='flex flex-col justify-center items-center'>
                <div className={`flex items-center justify-center m-auto w-24 h-24 rounded-3xl shadow-2xl ${html ? 'bg-[#46a8fd] bg-opacity-75' : 'bg-white bg-opacity-25 border-2 hover:scale-105 ease-in duration-300'}`}>
                  <Image
                    alt='/'
                    src={Html}
                    width='50'
                    height='50'
                  />
                </div>
                <div className='py-2 items-center justify-center'>
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handleCss}
              className={`p-6 ${css ? ' text-[#46a8fd]' : 'hover:scale-105 ease-in duration-300'} cursor-pointer`}
            >
              <div className='flex flex-col justify-center items-center'>
                <div className={`flex items-center justify-center m-auto w-24 h-24 rounded-3xl shadow-2xl ${css ? 'bg-[#46a8fd] bg-opacity-75' : 'bg-white bg-opacity-25 border-2 hover:scale-105 ease-in duration-300'}`}>
                  <Image
                    alt='/'
                    src={Css}
                    width='50'
                    height='50'
                  />
                </div>
                <div className='py-2 items-center justify-center'>
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handleJavascript}
              className={`p-6 ${javascript ? ' text-[#46a8fd]' : 'hover:scale-105 ease-in duration-300'} cursor-pointer`}
            >
              <div className='flex flex-col justify-center items-center'>
                <div className={`flex items-center justify-center m-auto w-24 h-24 rounded-3xl shadow-2xl ${javascript ? 'bg-[#46a8fd] bg-opacity-75' : 'bg-white bg-opacity-25 border-2 hover:scale-105 ease-in duration-300'}`}>
                  <Image
                    alt='/'
                    src={Javascript}
                    width='50'
                    height='50'
                  />
                </div>
                <div className='py-2 items-center justify-center'>
                  <h3>Javascript</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handleNode}
              className={`p-6 ${node ? ' text-[#46a8fd]' : 'hover:scale-105 ease-in duration-300'} cursor-pointer`}
            >
              <div className='flex flex-col justify-center items-center'>
                <div className={`flex items-center justify-center m-auto w-24 h-24 rounded-3xl shadow-2xl ${node ? 'bg-[#46a8fd] bg-opacity-75' : 'bg-white bg-opacity-25 border-2 hover:scale-105 ease-in duration-300'}`}>
                  <Image
                    alt='/'
                    src={Node}
                    width='50'
                    height='50'
                  />
                </div>
                <div className='py-2 items-center justify-center'>
                  <h3>NodeJS</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handleTypescript}
              className={`p-6 ${typescript ? ' text-[#46a8fd]' : 'hover:scale-105 ease-in duration-300'} cursor-pointer`}
            >
              <div className='flex flex-col justify-center items-center'>
                <div className={`flex items-center justify-center m-auto w-24 h-24 rounded-3xl shadow-2xl ${typescript ? 'bg-[#46a8fd] bg-opacity-75' : 'bg-white bg-opacity-25 border-2 hover:scale-105 ease-in duration-300'}`}>
                  <Image
                    alt='/'
                    src={Typescript}
                    width='50'
                    height='50'
                  />
                </div>
                <div className='py-2 items-center justify-center'>
                  <h3>Typescript</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handleReact}
              className={`p-6 ${react ? ' text-[#46a8fd]' : 'hover:scale-105 ease-in duration-300'} cursor-pointer`}
            >
              <div className='flex flex-col justify-center items-center'>
                <div className={`flex items-center justify-center m-auto w-24 h-24 rounded-3xl shadow-2xl ${react ? 'bg-[#46a8fd] bg-opacity-75' : 'bg-white bg-opacity-25 border-2 hover:scale-105 ease-in duration-300'}`}>
                  <Image
                    alt='/'
                    src={ReactLogo}
                    width='50'
                    height='50'
                  />
                </div>
                <div className='py-2 items-center justify-center'>
                  <h3>React</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handleGithub}
              className={`p-6 ${github ? ' text-[#46a8fd]' : 'hover:scale-105 ease-in duration-300'} cursor-pointer`}
            >
              <div className='flex flex-col justify-center items-center'>
                <div className={`flex items-center justify-center m-auto w-24 h-24 rounded-3xl shadow-2xl ${github ? 'bg-[#46a8fd] bg-opacity-75' : 'bg-white bg-opacity-25 border-2 hover:scale-105 ease-in duration-300'}`}>
                  <Image
                    alt='/'
                    src={Github1}
                    width='50'
                    height='50'
                  />
                </div>
                <div className='py-2 items-center justify-center'>
                  <h3>Github</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handlePostgres}
              className={`p-6 ${postgres ? ' text-[#46a8fd]' : 'hover:scale-105 ease-in duration-300'} cursor-pointer`}
            >
              <div className='flex flex-col justify-center items-center'>
                <div className={`flex items-center justify-center m-auto w-24 h-24 rounded-3xl shadow-2xl ${postgres ? 'bg-[#46a8fd] bg-opacity-75' : 'bg-white bg-opacity-25 border-2 hover:scale-105 ease-in duration-300'}`}>
                  <Image
                    alt='/'
                    src={Postgres}
                    width='50'
                    height='50'
                  />
                </div>
                <div className='py-2 items-center justify-center'>
                  <h3>Postgres</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handleMaterialUI}
              className={`p-6 ${materialUI ? ' text-[#46a8fd]' : 'hover:scale-105 ease-in duration-300'} cursor-pointer`}
            >
              <div className='flex flex-col justify-center items-center'>
                <div className={`flex items-center justify-center m-auto w-24 h-24 rounded-3xl shadow-2xl ${materialUI ? 'bg-[#46a8fd] bg-opacity-75' : 'bg-white bg-opacity-25 border-2 hover:scale-105 ease-in duration-300'}`}>
                  <Image
                    alt='/'
                    src={Mui}
                    width='50'
                    height='50'
                  />
                </div>
                <div className='py-2 items-center justify-center'>
                  <h3>MaterialUI</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handleNextJs}
              className={`p-6 ${nextJs ? ' text-[#46a8fd]' : 'hover:scale-105 ease-in duration-300'} cursor-pointer`}
            >
              <div className='flex flex-col justify-center items-center'>
                <div className={`flex items-center justify-center m-auto w-24 h-24 rounded-3xl shadow-2xl ${nextJs ? 'bg-[#46a8fd] bg-opacity-75' : 'bg-white bg-opacity-25 border-2 hover:scale-105 ease-in duration-300'}`}>
                  <Image
                    alt='/'
                    src={Nextjs}
                    width='50'
                    height='50'
                  />
                </div>
                <div className='py-2 items-center justify-center'>
                  <h3>NextJS</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handleTailwind}
              className={`p-6 ${tailwind ? ' text-[#46a8fd]' : 'hover:scale-105 ease-in duration-300'} cursor-pointer`}
            >
              <div className='flex flex-col justify-center items-center'>
                <div className={`flex items-center justify-center m-auto w-24 h-24 rounded-3xl shadow-2xl ${tailwind ? 'bg-[#46a8fd] bg-opacity-75' : 'bg-white bg-opacity-25 border-2 hover:scale-105 ease-in duration-300'}`}>
                  <Image
                    alt='/'
                    src={Tailwind}
                    width='50'
                    height='50'
                  />
                </div>
                <div className='py-2 items-center justify-center'>
                  <h3>Tailwind</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handleFirebase}
              className={`p-6 ${firebase ? ' text-[#46a8fd]' : 'hover:scale-105 ease-in duration-300'} cursor-pointer`}
            >
              <div className='flex flex-col justify-center items-center'>
                <div className={`flex items-center justify-center m-auto w-24 h-24 rounded-3xl shadow-2xl ${firebase ? 'bg-[#46a8fd] bg-opacity-75' : 'bg-white bg-opacity-25 border-2 hover:scale-105 ease-in duration-300'}`}>
                  <Image
                    alt='/'
                    src={Firebase}
                    width='50'
                    height='50'
                  />
                </div>
                <div className='py-2 items-center justify-center'>
                  <h3>Firebase</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handleJava}
              className={`p-6 ${java ? ' text-[#46a8fd]' : 'hover:scale-105 ease-in duration-300'} cursor-pointer`}
            >
              <div className='flex flex-col justify-center items-center'>
                <div className={`flex items-center justify-center m-auto w-24 h-24 rounded-3xl shadow-2xl ${java ? 'bg-[#46a8fd] bg-opacity-75' : 'bg-white bg-opacity-25 border-2 hover:scale-105 ease-in duration-300'}`}>
                  <Image
                    alt='/'
                    src={JavaLogo}
                    width='50'
                    height='50'
                  />
                </div>
                <div className='py-2 items-center justify-center'>
                  <h3>Java</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handleReactNative}
              className={`p-6 ${reactNative ? ' text-[#46a8fd]' : 'hover:scale-105 ease-in duration-300'} cursor-pointer`}
            >
              <div className='flex flex-col justify-center items-center'>
                <div className={`flex items-center justify-center m-auto w-24 h-24 rounded-3xl shadow-2xl ${reactNative ? 'bg-[#46a8fd] bg-opacity-75' : 'bg-white bg-opacity-25 border-2 hover:scale-105 ease-in duration-300'}`}>
                  <Image
                    alt='/'
                    src={ReactLogo}
                    width='50'
                    height='50'
                  />
                </div>
                <div className='py-2 items-center justify-center'>
                  <h3>ReactNative</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handleSpring}
              className={`p-6 ${spring ? ' text-[#46a8fd]' : 'hover:scale-105 ease-in duration-300'} cursor-pointer`}
            >
              <div className='flex flex-col justify-center items-center'>
                <div className={`flex items-center justify-center m-auto w-24 h-24 rounded-3xl shadow-2xl ${spring ? 'bg-[#46a8fd] bg-opacity-75' : 'bg-white bg-opacity-25 border-2 hover:scale-105 ease-in duration-300'}`}>
                  <Image
                    alt='/'
                    src={Spring}
                    width='50'
                    height='50'
                  />
                </div>
                <div className='py-2 items-center justify-center'>
                  <h3>SpringBoot</h3>
                </div>
              </div>
            </div>
            <div
              onClick={() => handleReset()}
              className={`p-6 ${(pantry || portfolio || binderClient || binderServer) || allFalse ? '' : 'hover:scale-105 ease-in duration-300'} cursor-pointer`}
            >
              <div className='flex flex-col gap-2 justify-center items-center'>
                <div className={`flex items-center justify-center m-auto text-3xl w-24 h-24 rounded-3xl ${(pantry || portfolio || binderClient || binderServer) || allFalse ? '' : 'hover:scale-105 ease-in duration-300 border-4 bg-white bg-opacity-25 shadow-lg border-red-500 animate-pulse'}`}>
                  <GrPowerReset className={` ${isResetLoading ? 'animate-spin' : ''}`}/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Reset</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='w-auto h-auto'>
            <div className='flex items-center justify-center'>
              <p className='uppercase text-s pt-9 pb-2 tracking-widest'>
                Repositories
              </p>
            </div>
            <Repositories pantry={pantry} portfolio={portfolio} binderClient={binderClient} binderServer={binderServer} handleLink={handleLink} />
          </div>
        </div>
    </div>
  )
}

export default Skills