import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

interface PantryProps {
    handleLink: (arg: string) => void;
}

const Pantry: React.FC<PantryProps> = ({ handleLink }) => {
    const slides = [
        '/images/projects/addIngredients.png',
        '/images/projects/recipesPage.png',
        '/images/projects/ingredientsListsPage.png',
        '/images/projects/loginPage.png',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div className='h-[172px] w-[315px] md:h-[250px] md:w-[450px] lg:h-[390px] lg:w-[708px] m-auto relative group'>
            <div
                style={{backgroundImage: `url(${slides[currentIndex]})`}}
                className='w-full h-full rounded bg-cover bg-center shadow-lg hover:scale-95 ease-in duration-500'
            >
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-8 translate-y-[-50%] text-2xl rounded-full p-2 bg-black/30 text-white hover:scale-110 ease-in duration-300 cursor-pointer'>
                    <BsChevronCompactLeft 
                        size={30}
                        onClick={prevSlide} />
                </div>
                <div className='hidden group-hover:block absolute top-[50%] translate-y-[-50%] right-[-32px] text-2xl rounded-full p-2 bg-black/30 text-white hover:scale-110 ease-in duration-300 cursor-pointer'>
                    <BsChevronCompactRight
                        size={30}
                        onClick={nextSlide} />
                </div>
            </div>
            <div className=' flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => {
                    return <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-xs md:text-xl cursor-pointer'>
                        <RxDotFilled/>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Pantry;