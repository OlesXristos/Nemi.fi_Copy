'use client';

import { ChevronRight, MenuIcon, MoonIcon, SunIcon, Wallet } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useEffect, useState } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useTheme } from 'next-themes';
import BannerLogoDiv from '../ui/BannerLogoDiv';
import Link from 'next/link';

import { ConnectWalletButton } from './ConnectWalletButton';
import { AnimatePresence, motion } from 'framer-motion';
function BurgerNavMenu() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { theme, setTheme } = useTheme();
  const [unlocked, setUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleThemeWithTransition = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setTheme(nextTheme);
      });
    } else {
      setTheme(nextTheme);
    }
  };

  useEffect(() => {
    const storedAccess = localStorage.getItem('hasEarlyCode');
    if (storedAccess === 'true') {
      setUnlocked(true);
    }
    setIsLoading(false);
  }, []);
  if (isLoading)
    return (
      <div className="w-[24px] h-[24px]  rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse md:hidden " />
    );
  return (
    <>
      <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
        <SheetTrigger
          asChild
          className=" transition-all duration-300 hidden sm:block md:hidden m-0 p-1 hover:bg-gray-200 dark:hover:bg-gray-200/20 rounded-sm">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className=" cursor-pointer ">
            <MenuIcon className="h-4 w-4" />
          </motion.div>
        </SheetTrigger>
        <SheetContent side="right" className="w-[75%] h-full " title=" ">
          <SheetHeader className="flex flex-col  items-center space-x-2 justify-between h-[40%] gap-4 border-b ">
            <SheetTitle></SheetTitle>
            <div className="flex flex-col justify-center items-center h-full w-full gap-2 ">
              <div className="flex items-center justify-center gap-1.5 ">
                <BannerLogoDiv />
              </div>
              <span className=" text-sm sm:text-[18px]   text-muted-foreground tracking-wide uppercase ">
                Decentralized Exchange
              </span>
            </div>
          </SheetHeader>

          <div className="h-full  px-6 py-5">
            <div className="p-3 border rounded-xl bg-card/80 backdrop-blur-sm overflow-hidden shadow-sm mb-5">
              <div className="mb-2">
                <span className="flex gap-3 mb-2">
                  <Wallet />

                  <h3 className="font-semibold">Connect Wallet</h3>
                </span>
                <p className="text-sm text-muted-foreground">
                  Connect your wallet to access all features
                </p>
              </div>
              <div>
                {unlocked ? (
                  <ConnectWalletButton />
                ) : (
                  <Button variant="default" className="flex items-center gap-2" asChild>
                    <Link href="https://tally.so/r/nP4VE1">
                      <span>Get Early Access</span>
                    </Link>
                  </Button>
                )}
              </div>
            </div>
            <div className=" mb-5">
              <h3 className=" text-xs font-medium uppercase text-muted-foreground mb-3 flex items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-primary/70 mr-2"></div>
                Navigation Menu
              </h3>
              <div className="flex flex-col rounded-xl border bg-card/80 backdrop-blur-sm overflow-hidden shadow-sm">
                <Link
                  href="/swap"
                  className="flex w-full items-center justify-between px-4 py-3 transition-all hover:bg-muted/50 ">
                  Swap
                  <span>
                    <ChevronRight className="h-4 w-4 opacity-50" />
                  </span>
                </Link>
                <Link
                  href="/pool"
                  className="flex w-full items-center justify-between px-4 py-3 transition-all hover:bg-muted/50 border-t">
                  Pool
                  <span>
                    <ChevronRight className="h-4 w-4 opacity-50" />
                  </span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className=" text-xs font-medium uppercase text-muted-foreground mb-3 flex items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-primary/70 mr-2"></div>
                Theme Settings
              </h3>
              <div className=" border rounded-xl">
                <div className="flex justify-between items-center p-5 gap-2">
                  <Button
                    disabled={theme === 'light'}
                    variant="ghost"
                    size="icon"
                    onClick={toggleThemeWithTransition}
                    className="transition-all dark:bg-transparent  bg-primary/10 text-primary border-primary/20 border shadow-sm dark:border-none  dark:shadow-none
                  relative overflow-hidden cursor-pointer flex flex-col w-[50%] h-full p-2  ">
                    <SunIcon className="size-5 transition-all" />
                    <span>Light</span>
                  </Button>

                  <Button
                    disabled={theme === 'dark'}
                    variant="ghost"
                    size="icon"
                    onClick={toggleThemeWithTransition}
                    className="transition-all dark:bg-primary/10 text-primary dark:border-primary/20 dark:border dark:shadow-sm
                   relative overflow-hidden cursor-pointer flex flex-col w-[50%] h-full p-2 ">
                    <MoonIcon className="size-5 transition-all" />
                    <span>Dark</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <Drawer>
        <DrawerTrigger className="sm:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center cursor-pointer p-1 hover:bg-gray-200 dark:hover:bg-gray-200/20 rounded-sm">
            <MenuIcon className="h-4 w-4" />
          </motion.div>
        </DrawerTrigger>
        <DrawerContent className="h-screen flex flex-col data-[vaul-drawer-direction=bottom]:max-h-[100vh] px-5">
          <DrawerHeader className="flex flex-col  items-center space-x-2 justify-between h-[40%] gap-4 border-b ">
            <DrawerTitle className=" hidden"></DrawerTitle>
            <div className="flex flex-col justify-center items-center h-full w-full gap-2 ">
              <div className="flex items-center justify-center gap-1.5 ">
                <BannerLogoDiv />
              </div>
              <span className=" text-sm sm:text-[18px]   text-muted-foreground tracking-wide uppercase ">
                Decentralized Exchange
              </span>
            </div>
          </DrawerHeader>
          <div className="h-full  px-6 py-5">
            <div className="p-3 border rounded-xl bg-card/80 backdrop-blur-sm overflow-hidden shadow-sm mb-5">
              <div className="mb-2">
                <span className="flex gap-3 mb-2">
                  <Wallet />

                  <h3 className="font-semibold">Connect Wallet</h3>
                </span>
                <p className="text-sm text-muted-foreground">
                  Connect your wallet to access all features
                </p>
              </div>
              <div>
                {unlocked ? (
                  <ConnectWalletButton />
                ) : (
                  <Button variant="default" className="flex items-center gap-2" asChild>
                    <Link href="https://tally.so/r/nP4VE1">
                      <span>Get Early Access</span>
                    </Link>
                  </Button>
                )}
              </div>
            </div>
            <div className=" mb-5">
              <h3 className=" text-xs font-medium uppercase text-muted-foreground mb-3 flex items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-primary/70 mr-2"></div>
                Navigation Menu
              </h3>
              <div className="flex flex-col rounded-xl border bg-card/80 backdrop-blur-sm overflow-hidden shadow-sm">
                <Link
                  href="/swap"
                  className="flex w-full items-center justify-between px-4 py-3 transition-all hover:bg-muted/50 ">
                  Swap
                  <span>
                    <ChevronRight className="h-4 w-4 opacity-50" />
                  </span>
                </Link>
                <Link
                  href="/pool"
                  className="flex w-full items-center justify-between px-4 py-3 transition-all hover:bg-muted/50 border-t">
                  Pool
                  <span>
                    <ChevronRight className="h-4 w-4 opacity-50" />
                  </span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className=" text-xs font-medium uppercase text-muted-foreground mb-3 flex items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-primary/70 mr-2"></div>
                Theme Settings
              </h3>
              <div className=" border rounded-xl">
                <div className="flex justify-between items-center p-5 gap-2">
                  <Button
                    disabled={theme === 'light'}
                    variant="ghost"
                    size="icon"
                    onClick={toggleThemeWithTransition}
                    className="transition-all dark:bg-transparent  bg-primary/10 text-primary border-primary/20 border shadow-sm dark:border-none  dark:shadow-none
                  relative overflow-hidden cursor-pointer flex flex-col w-[50%] h-full p-2 ">
                    <SunIcon className="size-5 transition-all" />
                    <span>Light</span>
                  </Button>

                  <Button
                    disabled={theme === 'dark'}
                    variant="ghost"
                    size="icon"
                    onClick={toggleThemeWithTransition}
                    className="transition-all dark:bg-primary/10 text-primary dark:border-primary/20 dark:border dark:shadow-sm
                   relative overflow-hidden cursor-pointer flex flex-col w-[50%] h-full p-2">
                    <MoonIcon className="size-5 transition-all" />
                    <span>Dark</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default BurgerNavMenu;
