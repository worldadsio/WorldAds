import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
const RideEarn = () => {
  const [section, setSection] = useState();

  useEffect(() => {
    const handleHashChange = () => {
      setSection(window.location.hash)
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  return (
    <div>
      <div id="ride" className={`${section == "#ride" ? "pt-[24vh] lg:pt-[20vh]" : "pt-0"} flex lg:flex-row flex-col-reverse h-max w-[80%] mt-20 mx-auto items-end justify-between `}>
        <div className="xl:w-[410px] md:w-[400px] lg:mt-0 mt-10 lg:mx-0 mx-auto">
          <h1 className="xl:text-6xl md:text-5xl text-3xl font-medium lg:text-start text-center text-[#181818]">Ride & Earn</h1>
          <p className="xl:text-lg lg:w-auto md:w-80  lg:text-sm text-md font-light lg:w-auto  lg:mx-0 mx-auto text-[#030303] lg:text-start text-center mt-5">Transform every journey into a profitable venture. Our Smart Rooftop Digital Screens turn miles into money, making every trip count.</p>
          <Link href="https://www.google.com/forms/about/">
            <div className="border border-gray-300 xl:mt-14 mt-10 rounded-full lg:mx-0 mx-auto  xl:w-44 w-36 ">
              <button className="text-center text-sm border xl:p-3 md:p-3 p-2 rounded-full  xl:w-[164px] w-[133px] font-medium m-1 border-[#181818]">Join waitlist</button>
            </div>
          </Link>
        </div>
        <div>
          <Image src="/GroupCroped.png" alt="Image" width={453} height={357} className="lg:w-[563.48px] lg:h-[450.27px] lg:mx-0 mx-auto " />
        </div>
      </div>
    </div>
  )
}

export default RideEarn
