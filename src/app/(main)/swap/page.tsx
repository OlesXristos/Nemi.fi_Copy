'use client';
import { Input } from '@/components/ui/input';
import WelcomeToTestNet from '@/shared/components/shared/WelcomeToTestNet';
import { Button } from '@/shared/components/ui/button';
import { ArrowUpRight, KeyRound, Lock } from 'lucide-react';
import Link from 'next/link';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
const code = [{ code: '111' }, { code: '222' }];
const SwapPage = () => {
  const [input, setInput] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const storedAccess = localStorage.getItem('hasEarlyCode');
    if (storedAccess === 'true') {
      setUnlocked(true);
    }
    setIsLoading(false);
  }, []);
  if (isLoading) return <div className="h-screen w-full"></div>;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = code.some((item) => input.trim() === item.code);

    try {
      if (isValid) {
        setTimeout(() => {
          setUnlocked(true);
        }, 1000);

        localStorage.setItem('hasEarlyCode', 'true');
        window.dispatchEvent(new Event('early-access-granted'));
        toast.success('Early access code confirmed');
      }
    } catch (error) {
      console.error('Incorrect or invalid early access code', error);
      toast.error('Incorrect or invalid early access code');
    }
  };

  if (unlocked) {
    return (
      <>
        <WelcomeToTestNet />

        <div className="flex h-full items-center justify-center relative overflow-hidden">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">🎉 Access Granted</h2>
            <p>Welcome to the early access page!</p>
            {/* Тут можна рендерити будь-який інший вміст */}
          </div>
        </div>
        {/* <MainFooter /> */}
      </>
    );
  }
  return (
    <>
      <div className=" flex h-[100vh] w-full justify-center items-center relative ">
        <WelcomeToTestNet />
        <div className="z-10 bg-white/10 backdrop-blur-md dark:bg-black/10 ">
          <div className="border rounded-xl p-7">
            <div>
              <div className="flex justify-center">
                <img src="/NemiDark.svg" alt="" className=" w-28 mb-5 dark:hidden" />
                <img src="/NemiLight.svg" alt="" className=" w-28 mb-5 hidden dark:block" />
              </div>
              <div className="flex justify-center gap-2">
                <span>
                  <KeyRound />
                </span>
                <h2 className="text-xl font-semibold mb-2">Early Access Required</h2>
              </div>
              <div className="flex justify-center">
                <div className="border border-gray-400 rounded-2xl bg-gray-400 p-0.5 w-10 flex justify-center mb-5"></div>
              </div>
            </div>
            <div className="mb-5">
              <p className="text-gray-500">
                {' '}
                This page is protected and requires an early access code.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex mb-3 gap-2">
                <span>
                  <Lock />
                </span>
                <h3 className="font-semibold">Access Code</h3>
              </div>
              <div className="flex flex-col space-y-6 mb-12">
                <Input
                  placeholder="Enter your access code"
                  type="text"
                  className="py-1 w-full "
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />

                <Button
                  disabled={!input.trim()}
                  className={`${input.trim() ? '' : ' bg-gray-400 '}`}>
                  Unlock Access
                </Button>
              </div>
            </form>
            <div className="rounded-2xl border flex flex-col justify-center items-center p-2">
              <p className="text-gray-400">Need an access code? You can:</p>
              <div className="flex">
                <Link
                  href="https://tally.so/r/nP4VE1 "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b-2">
                  Get a code from the Nemi team
                </Link>
                <span>
                  <ArrowUpRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <MainFooter /> */}
    </>
  );
};

export default SwapPage;
