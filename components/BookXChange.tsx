import Image from 'next/image';
import React from 'react'
import App from '../public/images/projects/app.gif'

interface BookXChangeProps {
    handleLink: (arg: string) => void;
}

const Pantry: React.FC<BookXChangeProps> = ({ handleLink }) => {

    return (
        <div className='flex flex-col-reverse md:flex-col h-[402px] w-[315px] md:h-[250px] md:w-[450px] lg:h-[390px] lg:w-[708px] m-auto relative group'>
            <div className='absolute left-[30%] md:-left-2 md:-bottom-5 z-50'>
                <div className='border-2 rounded-lg hover:scale-125 ease-in duration-500 bg-black'>
                    <Image className='p-2 w-[100px]' alt='BookXChange demo' src={App}></Image>
                </div>
            </div>
            <div className="mb-[210px] md:mb-0 md:ml-[70px] aspect-w-16 aspect-h-9">
                <iframe
                    src={"https://www.youtube.com/embed/f1bMJRe4qgs?start=98&amp;rel=0&amp;wmode=transparent"}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
            </div>
        </div>
    )
}

export default Pantry