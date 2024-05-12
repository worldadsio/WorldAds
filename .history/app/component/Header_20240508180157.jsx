"use client"

import React, { useState, useEffect } from 'react';
import NavContent from './NavContent';
import { RxCross2 } from "react-icons/rx";
import Link from "next/link"
const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
    const [open, setOpen] = useState(false)
    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
        console.log('Drawer open state:', isDrawerOpen);
    };

    const dropDownOpen = () => {
        setOpen(true)
    }
    const dropDownClose = () => {
        setOpen(false)
    }    
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 10) {
                setIsHeaderFixed(true);
            } else {
                setIsHeaderFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed w-full lg:p-10 py-10 z-40 ${isHeaderFixed ? 'bg-red-600' : 'bg-transparent'}`}>
            <div className={`relative w-[85%] mx-auto flex justify-between items-center bg-transparent`}>
                <img src="./assets/images/logo.png" alt="Logo" className='lg:w-52 lg:h-12 w-36 h-8' />

                <button
                    className=" bg-[#FFFFFF1A] border-2 border-white lg:px-6 lg:py-3 px-3 py-1 hover:border rounded-[100px]"
                    type="button"
                    onClick={handleDrawerToggle}
                >
                    <div className=' absolute top-0 right-0 border-2 bg-red-600 border-white rounded-full p-2 '>
                        <ul className='px-5 flex items-center space-x-5 text-lg  text-white justify-between'>
                            <li className='font-bold'><Link href="#">About</Link></li>
                            <li className='font-bold'><Link href="#">Node Operators</Link></li>
                            <li className='font-bold'><Link href="#">Ride & Earn</Link></li>
                            <li className='font-bold'><Link href="#">Advertise With WorldAds</Link></li>
                            <li className='font-bold'><RxCross2 className='text-2xl font-bold' /></li>
                        </ul>
                    </div>
                    <img src="./assets/images/bars.svg" alt="Menu" className='w-6' />
                </button>
            </div>
        </div>
    );
};

export default Header;
