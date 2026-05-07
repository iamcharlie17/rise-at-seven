import React from 'react';
import Button from './buttons/Button';

const DrivingDemand = () => {
  return (
   <section className="py-8 lg:py-12 px-2 lg:px-4">
        <div className="flex flex-col-reverse gap-4 lg:gap-0 lg:flex-row justify-between items-start">
          <div className="flex-1 w-full">
            <h1 className="max-w-72 lg:max-w-140 lg:text-2xl text-black font-medium leading-5 lg:leading-none">
              A global team of search-first content marketers engineering
              semantic relevancy & category signals for both the internet and
              people
            </h1>
            <div className='flex lg:hidden flex-col gap-2 mt-4'>
              <Button type='white'>Our Story</Button>
              <Button type='transparent'>Our Services</Button>
            </div>
          </div>
          <div className="flex-1 lg:max-w-4xl lg:px-16">
            <div className="text-[40px] lg:text-[90px] leading-none font-semibold lg:font-medium text-black">
              <h1>Driving Demand &</h1>
              <div className="flex gap-2 items-center">
                <h1>Discovery</h1>
                <img
                  src="https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=a668733e8ced1733809794da9c15f062"
                  alt=""
                  className="w-12 h-12 lg:w-20 lg:h-20 aspect-square object-cover object-center rounded-lg lg:rounded-2xl"
                />
              </div>
            </div>
            <div className="hidden lg:flex gap-2 items-center my-6">
              <Button type="white">Out Story</Button>
              <Button type="transparent">Our Services</Button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default DrivingDemand;
