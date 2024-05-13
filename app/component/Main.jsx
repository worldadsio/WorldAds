import React from 'react'

const Main = () => {
    return (
        <>
            <div className=' rounded-b-[60px] max-w-screen  flex flex-col justify-between'>
                <div className='gradient-color min-h-[115vh]  max-w-screen rounded-b-[60px] max-w-screen pt-40 px-6  sm:px-16 md:pb-20 pb-20  flex flex-col justify-between'>

                <div className="lg:flex lg:items-center justify-between ">
                        <div className="my-4">
                             <h1 className="lg:text-5xl text-2xl  lg:w-[650px] lg:text-start text-center text-white font1 ">Empowering Connections Through Digital Out-of-Home Advertising</h1>
                         </div>


                        <div className='my-4 mt-8 sm:mt-4'>
                            <p className='text-white text-center sm:text-left font-light text-lg  lg:w-[400px]'>At Worldads, we&apos;re revolutionizing location-based advertising by harnessing the power of smart rooftop digital screens. Our innovative platform delivers programmatic advertisements that are not only precise but also captivating, tailored to the vehicle&apos;s exact location and time.</p>
                        </div>
                    </div>


                    <div className="relative lg:w-[550px]  rounded-[100px] mt-10">
                         <input type="text" id="default-search" className="block w-full lg:p-5 p-3  -10 lg:text-sm text-xs text-gray-900 bg-[#FFFFFF1A] border border-white focus:ring-white focus:border-white rounded-[100px] placeholder:text-[#FFFFFF80] " placeholder="Enter your email address" required />
                         <button type="submit" className=" absolute end-1 top-1 font-bold bg-white hover:bg-white-800 focus:ring-4 font-bold focus:outline-none focus:ring-none font-medium rounded-[100px] lg:text-sm text-xs lg:px-8 px-5 lg:py-4 py-2">Join waitlist</button>
                     </div>



                    <div className="  sm:mt-8 flex items-start pt-16 sm:pt-0  h-[40vh] lg:h-[34vh] gap-3  lg:items-end justify-center sm:justify-start mb-4">
                        <img src="./assets/images/discord.png" className='lg:mb-2' />
                        <div>
                            <p className="text-white text-lg sm:text-base">Stay updated.</p>
                            <p className="text-white text-lg sm:text-base font-bold">Join our discord community</p>
                        </div>
                    </div>

                </div>




                <div className="min-h-[26vh] md:min-h-[50vh]  sm:relative  ">
                    <img src="./arrow1.png" className=" hidden md:block h-32 lg:h-auto absolute md:-mt-[52vh] lg:-mt-[60vh]  right-20 lg:right-16   " />
                    <img src="./assets/images/Vector.png" className="   md:absolute -mt-48 md:mt-auto   md:right-28 h-[344px] w-[344px] md:w-[444px] md:h-[444px] lg:w-auto lg:h-auto -top-40  md:-top-64 lg:-top-72 m-auto lg:right-18" />
                </div>

            </div>
        </>
    )
}

export default Main
