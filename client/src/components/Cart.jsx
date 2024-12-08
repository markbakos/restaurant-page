import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import axios from "axios"
import Layout from "../components/Layout.jsx"
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft } from 'lucide-react'

const Cart = () => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [notes, setNotes] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || []
        setCart(storedCart)
        calculateTotal(storedCart)
    }, [])

    const calculateTotal = (cartItems) => {
        const totalCost = cartItems.reduce((acc, item) => {
            return acc + parseFloat(item.price) * item.quantity
        }, 0)
        setTotal(totalCost)
    }

    const updateCart = (updatedCart) => {
        setCart(updatedCart)
        localStorage.setItem("cart", JSON.stringify(updatedCart))
        calculateTotal(updatedCart)
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
                item.name === itemName ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
            )
            .filter((item) => item.quantity > 0)
        updateCart(updatedCart)
    }

    const removeItem = (itemName) => {
        const updatedCart = cart.filter((item) => item.name !== itemName)
        updateCart(updatedCart)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isLoading) return

        setIsLoading(true)
        const cartItems = cart.map((item) => ({
            itemName: item.name,
            price: item.price,
            quantity: item.quantity
        }))

        try {
            await axios.post('https://restaurant-page-backend.onrender.com/api/orders', {
                customerName: fullName,
                customerEmail: email,
                customerPhone: phone,
                customerAddress: address,
                items: cartItems,
                totalAmount: total,
                notes: notes,
            })
            setCart([])
            localStorage.removeItem("cart")
            setFullName('')
            setEmail('')
            setPhone('')
            setAddress('')
            setNotes('')
            alert('Order successfully placed!')
        } catch (error) {
            console.error(error)
            alert('Failed to place order. Please try again.')
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <Layout title="Your Cart" backgroundImage="/hoursbg.jpg">
            <div className="container mx-auto px-4 py-8">
                <Link to="/menu" className="inline-flex items-center text-amber-700 hover:text-amber-900 mb-6">
                    <ArrowLeft className="mr-2" />
                    Back to Menu
                </Link>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
                        {cart.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            <ul className="space-y-4">
                                {cart.map((item) => (
                                    <li key={item.name} className="flex items-center justify-between border-b pb-4">
                                        <div>
                                            <h3 className="font-semibold">{item.name}</h3>
                                            <p className="text-gray-600">${item.price} each</p>
                                        </div>
                                        <div className="flex items-center">
                                            <button onClick={() => decrementQuantity(item.name)} className="p-1">
                                                <Minus size={16} />
                                            </button>
                                            <span className="mx-2">{item.quantity}</span>
                                            <button onClick={() => incrementQuantity(item.name)} className="p-1">
                                                <Plus size={16} />
                                            </button>
                                            <button onClick={() => removeItem(item.name)} className="ml-4 text-red-500">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <div className="mt-6 text-xl font-bold">Total: ${total.toFixed(2)}</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-4">Order Details</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Special Requests</label>
                                <textarea
                                    id="notes"
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                    rows="3"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading || cart.length === 0}
                                className="w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:bg-gray-400"
                            >
                                {isLoading ? 'Placing Order...' : 'Place Order'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Cart

