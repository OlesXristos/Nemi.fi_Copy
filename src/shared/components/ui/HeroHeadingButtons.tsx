'use client';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const HeroHeadingButtons = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const storedAccess = localStorage.getItem('hasEarlyCode');
    if (storedAccess === 'true') {
      setUnlocked(true);
    }
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return (
      <div
        className={` dark:bg-black/80 dark:border-white/10 bg-gray-100/80 border-black/10 rounded-b-3xl  backdrop-blur-md p-4 sm:p-5 md:p-7 flex flex-col items-center justify-center border-t `}>
        <p className="mb-5"> Nemi protects your transaction privacy automatically</p>
        <div className=" relative w-full">
          <div className=" flex flex-col sm:flex-row gap-3 sm:gap-4 justify-around w-full">
            <div className="  w-full relative  ">
              <div className=" z-20 absolute -bottom-2 sm:-bottom-3 -left-2 sm:-left-3 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#aca22b] opacity-60 backdrop-blur-sm flex items-center justify-center animate-pulse-slow"></div>
              <div
                className={`cursor-pointer z-10 flex rounded-full justify-center items-center  dark:inset-0 dark:bg-gradient-to-r  dark:from-indigo-500 dark:via-blue-500 dark:to-purple-500 dark:animate-shine-slow  bg-black  text-white h-10 font-bold  space-x-1.5 transition-transform duration-300 hover:scale-102`}>
                <div className="w-[150px] h-[24px] rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse" />
              </div>
            </div>
            <div className="w-full relative">
              <div className=" z-20 absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-8 sm:w-10 h-8 sm:h-10 rounded-full opacity-60 bg-[#4382BD] backdrop-blur-sm flex items-center justify-center animate-pulse-slow"></div>
              <div className="cursor-pointer z-10 flex rounded-full justify-center items-center bg-[#5865F2] text-white h-10 font-bold space-x-1.5 transition-transform duration-300 hover:scale-102 hover:bg-[#4752c4]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-discord"
                  viewBox="0 0 16 16">
                  <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                </svg>
                <span>JOIN DISCORD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className={` dark:bg-black/80 dark:border-white/10 bg-gray-100/80 border-black/10 rounded-b-3xl  backdrop-blur-md p-4 sm:p-5 md:p-7 flex flex-col items-center justify-center border-t `}>
      <p className="mb-5"> Nemi protects your transaction privacy automatically</p>
      <div className=" relative w-full">
        <div className=" flex flex-col sm:flex-row gap-3 sm:gap-4 justify-around w-full">
          <div className="  w-full relative  ">
            <div className=" z-20 absolute -bottom-2 sm:-bottom-3 -left-2 sm:-left-3 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#aca22b] opacity-60 backdrop-blur-sm flex items-center justify-center animate-pulse-slow"></div>
            <div
              className={`cursor-pointer z-10 flex rounded-full justify-center items-center  dark:inset-0 dark:bg-gradient-to-r  dark:from-indigo-500 dark:via-blue-500 dark:to-purple-500 dark:animate-shine-slow  bg-black  text-white h-10 font-bold  space-x-1.5 transition-transform duration-300 hover:scale-102`}>
              {unlocked ? (
                <Link href="/swap" className="animate-fade-up-text">
                  {' '}
                  GO TO SWAP
                </Link>
              ) : (
                <Link
                  href="https://tally.so/r/nP4VE1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-fade-up-text">
                  {' '}
                  GET EARLY ACCESS
                </Link>
              )}
              <ArrowUpRight className="animate-fade-up-text" />
            </div>
          </div>
          <div className="w-full relative">
            <div className=" z-20 absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-8 sm:w-10 h-8 sm:h-10 rounded-full opacity-60 bg-[#4382BD] backdrop-blur-sm flex items-center justify-center animate-pulse-slow"></div>
            <div className="cursor-pointer z-10 flex rounded-full justify-center items-center bg-[#5865F2] text-white h-10 font-bold space-x-1.5 transition-transform duration-300 hover:scale-102 hover:bg-[#4752c4]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-discord"
                viewBox="0 0 16 16">
                <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
              </svg>
              <span>JOIN DISCORD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHeadingButtons;
