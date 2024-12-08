import img from "/gallerybg.jpg";
import {useEffect, useState} from "react";
import MenuSidebar from "../components/MenuSidebar.jsx";
import Footer from "../components/Footer.jsx";
import FooterDoc from "../components/FooterDoc.jsx";
import {useLocation} from "react-router-dom";


const Gallery = () => {

    const [data, setData] = useState([])

    const getPhotos = async () => {
        try {
            const response = await fetch('https://restaurant-page-backend.onrender.com/api/photos')
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`)
            }
            const data = await response.json()
            setData(data.photos)
        } catch (e) {
            console.error('Failed to fetch photos:', e)
        }
    }

    useEffect(() => {
        getPhotos()
    }, [])

    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <>
            <MenuSidebar />
            <header className="w-screen h-[40vh] sm:h-[30vh] flex justify-center items-center">
                <img
                    className="h-[40vh] sm:h-[30vh] w-screen object-cover object-center opacity-70 absolute left-0 select-none"
                    src={img} alt="Title image for Gallery Section"
                />
                <h1 className="text-center text-5xl z-10 font-semibold text-black select-none">GALLERY</h1>
            </header>
            <main>
            <p className="text-center my-4"><a href="https://www.pexels.com" target="_blank" className="text-blue-700">Photos provided by Pexels</a> using their
                API</p>
            <section className="flex flex-col justify-center items-center">
                <div className="w-[70vw]">
                    <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 grid-auto-rows">
                        {data.map((photo) => (
                            <img src={photo.src.original} alt={photo.alt} className="w-full h-auto object-cover"/>
                        ))}
                    </div>
                </div>
            </section>
            </main>
            <FooterDoc />
            <Footer />
        </>

    )
}

export default Gallery