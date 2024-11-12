import Navbar from "../components/Navbar.jsx";

import menuBg from '/hoursbg.jpg'
import Footer from "../components/Footer.jsx";
import FooterDoc from "../components/FooterDoc.jsx";

const LocationHours = () => {

    const currentDate = new Date();
    const currentDay = currentDate.getDay()

    return (
        <div>
            <Navbar />
            <header className="w-screen h-[40vh] sm:h-[30vh] flex justify-center items-center">
                <img className="h-[40vh] sm:h-[30vh] w-screen object-cover object-center opacity-70 absolute select-none left-0"
                     src={menuBg} alt="Title image for Location Section"/>
                <h1 className="text-center text-5xl z-10 font-semibold text-black select-none">HOURS + LOCATION</h1>
            </header>
            <main className="sm:h-[70vh] flex sm:flex-row flex-col justify-center items-center">
                <article className="flex flex-col items-center my-2 w-1/2">
                    <h1 className="text-3xl font-semibold w-screen text-center">Our restaurant</h1>
                    <h2 className="text-xl">4 Rue Malher</h2>
                    <h2 className="text-xl">Paris 75004, France</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d41994.18700337935!2d2.2777846!3d48.865138!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671fdfd96fd53%3A0xc469698627af24c7!2sBreakfast%20in%20America%20-%20Marais!5e0!3m2!1sen!2srs!4v1731427606822!5m2!1sen!2srs"
                        className="animate__animated animate__fadeIn sm:w-[50rem] sm:h-[30rem] w-[20rem] h-[15rem] my-4"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </article>
                <article className="flex flex-col items-center my-2 w-1/2">
                    <h1 className="my-2 text-4xl font-semibold">HOURS</h1>
                    <section>
                        <time className={`${currentDay===0 ? 'font-semibold' : 'font-medium'} flex text-2xl`}><p className="font-semibold">Sun </p> <p className="mx-1">11:00AM </p> <p>10:00PM</p></time>
                        <time className={`${currentDay===1 ? 'font-semibold' : 'font-medium'} flex text-2xl`}><p className="font-semibold">Mon </p> <p className="mx-1">12:00PM </p> <p>10:00PM</p></time>
                        <time className={`${currentDay===2 ? 'font-semibold' : 'font-medium'} flex text-2xl`}><p className="font-semibold">Tue </p> <p className="mx-1">12:00PM </p> <p>10:00PM</p></time>
                        <time className={`${currentDay===3 ? 'font-semibold' : 'font-medium'} flex text-2xl`}><p className="font-semibold">Wed</p> <p className="mx-1">12:00PM </p> <p>10:00PM</p></time>
                        <time className={`${currentDay===4 ? 'font-semibold' : 'font-medium'} flex text-2xl`}><p className="font-semibold">Thu</p> <p className="mx-1">11:00AM </p> <p>10:00PM</p></time>
                        <time className={`${currentDay===5 ? 'font-semibold' : 'font-medium'} flex text-2xl`}><p className="font-semibold">Fri</p> <p className="mx-1">12:00PM </p> <p>11:00PM</p></time>
                        <time className={`${currentDay===6 ? 'font-semibold' : 'font-medium'} flex text-2xl`}><p className="font-semibold">Sat</p> <p className="mx-1">11:00AM </p> <p>11:00PM</p></time>
                    </section>
                </article>
            </main>
            <FooterDoc />
            <Footer />
        </div>
    )
}

export default LocationHours