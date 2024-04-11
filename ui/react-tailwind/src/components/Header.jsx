import React, { useState } from 'react';
import { Bars3BottomRightIcon, MapPinIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link, animateScroll as scroll } from 'react-scroll';


function Header() {

  const [open, setOpen] = useState(false);
  const [appOpen, setAppOpen] = useState(false);

  const toggleDropdown = () => {
    setAppOpen(!appOpen);
  }

    return (
            <div className='h-[500px] z-0'>
                <div className='opacity-80 border-b-2 items-center justify-between bg-transparent py-4 md:flex md:px-10 px-7 z-10'>
                    {/* logo section */}
                    <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                        {/* <MapPinIcon className='w-7 h-7 text-blue-600' /> */}
                        <span></span>
                    </div>
                    {/* Menu icon */}
                    <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                        {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                    </div>
                    {/* link items */}
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                        <li className='md:ml-8 md:my-0 my-7'>
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='text-white duration-500 hover:text-pink-600 hover:underline cursor-pointer'>
                                    HOME
                            </Link>
                        </li>
                        <li className='md:ml-8 md:my-0 my-7 cursor-pointer'>
                            <Link 
                                activeClass="active"
                                to="apps"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='text-white duration-500 hover:text-pink-600 hover:underline cursor-pointer'>
                                    OUR APPS
                            </Link>

                        </li>
                        <li className='md:ml-8 md:my-0 my-7'>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='text-white hover:text-pink-600 duration-500 hover:underline cursor-pointer'>
                                    ABOUT
                            </Link>
                        </li>
                        {/* <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Get Started</button> */}
                    </ul>
                </div>
                </div>                            
    );
};

export default Header;