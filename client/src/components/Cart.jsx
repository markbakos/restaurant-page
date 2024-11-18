import { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {DeleteOutline} from "@mui/icons-material";
import {Link} from "react-router-dom";
import axios from "axios";


const Cart = () => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || []
        setCart(storedCart)

        const totalCost = storedCart.reduce((acc, item) => {
            const itemPrice = parseFloat(item.price) || 0
            const itemQuantity = parseInt(item.quantity, 10) || 0
            return acc + itemPrice * itemQuantity
        }, 0)
        setTotal(totalCost)
    }, [])

    useEffect(() => {
        const totalCost = cart.reduce((acc, item) => {
            const itemPrice = parseFloat(item.price) || 0
            const itemQuantity = parseInt(item.quantity, 10) || 0
            return acc + itemPrice * itemQuantity
        }, 0)
        setTotal(totalCost)
    }, [cart])

    const updateCart = (updatedCart) => {
        setCart(updatedCart)
        localStorage.setItem("cart", JSON.stringify(updatedCart))
    }

    const incrementQuantity = (itemName) => {
        const updatedCart = cart.map((item) =>
            item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item
        )
        updateCart(updatedCart)
    }

    const decrementQuantity = (itemName) => {
        const updatedCart = cart
            .map((item) =>
                item.name === itemName ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0)
        updateCart(updatedCart)
    }

    const removeItem = (itemName) => {
        const updatedCart = cart.filter((item) => item.name !== itemName)
        updateCart(updatedCart)
    }


    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [notes, setNotes] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const cartItems = cart.map((item) => ({
            itemName: item.name,
            price: item.price,
            quantity: item.quantity
        }))

        try {
            const response = await axios.post('https://restaurant-page-backend.onrender.com/api/orders', {
                customerName: fullName,
                customerEmail: email,
                customerPhone: phone,
                customerAddress: address,
                items: cartItems,
                totalAmount: total,
                notes: notes,
            })
            setFullName('')
            setEmail('')
            setPhone('')
            setAddress('')
            setNotes('')
            alert('Order successfully placed!')
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div>
            <header className="w-screen h-16">
                <Navbar />
                <Link to="/menu">
                    <button
                        className={`absolute text-amber-700 right-12 top-4 sm:right-16 sm:top-8`}
                        aria-label="Return to Menu">
                    <div className="fixed">
                        <MenuBookIcon sx={{fontSize: 38}}/>
                    </div>

                </button>
                </Link>

            </header>

            <main className="p-5 flex lg:flex-row lg:justify-between flex-col">
                <section className="lg:w-1/2 flex justify-center items-center">
                    <section
                        className="ml-5 p-3 lg:w-[48rem] md:w-[90vw] sm:w-[90vw] sm:h-[40rem] bg-stone-100 shadow-2xl rounded-md">
                        <header className="w-full h-16 flex items-center">
                            <h1 className="text-3xl font-bold my-6">Your Cart</h1>
                            <h1 className="text-3xl font-bold my-6 ml-auto">Total: ${total.toFixed(2)}</h1>
                        </header>
                        <div className="h-[0.05rem] w-full bg-stone-500"></div>
                        <section
                            className="lg:w-[47rem] md:w-[90vw] sm:w-[90vw] sm:h-[33rem] h-[30rem] overflow-y-scroll">
                            {cart.length === 0 ? (
                                <p>Your cart is empty.</p>
                            ) : (
                                <ul className="cart-items">
                                    {cart.map((item) => (
                                        <li
                                            key={item.name}
                                            className="flex justify-between items-center border-b py-4"
                                        >
                                            <div className="flex flex-row justify-center items-center">
                                                <h1 className="font-semibold text-xl">{item.name}</h1>
                                            </div>
                                            <div className="flex flex-row justify-center items-center">
                                                <p className="mx-4">{(item.price * item.quantity).toFixed(2)}</p>
                                                <button
                                                    onClick={() => incrementQuantity(item.name)}
                                                    className="text-stone-500 text-3xl font-bold"
                                                >
                                                    +
                                                </button>
                                                <p className="mx-2">{item.quantity}</p>
                                                <button
                                                    onClick={() => decrementQuantity(item.name)}
                                                    className="text-stone-500 text-3xl font-bold mr-4"
                                                >
                                                    -
                                                </button>
                                                <button
                                                    onClick={() => removeItem(item.name)}
                                                    className="px-2 py-1 bg-gray-500 text-white rounded hover:text-red-500 transition"
                                                >
                                                    <DeleteOutline/>
                                                </button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    </section>
                </section>

                <section className="lg:w-1/2 flex justify-center items-center">
                    <section
                        className="mr-5 p-3 lg:w-[48rem] md:w-[90vw] w-[90vw] sm:h-[40rem] bg-stone-100 shadow-2xl rounded-md">
                        <form
                            className="grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-y-10 sm:gap-y-5"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <h2 className="text-xl">
                                    Full Name*
                                </h2>
                                <input
                                    type="text"
                                    placeholder="Enter your full name..."
                                    className="bg-white border-2 border-black p-2 my-2 w-64"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </div>

                            <div>
                                <h2 className="text-xl">
                                    Email*
                                </h2>
                                <input
                                    type="text"
                                    placeholder="Enter your email..."
                                    className="bg-white border-2 border-black p-2 my-2 w-64"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <h2 className="text-xl">
                                    Phone*
                                </h2>
                                <input
                                    type="text"
                                    placeholder="Enter your phone number..."
                                    className="bg-white border-2 border-black p-2 my-2 w-64"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div>
                                <h2 className="text-xl">
                                    Address*
                                </h2>
                                <input
                                    type="text"
                                    placeholder="Enter your phone number..."
                                    className="bg-white border-2 border-black p-2 my-2 w-64"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>

                            <div>
                                <h2 className="text-xl">
                                    Special Requests
                                </h2>
                                <textarea
                                    maxLength="200"
                                    placeholder="Enter your note..."
                                    className="bg-white border-2 border-black p-2 my-2 resize-none lg:w-[30rem] w-[20rem] h-[8rem]"
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                />
                            </div>
                            <div>
                            </div>

                            <div>
                                <button type="submit" aria-label="Order" className="border-black border-2 p-2 w-32 hover:bg-black hover:text-white transition">
                                    Order
                                </button>
                            </div>
                        </form>
                    </section>
                </section>

            </main>

        </div>
    )
}

export default Cart
