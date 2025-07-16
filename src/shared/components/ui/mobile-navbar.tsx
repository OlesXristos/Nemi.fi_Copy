'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import clsx from 'clsx';
import { ArrowLeftRight, CheckIcon, ListIcon, Wallet, WavesLadder, XIcon } from 'lucide-react';

import { usePathname } from 'next/navigation';

const MobileNavbar = () => {
  const pathname = usePathname();

  const basePath = `/profile/`;
  const links = [
    { href: `/swap`, label: 'Усі задачі', icon: <ArrowLeftRight /> },
    { href: `/pool`, label: 'Виконані', icon: <CheckIcon /> },
  ];

  return (
    <div className=" sm:hidden  fixed bottom-0 left-0 w-full  z-10 border-t">
      <div
        className={`${
          pathname === '/swap' ? 'opacity-100' : 'opacity-80'
        } relative  flex  items-center justify-center w-full z-50 group   transition-all duration-300 hover:scale-105 hover:opacity-100 dark:hover:[filter:drop-shadow(0_1px_2px_rgba(255,255,255,0.4))] hover:[filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.4))]`}>
        <Link href="/swap" className="absolute items-center flex justify-center   ">
          <img
            src="/NemiLogoLight.svg"
            width={80}
            className="hidden dark:block relative [filter:drop-shadow(0_2px_4px_rgba(255,255,255,0.4))]"
            alt=""
          />
          <img
            src="/NemiLogoDark.svg"
            width={80}
            className=" dark:hidden relative [filter:drop-shadow(0_2px_4px_rgba(0,0,0,0.4))]"
            alt=""
          />
          <ArrowLeftRight className="text-white dark:text-black absolute transition-all duration-300 group-hover:rotate-180 -rotate-y-180 " />
          <p className=" absolute -bottom-6.5">Swap</p>
        </Link>
      </div>
      <nav
        className="flex justify-center w-full  h-15  transition-all duration-300  p-3 
        bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50
       ">
        <div className="flex w-full justify-around items-center">
          <Link href="/pool" className=" ">
            <div
              className={`${
                pathname === '/pool' ? 'opacity-100' : ''
              } rounded-lg !px-4   w-full cursor-pointer flex flex-col items-center opacity-70 transition-all duration-300 hover:scale-105 hover:opacity-100 dark:hover:[filter:drop-shadow(0_1px_2px_rgba(255,255,255,0.4))] hover:[filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.4))]`}>
              <WavesLadder className="!w-5.5 !h-5.5" />
              <span>Pool</span>
            </div>
          </Link>
          <Link href="/swap" className=" ">
            <div
              className={`${
                pathname === '/swap' ? 'opacity-100' : 'opacity-80'
              } rounded-lg !px-4   w-full cursor-pointer flex !bg-none flex-col items-center opacity-70 transition-all duration-300 hover:scale-105 hover:opacity-100 dark:hover:[filter:drop-shadow(0_1px_2px_rgba(255,255,255,0.4))] hover:[filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.4))]`}>
              <Wallet className="!w-5.5 !h-5.5" />
              <span className=" ">Wallet</span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MobileNavbar;
