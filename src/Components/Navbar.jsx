import React, { useState } from 'react'
import icon2 from "../assets/photo/icon2.jpg";
import { Link } from 'react-scroll';

import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

function Navbar() {
  let [menu, setMenu] = useState(false);

  let navTitle = [
    {
      id: 1,
      title: "Home"
    },
    {
      id: 2,
      title: "About"
    },
    {
      id: 3,
      title: "Projects"
    },
    {
      id: 4,
      title: "Skills"
    },
    {
      id: 5,
      title: "Contact"
    },
  ]

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-2 md:px-15 shadow-md h-16 fixed left-0 right-0 top-0 z-50 bg-gray-100 sm:relative md:relative lg:fixed lg:top-0 lg:left-0 lg:w-full'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex space-x-2 items-center'>
            <img src={icon2} alt="" className='md:h-12 md:w-12 h-8 w-8 rounded-full' />
            <h1 className='font-semibold md:text-3xl text-2xl'>
              Portfo<span className='text-red-600 md:text-3xl text-2xl'>lio</span></h1>
          </div>

          {/* Desktop Navbar */}
          <div>
            <ul className='hidden md:flex space-x-8'>
              {
                navTitle.map(({ id, title }) => (
                  <li
                    key={id}
                    className='hover:scale-110 duration-200 cursor-pointer hover:text-red-600 hover:underline transition'>
                    <Link
                      to={title}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass='active'
                    >{title}</Link>
                  </li>
                ))
              }
            </ul>
            <div onClick={() => setMenu(!menu)} className='md:hidden'>
              {menu ? <IoClose size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        {
          menu && (
            <div className='bg-white'>
              <ul className='md:hidden h-screen flex flex-col text-xl font-semibold space-y-2 items-center justify-center '>
                {
                  navTitle.map(({ id, title }) => (
                    <li
                      key={id}
                      className='active:scale-110 active:underline active:duration-100 active:text-red-600'>
                      <Link
                        onClick={() => setMenu(!menu)}
                        to={title}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass='active'
                      >{title}</Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Navbar
