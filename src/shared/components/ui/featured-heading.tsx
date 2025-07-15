import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const FeaturedHeading = () => {
  return (
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
  );
};

export default FeaturedHeading;
