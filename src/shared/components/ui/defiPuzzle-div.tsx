'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function DefiPazzleDiv() {
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
    <>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className=" flex flex-col lg:flex-row justify-between items-center gap-12 ">
            <div className="w-full lg:w-1/2 transition-all duration-1000 opacity-100 translate-y-0">
              <motion.div
                ref={sectionRef}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className=" ">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#000000] dark:text-white mb-6">
                  Solving the DeFi Privacy Puzzle
                </h2>
                <p className="mb-5 font-semibold leading-[38px]">
                  Nemi combines the best of{' '}
                  <span className="bg-[#E9661E] text-white px-2 py-1 rounded-full">
                    deep liquidity
                  </span>{' '}
                  with{' '}
                  <span className=" bg-[#4382BD] text-white px-2 py-1 rounded-full">
                    decentralised privacy
                  </span>{' '}
                  to create a trading experience that's both{' '}
                  <span className=" bg-[#F5BD28] text-white px-2 py-1 rounded-full">
                    powerful and private
                  </span>
                </p>
                <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
                  <li>· Private, non-custodial trading</li>
                  <li>· Deep liquidity for minimal slippage and fair pricing</li>
                  <li>· MEV protection for your transactions</li>
                  <li>· Simple interface with real-time market data</li>
                </ul>
                <Link
                  href="/swap"
                  className="inline-flex items-center gap-2 bg-black dark:bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 transform hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Explore the Solution
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className=" ">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: -10 }}
                transition={{
                  duration: 3,
                  delay: 0,
                  repeat: Infinity, // нескінченна анімація
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
                className="cursor-pointer   ">
                {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#232323"
            viewBox="0 0 24 24"
            className="w-full fill-[#232323] hover:[filter:drop-shadow(0_4px_8px_rgba(0,0,0,0.4))] transition-all">
            <title>Discord</title>
            <path
              className="hover:shadow-2xl"
              d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
          </svg> */}
                <Image
                  src="/full_pazzle.svg"
                  width={1}
                  height={1}
                  className="w-full h-full  fill-[#232323] hover:[filter:drop-shadow(0_2px_4px_rgba(0,0,0,0.4))] dark:hover:[filter:drop-shadow(0_2px_4px_rgba(255,255,255,0.4))] transition-all duration-300"
                  alt={''}></Image>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
