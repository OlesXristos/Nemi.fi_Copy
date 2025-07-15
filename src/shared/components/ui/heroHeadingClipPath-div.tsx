'use client';
import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Shield, ShieldAlert } from 'lucide-react';

export default function HeroHeadingClipPathDiv() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 1) Створюємо MotionValue від 0 до 100
  const percent = useMotionValue(0);

  // 2) Трансформуємо percent у clipPath та позицію “left”
  const clipPath = useTransform(percent, (p) => `inset(0 0 0 ${p}%)`);
  const leftPercent = useTransform(percent, (p) => `${p}%`);

  // 3) Початкова анімація при маунті
  useEffect(() => {
    const controls = animate(percent, 100, {
      duration: 6,
      ease: 'easeOut',
    });
    return () => controls.stop();
  }, [percent]);

  // 4) Мишка: стоп анімації й миттєве оновлення
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const raw = ((e.clientX - left) / width) * 100;
    const clamped = Math.min(Math.max(raw, 0), 100);
    // миттєво анімувати percent → clamped за 0.2с
    animate(percent, clamped, { duration: 0.2, ease: 'easeOut' });
  };

  // 5) При відльоті миші — довершити анімацію до 100%
  const handleMouseLeave = () => {
    // обчислимо залишок часу пропорційно
    const current = percent.get();
    const remaining = ((100 - current) / 100) * 6;
    animate(percent, 100, { duration: remaining, ease: 'easeOut' });
  };

  return (
    <div className=" p-3 sm:p-4 pb-4 sm:pb-6 md:p-8 md:pb-10">
      <h2 className=" text-lg sm:text-xl md:text-2xl font-bold  mb-3 sm:mb-5 text-center">
        Privacy In Action
      </h2>
      <div className="text-center text-xs  font-medium">
        <span className="animate-pulse">Interact with transactions below</span>
      </div>
      <div className="mt-6">
        <div className=" space-y-2 relative">
          <div className="relative w-full space-y-2 ">
            <div
              ref={containerRef}
              className="relative w-full overflow-hidden"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}>
              {/* білі лейбли Private/Exposed */}
              <motion.div
                className="mt-2 px-5 py-2.5 gap-2 absolute top-0 text-xs font-medium uppercase flex items-center z-50 bg-green-600 text-white rounded-full shadow-sm"
                style={{
                  left: leftPercent,
                  translateX: '-115%',
                }}>
                <Shield size={12} />
                <span>Private</span>
              </motion.div>

              <motion.div
                className="absolute top-0 bottom-0 w-[2px] bg-black/80 dark:bg-white shadow-[0_0_15px_rgba(0,0,0,0.7)] z-40"
                style={{ left: leftPercent }}
              />

              <motion.div
                className="mt-2 px-5 py-2.5  absolute top-0 text-xs font-medium uppercase flex items-center z-50 bg-red-500 text-white rounded-full shadow-sm    gap-2"
                style={{
                  left: leftPercent,
                  translateX: '15%', // зрушуємо Exposed вправо
                }}>
                <ShieldAlert size={12} />
                <span>Exposed</span>
              </motion.div>

              {/* заблюрений фон із новим текстом */}
              <div className="absolute inset-0 flex items-center pointer-events-none select-none shadow-inner rounded-md  dark:bg-black/40">
                <div className=" font-semibold w-full ">
                  <div className=" text-start text-xs sm:text-sm md:text-base flex items-center ">
                    <div className="space-y-3 w-full gap-1.5 sm:gap-2 px-2 sm:px-5 py-5 ">
                      <div className=" items-center  transition-all duration-300 border rounded-full flex h-12 pl-2 sm:p-4 md:p-5 bg-slate-200/40 dark:bg-white/3  space-x-2 overflow-hidden">
                        <Shield className="text-green-400 " size={20} />
                        <span>██████ swapped</span>
                        <span>
                          <span>█</span> ███
                        </span>
                        <span>for</span>
                        <span>
                          <span>███</span> ███
                        </span>
                      </div>
                      <div className=" items-center  transition-all duration-300 border rounded-full flex h-12 pl-2 sm:p-4 md:p-5 bg-slate-200/40 dark:bg-white/3  space-x-2 overflow-hidden">
                        <Shield className="text-green-400" size={20} />
                        <span>██████ swapped</span>
                        <span>
                          <span>██</span> ██
                        </span>
                        <span>for</span>
                        <span>
                          <span>███</span> <span>██</span>
                        </span>
                      </div>
                      <div className=" items-center  transition-all duration-300 border rounded-full flex h-12 pl-2 sm:p-4 md:p-5 bg-slate-200/40 dark:bg-white/3  space-x-2 overflow-hidden">
                        <Shield className="text-green-400" size={20} />
                        <span>███ swapped</span>
                        <span>
                          <span>███</span> ██
                        </span>
                        <span>for</span>
                        <span>
                          <span>███</span> <span>███</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* старий текст зверху, що відкривається clip-path */}
              <motion.div
                className=" inset-0 flex items-center pointer-events-none shadow-inner select-none bg-white dark:bg-black"
                style={{ clipPath }}>
                <div className=" font-semibold w-full ">
                  <div className=" text-start text-xs sm:text-sm md:text-base flex items-center bg-white dark:bg-black ">
                    <div className="space-y-3 w-full gap-1.5 sm:gap-2 px-2 sm:px-5 py-5">
                      <div className="items-center transition-all duration-300 border rounded-full flex h-12 pl-2 sm:p-4 md:p-5 bg-slate-200 dark:bg-white/20 space-x-2 ">
                        <ShieldAlert className="text-red-400" size={20} />
                        <span>vitalik.eth swapped</span>
                        <span className="text-[#ea789c] font-medium">1 ETH</span> <span>for</span>
                        <span className="text-[#aca22b] font-medium overflow-hidden">
                          4000 USDC
                        </span>
                      </div>
                      <div className="items-center transition-all duration-300 border rounded-full flex h-12 pl-2 sm:p-4 md:p-5 bg-slate-200 dark:bg-white/20 space-x-2">
                        <ShieldAlert className="text-red-400" size={20} />
                        <span>Coinbase swapped</span>
                        <span className="text-[#ea789c] font-medium">69 BTC</span> <span>for</span>
                        <span className="text-[#aca22b] font-medium">1200 ETH</span>{' '}
                        <span className="text-[#aca22b] font-medium"> </span>
                      </div>
                      <div className="items-center transition-all duration-300 border rounded-full flex h-12 pl-2 sm:p-4 md:p-5 bg-slate-200 dark:bg-white/20 space-x-2">
                        <ShieldAlert className="text-red-400" size={20} />
                        <span>You swapped</span>
                        <span className="text-[#ea789c] font-medium">1000 DAI</span>{' '}
                        <span>for</span>
                        <span className="text-[#aca22b] font-medium">0.01 BTC</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
