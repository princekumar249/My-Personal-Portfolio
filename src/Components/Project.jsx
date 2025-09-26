import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Weather from '../assets/projectImg/Weather.png';
import SimonGame from '../assets/projectImg/simonGame.png';
import ConnectGame from '../assets/projectImg/connectGame.png';
import ToDOList from '../assets/projectImg/ToDoList.png';
import Calculator from '../assets/projectImg/calculator.png';
import Spotify from '../assets/projectImg/spotify.png';
import Netflix from '../assets/projectImg/netflix.png';

import Cal from '../assets/vedio/CalculatorVedio.mp4';
import connectGameV from '../assets/vedio/connectGameVedio.mp4';
import netflixVedio from '../assets/vedio/netflixVedio.mp4';
import toDoListVedio from '../assets/vedio/toDoListVedio.mp4';

function Project() {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const cardLogo = [
        {
            id: 1,
            logo: Weather,
            name: "Weather Forecast App",
            info: "A responsive weather app built with React that shows real-time temperature, humidity, and wind data using the OpenWeatherMap API.",
            link: "https://current-weather123.netlify.app/",
        },
        {
            id: 2,
            logo: SimonGame,
            name: "Simon Game",
            info: "A classic Simon Game built using HTML, CSS, and JavaScript that tests memory by repeating increasingly complex color sequences.",
            link: "https://princekumar249.github.io/Simon-Game/",
        },
        {
            id: 3,
            logo: ConnectGame,
            name: "Connect-4-Game",
            info: "A two-player Connect four game built with HTML, CSS, and JavaScript. where both player drop colored discs to connect four.",
            link: "https://connect-color-game.netlify.app/",
            vedio: connectGameV
        },
        {
            id: 4,
            logo: ToDOList,
            name: "To-Do-List",
            info: "A simple and user-friendly To-Do List app using HTML, CSS, and JavaScript that lets users add, edit, delete, and manage daily tasks easily.",
            link: "https://princekumar249.github.io/To-Do-List/",
            vedio: toDoListVedio
        },
        {
            id: 5,
            logo: Calculator,
            name: "Calculator",
            info: "A basic calculator built with HTML, CSS, and JavaScript that performs addition, subtraction, multiplication, and division operations easily.",
            link: "https://princekumar249.github.io/Calculator/",
            vedio: Cal
        },
        {
            id: 6,
            logo: Spotify,
            name: "Spotify Clone",
            info: "A Spotify clone built using HTML and CSS that replicates the layout and design and user interface of the popular music streaming app.",
            link: "https://princekumar249.github.io/Spotify_Clone/",
        },
        {
            id: 7,
            logo: Netflix,
            name: "Netflix Clone",
            info: "A Netflix clone built using HTML and CSS that recreates the homepage layout, design, and visual style of the popular streaming platform’s website.",
            link: "https://github.com/princekumar249/Netflix-Clone.git",
            vedio: netflixVedio
        }
    ];

    return (
        <>
            <div name="Projects" className='max-w-screen-2xl container mx-auto px-4 md:px-10 my-5 md:my-10 dark:bg-gray-950 dark:text-white'>
                <div>
                    <h1 className='text-3xl font-bold mb-5'>My Projects</h1>
                    <div className='w-full md:w-3/4 m-auto'>
                        <Slider {...settings}>
                            {
                                cardLogo.map(({ id, logo, name, info, link, vedio }) => (
                                    <div
                                        key={id}
                                        className='rounded-lg shadow-lg p-3 cursor-pointer hover:scale-105 duration-300 bg-gray-100 dark:bg-white mx-2'
                                    >
                                        <img src={logo} className="w-full h-40 object-contain mb-3" alt={name} />
                                        <div>
                                            <h2 className='font-bold text-lg md:text-xl dark:text-black px-2'>{name}</h2>
                                            <p className='px-2 mt-2 text-gray-700 text-sm text-justify'>{info}</p>
                                        </div>
                                        <div className='px-2 py-3 space-x-2 flex flex-wrap'>
                                            <button
                                                onClick={() => window.open(link, "_blank")}
                                                className='bg-sky-500 text-white hover:bg-white hover:text-sky-600 hover:scale-105 cursor-pointer duration-200 border-2 border-transparent hover:border-sky-700 font-semibold rounded-md px-3 py-1'
                                            >
                                                Website
                                            </button>
                                            <button
                                                onClick={() => window.open(vedio, "_blank")}
                                                className='bg-red-600 text-white hover:bg-white hover:text-red-600 hover:scale-105 cursor-pointer duration-200 border-2 border-transparent hover:border-red-700 font-semibold rounded-md px-3 py-1'
                                            >
                                                Demo Vedio
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
            <hr className='opacity-5 mt-8' />
        </>
    );
}

export default Project;
