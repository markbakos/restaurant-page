import {useEffect, useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import 'animate.css';

import Footer from "../components/Footer";

import image1 from '/main_scroll/1.jpg'
import image2 from '/main_scroll/2.jpg'
import image3 from '/main_scroll/3.jpg'
import image4 from '/main_scroll/4.jpg'
import menuDisplay from '/food/menu_display_food.jpg'
import FooterDoc from "../components/FooterDoc.jsx";
import Navbar from "../components/Navbar.jsx";



const Home = () => {

    const [image, setImage] = useState(image1)
    const currentImageNumberRef = useRef(1)
    const collageInterval = 12000
    const [animateClass, setAnimateClass] = useState('animate__fadeIn')
    const [titleColor, setTitleColor] = useState('text-white')

    useEffect(() => {
        const interval = setInterval(() => {
            const currentImageNumber = currentImageNumberRef.current;
            if (currentImageNumber === 1) {
                setAnimateClass('animate__fadeOut');
                setTimeout(() => {
                    setImage(image2);
                    setAnimateClass('animate__fadeIn');
                    setTitleColor('text-white');
                    currentImageNumberRef.current = 2;
                }, 500);
            } else if (currentImageNumber === 2) {
                setAnimateClass('animate__fadeOut');
                setTimeout(() => {
                    setImage(image3);
                    setAnimateClass('animate__fadeIn');
                    setTitleColor('text-white');
                    currentImageNumberRef.current = 3;
                }, 500);
            } else if (currentImageNumber === 3) {
                setAnimateClass('animate__fadeOut');
                setTimeout(() => {
                    setImage(image4);
                    setAnimateClass('animate__fadeIn');
                    setTitleColor('text-black');
                    currentImageNumberRef.current = 4;
                }, 500);
            } else if (currentImageNumber === 4) {
                setAnimateClass('animate__fadeOut');
                setTimeout(() => {
                    setImage(image1);
                    setAnimateClass('animate__fadeIn');
                    setTitleColor('text-black');
                    currentImageNumberRef.current = 1;
                }, 500);
            }
        }, collageInterval);

        return () => clearInterval(interval)
    }, [])

    return (

        <>
            <Navbar/>
            <header id="home" className="h-screen flex items-center justify-center">
                <img id="mainCollage"
                     src={image}
                     alt="Collage Image of our restaurant"
                    className={`absolute h-screen w-screen object-cover select-none animate__animated ${animateClass}`}
                />
                <h1 id="collageTitle" className={`${titleColor} text-5xl z-10 font-bold select-none  animate__animated animate__fadeIn`}>Our Restaurant</h1>
            </header>
            <main className="w-screen h-screen">
                <section className="flex flex-col sm:flex-row justify-center items-center mt-4">
                    <article className="w-[90vw] h-[40vh] sm:w-[35rem] sm:h-[20rem] p-5 shadow-2xl">
                        <h1 className="text-3xl sm:mt-4 text-black font-semibold sm:pl-20">Authentic traditional
                            cuisine</h1>
                        <p className="text-xl text-black sm:my-4 my-2 sm:pl-20 sm:pr-16">We offer authentic, traditional dishes
                            from around the world, out of fresh ingredients sourced from local farmers.</p>

                        <Link to={'/menu'}><button
                            className="w-48 sm:h-12 h-10 border border-black text-black text-xl font-medium hover:bg-black hover:text-white sm:ml-20 transition"

                        >VIEW
                            OUR MENUS
                        </button></Link>
                    </article>
                    <figure
                        className="w-[90vw] h-[40vh] sm:w-[35rem] sm:h-[20rem] sm:ml-[-1rem] sm:mt-6 shadow-2xl">
                        <img
                            className="h-[40vh] sm:w-[35rem] sm:h-[20rem] w-screen object-cover object-position-[50% 75%] transition select-none"
                            src={menuDisplay}
                            alt="Image to pair with Menu Section"
                        />
                    </figure>
                </section>

                <section className="flex flex-col sm:flex-row justify-center items-center mt-4">
                    <figure className="w-[90vw] h-[40vh] sm:w-[35rem] sm:h-[20rem] shadow-2xl">

                        <img
                            className="h-[40vh] sm:w-[35rem] sm:h-[20rem] w-screen object-cover object-position-[50% 75%] z-10 transition select-none"
                            src={menuDisplay}
                            alt="Image to pair with Table Reservation Section"
                        />

                    </figure>
                    <article
                        className="w-[90vw] h-[40vh] sm:w-[35rem] sm:h-[20rem] sm:ml-[-4rem] sm:mt-6 p-5 shadow-2xl">

                        <h1 className="text-3xl mt-4 text-black font-semibold sm:pl-28">Table reservation</h1>
                        <p className="text-xl text-black my-4 sm:pl-28 sm:pr-16">Reserve a table at our restaurant for your preferred time and date, free of charge!</p>

                        <Link to={'/reserve'}><button
                            className="w-48 sm:h-12 h-10 border border-black text-black text-xl font-medium hover:bg-black hover:text-white sm:ml-28 transition">RESERVE NOW
                        </button></Link>

                    </article>
                </section>

            </main>

            <FooterDoc/>
            <Footer/>

        </>
    )
}

export default Home