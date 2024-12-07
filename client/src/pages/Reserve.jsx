import axios from 'axios';

import {useEffect, useState} from 'react';
import img from "/reservebg.jpg";
import {Link, useLocation} from "react-router-dom";
import Layout from "../components/Layout.jsx";

const Reserve = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState('')
    const [guests, setGuests] = useState('')

    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(isLoading) return

        setIsLoading(true)
        setMessage('')

        try {
            const response = await axios.post('https://restaurant-page-backend.onrender.com/api/reserve', {
                name,
                email,
                phone,
                date,
                guests
            })
            setMessage('Reservation successful!')
            setName('')
            setEmail('')
            setPhone('')
            setDate('')
            setGuests('')
        }
        catch (e) {
            setMessage(e.response.data.message || e.message)
        }
        finally{
            setIsLoading(false)
        }
    }

    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

  return(
      <Layout title="RESERVE" backgroundImage={img}>
          <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-semibold mb-4 text-center">Make a reservation</h2>
              <p className="text-red-500 mb-4 text-center">
                  Don't input any sensitive information such as your email, phone number or real name, other people can view it
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                      type="text"
                      placeholder="Name"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                  />
                  <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                  />
                  <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                  />
                  <input
                      type="date"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setDate(e.target.value)}
                      required
                  />
                  <input
                      type="number"
                      placeholder="Number of Guests"
                      max="10"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      required
                  />
                  <button
                      type="submit"
                      className="w-full bg-black text-white p-2 rounded hover:bg-gray-800 transition duration-300 disabled:bg-gray-400"
                      disabled={isLoading}
                  >
                      {isLoading ? 'Reserving...' : 'Reserve'}
                  </button>
              </form>
              {message && (
                  <p className={`mt-4 text-center ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
                      {message}
                  </p>
              )}
              <div className="mt-8 text-center">
                  <h3 className="text-xl font-semibold mb-4">View all reservations</h3>
                  <Link to="/reservations">
                      <button className="bg-gray-200 text-black px-6 py-2 rounded hover:bg-gray-300 transition duration-300">
                          All reservations
                      </button>
                  </Link>
              </div>
          </div>
      </Layout>
  )
}

export default Reserve