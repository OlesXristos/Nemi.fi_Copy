'use client';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const FeaturesHeadingDiv = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  //можна додати різні стейти, якщо потрібно щоб окремі елементи завантажувалися в різний момент
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.2) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section className="flex py-16 relative">
      <div className=" container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="transition-all duration-700  flex flex-col lg:flex-row justify-between items-start mb-16 lg:mb-24  ease-out opacity-100 translate-y-0">
            <div className="">
              <h2 className="transition-all duration-700 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#000000] dark:text-white mb-8 lg:mb-0 lg:max-w-md">
                Why Choose Nemi?
              </h2>
              <p>
                Experience the next level of decentralised trading with unparalleled privacy and
                programmability.
              </p>
            </div>
          </motion.div>
          <ul className=" space-y-5 md:space-y-0 md:flex justify-between gap-5 mb-24">
            <li>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className=" relative  overflow-hidden group cursor-pointer">
                <img
                  src="/1.svg"
                  alt="Programmable Interface"
                  className="w-full h-full object-cover hidden  md:block"
                />
                <img
                  src="/small_1.svg"
                  alt="Programmable Interface"
                  className="w-full h-full object-cover  block  md:hidden"
                />
                <div
                  className="
                   rounded-t-xl
    absolute bottom-0 left-0 right-0
    bg-white/90 dark:bg-gray-800/90
    p-4
    translate-y-full
    group-hover:translate-y-0
    transition-transform duration-500
  ">
                  <h3 className="text-lg font-semibold">Private Transactions</h3>
                  <p className="text-sm text-gray-800 dark:text-white">
                    Trade without revealing your strategy
                  </p>
                </div>
              </motion.div>
            </li>
            <li>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className=" relative  overflow-hidden group  cursor-pointer">
                <img
                  src="/2.svg"
                  alt="Programmable Interface"
                  className="w-full h-full object-cover hidden  md:block"
                />
                <img
                  src="/small_2.svg"
                  alt="Programmable Interface"
                  className="w-full h-full object-cover  block  md:hidden"
                />

                <div
                  className="
                  rounded-t-xl
    absolute bottom-0 left-0 right-0
    bg-white/90 dark:bg-gray-800/90
    p-4
    translate-y-full
    group-hover:translate-y-0
    transition-transform duration-500
  ">
                  <h3 className="text-lg font-semibold">Secure Environment</h3>
                  <p className="text-sm text-gray-800 dark:text-white">
                    Protection from front-running and MEV
                  </p>
                </div>
              </motion.div>
            </li>
            <li>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className=" relative  overflow-hidden group  cursor-pointer">
                <img
                  src="/3.svg"
                  alt="Programmable Interface"
                  className="w-full h-full object-cover hidden  md:block"
                />
                <img
                  src="/small_3.svg"
                  alt="Programmable Interface"
                  className="w-full h-full object-cover  block  md:hidden"
                />

                <div
                  className="
                  rounded-t-xl
    absolute bottom-0 left-0 right-0
    bg-white/90 dark:bg-gray-800/90
    p-4
    translate-y-full
    group-hover:translate-y-0
    transition-transform duration-500
  ">
                  <h3 className="text-lg font-semibold">Programmable Interface</h3>
                  <p className="text-sm text-gray-800 dark:text-white">
                    Deploy custom trading algorithms privately
                  </p>
                </div>
              </motion.div>
            </li>
          </ul>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="  bg-[#232323] dark:bg-gray-800 text-white p-8 md:p-12 rounded-3xl transition-all duration-700 ease-out  translate-y-0">
            <div className="flex flex-col lg:flex-row justify-between ">
              <div className="mb-6 lg:mb-0 flex align-center items-center">
                <h2 className=" text-3xl lg:text-4xl font-bold mb-2">
                  Your Keys, Your Crypto, <span>Your Privacy</span>
                </h2>
              </div>
              <div className="lg:max-w-md">
                <p className=" text-lg">
                  At Nemi, we are committed to true ownership. Trade with confidence, knowing your
                  assets and strategies remain 100%{' '}
                  <span className=" p-[4px] bg-[#E9661E] text-white px-2 py-1 rounded-full mx-[6px]">
                    private
                  </span>{' '}
                  and in your control
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHeadingDiv;
