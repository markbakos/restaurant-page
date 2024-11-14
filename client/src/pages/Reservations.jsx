import Navbar from "../components/Navbar.jsx";
import img from "/reservebg.jpg";

import axios from "axios";
import {useEffect, useState} from "react";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

const Reservations = () => {

    const [ currentPage, setCurrentPage ] = useState(1)
    const [ reservations, setReservations ] = useState([])
    const [ totalPages, setTotalPages ] = useState(1)

    const [date, setDate] = useState();
    const [name, setName] = useState();

    const displayReservations = () => {
        const params = new URLSearchParams({
                page: currentPage,
                ...(date && { date }),
                ...(name && { name })
            }
        )

        try {
            axios.get(`https://restaurant-page-backend.onrender.com/api/reservations?${params.toString()}`)
                .then((response) => {
                    setTotalPages(response.data.totalPages)
                    setReservations(response.data.reservations)
                    console.log(response.data)
                })
        }
        catch (e) {
            console.error(e)
        }
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
        setCurrentPage(1);
        displayReservations()
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
        setCurrentPage(1);
        displayReservations()
    };

    
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

    const deleteReservation = (id) => {
        console.log(id)
      try{
          axios.delete(`https://restaurant-page-backend.onrender.com/api/reservations/${id}`)
              .then(() => {
                  displayReservations()
          })
      }
      catch (e) {
          console.error(e)
      }
    }
    
    const [edit, setEdit] = useState(false)
    const [editId, setEditId] = useState('')

    const [reservationName, setReservationName] = useState('')
    const [reservationEmail, setReservationEmail] = useState('')
    const [reservationPhone, setReservationPhone] = useState('')
    const [reservationDate, setReservationDate] = useState('')
    const [reservationGuests, setReservationGuests] = useState('')

    const openEdit = (reservationData) => {
        setEdit(true)

        console.log(reservationData)

        setEditId(reservationData._id)
        setReservationName(reservationData.name)
        setReservationPhone(reservationData.phone)
        setReservationEmail(reservationData.email)
        setReservationDate(reservationData.date)
        setReservationGuests(reservationData.guests)
    }

    const closeEdit = () => {
        setEdit(false)
        setEditId('')
    }

    const editReservation = (e) => {
        e.preventDefault()

        try{
            axios.put(`https://restaurant-page-backend.onrender.com/api/reservations/${editId}`, {
                name: reservationName,
                email: reservationEmail,
                phone: reservationPhone,
                date: reservationDate,
                guests: reservationGuests
            })
                .then(() => {
                    displayReservations()
                    closeEdit()
                })
        }
        catch (e) {
            console.error(e)
            setEdit(false)
            setEditId('')
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
            <main className="flex flex-col items-center my-5 h-[60vh] sm:h-[70vh] text-center text-xl mb-20">
                <h1 className="mt-5 text-center text-xl">This is an administrator page, there is no authentication for demonstration</h1>

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

                    <section className="flex flex-row justify-center items-center my-4">
                        <p className="text-2xl">Search by date:</p>
                        <input type="date"
                               onChange={handleDateChange}
                               className="border border-black px-4 py-2 mx-5"
                        />
                    </section>

                    <section className="flex flex-row justify-center items-center my-4">
                        <p className="text-2xl">Search by name:</p>
                        <input type="text"
                               onChange={handleNameChange}
                               className="border border-black px-4 py-2 mx-5"
                        />
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
                        <button aria-label="Delete Reservation" title="Delete Reservation"
                        onClick={() => deleteReservation(reservation._id)}>
                            <CloseIcon sx={{fontSize: 36}}/>
                        </button>
                        <button aria-label="Edit Reservation" title="Edit Reservation"
                        onClick={() => openEdit(reservation)}>
                            <EditIcon sx={{fontSize: 36}}/>
                        </button>
                    </div>
                ))}

                <section
                    className={`${edit ? 'flex' : 'hidden'} fixed flex-row justify-center items-center lg:w-[30vw] lg:h-[50vh] md:w-[70vw] md:h-[50vh] sm:w-[90vw] sm:h-[70vh] bg-gray-500 shadow-md rounded-lg p-10 mb-4 top-32 z-40`}>
                    <button className="absolute top-3 right-3" aria-label="Close Popup"
                            onClick={closeEdit}>
                        <CloseIcon sx={{fontSize: 36}}/>
                    </button>

                    <form
                        className="flex flex-col items-center justify-center my-5"
                        onSubmit={editReservation}
                    >
                        <input
                            type="text"
                            placeholder="Name"
                            className="bg-white border-2 border-black p-2 my-2"
                            value={reservationName}
                            onChange={(e) => setReservationName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Email Address"
                            className="bg-white border-2 border-black p-2 my-2"
                            value={reservationEmail}
                            onChange={(e) => setReservationEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="bg-white border-2 border-black p-2 my-2"
                            value={reservationPhone}
                            onChange={(e) => setReservationPhone(e.target.value)}
                        />
                        <input
                            type="date"
                            placeholder="Date"
                            className="bg-white border-2 border-black p-2 my-2"
                            value={reservationDate}
                            min={new Date().toISOString().split("T")[0]}
                            onChange={(e) => setReservationDate(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Guests"
                            max="10"
                            className="bg-white border-2 border-black p-2 my-2"
                            value={reservationGuests}
                            onChange={(e) => setReservationGuests(e.target.value)}
                        />

                        <button
                            type="submit"
                            className="bg-white border-2 w-48 h-10 border-black p-2 my-2 hover:bg-black hover:text-white transition flex items-center justify-center text-xl"
                        >
                            Edit Reservation
                        </button>

                    </form>

                </section>

            </main>
        </>
    )
}

export default Reservations