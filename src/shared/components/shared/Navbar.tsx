'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './BurgerNavMenu';
import BannerLogoDiv from '../ui/BannerLogoDiv';
import BurgerNavMenu from './BurgerNavMenu';

const Navbar = () => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<string>('');

  useEffect(() => {
    if (pathname.includes('/swap')) setActiveTab('swap');
    else if (pathname.includes('/pool')) setActiveTab('pool');
    else setActiveTab('');
  }, [pathname]);

  return (
    <nav className="dark:bg-black/50 sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 px-4 md:px-6 py-2 transition-all duration-300">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center space-x-2">
          <BannerLogoDiv />
        </div>

        <div className="space-x-2 bg-muted/30 border-border/40 backdrop-blur-sm p-1 rounded-full border hidden md:flex">
          <Link
            href="/swap"
            onClick={() => setActiveTab('swap')}
            className={`text-sm font-medium px-5 py-2 rounded-full transition-all ${
              activeTab === 'swap'
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:bg-background/80'
            }`}>
            Swap
          </Link>
          <Link
            href="/pool"
            onClick={() => setActiveTab('pool')}
            className={`text-sm font-medium px-5 py-2 rounded-full transition-all ${
              activeTab === 'pool'
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:bg-background/80'
            }`}>
            Pool
          </Link>
        </div>

        <div className="flex items-center space-x-2">
          <DesktopNavbar />
          <BurgerNavMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
