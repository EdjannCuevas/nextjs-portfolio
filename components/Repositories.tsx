import Image, { StaticImageData } from 'next/image'
import React, { useState, useEffect } from 'react'
import { BsGithub } from 'react-icons/bs'
import BxCBanner from '../public/images/projects/bnx-banner.png'
import PantryBanner from '../public/images/projects/pantry-banner.png'
import PortfolioBanner from '../public/images/projects/portfolio-banner.png'

interface RepositoriesProps {
    pantry: boolean,
    portfolio: boolean,
    binderClient: boolean,
    binderServer: boolean,
    handleLink: (arg: string) => void,
}

interface Repos {
    [key: string]: [string, string, string];
  }

interface RepoObject {
    [key: string]: boolean;
}

const Repositories: React.FC<RepositoriesProps> = ({ pantry, portfolio, binderClient, binderServer, handleLink }) => {
    const [result, setResult] = useState<JSX.Element[]  | null>(null);

    const repos: Repos = {
        'pantry': ['/pantry-app', 'https://github.com/EdjannCuevas/pantry-app', '#6cc055'],
        'binderClient': ['/BookXChangeClient', 'https://github.com/Binder-team/BookXChange-client', '#e0b1c1'],
        'binderServer': ['/BookXChangeServer', 'https://github.com/Binder-team/Binder-server', '#cd6e00'],
        'portfolio':['/nextjs-portfolio', 'https://github.com/EdjannCuevas/nextjs-portfolio', '#232939'],
    };

    useEffect(() => {

        const repoObject: RepoObject[] = [
            {pantry: pantry},
            {portfolio: portfolio},
            {binderClient: binderClient},
            {binderServer: binderServer},
        ]

        const handleChange = () => {
            const trueKeys = repoObject.filter((obj) => obj[Object.keys(obj)[0]] === true).map(obj => Object.keys(obj)[0]);
            const displayRepos = trueKeys.map((key:string) => {
                const label = repos[key][0];
                const url= repos[key][1];
                const banner = repos[key][2];
                return (
                    <div
                        style={{backgroundColor: `${banner}`}}
                        key={key}
                        onClick={() => handleLink(url)}
                        className={`p-4 m-4 rounded-xl hover:scale-105 ease-in duration-300 shadow-xl border-2 cursor-pointer text-white w-[90%]`}
                    >
                    <div className='grid grid-cols-2 justify-center items-center sm:text-sm lg:text-xl'>
                        <div className='m-auto text-4xl'>
                            <BsGithub />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>{label}</h3>
                        </div>
                    </div>
              </div>)
            })
            setResult(displayRepos);
        }
        handleChange();
    },[pantry, portfolio, binderClient, binderServer]);

    return (
        <div className='flex flex-col justify-center items-center lg:grid grid-cols-2 py-4 border-2 shadow-lg lg:min-h-[136px]'>
            { result }
        </div>
    )
}

export default Repositories;