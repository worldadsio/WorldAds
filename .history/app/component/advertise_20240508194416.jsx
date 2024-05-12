import Image from "next/image";

export default  function Advertise (){
    return(
        <>
          <div className="xl:pl-32 2xl:pl-40  lg:flex lg:mt-48 mt-32 w-full background gap-24">
          <div className="-mt-14">
            <Image src="" alt="image" width={226} height={426}  className="lg:w-[526px] lg:h-[726px] 2xl:w-[650px] 2xl:h-[926px]  lg:mx-0 mx-auto"/>
          </div>
          <div className="lg:w-[60%] w-[90%] lg:mx-0 mx-auto lg:mt-40 mt-10">
            <h1 className="xl:text-6xl text-5xl 2xl:text-8xl lg:text-start text-center font-medium text-[#181818]">Advertise with</h1>
            <h1 className="xl:text-6xl text-5xl 2xl:text-8xl lg:text-start text-center font-medium text-[#FC3603]">WorldAds</h1>
            <p className="xl:text-xl lg:text-lg text-sm 2xl:text-2xl lg:w-[400px] 2xl:w-[600px] mt-4 lg:text-start text-center text-[#030303]">Seize the spotlight in bustling areas with high-traffic visibility. Make your brand the center of attention with</p>
            <div className="flex items-center lg:justify-start justify-center w-full gap-5  mt-10">
              <h1 className="xl:text-4xl lg:text-3xl lg:text-start text-center  text-2xl 2xl:text-6xl xl:w-[70%] lg:w-[60%]  2xl:w-[90%] font-medium text-[#030303]">Precision Targeting</h1>
              <hr className="border w-full lg:block hidden  border-[#FC3603]" />
            </div>
            <p className="lg:text-xl text-sm 2xl:text-2xl lg:w-80 lg:text-start w-40 lg:mx-0 mx-auto text-center mt-5"> Reach your ideal audience at the right time and place.</p>
            <hr className="border lg:border-[#7E7E7E33]  border-[#FC3603] lg:w-80 w-60 lg:mx-0 mx-auto my-5" />
            <div className="flex items-center lg:justify-start justify-center gap-5 w-full mt-10">
              <h1 className="xl:text-4xl lg:text-3xl  text-2xl  2xl:text-6xl font-medium lg:text-start text-center  xl:w-[50%] lg:w-[45%] 2xl:w-[60%] text-[#030303]">Dynamic HD Quality Ads</h1>
              <hr className="border  w-[370px] lg:block hidden 2xl:w-[400px] border-[#FC3603]" />
            </div>
            <p className="lg:text-xl text-sm 2xl:text-2xl lg:w-80 w-52 lg:mx-0 mx-auto  lg:text-start text-center mt-5">Captivate viewers with stunning, crystal-clear advertisements.</p>
            <hr className="border lg:border-[#7E7E7E33]  border-[#FC3603] lg:w-80 w-60 lg:mx-0 mx-auto my-5" />
            <div className="flex items-center lg:justify-start justify-center w-full mt-10">
              <h1 className="xl:text-4xl lg:text-3xl  text-2xl  2xl:text-6xl font-medium lg:text-start text-center  xl:w-[80%] lg:w-[60%] 2xl:w-full text-[#030303]">Scalable Geofenced Campaigns</h1>
              <hr className="border  w-full lg:block hidden border-[#FC3603]" />
            </div>
            <p className="lg:text-xl text-sm 2xl:text-2xl  lg:text-start text-center  w-40 lg:mx-0 mx-auto   lg:w-96 mt-5">  Customize and scale your campaigns with precision.</p>
            <hr className="border lg:border-[#7E7E7E33]  border-[#FC3603] lg:w-80 w-60 lg:mx-0 mx-auto my-5" />
            <div className="border border-gray-300 xl:mt-14 mt-10 rounded-full lg:mx-0 mx-auto  xl:w-44 w-36 ">
              <button className="text-center text-sm border xl:p-3 md:p-3 p-2 rounded-full  xl:w-[164px] w-[133px] font-medium m-1 border-[#181818]">Join waitlist</button>
            </div>
          </div>

        </div>
        </>
    )
}