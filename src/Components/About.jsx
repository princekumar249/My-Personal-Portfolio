import React from 'react'
import icon2 from "../assets/photo/icon2.jpg"
function About() {
    return (
        <>
            <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-15 my-5 dark:bg-gray-950 dark:text-white'>
                <h1 className='md:text-3xl text-2xl font-bold mb-5 text-center'>About me</h1>
                <div className='flex justify-center items-center mb-8'>
                    <div className='md:w-20 w-15 h-1 border-t-4 border-gray-600 rounded-full'></div>
                    <p className='text-red-600 text-center px-4'>who i am</p>
                    <div className='md:w-20 w-15 h-1 border-t-4 border-gray-600 rounded-full'></div>
                </div>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2'>
                        <img src={icon2} className='md:h-80 md:w-80 rounded-4xl border-2 border-red-500 md:ml-17' alt="" />
                    </div>
                    <div className='md:w-1/2 mt-5 md:mt-10'>
                        <p className='mb-8 text-justify'>I am <b>Prince Kumar</b>, a <b>Full Stack Developer</b> experienced in designing and developing scalable web applications using <b>React.js, Node.js, Express.js, MongoDB, and AWS</b>. With hands-on experience in building production-grade applications, I focus on creating secure, efficient, and user-centric solutions through modern development practices, robust backend architectures, and cloud deployment. I am passionate about solving real-world problems and continuously enhancing my skills to deliver impactful software products.</p>
                        <a
                            href="https://drive.google.com/file/d/1AQ_qMXSgKdi3WSN9YZgTOnN_hM_I0pch/view?usp=sharing"
                            target='_blank'
                            className='inline-block font-semibold px-8 py-3 mt-[-20px] text-white border-2 border-transparent bg-red-600 rounded-md hover:bg-white hover:text-red-600 hover:border-red-600 hover:scale-105 duration-400 transition-al cursor-pointer '
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
            <hr className='opacity-5 mt-5 md:mt-10' />
        </>
    )
}

export default About
