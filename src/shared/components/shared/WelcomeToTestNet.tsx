'use client';

import { Dialog, DialogClose, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ArrowRight, ShieldAlert, Smartphone, TriangleAlert } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const WelcomeToTestNet = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenDialog = sessionStorage.getItem('hasSeenTestnetDialog');

    if (!hasSeenDialog) {
      setIsOpen(true);
      sessionStorage.setItem('hasSeenTestnetDialog', 'true');
    }
  }, []);

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="h-full dark:bg-black">
          <DialogTitle className="hidden" />
          <div className="flex items-center justify-center  ">
            <div className="relative">
              <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-gradient-to-br from-blue-300/40 to-purple-300/40 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-3xl opacity-40 hidden sm:block"></div>
              <div className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-gradient-to-br from-amber-300/40 to-red-300/40 dark:from-amber-500/20 dark:to-red-500/20 rounded-full blur-3xl opacity-40 hidden sm:block"></div>
              <div className="flex relative  flex-col items-center border justify-center py-5 px-5 sm:py-10 sm:px-10 rounded-xl dark:bg-black  overflow-auto shadow-xl">
                <div className="flex flex-col items-center mb-10">
                  <div className=" relative mb-6">
                    <span className="absolute -inset-3  bg-gradient-to-r from-amber-300/80 to-red-300/80 dark:from-amber-500/80 dark:to-red-500/80 rounded-full opacity-75 blur-xl z-10"></span>
                    <div className=" relative w-[80px] h-[80px] border border-amber-400/50 rounded-full items-center flex justify-center  text-orange-500 z-20 bg-white dark:bg-black">
                      <ShieldAlert size="50%" />
                    </div>
                  </div>

                  <h2 className="transition-all duration-300 text-2xl sm:text-3xl font-bold mb-6 animate-fade-up ">
                    Welcome to TestNet
                  </h2>
                </div>
                <div className=" space-y-5 mb-7">
                  <div className=" sm:flex border border-amber-400/50 hover:border-amber-400/75 dark:bg-black rounded-xl p-3 sm:p-6 gap-2 text-amber-700 dark:text-amber-300 bg-yellow-100/25 group  transition-all duration-300  hover:shadow-xl">
                    <div className=" flex justify-center items-center sm:block ">
                      <div className="bg-yellow-200/50 dark:bg-yellow-500/50 rounded-md p-1 transition-all duration-300 group-hover:scale-110">
                        <TriangleAlert />
                      </div>
                    </div>
                    <div className="">
                      <h3 className=" text-xl mb-2   flex justify-center items-center sm:block">
                        TestNet Version
                      </h3>
                      <p className="text-sm text-amber-600 dark:text-amber-100">
                        Test environment with no real-world token value. Expect bugs and data
                        resets.
                      </p>
                    </div>
                  </div>
                  <div className="sm:flex border border-blue-500/50 hover:border-blue-500/75 rounded-xl p-3 dark:bg-black sm:p-6 gap-2 text-blue-500 transition-all duration-300 bg-blue-200/25 hover:shadow-xl group">
                    <div className="  flex justify-center items-center sm:block">
                      <div className="bg-blue-200/50 dark:bg-blue-500/50 rounded-md p-1 transition-all duration-300 group-hover:scale-110">
                        <Smartphone />
                      </div>
                    </div>
                    <div>
                      <h3 className=" text-xl mb-2  flex justify-center items-center sm:block">
                        Mobile Experience
                      </h3>
                      <p className="text-sm text-blue-400 dark:text-blue-200">
                        Mobile is not supported yet. Please use a computer to send transactions
                        meanwhile.
                      </p>
                    </div>
                  </div>
                </div>

                <DialogClose asChild>
                  <div className="flex justify-center w-full items-center border rounded-xl py-3 px-7 mb-5 bg-amber-500 font-semibold transition-all duration-300 text-white gap-1 hover:scale-105 cursor-pointer hover:[filter:drop-shadow(0_2px_4px_rgba(0,0,0,0.4))]">
                    <span>Continue to the app</span>
                    <ArrowRight />
                  </div>
                </DialogClose>
                <div>
                  <p className="text-sm text-gray-400">
                    By continuing, you accept the limitations of this test environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WelcomeToTestNet;
