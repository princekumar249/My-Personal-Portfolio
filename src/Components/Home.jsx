import React from 'react';
import homePic from "../assets/photo/homePic.jpg";

import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdAddIcCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
    return (
        <>
            <div name="Home" className='max-w-screen-2xl container mx-0 mt-16 px-4 md:px-15 my-20 dark:bg-gray-950 dark:text-white' >
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='md:w-1/2 mt-6 md:mt-26 space-y-2 order-2 md:order-1'>
                        <h3 className='font-semibold text-xl md:text-2xl'>Hello, My Name is</h3>
                        <h1 className='font-bold text-3xl md:text-5xl'>Prince Kumar</h1>
                        <div className='flex gap-2'>
                            <h3 className='font-semibold text-xl md:text-2xl'>And I'm a</h3>
                            <ReactTyped
                                className='font-semibold text-xl md:text-3xl text-red-600'
                                strings={["Developer", "Programmer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        {/* Social Media */}
                        <div className='flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 items-center'>
                            <div className='space-y-2'>
                                <h1 className='font-bold ml-16'>Contact on</h1>
                                <ul className='flex space-x-4'>
                                    <a href="https://www.linkedin.com/in/prince-kumar-p2005" target='_blank' rel="noopener noreferrer" className='hover:scale-110 duration-200 cursor-pointer text-blue-500'><li><FaLinkedin size={30} /></li></a>
                                    <a href="https://github.com/princekumar249" target='_blank' rel="noopener noreferrer" className='hover:scale-110 duration-200 cursor-pointer'><li><FaGithub size={30} /></li></a>
                                    <a href="https://wa.me/918439017572" target='_blank' rel="noopener noreferrer" className='hover:scale-110 duration-200 cursor-pointer text-green-500'><li><FaSquareWhatsapp size={30} /></li></a>
                                    <a href="mailto: princekumar746586@gmail.com" target='_blank' rel="noopener noreferrer" className='hover:scale-110 duration-200 cursor-pointer text-red-600'><li><IoMdMail size={30} /></li></a>
                                    <a href="tel:918439017572" target='_blank' rel="noopener noreferrer" className='hover:scale-110 duration-200 cursor-pointer text-emerald-400'><li><MdAddIcCall size={30} /></li></a>
                                </ul>
                            </div>
                            <div className='space-y-2'>
                                <p className='font-bold'>Currently working on</p>
                                <div className='flex space-x-4'>
                                    <p className='hover:scale-110 duration-200'><DiMongodb className='text-green-600' size={30} /></p>
                                    <p className='hover:scale-110 duration-200'><SiExpress size={30} /></p>
                                    <p className='hover:scale-110 duration-200'><FaReact className='text-blue-600' size={30} /></p>
                                    <p className='hover:scale-110 duration-200'><FaNodeJs className='text-green-500' size={30} /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 md:mt-10 mt-8 md:ml-48 order-1 md:order-2'>
                        <img src={homePic} className='rounded-4xl md:mx-20 mx-6 w-[280px] h-[320px] md:h-[26rem] md:w-[22rem] hover:scale-110 duration-200' alt="" />
                    </div>
                </div>
            </div>
            <hr className='opacity-5 md:mt-[-30px] mt-[-40px]' />
        </>

    )
}

export default Home
