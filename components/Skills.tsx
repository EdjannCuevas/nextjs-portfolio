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
  !spring);

  const handleReset = () => {
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
    <div id='skills' className='w-full lg:h-auto p-4 py-20'>
        <div className='max-w-[1240px] mx-auto flex-col justify-center h-full'>
          <p className='text-xl tracking-widest uppercase text-[#46a8fd]'>
            Skills
          </p>
          <p className='uppercase text-s py-4 tracking-widest'>
            Tap any tech skill or combinations to access the Github Repositories below
          </p>
          <div className='grid grid-cols-2 lg:grid-cols-4 py-4 gap-8'>
            <div
              onClick={handleHtml}
              className={`p-6 rounded-xl ${html ? '' : 'hover:scale-105 ease-in duration-300 shadow-xl border-2'} cursor-pointer`}
            >
              <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                <div className='m-auto'>
                  <Image
                    alt='/'
                    src={Html}
                    width='30'
                    height='30'
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handleCss}
              className={`p-6 rounded-xl ${css ? '' : 'hover:scale-105 ease-in duration-300 shadow-xl border-2'} cursor-pointer`}
            >
              <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                <div className='m-auto'>
                  <Image
                    alt='/'
                    src={Css}
                    width='30'
                    height='30'
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handleJavascript}
              className={`p-6 rounded-xl ${javascript ? '' : 'hover:scale-105 ease-in duration-300 shadow-xl border-2'} cursor-pointer`}
            >
              <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                <div className='m-auto'>
                  <Image
                    alt='/'
                    src={Javascript}
                    width='30'
                    height='30'
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Javascript</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handleNode}
              className={`p-6 rounded-xl ${node ? '' : 'hover:scale-105 ease-in duration-300 shadow-xl border-2'} cursor-pointer`}
            >
              <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                <div className='m-auto'>
                  <Image
                    alt='/'
                    src={Node}
                    width='30'
                    height='30'
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>NodeJS</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handleReact}
              className={`p-6 rounded-xl ${react ? '' : 'hover:scale-105 ease-in duration-300 shadow-xl border-2'} cursor-pointer`}
            >
              <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                <div className='m-auto'>
                  <Image
                    alt='/'
                    src={ReactLogo}
                    width='30'
                    height='30'
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>React</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handleGithub}
              className={`p-6 rounded-xl ${github ? '' : 'hover:scale-105 ease-in duration-300 shadow-xl border-2'} cursor-pointer`}
            >
              <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                <div className='m-auto'>
                  <Image
                    alt='/'
                    src={Github1}
                    width='30'
                    height='30'
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Github</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handleFirebase}
              className={`p-6 rounded-xl ${firebase ? '' : 'hover:scale-105 ease-in duration-300 shadow-xl border-2'} cursor-pointer`}
            >
              <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                <div className='m-auto'>
                  <Image
                    alt='/'
                    src={Firebase}
                    width='30'
                    height='30'
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Firebase</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handleMaterialUI}
              className={`p-6 rounded-xl ${materialUI ? '' : 'hover:scale-105 ease-in duration-300 shadow-xl border-2'} cursor-pointer`}
            >
              <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                <div className='m-auto'>
                  <Image
                    alt='/'
                    src={Mui}
                    width='30'
                    height='30'
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>MaterialUI</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handleNextJs}
              className={`p-6 rounded-xl ${nextJs ? '' : 'hover:scale-105 ease-in duration-300 shadow-xl border-2'} cursor-pointer`}
            >
              <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                <div className='m-auto'>
                  <Image
                    alt='/'
                    src={Nextjs}
                    width='30'
                    height='30'
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>NextJS</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handleTailwind}
              className={`p-6 rounded-xl ${tailwind ? '' : 'hover:scale-105 ease-in duration-300 shadow-xl border-2'} cursor-pointer`}
            >
              <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                <div className='m-auto'>
                  <Image
                    alt='/'
                    src={Tailwind}
                    width='30'
                    height='30'
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Tailwind</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handlePostgres}
              className={`p-6 rounded-xl ${postgres ? '' : 'hover:scale-105 ease-in duration-300 shadow-xl border-2'} cursor-pointer`}
            >
              <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                <div className='m-auto'>
                  <Image
                    alt='/'
                    src={Postgres}
                    width='30'
                    height='30'
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Postgres</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handleTypescript}
              className={`p-6 rounded-xl ${typescript ? '' : 'hover:scale-105 ease-in duration-300 shadow-xl border-2'} cursor-pointer`}
            >
              <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                <div className='m-auto'>
                  <Image
                    alt='/'
                    src={Typescript}
                    width='30'
                    height='30'
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Typescript</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handleJava}
              className={`p-6 rounded-xl ${java ? '' : 'hover:scale-105 ease-in duration-300 shadow-xl border-2'} cursor-pointer`}
            >
              <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                <div className='m-auto'>
                  <Image
                    alt='/'
                    src={JavaLogo}
                    width='30'
                    height='30'
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Java</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handleReactNative}
              className={`p-6 rounded-xl ${reactNative ? '' : 'hover:scale-105 ease-in duration-300 shadow-xl border-2'} cursor-pointer`}
            >
              <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                <div className='m-auto'>
                  <Image
                    alt='/'
                    src={ReactLogo}
                    width='30'
                    height='30'
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>ReactNative</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handleSpring}
              className={`p-6 rounded-xl ${spring ? '' : 'hover:scale-105 ease-in duration-300 shadow-xl border-2'} cursor-pointer`}
            >
              <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                <div className='m-auto'>
                  <Image
                    alt='/'
                    src={Spring}
                    width='30'
                    height='30'
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>SpringBoot</h3>
                </div>
              </div>
            </div>
            <div
              onClick={() => handleReset()}
              className={`p-6 rounded-xl ${(pantry || portfolio || binderClient || binderServer) || allFalse ? '' : 'hover:scale-105 ease-in duration-300 shadow-xl border-2 border-red-500'} cursor-pointer`}
            >
              <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                <div className='m-auto text-3xl'>
                  <GrPowerReset/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Reset Skills</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='w-auto h-auto'>
            <p className='uppercase text-s py-9 tracking-widest'>
              Github Repositories:
            </p>
            <Repositories pantry={pantry} portfolio={portfolio} binderClient={binderClient} binderServer={binderServer} handleLink={handleLink} />
          </div>
        </div>
    </div>
  )
}

export default Skills