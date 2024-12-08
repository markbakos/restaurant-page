import { useEffect, useState } from "react"
import axios from "axios"
import Layout from "../components/Layout.jsx"
import { CheckCircle, XCircle, Clock, CheckCircle2 } from 'lucide-react'
import img from "/orderbg.jpg"

const Orders = () => {
    const [status, setStatus] = useState('Pending')
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const displayOrders = async () => {
        try {
            setLoading(true)
            const response = await axios.get(`https://restaurant-page-backend.onrender.com/api/orders?status=${status}`)
            setOrders(response.data)
        } catch (e) {
            console.error(e)
            setError('Failed to fetch orders. Please try again.')
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        displayOrders()
    }, [status])

    const updateOrderStatus = async (id, newStatus) => {
        try {
            await axios.put(`https://restaurant-page-backend.onrender.com/api/orders/${id}`, {
                status: newStatus
            })
            displayOrders();
        } catch (e) {
            console.error(`Error updating order status: ${e}`);
            setError('Failed to update order status. Please try again.');
        }
    }

    const statusColors = {
        Pending: 'bg-yellow-100 text-yellow-800',
        Confirmed: 'bg-blue-100 text-blue-800',
        Completed: 'bg-green-100 text-green-800',
        Cancelled: 'bg-red-100 text-red-800'
    }

    const statusIcons = {
        Pending: <Clock className="w-5 h-5" />,
        Confirmed: <CheckCircle className="w-5 h-5" />,
        Completed: <CheckCircle2 className="w-5 h-5" />,
        Cancelled: <XCircle className="w-5 h-5" />
    }

    return (
        <Layout title="ORDERS" backgroundImage={img}>
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Filter by Status</h2>
                    <div className="flex flex-wrap gap-2">
                        {['Pending', 'Confirmed', 'Completed', 'Cancelled'].map((statusOption) => (
                            <button
                                key={statusOption}
                                onClick={() => setStatus(statusOption)}
                                className={`px-4 py-2 rounded-full ${
                                    status === statusOption
                                        ? 'bg-amber-600 text-white'
                                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                } transition-colors duration-200`}
                            >
                                {statusOption}
                            </button>
                        ))}
                    </div>
                </div>

                {loading && <p className="text-center">Loading orders...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {orders.map((order) => (
                        <div key={order._id} className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold">{order.customerName}</h3>
                                <span className={`px-2 py-1 rounded-full text-xs font-semibold flex items-center ${statusColors[order.status]}`}>
                                    {statusIcons[order.status]}
                                    <span className="ml-1">{order.status}</span>
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{order.customerEmail}</p>
                            <p className="text-sm text-gray-600 mb-2">{order.customerPhone}</p>
                            <p className="text-sm text-gray-600 mb-4">{order.customerAddress}</p>
                            <div className="border-t border-gray-200 pt-4 mb-4">
                                <h4 className="font-semibold mb-2">Order Items:</h4>
                                <ul className="space-y-2">
                                    {order.items.map((item, index) => (
                                        <li key={index} className="flex justify-between text-sm">
                                            <span>{item.itemName} x {item.quantity}</span>
                                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="font-semibold">Total: ${order.totalAmount.toFixed(2)}</p>
                                <p className="text-sm text-gray-600">{new Date(order.orderDate).toLocaleString()}</p>
                            </div>
                            {order.status === 'Pending' && (
                                <div className="mt-4 flex justify-end space-x-2">
                                    <button
                                        onClick={() => updateOrderStatus(order._id, 'Confirmed')}
                                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200"
                                    >
                                        Confirm
                                    </button>
                                    <button
                                        onClick={() => updateOrderStatus(order._id, 'Cancelled')}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-200"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            )}
                            {order.status === 'Confirmed' && (
                                <div className="mt-4 flex justify-end">
                                    <button
                                        onClick={() => updateOrderStatus(order._id, 'Completed')}
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
                                    >
                                        Complete
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Orders

