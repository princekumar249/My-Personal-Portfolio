import React, { useState } from 'react';
import HTML from "../assets/skillsImg/html.png";
import CSS from "../assets/skillsImg/css.jpg";
import JavaScript from "../assets/skillsImg/javascript.png";
import ReactJS from "../assets/skillsImg/reactjs.png";
import MongoDB from "../assets/skillsImg/mongodb.jpg";
import Express from "../assets/skillsImg/express.png";
import Node from "../assets/skillsImg/node.png";
import TailwindCSS from "../assets/skillsImg/TailwindCSS.png";
import Bootstrap from "../assets/skillsImg/Bootstrap.png";

import SkillRating from './SkillRating';

function Skills() {
    let cardInfo = [
        {
            id: 1,
            logo: HTML,
            name: "HTML",
            level: 5
        },
        {
            id: 2,
            logo: CSS,
            name: "CSS",
            level: 4
        },
        {
            id: 3,
            logo: Bootstrap,
            name: "Bootstrap",
            level: 5
        },
        {
            id: 4,
            logo: JavaScript,
            name: "JavaScript",
            level: 4
        },
        {
            id: 5,
            logo: ReactJS,
            name: "ReactJS",
            level: 4
        },
        {
            id: 6,
            logo: TailwindCSS,
            name: "TailwindCSS",
            level: 4
        },
        {
            id: 7,
            logo: MongoDB,
            name: "MongoDB",
            level: 4
        },
        {
            id: 8,
            logo: Express,
            name: "Express",
            level: 4
        },
        {
            id: 9,
            logo: Node,
            name: "NodeJS",
            level: 4
        }
        
    ]
    const [isHovered, setIsHovered] = useState(null);
    return (
        <>
            <div name="Skills" className='max-w-screen-2xl container mx-auto px-4 md:px-15 my-10 dark:bg-gray-950 dark:text-white'>
                <h1 className='font-bold text-3xl mb-14 text-center'>My Skills</h1>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-6'>
                    {
                        cardInfo.map(({ id, logo, name, level }) => (
                            <div
                                key={id}
                                onMouseEnter={() => setIsHovered(id)}
                                onMouseLeave={() => setIsHovered(null)}
                                className='flex flex-col justify-center bg-gray-100 items-center shadow-md rounded-full h-[160px] w-[160px] hover:scale-110 duration-300 cursor-pointer'>
                                <img src={logo} className='md:w-[100px] md:h-[100px] w-[100px] h-[100px] rounded-full' alt="" />
                                <div>
                                    <h1 className='md:font-bold dark:text-black'>{name}</h1>
                                </div>
                                <SkillRating
                                    level={level}
                                    showStar={isHovered === id}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            <br />
            <hr className='opacity-5 md:mt-0 mt-[-20px]' />
        </>
    )
}

export default Skills
