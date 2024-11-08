import {useEffect, useState, useRef} from 'react'
import 'animate.css';

import Footer from "../components/Footer";

import image1 from '/main_scroll/1.jpg'
import image2 from '/main_scroll/2.jpg'
import image3 from '/main_scroll/3.jpg'
import image4 from '/main_scroll/4.jpg'



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

            </div>
            <Footer />
        </div>
    )
}

export default Home