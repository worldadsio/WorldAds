"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const NodeOperator = () => {
  const [section, setSection] = useState();

  return (
    <>
      <div
        id="nodeOperator"
        className={`${
          section == "#nodeOperator" ? "pt-24" : "pt-0"
        }  mt-60 lg:flex w-[80%]  h-max mx-auto items-end justify-between `}
      >
        {/* <div id="nodeOperator" className="lg:flex w-[80%] mt-80 h-screen mx-auto items-end justify-between"> */}
        <div>
          <Image
            src="/Group 1.png"
            alt="Image"
            width={303}
            height={307}
            className="lg:w-[493px] lg:h-[497px] lg:mx-0 mx-auto "
          />
        </div>
        <div className="xl:w-[500px]  md:w-[400px] lg:mt-0 mt-10 lg:mx-0 mx-auto">
          <img
            src="./arrow2.png"
            className=" hidden lg:block h-32 lg:h-auto w-[136px]  mb-6 xl:-ml-8  "
          />
          <img src="./arrow3.png" className="  lg:hidden  m-auto  my-6  " />

          <h1 className="xl:text-6xl md:text-5xl text-3xl font-medium lg:text-start text-center text-[#181818]">
            Node operators
          </h1>
          <p className="xl:text-xl lg:text-sm text-md font-light lg:w-auto md:w-80   md:text-md  lg:mx-0 mx-auto text-[#030303] lg:text-start text-center mt-5">
            Become a cornerstone of digital advertising. Own a smart digital
            screen and start earning as advertisers choose your prime ad slots.
          </p>
          <Link href="https://forms.gle/yZKegGmN9f1VNRc67">
            <div className="border border-gray-300 xl:mt-14 mt-10 rounded-full lg:mx-0 mx-auto  xl:w-44 w-36 ">
              <button className="text-center text-sm border xl:p-3 md:p-3 p-2 rounded-full  xl:w-[164px] w-[133px] font-medium m-1 border-[#181818]">
                Join waitlist
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NodeOperator;
