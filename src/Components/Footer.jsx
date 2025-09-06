import React from 'react'

import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdAddIcCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

function Footer() {
    return (
        <>
            <footer className='bg-gray-100 h-18 dark:bg-gray-950 dark:text-white'>
                <div className='max-w-screen-2xl container mx-auto px-2 md:px-15'>
                    <div className='text-center'>
                        <p className='text-sm py-2'>Web Developer | <span className='text-red-400'>get in touch</span></p>
                        <p className='text-sm'>&copy;2025 Prince Kumar | All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
