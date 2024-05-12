import React from 'react'

const Main = () => {
    return (
        <>
            <div className='gradient-color h-[700px] w-screen rounded-b-[60px] lg:pt-40 pt-24 px-5  sm:px-16 pb-14 relative  flex flex-col justify-between'>
                <div className="lg:w-[80%] w-[95%] mx-auto">


                    <div className="lg:flex lg:items-center justify-between ">

                        <div className="my-4">
                            <h1 className="lg:text-5xl text-2xl  lg:w-[650px] lg:text-start text-center text-white font1 ">Empowering Connections Through Digital Out-of-Home Advertising</h1>



                        </div>

                        <div className='my-4'>

                            <p className='text-white text-left font-light lg:text-sm text-xs lg:text-start text-center lg:w-[300px]'>At Worldads, we're revolutionizing location-based advertising by harnessing the power of smart rooftop digital screens. Our innovative platform delivers programmatic advertisements that are not only precise but also captivating, tailored to the vehicle's exact location and time.</p>
                        </div>
                    </div>

                    {/* <div class="relative lg:w-[550px]  rounded-[100px] mt-10">

                        <input type="text" id="default-search" className="block w-full lg:p-5 p-3  -10 lg:text-sm text-xs text-gray-900 bg-[#FFFFFF1A] border border-white focus:ring-white focus:border-white rounded-[100px] placeholder:text-[#FFFFFF80] " placeholder="Enter your email address" required />
                        <button type="submit" className=" absolute end-1 top-1 font-bold bg-white hover:bg-white-800 focus:ring-4 font-bold focus:outline-none focus:ring-none font-medium rounded-[100px] lg:text-sm text-xs lg:px-8 px-5 lg:py-4 py-2">Join waitlist</button>
                    </div> */}


                    {/* <div className='relative'>
                        
                    <div className="flex items-center gap-3 lg:mt-40 mt-5 lg:justify-start justify-center ">
                            <img src="./assets/images/discord.png" />
                            <div>
                                <p className="text-white text-sm">Stay updated.</p>
                                <p className="text-white font-bold text-sm">Join our discord community</p>
                            </div>
                        </div>
                        <img src="./assets/images/Vector(Black).png" className="text-white absolute  lg:-top-52 right-0 top-14" />

                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Main
