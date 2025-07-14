'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './button';
import { ArrowRight } from 'lucide-react';
const BannerLogoDiv = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <div className="relative w-[110px] h-[32px] hidden sm:block ">
        <Link href="/">
          <Image src="/NemiDark.svg" alt="Logo" fill className="dark:hidden hidden sm:block" />

          <Image src="/NemiLight.svg" alt="Logo" fill className="hidden dark:block" />
        </Link>
      </div>
      <div className="relative w-[40px] h-[32px] sm:hidden block ">
        <Link href="/">
          <Image src="/NemiLogoDark.svg" alt="Logo" fill className="dark:hidden sm:hidden block" />
          <Image src="/NemiLogoLight.svg" alt="Logo" fill className="hidden dark:block sm:hidden" />
        </Link>
      </div>
      <motion.div
        key={isHover ? 'hovered' : 'normal'}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        initial={{ y: 0 }}
        animate={{ y: -10 }}
        transition={{
          duration: isHover ? 0.7 : 1.5,
          delay: 0,
          repeat: Infinity, // нескінченна анімація
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className="cursor-pointer   ">
        <Dialog>
          <DialogTrigger asChild>
            <span className=" text-[9px] font-medium border rounded-md bg-[#ea789c] px-2 py-0.5 text-white flex items-center space-x-1 transition-transform hover:scale-105 ">
              <span className=" relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
              <span>TESTNET</span>
            </span>
          </DialogTrigger>
          <DialogContent className=" h-full">
            <DialogTitle />
            <div className="flex flex-col  items-center py-16 w-full h-full overflow-auto">
              <div className=" flex flex-col items-center mb-10 ">
                <div className="border rounded-full py-2 px-7 mb-5 bg-pink-300 uppercase font-bold text-white animate-fade-donw">
                  Testnet Release
                </div>
                <h2 className=" transition-all duration-300 text-2xl sm:text-5xl font-bold mb-6 animate-fade-up ">
                  Testnet Information
                </h2>
                <p className=" text-[16px]  sm:text-xl animate-show-up">
                  You're exploring an early version of our platform running on testnet.
                </p>
              </div>
              <div className="flex flex-col md:flex-row mb-16 gap-9">
                <div className=" space-y-9">
                  <div className="flex gap-3 border p-8 rounded-xl animate-testnet-info-move-left-top transition-all duration-300 hover:scale-105 ">
                    <div className=" text-2xl">🧪</div>
                    <div>
                      <h3 className=" font-semibold mb-1">Test Network</h3>
                      <p>Running on testnet environment with no real assets at risk.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 border p-8 rounded-xl animate-testnet-info-move-left-bot transition-all duration-300 hover:scale-105">
                    <div className=" text-2xl">🔮</div>
                    <div>
                      <h3 className=" font-semibold mb-1"> Coming Soon </h3>
                      <p>Enhanced functionality and third-party integrations.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-9">
                    <div className="flex gap-3 border p-8 rounded-xl animate-testnet-info-move-right-top transition-all duration-300 hover:scale-105">
                      <div className=" text-2xl">💻</div>
                      <div>
                        <h3 className=" font-semibold mb-1"> Development Mode</h3>
                        <p>Features may change as development progresses.</p>
                      </div>
                    </div>
                    <div className="flex gap-3 border p-8 rounded-xl animate-testnet-info-move-right-bot transition-all duration-300 hover:scale-105">
                      <div className=" text-2xl">🐛</div>
                      <div>
                        <h3 className=" font-semibold mb-1">Expect Bugs </h3>
                        <p>Your feedback helps us improve the platform.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <p className="mb-10 animate-show-up">
                    Thank you for being an early explorer. Your feedback is valuable as we continue
                    to build.
                  </p>
                  <DialogClose asChild>
                    <div className="flex justify-center items-center border rounded-full py-3 px-7 mb-5 bg-pink-300  font-semibold  transition-all duration-300 text-white gap-1 hover:scale-105 cursor-pointer  hover:[filter:drop-shadow(0_2px_4px_rgba(0,0,0,0.4))]">
                      <span>Continue to the app</span>

                      <ArrowRight />
                    </div>
                  </DialogClose>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>
    </>
  );
};

export default BannerLogoDiv;
