/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { CardCarousel } from "@/components/cardCarousel";
import { Dot } from "lucide-react";

import Image1 from "../../public/assets/img/ai-generated-8223597_1280.jpg";
import Image2 from "../../public/assets/img/ai-generated-8223597_1280.jpg";

export function Carousel() {
  const slides = [
    {
      image: Image1,
      cardContent: "Especialização em implantodontia",
    },
    {
      image: Image2,
      cardContent: "Aperfeiçoamento em implantodontia",
    },
    // Adicione mais objetos para mais imagens
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  // Função para avançar automaticamente os slides a cada 8 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(intervalId);
  }, [currentIndex, nextSlide]);

  return (
    <div className="lg:max-w-[2000px] lg:h-[600px] h-80 w-full py-16 relative group ">
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].image.src})`,
        }}
        className="w-full h-full bg-center bg-cover duration-500"
      >
        <CardCarousel title={slides[currentIndex].cardContent} />
      </div>

      <div className="max-sm:right-1/2 my-1 mx-3 text-sky-600 absolute lg:top-[50%] lg:-translate-x-0 lg:translate-y-[-50%] lg:left-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer hover:border-2 hover:border-sky-600 ">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      <div className="max-sm:left-1/2 my-1 mx-3 text-sky-600 absolute lg:top-[50%] lg:-translate-x-0 lg:translate-y-[-50%] lg:right-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer hover:border-2 hover:border-sky-600 ">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="flex top-4 justify-center py-2 px-2">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="cursor-pointer active:bg-black"
          >
            <div className="lg:flex hidden rounded-box w-4 h-4 border-2 border-sky-600 m-2 hover:bg-sky-800 duration-300 ease-in"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
