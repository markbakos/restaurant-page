import axios from 'axios';

import {useEffect, useState} from 'react';
import Navbar from "../components/Navbar.jsx";
import img from "/reservebg.jpg";
import Footer from "../components/Footer.jsx";
import FooterDoc from "../components/FooterDoc.jsx";
import {Link, useLocation} from "react-router-dom";

const Reserve = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState('')
    const [guests, setGuests] = useState('')

    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('https://restaurant-page-backend.onrender.com/api/reserve', {
                name,
                email,
                phone,
                date,
                guests
            })
            setMessage('Reservation successful!')
        }
        catch (e) {
            setMessage(e.response.data.message || e.message)
        }
    }

    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

  return(
      <>
          <Navbar />
          <header className="w-screen h-[40vh] sm:h-[30vh] flex justify-center items-center">
              <img
                  className="h-[40vh] sm:h-[30vh] w-screen object-cover object-center opacity-70 absolute left-0 select-none"
                  src={img} alt="Title image for Reserve Section"
              />
              <h1 className="text-center text-5xl z-10 font-semibold text-black select-none">RESERVE</h1>
          </header>
          <main className="flex flex-col justify-center items-center">
              <section>
                  <header className="w-screen lg:px-[40vw]">
                      <h1 className="text-3xl text-center font-semibold mt-3">Make a reservation!</h1>
                      <p className="text-center text-red-500">Don't input any sensitive information such as your email,
                          phone number or real name, other people can view it</p>
                  </header>

                  <form
                      className="flex flex-col items-center justify-center my-5"
                      onSubmit={handleSubmit}
                  >
                      <input
                          type="text"
                          placeholder="Name"
                          className="bg-white border-2 border-black p-2 my-2"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                      />
                      <input
                          type="text"
                          placeholder="Email Address"
                          className="bg-white border-2 border-black p-2 my-2"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                          type="text"
                          placeholder="Phone Number"
                          className="bg-white border-2 border-black p-2 my-2"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                      />
                      <input
                          type="date"
                          placeholder="Date"
                          className="bg-white border-2 border-black p-2 my-2"
                          value={date}
                          min={new Date().toISOString().split("T")[0]}
                          onChange={(e) => setDate(e.target.value)}
                      />
                      <input
                          type="number"
                          placeholder="Guests"
                          max="10"
                          className="bg-white border-2 border-black p-2 my-2"
                          value={guests}
                          onChange={(e) => setGuests(e.target.value)}
                      />

                      <button
                          type="submit"
                          className="bg-white border-2 w-36 h-10 border-black p-2 my-2 hover:bg-black hover:text-white transition flex items-center justify-center text-xl"
                      >
                        Reserve
                      </button>

                  </form>
                  {message && <p className="text-center">{message}</p>}
              </section>
              <article className="flex flex-col items-center justify-center">
                  <header className="w-screen lg:px-[40vw]">
                      <h1 className="text-3xl text-center font-semibold mt-3">View all reservations</h1>
                  </header>

                  <Link to="/reservations">
                  <button className="bg-white border-2 w-48 h-12 border-black p-2 my-2 hover:bg-black hover:text-white transition flex items-center justify-center text-xl">All reservations</button>
                  </Link>

              </article>
          </main>
          <FooterDoc/>
          <Footer/>

      </>
  )
}

export default Reserve