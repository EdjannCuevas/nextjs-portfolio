import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import { FiLink, FiGithub } from 'react-icons/fi'

interface BookXChangeProps {
    handleLink: (arg: string) => void;
}

const Pantry: React.FC<BookXChangeProps> = ({ handleLink }) => {

    return (
        <div className='h-[172px] w-[315px] md:h-[250px] md:w-[450px] lg:h-[390px] lg:w-[708px] m-auto relative group'>
            <div className="aspect-w-16 aspect-h-9">
                <iframe
                    src="https://www.youtube.com/embed/f1bMJRe4qgs?start=26"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
            </div>
        </div>
    )
}

export default Pantry