import HeroHeadingGreet from '@/shared/components/ui/HeroHeadingGreet';
import DefiPazzleDiv from '@/shared/components/ui/defiPuzzle-div';
import FeaturesHeadingDiv from '@/shared/components/ui/featuresHeading-div';
import Link from 'next/link';
import Image from 'next/image';
import FeaturedHeadingList from '@/shared/components/ui/featuredHeading-list';
import LandinFooter from '@/shared/components/ui/landing-footer';

const LandingPage = () => {
  return (
    <>
      <div className="dark:bg-black min-h-screen relative">
        <div className="absolute inset-0 z-0 top-0">
          <div
            className="w-full h-full opacity-15 dark:opacity-20 [background-image:radial-gradient(#000_1px,transparent_1px)] dark:[background-image:radial-gradient(white_1px,transparent_1px)] [background-size:30px_30px]"
            aria-hidden="true"></div>
        </div>
        <section className=" py-4 sm:py-8 md:py-12 lg:py-16 relative overflow-hidden min-h-[100vh] max-h-none w-full flex flex-col items-center justify-center ">
          <div className="absolute w-full h-full">
            <div className=" absolute top-[-6%] left-[50%] w-[140px] h-[140px]">
              <img src="/blue.svg" alt="" className=" opacity-40" />
            </div>
            <div className="absolute left-[-4%] top-[40%] w-[140px] h-[140px]">
              <img src="/green1.svg" alt="" className=" -rotate-10 opacity-40" />
            </div>
            <div className="absolute bottom-[-9%] left-[14%]">
              <img src="/pink.svg" alt="" className=" rotate-12 opacity-40" />
            </div>
          </div>
          <div className=" w-full max-w-3xl mx-auto z-10 text-center mb-4 sm:mb-6 md:mb-8 transition-all duration-700 opacity-100 translate-y-0">
            <HeroHeadingGreet />
          </div>
        </section>
        <section className=" py-20 relative overflow-hidden">
          <DefiPazzleDiv />
        </section>
        <section aria-labelledby="features-heading" className=" md:block">
          <FeaturesHeadingDiv />
        </section>
        <section aria-labelledby="benefits-heading">
          <FeaturedHeadingList />
        </section>
        <section aria-labelledby="featured-heading">
          <div className="flex justify-center text-5xl font-bold pb-8">
            <div className='className="container mx-auto px-4"'>
              <div className="">
                <div className="mb-14">
                  <h2 className="mb-4 animate-fade-up">Featured By</h2>
                </div>
                <div>
                  <Link href="https://aztec.network/" className=" flex justify-center">
                    <Image
                      src="/aztec-logo-dark.svg"
                      alt={''}
                      width={90}
                      height={90}
                      className=" cursor-pointer z-50 transition-all duration-300 hover:scale-105 "></Image>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="bg-[#232323] dark:bg-black text-white py-16 ">
        <LandinFooter />
      </footer>
    </>
  );
};

export default LandingPage;
