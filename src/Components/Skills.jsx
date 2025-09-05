import React from 'react';
import HTML from "../assets/skillsImg/html.png";
import CSS from "../assets/skillsImg/css.jpg";
import JavaScript from "../assets/skillsImg/javascript.png";
import ReactJS from "../assets/skillsImg/reactjs.png";
import MongoDB from "../assets/skillsImg/mongodb.jpg";
import Express from "../assets/skillsImg/express.png";
import Node from "../assets/skillsImg/node.png";
import Oracle from "../assets/skillsImg/oracle.png";

function Skills() {
    let cardInfo = [
        {
            id: 1,
            logo: HTML,
            name: "HTML"
        },
        {
            id: 2,
            logo: CSS,
            name: "CSS"
        },
        {
            id: 3,
            logo: JavaScript,
            name: "JavaScript"
        },
        {
            id: 4,
            logo: ReactJS,
            name: "ReactJS"
        },
        {
            id: 5,
            logo: MongoDB,
            name: "MongoDB"
        },
        {
            id: 6,
            logo: Express,
            name: "Express"
        },
        {
            id: 7,
            logo: Node,
            name: "Node"
        },
        {
            id: 8,
            logo: Oracle,
            name: "Oracle"
        }
    ]
    return (
        <>
            <div name="Skills" className='max-w-screen-2xl container mx-auto px-4 md:px-15 my-10'>
                <h1 className='font-bold text-3xl mb-5'>Skills</h1>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-6'>
                    {
                        cardInfo.map(({ id, logo, name }) => (
                            <div key={id} className='flex flex-col justify-center bg-gray-50 items-center shadow-md rounded-full w-[180px] hover:scale-110 duration-300 cursor-pointer'>
                                <img src={logo} className='md:w-[140px] w-[140px] rounded-full' alt="" />
                                <div>
                                    <h1 className='md:font-bold'>{name}</h1>
                                </div>
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
