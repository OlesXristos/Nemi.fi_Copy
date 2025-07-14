'use client';
import React, { useEffect, useRef, useState } from 'react';

const FeaturedHeadingList = () => {
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
      <section className="pb-12 py-24 bg-white dark:bg-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2
              ref={sectionRef}
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-10 transition-all duration-700
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              Benefits for Traders
            </h2>

            <div className="border-t ">
              <div
                className={`py-6  flex items-center border-b transition-all duration-600
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center mr-6 shadow-md bg-[#ea789c] ">
                  <svg
                    viewBox="0 0 20 40"
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <path
                      d="M12.9866 30.5987C12.9866 32.2556 14.3298 33.5988 15.9866 33.5988H16.5986C18.1914 33.5988 19.4826 34.89 19.4826 36.4827C19.4826 38.0755 18.1914 39.3667 16.5986 39.3667H3.55063C1.95784 39.3667 0.666626 38.0755 0.666626 36.4827C0.666626 34.89 1.95784 33.5988 3.55063 33.5988H4.16263C5.81948 33.5988 7.16263 32.2556 7.16263 30.5987V8.93475C7.16263 7.27789 5.81948 5.93475 4.16263 5.93475H3.55063C1.95784 5.93475 0.666626 4.64354 0.666626 3.05075C0.666626 1.45796 1.95784 0.166748 3.55063 0.166748H7.16263H9.98663C11.6435 0.166748 12.9866 1.50989 12.9866 3.16675V30.5987Z"
                      fill="white"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Strategy Privacy</h3>
                  <p>Shield your trading strategy from competitors and front-runners.</p>
                </div>
              </div>
              <div
                className={`py-6  flex items-center border-b transition-all duration-700
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="border flex-shrink-0 h-16 w-16 rounded-full bg-[#e9661e] flex justify-center items-center text-white text-3xl mr-6">
                  <svg
                    viewBox="0 0 25 40"
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <path
                      d="M7.80543 29.9429C7.63147 30.1918 7.46866 30.4671 7.31795 30.7696C6.49756 32.4161 7.99487 34.1143 9.83449 34.1143H20.9259C22.5512 34.1143 23.8688 35.4318 23.8688 37.0571C23.8688 38.6824 22.5512 40 20.9259 40H2.99774C1.34213 40 -0.0142574 38.6553 0.0833818 37.0026C0.357717 32.359 1.31559 28.983 3.0543 26.5143C5.03394 23.6571 7.69231 22.5143 10.0679 21.4857C10.8032 21.2 11.4819 20.9143 12.1041 20.5714C16.9683 18.1143 19.1176 15.6571 19.1176 12.6286C19.1176 8.91429 16.1765 5.94286 12.5 5.94286C9.87647 5.94286 7.60945 7.50364 6.56022 9.77682C5.87949 11.2517 4.6221 12.6286 2.99774 12.6286C1.37337 12.6286 0.0215663 11.2939 0.391753 9.71224C1.69468 4.14549 6.64142 0 12.5 0C19.4005 0 25 5.65714 25 12.6286C25 20.6857 17.2511 24.5714 14.7059 25.8857C13.914 26.2857 13.1222 26.6286 12.3303 26.9714C10.4072 27.7714 8.88009 28.4571 7.80543 29.9429Z"
                      fill="white"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Institutional Grade</h3>
                  <p>Enterprise-level security and privacy for professional traders.</p>
                </div>
              </div>
              <div
                className={`py-6  flex items-center border-b transition-all duration-800
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className=" flex-shrink-0 border h-16 w-16 rounded-full bg-[#4382bd] flex justify-center items-center text-white text-3xl mr-6">
                  <svg
                    viewBox="0 0 25 40"
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <path
                      d="M22.5182 12.5214C21.2416 13.2164 21.1322 15.0222 22.0905 16.1151C25.2275 19.6925 25.0552 23.6843 24.9612 26.2089C24.9612 26.6667 24.9047 27.0672 24.9047 27.3534C24.9047 30.7296 23.6058 33.877 21.2339 36.2804C18.9185 38.6838 15.756 40 12.4806 40C5.59085 40 0 34.3348 0 27.3534C0 27.1472 0.125996 26.9642 0.321673 26.8992C1.54145 26.494 5.81585 25.2156 5.87322 27.1817C5.87517 27.2487 5.87237 27.2863 5.87322 27.3534C5.9197 31.0266 8.80982 34.0486 12.4806 34.0486C14.2313 34.0486 15.869 33.3619 17.1114 32.103C18.3538 30.8441 19.0315 29.1273 19.0315 27.3534C19.0315 26.8956 19.088 26.4378 19.088 25.98C19.2009 23.2332 19.3138 20.9442 16.3208 18.7697C14.0618 17.1674 10.8993 18.7697 7.90625 20.5436C7.62801 20.7128 7.36804 20.8696 7.12035 21.0121C6.36686 21.4454 5.47652 21.0228 5.19554 20.2003L4.19081 17.7428C3.83038 16.8612 4.19006 15.8496 5.02612 15.3934C5.92969 14.8212 7.05915 14.1917 8.35804 13.6195L12.2385 11.5378C14.9872 10.0632 13.9395 5.89414 10.8203 5.89414H2.94707C1.31945 5.89414 0 4.57469 0 2.94707C0 1.31945 1.31945 0 2.94707 0H20.6587C22.2864 0 23.6058 1.31945 23.6058 2.94707V5.8659C23.6058 5.88149 23.5932 5.89414 23.5776 5.89414C23.562 5.89414 23.5493 5.90678 23.5493 5.92237V10.7859C23.5493 11.5095 23.1538 12.1753 22.5182 12.5214Z"
                      fill="white"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold  mb-1">Strategy Privacy</h3>
                  <p>No more sandwich attacks or other front-running exploits.</p>
                </div>
              </div>
              <div
                className={`py-6  flex items-center border-b transition-all duration-900
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="flex-shrink-0 border h-16 w-16 rounded-full bg-[#aca22b] flex justify-center items-center text-white text-3xl mr-6">
                  <svg
                    viewBox="0 0 24 40"
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <path
                      d="M21.0849 0C22.6949 0 24 1.30513 24 2.91509V37.0849C24 38.6949 22.6949 40 21.0849 40C19.4749 40 18.1698 38.6949 18.1698 37.0849V23.5246C18.1698 21.6476 16.4655 20.2315 14.6202 20.5754L3.54959 22.6384C1.7043 22.9823 0 21.5662 0 19.6892V2.91509C0 1.30513 1.30513 0 2.91509 0C4.52506 0 5.83019 1.30513 5.83019 2.91509V12.6315C5.83019 14.5082 7.53384 15.9241 9.37887 15.5809L15.7185 14.4015C17.1394 14.1372 18.1698 12.8974 18.1698 11.4521V2.9151C18.1698 1.30513 19.4749 0 21.0849 0Z"
                      fill="white"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Strategy Privacy</h3>
                  <p>Deploy your own algorithms while keeping your edge private.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedHeadingList;
