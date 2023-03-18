import React, { useState, useEffect, ReactFragment } from 'react'
import { BsGithub } from 'react-icons/bs'

interface RepositoriesProps {
    pantry: boolean,
    portfolio: boolean,
    binderClient: boolean,
    binderServer: boolean,
    handleLink: (arg: string) => void,
}

interface Repos {
    [key: string]: [string, string];
  }

interface RepoObject {
    [key: string]: boolean;
}

const Repositories: React.FC<RepositoriesProps> = ({ pantry, portfolio, binderClient, binderServer, handleLink }) => {
    const [result, setResult] = useState<JSX.Element[]  | null>(null);

    const repos: Repos = {
        'pantry': ['/pantry-app', 'https://github.com/EdjannCuevas/pantry-app'],
        'binderClient': ['/BookXChangeClient', 'https://github.com/Binder-team/BookXChange-client'],
        'binderServer': ['/BookXChangeServer', 'https://github.com/Binder-team/Binder-server'],
        'portfolio':['/nextjs-portfolio', 'https://github.com/EdjannCuevas/nextjs-portfolio'],
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
                return (
                    <div
                        key={key}
                        onClick={() => handleLink(url)}
                        className='p-4 m-4 rounded-xl hover:scale-105 ease-in duration-300 shadow-xl border-2 cursor-pointer w-[90%]'
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