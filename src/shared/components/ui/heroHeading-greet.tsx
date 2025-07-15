'use client';
import { motion } from 'framer-motion';
import React from 'react';
import HeroHeadingClipPathDiv from './heroHeadingClipPath-div';
import HeroHeadingButtons from './HeroHeadingButtons';

const HeroHeadingGreet = () => {
  return (
    <>
      <div className="absolute w-full h-full">
        <div className=" absolute top-[-6%] left-[50%] w-[140px] h-[140px]">
          <img src="/blue.svg" alt="" className=" opacity-40" />
        </div>
        <div className="absolute left-[-4%] top-[40%] w-[140px] h-[140px]">
          <img src="/green1.svg" alt="" className=" -rotate-10 opacity-40" />
        </div>
        <div className="absolute bottom-[-9%] left-[14%]">
          <img src="/pink.svg" alt="" className=" rotate-12 opacity-40" />
        </div>
      </div>
      <div className=" w-full max-w-3xl mx-auto z-10 text-center mb-4 sm:mb-6 md:mb-8 transition-all duration-700 opacity-100 translate-y-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-col  justify-center w-full text-center mb-4 sm:mb-6 md:mb-8">
          <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4  leading-tight tracking-tight">
            Private DEX
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4 sm:px-6 text-black/85 dark:text-white/85 leading-relaxed">
            Nemi is a revolutionary DEX, protecting traders from strategy leaks, copy trading, and
            doxxing while unlocking trillions in sidelined TradFi capital.
          </p>
        </motion.div>{' '}
        <div className="flex w-full justify-center px-4">
          <div className="w-full">
            <div className="border border-white/10 rounded-3xl backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
              <HeroHeadingClipPathDiv />
              <HeroHeadingButtons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroHeadingGreet;
