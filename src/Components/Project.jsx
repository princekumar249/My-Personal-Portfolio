import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Project Images
import Weather from '../assets/projectImg/Weather.png';
import SimonGame from '../assets/projectImg/simonGame.png';
import ConnectGame from '../assets/projectImg/connectGame.png';
import ToDOList from '../assets/projectImg/ToDoList.png';
import Calculator from '../assets/projectImg/calculator.png';
import StayRnb from '../assets/projectImg/stayrnb.png';
import StockEra from '../assets/projectImg/StockEra.png';
import Meetlance from '../assets/projectImg/Meetlance.png';

// Videos
import Cal from '../assets/vedio/CalculatorVedio.mp4';
import connectGameV from '../assets/vedio/connectGameVedio.mp4';
import netflixVedio from '../assets/vedio/netflixVedio.mp4';
import toDoListVedio from '../assets/vedio/toDoListVedio.mp4';

function Project() {

    // Desktop Slider Arrows
    function NextArrow(props) {
        const { onClick } = props;
        return (
            <div
                onClick={onClick}
                className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-black text-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer z-10"
            >
                ❯
            </div>
        );
    }

    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <div
                onClick={onClick}
                className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-black text-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer z-10"
            >
                ❮
            </div>
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 800,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    const cardData = [
        {
            id: 1,
            logo: Meetlance,
            name: "Meetlance",
            info: "A MERN-based platform offering live meetings, secure language-specific interviews, and real-time coding practice with instant success and error feedback.",
            link: "https://meetlance.onrender.com/",
            vedio: connectGameV
        },
        {
            id: 2,
            logo: StayRnb,
            name: "StayRnb",
            info: "StayRnB (Stay Rest and Breakfast), A full-stack booking website with authentication, add listings, bookings, reviews, and interactive maps built.",
            link: "https://stayrnb.onrender.com/listings",
            vedio: connectGameV
        },
        {
            id: 3,
            logo: StockEra,
            name: "StockEra",
            info: "Built a MERN-stack trading platform with authentication, dashboards, real-time stock data, holdings, secure APIs, and optimized performance.",
            link: "https://stockera-frontend.onrender.com/",
            vedio: Cal
        },
        {
            id: 4,
            logo: Weather,
            name: "Weather Forecast App",
            info: "A responsive weather app built with React that shows real-time temperature, humidity, and wind data using the Open WeatherMap API.",
            link: "https://current-weather123.netlify.app/",
            vedio: connectGameV
        },
        {
            id: 5,
            logo: SimonGame,
            name: "Simon Game",
            info: "A classic Simon Game built using HTML, CSS, and JavaScript that tests memory by repeating increasingly complex color sequences.",
            link: "https://pricekumar2410.github.io/Simon-Game/",
            vedio: connectGameV
        },
        {
            id: 6,
            logo: ConnectGame,
            name: "Connect-4-Game",
            info: "A two-player Connect four game built with HTML, CSS, and JavaScript. where both player drop colored discs to connect four.",
            link: "https://pricekumar2410.github.io/connect-4-game/",
            vedio: connectGameV
        },
        {
            id: 7,
            logo: ToDOList,
            name: "To-Do-List",
            info: "A simple and user-friendly To-Do List app using HTML, CSS, and JavaScript that lets users add, edit, delete, and manage daily tasks easily.",
            link: "https://pricekumar2410.github.io/To-Do-List/",
            vedio: toDoListVedio
        },
        {
            id: 8,
            logo: Calculator,
            name: "Calculator",
            info: "A basic calculator built with HTML, CSS, and JavaScript that performs addition, subtraction, multiplication, and division operations easily.",
            link: "https://pricekumar2410.github.io/Calculator/",
            vedio: Cal
        }
    ];

    return (
        <>
            <div name="Projects" className="max-w-screen-2xl mx-auto px-4 md:px-10 my-12 dark:text-white">

                <h1 className="text-3xl font-bold mb-14 text-center">My Projects</h1>

                {/* -------------------- DESKTOP VIEW (SLIDER) -------------------- */}
                <div className="hidden md:block w-full md:w-4/5 mx-auto">
                    <Slider {...settings}>
                        {cardData.map(({ id, logo, name, info, link, vedio }) => (
                            <div key={id} className="px-3">
                                <div className="bg-gray-100 dark:bg-white p-5 rounded-xl shadow-md hover:scale-105 duration-300">
                                    <img src={logo} alt={name} className="w-full h-40 object-contain mb-3" />
                                    <h2 className="font-bold text-lg text-black">{name}</h2>
                                    <p className="text-gray-600 text-sm mt-2 text-justify">{info}</p>

                                    <div className="flex gap-2 mt-4 justify-end">
                                        <button
                                            onClick={() => window.open(link, "_blank")}
                                            className="bg-sky-500 text-white px-3 py-1 rounded-md hover:bg-white hover:text-sky-600 border hover:border-sky-500 duration-200 cursor-pointer"
                                        >
                                            Website
                                        </button>

                                        {/* {vedio && (
                                            <button
                                                onClick={() => window.open(vedio, "_blank")}
                                                className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-white hover:text-red-600 border hover:border-red-600 duration-200 cursor-pointer"
                                            >
                                                Demo Video
                                            </button>
                                        )} */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* -------------------- MOBILE VIEW (NO SLIDER) -------------------- */}
                <div className="md:hidden flex flex-col gap-5">
                    {cardData.map(({ id, logo, name, info, link, vedio }) => (
                        <div key={id} className="bg-gray-100 dark:bg-white p-5 rounded-xl shadow-md">
                            <img src={logo} alt={name} className="w-full h-36 object-contain mb-3" />
                            <h2 className="font-bold text-lg text-black">{name}</h2>
                            <p className="text-gray-600 text-sm mt-2">{info}</p>

                            <div className="flex mt-4 justify-center">
                                <button
                                    onClick={() => window.open(link, "_blank")}
                                    className="bg-sky-500 text-white px-5 py-1 text-2xl rounded-md hover:bg-white hover:text-sky-600 border hover:border-sky-500 duration-200"
                                >
                                    Website
                                </button>

                                {/* {vedio && (
                                    <button
                                        onClick={() => window.open(vedio, "_blank")}
                                        className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-white hover:text-red-600 border hover:border-red-600 duration-200"
                                    >
                                        Demo Video
                                    </button>
                                )} */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <hr className="opacity-5 mt-8" />
        </>
    );
}

export default Project;
