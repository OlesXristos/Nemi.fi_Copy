'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import ModeToggle from './ModeToggle';

import { ConnectWalletButton } from './ConnectWalletButton';
const DesktopNavbar = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAccess = () => {
      const storedAccess = localStorage.getItem('hasEarlyCode');
      setUnlocked(storedAccess === 'true');
      setIsLoading(false);
    };

    checkAccess();

    // 🔁 Слухаємо власну подію (видається вручну після вводу коду)
    window.addEventListener('early-access-granted', checkAccess);

    // 🔁 Слухаємо зміни в localStorage (навіть з інших вкладок або removeItem)
    window.addEventListener('storage', checkAccess);

    return () => {
      window.removeEventListener('early-access-granted', checkAccess);
      window.removeEventListener('storage', checkAccess);
    };
  }, []);

  if (isLoading)
    return (
      <div className="flex items-center gap-3">
        <div className="hidden md:flex">
          <ModeToggle />
        </div>
        <div className="w-[134px] h-[36px]  rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse  " />
      </div>
    );

  return (
    <div className="flex items-center gap-3">
      <div className="hidden md:flex">
        <ModeToggle />
      </div>
      {unlocked ? (
        <ConnectWalletButton />
      ) : (
        <Button variant="default" className="flex items-center gap-2 " asChild>
          <Link href="https://tally.so/r/nP4VE1">
            <span>Get Early Access</span>
          </Link>
        </Button>
      )}
    </div>
  );
};

export default DesktopNavbar;
