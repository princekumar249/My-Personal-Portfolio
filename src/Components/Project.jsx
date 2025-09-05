import React from 'react'
import Weather from '../assets/projectImg/Weather.png';
import SimonGame from '../assets/projectImg/simonGame.png';
import ConnectGame from '../assets/projectImg/connectGame.png';
import ToDOList from '../assets/projectImg/ToDoList.png';
import Calculator from '../assets/projectImg/calculator.png';
import Spotify from '../assets/projectImg/spotify.png';
import Netflix from '../assets/projectImg/netflix.png';

function Project() {
    let cardLogo = [
        {
            id: 1,
            logo: Weather,
            name: "Weather Forecast App",
            info: "A responsive weather app built with React that shows real-time temperature, humidity, and wind data using the OpenWeatherMap API.",
            link: "https://princekumar249.github.io/Weather-Forecast-App/",
            code: "https://github.com/princekumar249/Weather-Forecast-App.git"
        },
        {
            id: 2,
            logo: SimonGame,
            name: "Simon Game",
            info: "A classic Simon Game built using HTML, CSS, and JavaScript that tests memory by repeating increasingly complex color sequences.",
            link: "https://princekumar249.github.io/Simon-Game/",
            code: "https://github.com/princekumar249/Simon-Game.git"
        },
        {
            id: 3,
            logo: ConnectGame,
            name: "Connect-4-Game",
            info: "A two-player Connect four game built with HTML, CSS, and JavaScript. where both player drop colored discs to connect four.",
            link: "https://princekumar249.github.io/connect-4-game/",
            code: "https://github.com/princekumar249/connect-4-game.git"
        },
        {
            id: 4,
            logo: ToDOList,
            name: "To-Do-List",
            info: "A simple and user-friendly To-Do List app using HTML, CSS, and JavaScript that lets users add, edit, delete, and manage daily tasks easily.",
            link: "https://princekumar249.github.io/To-Do-List/",
            code: "https://github.com/princekumar249/To-Do-List.git"
        },
        {
            id: 5,
            logo: Calculator,
            name: "Calculator",
            info: "A basic calculator built with HTML, CSS, and JavaScript that performs addition, subtraction, multiplication, and division operations easily.",
            link: "https://princekumar249.github.io/Calculator/",
            code: "https://github.com/princekumar249/Calculator.git"
        },
        {
            id: 6,
            logo: Spotify,
            name: "Spotify Clone",
            info: "A Spotify clone built using HTML and CSS that replicates the layout and design and user interface of the popular music streaming app.",
            link: "https://princekumar249.github.io/Spotify_Clone/",
            code: "https://github.com/princekumar249/Spotify_Clone.git"
        },
        {
            id: 7,
            logo: Netflix,
            name: "Netflix Clone",
            info: "A Netflix clone built using HTML and CSS that recreates the homepage layout, design, and visual style of the popular streaming platform’s website.",
            link: "https://github.com/princekumar249/Netflix-Clone.git",
            code: "https://github.com/princekumar249/Netflix-Clone.git"
        }
    ]

    return (
        <>
            <div name="Projects" className='max-w-screen-2xl container mx-auto px-4 md:px-15 my-5 md:my-10'>
                <div>
                    <h1 className='text-3xl font-bold mb-5'>My Projects </h1>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 my-4'>
                        {
                            cardLogo.map(({ id, logo, name, info, link, code }) => (
                                <div className='md:w-[100%] md:h-[100%] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300 ' key={id}>
                                    <img src={logo} className="md:w-[120px] md:h-[120px] w-[80px] h-[80px] mb-1" alt="" />
                                    <div>
                                        <div className='font-bold text-xl px-2'>{name}</div>
                                        <p className='px-2 text-gray-700 text-justify md:text-sm'>{info}</p>
                                    </div>
                                    <div className='px-2 py-4 space-x-4'>
                                        <button
                                            onClick={() => window.open(link, "_blank")}
                                            className='inline-block bg-sky-500 text-white hover:bg-white hover:text-sky-600 hover:scale-105 duration-200 border-2 border-transparent hover:border-sky-700 font-bold rounded-md md:px-3 md:py-2 px-2 py-1 cursor-pointer'>
                                        Website link</button>
                                        <button
                                            onClick={() => window.open(code, "_blank")}
                                            className='inline-block bg-red-600 text-white hover:bg-white hover:text-red-600 hover:scale-105 duration-200 border-2 border-transparent hover:border-red-700 font-bold rounded-md md:px-3 md:py-2 px-2 py-1 cursor-pointer'>
                                            Source code
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <hr className='opacity-5 ' />
        </>
    )
}

export default Project
