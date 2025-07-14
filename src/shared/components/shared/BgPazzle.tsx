'use client';
import { motion } from 'framer-motion';
import React from 'react';

const BgPazzle = () => {
  return (
    <div className="absolute w-full h-full z-0 overflow-hidden">
      <motion.div
        initial={{ y: 30 }}
        animate={{ y: 75 }}
        transition={{
          duration: 10,

          repeat: Infinity, // нескінченна анімація
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className=" transition-all duration-3000 absolute left-[50%] top-[-27%] sm:top-[-15%]">
        {' '}
        <img src="/blue.svg" alt="" className=" opacity-40" />{' '}
      </motion.div>
      <motion.div
        initial={{ y: 0, rotate: 0 }}
        animate={{ y: -30, rotate: 12 }}
        transition={{
          duration: 10,

          repeat: Infinity, // нескінченна анімація
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className=" transition-all duration-3000 absolute top-[30%] sm:left-[-4%] left-[-15%]">
        {' '}
        <img src="/green1.svg" alt="" className=" opacity-40 -rotate-12 w-[220px] " />{' '}
      </motion.div>
      <motion.div
        initial={{ x: 0, rotate: 0 }}
        animate={{ x: -30, rotate: 12 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className=" absolute top-[3%] left-[-2%]">
        {' '}
        <img
          src="/yellow.svg"
          alt=""
          className=" hidden md:block opacity-40 scale-x-[-1] scale-y-[-1] rotate-12  w-[220px] "
        />{' '}
      </motion.div>
      <motion.div
        initial={{ y: 0, rotate: 0 }}
        animate={{ y: -30, rotate: 12 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className=" absolute top-[50%] right-[-6%]">
        {' '}
        <img src="/orange.svg" alt="" className=" hidden md:block opacity-40   w-[220px] " />{' '}
      </motion.div>
      <motion.div
        initial={{ y: 0, rotate: 0 }}
        animate={{ y: -30, rotate: 12 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className=" absolute bottom-[-10%] left-[20%] ">
        {' '}
        <img src="/pink.svg" alt="" className="  opacity-40   w-[220px] " />{' '}
      </motion.div>
      <div></div>
      <div></div>
    </div>
  );
};

export default BgPazzle;
