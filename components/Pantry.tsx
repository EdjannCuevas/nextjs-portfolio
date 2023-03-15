import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const Pantry = () => {
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
        <div className='max-w-full max-h-full h-[203px] w-[360px] md:h-[420px] md:w-[650px] lg:h-[450px] lg:w-[820px] m-auto relative group'>
            <div
                style={{backgroundImage: `url(${slides[currentIndex]})`}}
                className='w-full h-full rounded-2xl bg-cover bg-center shadow-lg hover:scale-95 ease-in duration-500'
            >
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white hover:scale-110 ease-in duration-300 cursor-pointer'>
                    <BsChevronCompactLeft 
                        size={30}
                        onClick={prevSlide} />
                </div>
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white hover:scale-110 ease-in duration-300 cursor-pointer'>
                    <BsChevronCompactRight
                        size={30}
                        onClick={nextSlide} />
                </div>
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => {
                    return <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-xl cursor-pointer'>
                        <RxDotFilled/>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Pantry