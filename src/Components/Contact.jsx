import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast';

import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdAddIcCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            message: data.message
        }
        try {
            await axios.post("https://getform.io/f/broggjqa", userInfo)
            toast.success("your message was send successfully")
        } catch (error) {
            console.log(error)
            toast.error(error)
        }
    }
    return (
        <>
            <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-15 my-5 dark:bg-gray-950 dark:text-white'>

                <h1 className='font-bold text-3xl mb-2 text-center '>Contact me</h1>
                <div className='flex items-center justify-center mb-4'>
                    <div className='w-20 h-1 border-t-3 border-gray-600 rounded-full'></div>
                    <p className='text-center md:px-4 px-3 text-red-600'>get in touch</p>
                    <div className='w-20 h-1 border-t-3 border-gray-600 rounded-full'></div>
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <div className='md:w-1/2'>
                        <p className='md:mx-37 mx-8'>Please fill out the form to contact me</p>
                        <div className='flex flex-col justify-center items-center mt-5 dark:text-black'>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                // action="https://getform.io/f/broggjqa"
                                // method="POST"
                                className='bg-slate-200 w-85 md:w-96 rounded-xl p-4'>
                                <h1 className='font-semibold text-xl mb-2 '>Send Your Message</h1>
                                <div className='flex flex-col mb-4'>
                                    <label>Full Name:</label>
                                    <input
                                        {...register("name", { required: true })}
                                        type="text"
                                        name='name'
                                        placeholder='Enter full your name'
                                        className='rounded-md bg-white shadow appearance-none py-2  px-3 '
                                    />
                                    {errors.name && <span>This field is required</span>}
                                </div>
                                <div className='flex flex-col mb-4'>
                                    <label>Email Address:</label>
                                    <input
                                        {...register("email", { required: true })}
                                        type="email"
                                        name='email'
                                        placeholder='Enter your email'
                                        className='rounded-md bg-white shadow appearance-none py-2  px-3 '
                                    />
                                    {errors.email && <span>This field is required</span>}
                                </div>
                                <div className='flex flex-col mb-4'>
                                    <label>Message:</label>
                                    <textarea
                                        {...register("message", { required: true })}
                                        type="message"
                                        name='message'
                                        placeholder='Enter your message'
                                        className='rounded-lg bg-white shadow appearance-none py-1  px-2'
                                    />
                                    {errors.message && <span>This field is required</span>}
                                </div>
                                <button
                                    type='submit'
                                    className='bg-black text-white px-7 py-2 rounded-xl text-l hover:bg-slate-700 duration-300 cursor-pointer'>
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className='md:w-1/2'>
                        <ul className='flex md:space-x-8 md:mx-30 space-x-4 mt-6'>
                            <a href="https://www.linkedin.com/in/prince-kumar-p2005" target='_blank' className='hover:scale-110 duration-200 cursor-pointer text-blue-500'><li><FaLinkedin size={40} /></li></a>
                            <a href="https://github.com/pricekumar2410" target='_blank' className='hover:scale-110 duration-200 cursor-pointer'><li><FaGithub size={40} /></li></a>
                            <a href="https://wa.me/918439017572" target='_blank' className='hover:scale-110 duration-200 cursor-pointer text-green-500'><li><FaSquareWhatsapp size={40} /></li></a>
                            <a href="mailto: princekumar746586@gmail.com" target='_blank' className='hover:scale-110 duration-200 cursor-pointer text-red-600'><li><IoMdMail size={40} /></li></a>
                            <a href="tel:918439017572" target='_blank' className='hover:scale-110 duration-200 cursor-pointer text-emerald-400'><li><MdAddIcCall size={40} /></li></a>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='opacity-5 ' />
        </>
    )
}

export default Contact
