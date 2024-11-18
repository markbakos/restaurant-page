import Navbar from "../components/Navbar.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import Check from '@mui/icons-material/Check';
import DoneAll from '@mui/icons-material/DoneAll';
import Close from '@mui/icons-material/Close';
import img from "/orderbg.jpg";

const Orders = () => {

    const [status, setStatus] = useState('Pending')
    const [orders, setOrders] = useState([])

    const displayOrders = () => {
        try {
            axios.get(`https://restaurant-page-backend.onrender.com/api/orders?status=${status}`)
                .then((response) => {
                    setOrders(response.data)
                    console.log(response.data)
                })
        }
        catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        displayOrders()
    }, []);

    useEffect(() => {
        displayOrders()
    }, [status]);


    const confirmOrder = async (id) => {
        try{
            await axios.put(`https://restaurant-page-backend.onrender.com/api/orders/${id}`, {
                status: 'Confirmed'
            })
            displayOrders()
        }
        catch (e) {
            console.error('Error confirming order', e)
        }
    }

    const cancelOrder = async (id) => {
        try{
            await axios.put(`https://restaurant-page-backend.onrender.com/api/orders/${id}`, {
                status: 'Cancelled'
            })
            displayOrders()
        }
        catch (e) {
            console.error('Error cancelling order', e)
        }
    }

    const completeOrder = async (id) => {
        try{
            await axios.put(`https://restaurant-page-backend.onrender.com/api/orders/${id}`, {
                status: 'Completed'
            })
            displayOrders()
        }
        catch (e) {
            console.error('Error completing order', e)
        }
    }



    return (
        <>
            <Navbar/>

            <header className="w-screen h-[40vh] sm:h-[30vh] flex justify-center items-center">
                <img
                    className="h-[40vh] sm:h-[30vh] w-screen object-cover object-center opacity-70 absolute left-0 select-none"
                    src={img} alt="Title image for Orders Section"
                />
                <h1 className="text-center text-5xl z-10 font-semibold text-black select-none">ORDERS</h1>
            </header>
            <main>
                <nav className="flex lg:flex-row flex-col justify-center items-center my-5">
                    <section className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                        <button
                            onClick={() => setStatus('Pending')}
                            className={`p-4 m-1 border-2 border-black hover:bg-black hover:text-white text-xl w-48 h-14 flex justify-center items-center transition ${status === 'Pending' ? 'bg-black text-white' : ''}`}>
                            <HourglassTopIcon/>
                            Pending
                        </button>

                        <button
                            onClick={() => setStatus('Confirmed')}
                            className={`p-4 m-1 border-2 border-black hover:bg-black hover:text-white text-xl w-48 h-14 flex justify-center items-center transition ${status === 'Confirmed' ? 'bg-black text-white' : ''}`}>
                            <Check />
                            Confirmed
                        </button>

                        <button
                            onClick={() => setStatus('Completed')}
                            className={`p-4 m-1 border-2 border-black hover:bg-black hover:text-white text-xl w-48 h-14 flex justify-center items-center transition ${status === 'Completed' ? 'bg-black text-white' : ''}`}>
                            <DoneAll />
                            Completed
                        </button>

                        <button
                            onClick={() => setStatus('Cancelled')}
                            className={`p-4 m-1 border-2 border-black hover:bg-black hover:text-white text-xl w-48 h-14 flex justify-center items-center transition ${status === 'Cancelled' ? 'bg-black text-white' : ''}`}>
                            <Close />
                            Cancelled
                        </button>
                    </section>
                </nav>

                <section>
                    {orders.map((order, index) => (
                        <div key={index} className="flex flex-col justify-center items-center m-4 p-4 border-2 border-black rounded-md">
                            <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 lg:gap-4 gap-2 lg:mb-3 mb-5">
                                <h1 className="my-2">{order.customerName}</h1>
                                <p className="my-2">{order.customerEmail}</p>
                                <p className="my-2">{order.customerPhone}</p>
                                <p className="my-2">{order.orderDate}</p>
                                <p className="my-2 font-bold">Total: ${(order.totalAmount).toFixed(2)}</p>
                            </div>


                            <div>
                                {order.items.map((item, index) => (
                                    <div key={index} className="grid grid-cols-4">
                                        <p className="my-2">{item.itemName}</p>
                                        <p className="my-2">{item.quantity}</p>
                                        <p className="my-2">${item.price}</p>
                                        <p className="my-2">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>

                            {order.status === 'Pending' && (
                                <div className="flex">
                                <button
                                    onClick={() => confirmOrder(order._id)}
                                    className="p-4 m-1 border-2 border-black hover:bg-black hover:text-white text-xl lg:w-48 w-36 h-14 flex justify-center items-center transition">
                                    <Check />
                                </button>

                                <button
                                    onClick={() => cancelOrder(order._id)}
                                    className="p-4 m-1 border-2 border-black hover:bg-black hover:text-white text-xl lg:w-48 w-36 h-14 flex justify-center items-center transition">
                                    <Close />
                                </button>
                                </div>)}

                            {order.status === 'Confirmed' && (
                                <div className="flex">
                                    <button
                                        onClick={() => completeOrder(order._id)}
                                        className="p-4 m-1 border-2 border-black hover:bg-black hover:text-white text-xl lg:w-48 w-36 h-14 flex justify-center items-center transition">
                                        <DoneAll />
                                    </button>
                                    <button
                                        onClick={() => cancelOrder(order._id)}
                                        className="p-4 m-1 border-2 border-black hover:bg-black hover:text-white text-xl lg:w-48 w-36 h-14 flex justify-center items-center transition">
                                        <Close />
                                    </button>
                                </div>
                            )}

                            {order.status === 'Cancelled' && (
                                <p className="text-gray-500 text-lg">No further actions available.</p>
                            )}


                        </div>))}
                </section>
            </main>
        </>
    )
}

export default Orders