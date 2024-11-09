import {useEffect, useState, useRef} from 'react'
import 'animate.css';

import Footer from "../components/Footer";

import image1 from '/main_scroll/1.jpg'
import image2 from '/main_scroll/2.jpg'
import image3 from '/main_scroll/3.jpg'
import image4 from '/main_scroll/4.jpg'
import menuDisplay from '/food/menu_display_food.jpg'



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
        <div>
            <div id="home" className="h-screen flex items-center justify-center">
                <img id="mainCollage"
                     src={image}
                    className={`absolute h-screen w-screen object-cover select-none animate__animated ${animateClass}`}
                />
                <h1 id="collageTitle" className={`${titleColor} text-5xl z-10 font-bold select-none  animate__animated animate__fadeIn`}>Our Restaurant</h1>
            </div>
            <div className="w-screen h-screen">
                <div className="flex flex-col sm:flex-row justify-center items-center mt-4">
                    <div className="w-[90vw] h-[40vh] sm:w-[40rem] sm:h-[25rem] bg-amber-700 p-5">
                        <h1 className="text-3xl mt-8 text-black font-semibold sm:pl-28">Authentic traditional cuisine</h1>
                        <p className="text-xl text-black my-4 sm:pl-28 sm:pr-16">We offer authentic, traditional dishes from around the world, out of fresh ingredients sourced from local farmers.</p>

                        <button className="w-48 h-12 border border-black text-black text-xl font-medium hover:bg-black hover:text-white sm:ml-28 transition">VIEW OUR MENUS</button>
                    </div>
                    <div className="w-[90vw] h-[40vh] sm:w-[40rem] sm:h-[25rem] bg-blue-700">
                        <img className="h-[40vh] sm:w-[40rem] sm:h-[25rem] w-screen object-cover object-position-[50% 75%] transition select-none" src={menuDisplay} />
                    </div>

                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Home