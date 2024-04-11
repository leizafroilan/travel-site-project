import React, { useState, useContext } from 'react';
import app1 from '../files/app1.jpg';
import image_holder from '../files/image_holder.jpg';
import Modal from './Modal';
import { MyContext } from './context/store';

function Application() {

  const [isOpen, setIsOpen] = useState(false);

  //Payload
  const { payload, setPayload } = useContext(MyContext);

  const handleClose = () => {
    setIsOpen(false)
    setPayload({})
  }

  return (
    <>       
          <div className="z-10 text-pink-600 bg-white relative mx-auto max-w-7xl pb-10 pt-10">
            <div className="text-center">
              <h2 id="apps" 
                  className="text-3xl font-bold tracking-tight font-serif sm:text-4xl">Explore Our Travel Apps</h2>
              <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Let our AI-powered travel apps guide you to unforgettable experiences.</p>
            </div>
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={app1} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a className="hover:underline hover:cursor-pointer"
                        onClick={()=> setIsOpen(true)}
                      >
                        Plan Your Trip
                      </a>
                    </p>
                    <a href="#" className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">Create Itinerary using AI</p>
                      <p className="mt-3 text-base text-gray-500">Your ultimate companion for seamless and stress-free travel experiences. 
                            An innovative AI-powered assistant designed to revolutionize the way you navigate the world, 
                            whether you're embarking on a weekend getaway or a globetrotting adventure.</p>
                    </a>
                  </div>
                  
                </div>
              </div>
              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={image_holder} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href="#" className="hover:underline">Coming Soon</a>
                    </p>
                    <a href="#" className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">Lorem ipsum dolor sit amet adipisicing elit</p>
                      <p className="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                        facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi.,
                        tempore temporibus quo laudantium.</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={image_holder} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href="#" className="hover:underline">Coming Soon</a>
                    </p>
                    <a href="#" className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">Aenean vehicula turpis vel nibh commodo</p>
                      <p className="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                        harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis
                        perferendis hic.</p>
                    </a>
                  </div>             
                </div>
              </div>
            </div>
          </div>
          <Modal open={isOpen} onClose={handleClose} city={''} />
    </>
  );
}

export default Application;
