import HeroHeadingGreet from '@/shared/components/ui/heroHeading-greet';
import DefiPazzleDiv from '@/shared/components/ui/defiPuzzle-div';
import FeaturesHeadingDiv from '@/shared/components/ui/featuresHeading-div';

import FeaturedHeadingList from '@/shared/components/ui/featuredHeading-list';
import LandinFooter from '@/shared/components/ui/landing-footer';
import FeaturedHeading from '@/shared/components/ui/featured-heading';

const LandingPage = () => {
  return (
    <>
      <div className="dark:bg-black min-h-screen relative">
        <div className="absolute inset-0 z-0 top-0">
          <div
            className="w-full h-full opacity-15 dark:opacity-11 [background-image:radial-gradient(#000_1px,transparent_1px)] dark:[background-image:radial-gradient(white_1px,transparent_1px)] [background-size:30px_30px]"
            aria-hidden="true"></div>
        </div>
        <section className=" py-4 sm:py-8 md:py-12 lg:py-16 relative overflow-hidden min-h-[100vh] max-h-none w-full flex flex-col items-center justify-center ">
          <HeroHeadingGreet />
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
          <FeaturedHeading />
        </section>
      </div>
      <footer className="bg-[#232323] dark:bg-black text-white pt-16 pb-26">
        <LandinFooter />
      </footer>
    </>
  );
};

export default LandingPage;
