import Navbar from "../components/Navbar.jsx";
import img from "/reservebg.jpg";

import axios from "axios";
import {useEffect, useState} from "react";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Reservations = () => {

    const [ currentPage, setCurrentPage ] = useState(1)
    const [ reservations, setReservations ] = useState([])
    const [ totalPages, setTotalPages ] = useState(1)

    const displayReservations = () => {
        try {
            axios.get(`https://restaurant-page-backend.onrender.com/api/reservations?page=${currentPage}`)
                .then((response) => {
                    console.log(response.data)
                    setTotalPages(response.data.totalPages)
                    setReservations(response.data.reservations)
                })
        }
        catch (e) {
            console.error(e)
        }
    }

    const searchReservations = (date) => {
        console.log(date)
        try {
            axios.get(`https://restaurant-page-backend.onrender.com/api/reservations?date=${date}`)
                .then((response) => {
                    console.log(response.data)
                    setTotalPages(response.data.totalPages)
                    setReservations(response.data.reservations)
                })
        }
        catch (e) {
            console.error(e)
        }
    }
    
    useEffect(() => {
        displayReservations()
    }, [currentPage]);

    const pageChange = (direction) => {
        if (direction === 'forward' && currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        } else if (direction === 'backward' && currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    }
    return(
        <>
            <Navbar />
            <header className="w-screen h-[40vh] sm:h-[30vh] flex justify-center items-center">
                <img
                    className="h-[40vh] sm:h-[30vh] w-screen object-cover object-center opacity-70 absolute left-0 select-none"
                    src={img} alt="Title image for Gallery Section"
                />
                <h1 className="text-center text-5xl z-10 font-semibold text-black select-none">RESERVATIONS</h1>
            </header>
            <main className="flex flex-col items-center my-5 h-[60vh] sm:h-[70vh] text-center text-xl mb-60 sm:mb-0">
                <h1 className="mt-5 text-center text-xl">This is an admin page, there is no authentication for demonstration</h1>

                <nav className="flex flex-col items-center my-4">

                    <ul className="flex flex-row justify-between mx-6">
                        <li>
                            <button aria-label="Previous Page" onClick={() => pageChange('backward')} className="select-none">
                                <ArrowBackIosIcon sx={{width: '1.5rem', height: '1.5rem'}}/>
                            </button>
                        </li>
                        <h1 className="text-center text-xl mx-4">Current Page: {currentPage}/{totalPages}</h1>
                        <li>
                            <button aria-label="Next Page" onClick={() => pageChange('forward')} className="select-none">
                                <ArrowForwardIosIcon sx={{width: '1.5rem', height: '1.5rem'}}/>
                            </button>
                        </li>
                    </ul>

                    <section className="flex flex-row my-4">
                        <p>Search by date:</p>
                        <input type="date"
                               onChange={(e) => searchReservations(e.target.value)} />
                    </section>

                </nav>


                {reservations.map((reservation, index) => (
                    <div key={index}
                         className="w-[80vw] bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-0">
                        <h2 className="text-lg font-bold">{reservation.name}</h2>
                        <p>Email: {reservation.email}</p>
                        <p>Phone: {reservation.phone}</p>
                        <p>Date: {reservation.date}</p>
                        <p>Guests: {reservation.guests}</p>
                    </div>
                ))}

            </main>
        </>
    )
}

export default Reservations