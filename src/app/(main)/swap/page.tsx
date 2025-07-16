'use client';
import { Input } from '@/components/ui/input';
import { ConnectWalletButton } from '@/shared/components/shared/ConnectWalletButton';
import WelcomeToTestNet from '@/shared/components/shared/WelcomeToTestNet';
import { Button } from '@/shared/components/ui/button';
import { ArrowUpDown, ArrowUpRight, ChevronDown, KeyRound, Lock, Shield } from 'lucide-react';
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

        <div className="flex-1 flex items-start justify-center p-6 md:p-10">
          <div className="flex w-full max-w-xl mx-auto flex-col ">
            <div className="p-4 border rounded-lg backdrop-blur-md">
              <div className="flex border p-3 rounded-lg items-center gap-3 my-5 bg-indigo-100 dark:bg-indigo-50/0 border-indigo-200 dark:border-indigo-800 shadow-md">
                <Shield className="flex-shrink-0 text-indigo-500 dark:text-indigo-400" />
                <span>
                  <h3 className=" font-semibold  mb-0.5 text-indigo-800 dark:text-indigo-300">
                    Innovative Private Transactions
                  </h3>
                  <p className="text-sm opacity-75 text-indigo-800 dark:text-indigo-300">
                    All your transactions are shielded and your address is private.
                  </p>
                </span>
              </div>
              <div>
                <h2 className="font-semibold text-xl mb-3">Private Swap</h2>
                <span className=" border px-2.5 py-0.5 rounded-xl bg-yellow-100 text-yellow-800 font-semibold text-sm">
                  You pay
                </span>
                <div className="mt-3 rounded-lg p-3 bg-gray-50 dark:bg-zinc-900/60 hover:bg-gray-100 dark:hover:bg-zinc-800/80 transition-colors cursor-text">
                  <div className="flex items-center gap-3">
                    <input
                      placeholder="0.00"
                      className=" flex w-full rounded-md border border-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 shadow-none flex-1 border-none text-xl font-normal bg-transparent dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-auto cursor-text"
                    />
                    <div className="border dark:bg-gray-50/7  p-1 rounded-xl text-sm flex gap-2 items-center px-3">
                      <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                        <img className="" src="eth.png" />
                      </div>
                      ETH
                      <ChevronDown size={15} />
                    </div>
                  </div>
                </div>
                <div className="border relative my-8 flex  items-center justify-center">
                  <span className=" absolute p-2 bg-white dark:bg-gray-50/5 shadow-md rounded-full ">
                    <ArrowUpDown size={15} />
                  </span>
                </div>
              </div>
              <div className="mb-5">
                <span className=" border px-2.5 py-0.5 rounded-xl bg-pink-100 text-pink-500 font-semibold text-sm">
                  You receive
                </span>
                <div className="mt-3 rounded-lg p-3 bg-gray-50 dark:bg-zinc-900/60 hover:bg-gray-100 dark:hover:bg-zinc-800/80 transition-colors cursor-text">
                  <div className="flex items-center gap-3">
                    <input
                      placeholder="0.00"
                      className=" flex w-full rounded-md border border-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 shadow-none flex-1 border-none text-xl font-normal bg-transparent dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-auto cursor-text"
                    />
                    <div className="border dark:bg-gray-50/7  p-1 rounded-xl text-sm flex gap-2 items-center px-3">
                      <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                        <img className="" src="eth.png" />
                      </div>
                      ETH
                      <ChevronDown size={15} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex mb-4  items-center gap-3 border p-2 rounded-lg bg-purple-50 dark:bg-purple-950/40 border-purple-100 dark:border-purple-900/50 shadow-sm">
                <span className="border p-1 rounded-full flex-shrink-0 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400">
                  <Shield size={15} />
                </span>
                <p className="text-xs text-purple-700 dark:text-purple-400">
                  Zero-knowledge proofs ensure privacy
                </p>
              </div>
              <ConnectWalletButton />
            </div>
          </div>
        </div>
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
