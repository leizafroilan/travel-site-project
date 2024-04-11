import React, { useState } from 'react';
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, animateScroll as scroll } from 'react-scroll';


function Footer() {
  return (
    <div className="z-10 flex items-center justify-between mt-auto flex-col border-t-2 pt-4 pb-4 bg-gray-700
                  ">
      <div className="flex justify-center pt-2 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-5 lg:grid-cols-5">
          {/* Company Info */}
          <div className="">
            <h6 className="mb-4 text-pink-600 lg:text-sm left-4mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" 
                   viewBox="0 0 24 24" 
                   fill="currentColor" 
                   className="lg:mr-3 lg:ml-4 h-4 w-4">
                <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
              </svg>
              Company Name
            </h6>
            <p className=" lg:text-sm ml-4 mr-4 text-white dark:text-neutral-200">
              Phasellus id rutrum sapien. Sed scelerisque ultricies turpis nec vestibulum. Maecenas egestas leo ante, maximus convallis libero cursus eget. Suspendisse iaculis accumsan elementum. Nulla ac tempus purus.
            </p>
          </div>
          {/* End of Company Info */}
          {/* Useful Links */}
          <div className="lg:text-left">
            <h6 className="text-pink-600 lg:text-sm mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="lg:text-sm text-white dark:text-neutral-200 
                      hover:underline hover:text-blue-400 duration-500 cursor-pointer">
                  Home
              </Link>
                
            </p>
            <p className="mb-4">
            <Link
                activeClass="active"
                to="apps"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="lg:text-sm text-white dark:text-neutral-200 
                      hover:underline hover:text-blue-400 duration-500 cursor-pointer">
                  Our Apps
              </Link>
            </p>
            <p className="mb-4">
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="lg:text-sm text-white dark:text-neutral-200 
                      hover:underline hover:text-blue-400 duration-500 cursor-pointer">
                  About
              </Link>
            </p>
          </div>
          {/* End of Useful Links */}
          {/* Social Media Links */}
          <div className="lg:ml-auto">
            <h6 className="text-pink-600 lg:text-sm mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Social Media
            </h6> 
            <p className='mb-4'>
                <a href="https://twitter.com" className="lg:text-sm text-white dark:text-neutral-200 hover:underline hover:text-blue-400 duration-500"> 
                    <FontAwesomeIcon icon={faTwitter} className="mr-4 text-2xl text-twitter" />
                    https://twitter.com
                </a>
            </p> 
            <p className='mb-4'>
                <a href="https://facebook.com" className="lg:text-sm text-white dark:text-neutral-200 hover:underline hover:text-blue-400 duration-500"> 
                    <FontAwesomeIcon icon={faFacebook} className="mr-4 text-2xl text-facebook" />
                    https://facebook.com
                </a>
            </p> 
            <p className='mb-4'>
                <a href="https://instagram.com" className="lg:text-sm text-white dark:text-neutral-200 hover:underline hover:text-blue-400 duration-500"> 
                    <FontAwesomeIcon icon={faInstagram} className="mr-4 text-2xl text-instagram" />
                    https://instagram.com
                </a>
            </p>        
          </div> 
          {/* End of Social Media Links */}
          {/* Contact */}
          <div className="lg:text-right">
            <h6 className="text-pink-600 lg:text-sm mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="mr-3 h-5 w-5">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <a className="lg:text-sm text-white dark:text-neutral-200 hover:underline hover:text-blue-400 duration-500" 
                 href="mailto:noemail@example.com">noemail@example.com</a> 
            </p>
          </div>
          {/* End of Contact */}
          {/* Technologies */}
          <div className="lg:ml-auto lg:mr-4">
              <h6 className="text-pink-600 lg:text-sm mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Technologies
              </h6>
              <p className=" mb-4">
                <a href="https://react.dev" className="lg:text-sm text-white dark:text-neutral-200 hover:underline hover:text-blue-400 duration-500">HTML</a>
              </p>
              <p className="lg:text-sm mb-4">
                <a href="https://html.com/" className="lg:text-sm text-white dark:text-neutral-200 hover:underline hover:text-blue-400 duration-500">React</a>
              </p>
              <p className="lg:text-sm mb-4">
                <a href="https://www.langchain.com/" className="lg:text-sm text-white dark:text-neutral-200 hover:underline hover:text-blue-400 duration-500">Langchain</a>
              </p>
              <p className="lg:text-sm mb-4">
                <a href="https://openai.com/" className="lg:text-sm text-white dark:text-neutral-200 hover:underline hover:text-blue-400 duration-500">OpenAI</a>
              </p>
            </div >
          </div>
      </div>
      <div className="text-pink-600 lg:text-sm mt-6 text-center pt-2">
        <span>&copy; {new Date().getFullYear()} Company Name Here. All rights reserved.</span>
      </div>
    </div>
  );
}

export default Footer;