

import React, { useState, useEffect } from 'react';
import NavContent from './NavContent';

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
        console.log('Drawer open state:', isDrawerOpen); 
    };

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
            <div className={`w-[85%] mx-auto flex justify-between items-center bg-transparent`}>
                <img src="./assets/images/logo.png" alt="Logo" className='lg:w-52 lg:h-12 w-36 h-8'/>

                <button 
                    className="bg-[#FFFFFF1A] border-2 border-white lg:px-6 lg:py-3 px-3 py-1 hover:border rounded-[100px]" 
                    type="button" 
                    onClick={handleDrawerToggle} 
                >
                    <img src="./assets/images/bars.svg" alt="Menu"  className='w-6'/>
                </button>
            </div>
        </div>
    );
};

export default Header;
