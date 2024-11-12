import img from "/gallerybg.jpg";
import {useEffect, useState} from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";


const Gallery = () => {

    const [data, setData] = useState([])

    const getPhotos = async () => {
        try{
            const data = await fetch(`https://api.pexels.com/v1/search?query=restaurant&per_page=10`, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: import.meta.env.PEXELS_KEY,
                }
            })
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    setData(data.photos)
                    console.log(data)
                })


        }
        catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getPhotos()
    }, [])

    return (
        <>
            <Navbar />
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
            <Footer />
        </>

    )
}

export default Gallery