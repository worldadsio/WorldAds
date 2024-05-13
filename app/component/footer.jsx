import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MdOutlineArticle } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdOutlinePolicy } from "react-icons/md";
import { MdOutlineContactPage } from "react-icons/md";

export default function Footer() {
    const router = useRouter();

    function goToPage(path) {
        router.push(`pages/${path}`);
    }

    return (
        <div className="bg-[#181818] ] w-full mt-20 lg:py-12 pt-12 lg:p-4">
            <div className="lg:w-[80%] w-[90%] lg:flex items-center justify-between mx-auto py-12" >
                <div>
                    <h1 className="lg:text-5xl text-3xl  lg:w-[500px] w-[250px] lg:mx-0 mx-auto font-medium lg:text-start text-center text-white">Innovating Digital Advertising</h1>
                </div>
                <div className="lg:flex text-white lg:mt-0 mt-10 items-center gap-10">
                    <div>
                        <ul className="text-lg lg:text-start text-center space-y-3">
                            <li className="hover:text-gray-300 justify-center lg:justify-start cursor-pointer flex items-center gap-2" onClick={() => goToPage("/blogs")}><MdOutlineArticle />Blog</li>
                            <li className="hover:text-gray-300 justify-center lg:justify-start cursor-pointer flex items-center gap-2" onClick={() => goToPage("/contact")}><FaPhone className="text-sm" />
                                Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-lg lg:mt-0 mt-3  lg:text-start text-center space-y-3">
                            <li className="hover:text-gray-300 justify-center lg:justify-start cursor-pointer flex items-center gap-2" onClick={() => goToPage("/privacy")}><MdOutlinePolicy />Privacy Policy</li>
                            <li className="hover:text-gray-300 justify-center lg:justify-start cursor-pointer flex items-center gap-2" onClick={() => goToPage("/services")}><MdOutlineContactPage />
                                Terms Of Service</li>
                        </ul>


                    </div>


                </div>
            </div>
            <div className="text-white relative mx-auto mt-5 lg:w-[80%]">
                <div className="flex items-center gap-1 w-40 lg:w-[80%] lg:mx-0 mx-auto">
                    <Image src="/Group.png" alt="logo" width={37.49} height={37.49} className="lo " />
                    <h1 className="text-2xl font-meidum">WorldsAds</h1>
                </div>
                <div className="flex items-center lg:justify-start w-[90%] lg:mx-0 mx-auto lg:w-[80%] justify-center mt-5 gap-10">
                    <p className="lg:text-sm text-[12px] lg:text-start text-center  font-light ">©2024 WorldAds Tech DAO LLC. All Right Reserved </p>
                    <hr className="border lg:block hidden border-[#707070] w-96" />
                </div>
                <Image src="/FooterImage.png" alt="vector" width={231.11} height={231.11} className="absolute lg:-top-16 lg:block hidden z-20 lg:-right-36 " />
                <Image src="/FooterImage (1).png" alt="vector" width={551.11} height={451.11} className=" lg:hidden block mt-10 " />

            </div>
        </div>
    )
}