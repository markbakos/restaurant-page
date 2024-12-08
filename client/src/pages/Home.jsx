import {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {motion, AnimatePresence} from 'framer-motion'

import Footer from "../components/Footer";

import image1 from '/main_scroll/1.jpg'
import image2 from '/main_scroll/2.jpg'
import image3 from '/main_scroll/3.jpg'
import image4 from '/main_scroll/4.jpg'
import menuDisplay from '/food/menu_display_food.jpg'
import reserveDisplay from '/reservehomebg.jpg'
import FooterDoc from "../components/FooterDoc.jsx";
import MenuSidebar from "../components/MenuSidebar.jsx";

const images = [image1, image2, image3, image4]

const Home = () => {

    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (

        <>
            <MenuSidebar/>
            <header className="relative h-screen">
                <AnimatePresence initial={false}>
                    <motion.img
                        key={currentImage}
                        src={images[currentImage]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="Restaurant ambiance"
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="text-white text-5xl sm:text-6xl font-bold text-center">
                        Our Restaurant
                    </h1>
                </div>
            </header>
            <main className="container mx-auto px-4 py-16">
                <section className="mb-16">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                            <h2 className="text-3xl font-bold mb-4">Authentic traditional cuisine</h2>
                            <p className="text-xl mb-6">
                                We offer authentic, traditional dishes from around the world, made with fresh ingredients sourced from local farmers.
                            </p>
                            <Link to="/menu">
                                <button className="bg-black text-white px-6 py-3 text-lg font-medium hover:bg-gray-800 transition duration-300">
                                    VIEW OUR MENUS
                                </button>
                            </Link>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src={menuDisplay}
                                alt="Menu display"
                                className="w-full h-64 object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex flex-col md:flex-row-reverse items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
                            <h2 className="text-3xl font-bold mb-4">Table reservation</h2>
                            <p className="text-xl mb-6">
                                Reserve a table at our restaurant for your preferred time and date, free of charge!
                            </p>
                            <Link to="/reserve">
                                <button className="bg-black text-white px-6 py-3 text-lg font-medium hover:bg-gray-800 transition duration-300">
                                    RESERVE NOW
                                </button>
                            </Link>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src={reserveDisplay}
                                alt="Table reservation"
                                className="w-full h-64 object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </section>
            </main>

            <FooterDoc/>
            <Footer/>

        </>
    )
}

export default Home