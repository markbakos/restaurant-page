import { useState, useEffect } from 'react'
import axios from 'axios'
import Layout from "../components/Layout.jsx"
import { CalendarIcon, ClockIcon, UserIcon, PhoneIcon, MailIcon, PencilIcon } from 'lucide-react'
import EditReservationModal from '../components/EditReservationModal.jsx'

const Reservations = () => {
    const [reservations, setReservations] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [editingReservation, setEditingReservation] = useState(null)

    const fetchReservations = async (page = 1) => {
        try {
            setLoading(true)
            const response = await axios.get(`https://restaurant-page-backend.onrender.com/api/reservations?page=${page}`)
            setReservations(response.data.reservations || [])
            setCurrentPage(response.data.currentPage)
            setTotalPages(response.data.totalPages)
        } catch (err) {
            console.error('Error fetching reservations:', err)
            setError('Failed to load reservations. Please try again later.')
            setReservations([])
        } finally {
            setLoading(false)
        }
    }

    const handlePageChange = (newPage) => {
        fetchReservations(newPage)
    }

    const handleEditReservation = (reservation) => {
        setEditingReservation(reservation)
    }

    const handleUpdateReservation = async (updatedReservation) => {
        try {
            const { _id, __v, ...reservationData } = updatedReservation
            await axios.put(`https://restaurant-page-backend.onrender.com/api/reservations/${_id}`, reservationData)
            setEditingReservation(null)
            fetchReservations(currentPage)
        } catch (err) {
            console.error('Error updating reservation:', err)
            setError('Failed to update reservation. Please try again.')
        }
    }

    const handleDeleteReservation = async (id) => {
        if (!id) {
            console.error("Invalid reservation ID");
            setError("Failed to delete reservation. Invalid ID.");
            return;
        }

        try {
            await axios.delete(`https://restaurant-page-backend.onrender.com/api/reservations/${id}`)
            setEditingReservation(null)
            fetchReservations(currentPage)
        } catch (error) {
            console.error("Error deleting reservation:", error)
            setError("Failed to delete reservation. Please try again.")
        }
    }

    useEffect(() => {
        fetchReservations()
    }, [])

    return (
        <Layout title="RESERVATIONS" backgroundImage="/reservationsbg.jpg">
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Reservations</h2>
                {loading && <p className="text-center">Loading reservations...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}
                {!loading && !error && (
                    <>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {reservations.length > 0 ? (
                                reservations.map((reservation) => (
                                    <div key={reservation._id} className="bg-white rounded-lg shadow-md p-6 relative">
                                        <button
                                            onClick={() => handleEditReservation(reservation)}
                                            className="absolute top-2 right-2 p-2 text-amber-700 hover:text-amber-900"
                                        >
                                            <PencilIcon className="w-5 h-5" />
                                        </button>
                                        <div className="flex items-center mb-4">
                                            <CalendarIcon className="w-6 h-6 mr-2 text-amber-700" />
                                            <span className="text-lg font-semibold">{new Date(reservation.date).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <ClockIcon className="w-6 h-6 mr-2 text-amber-700" />
                                            <span>{new Date(reservation.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <UserIcon className="w-6 h-6 mr-2 text-amber-700" />
                                            <span>{reservation.name}</span>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <PhoneIcon className="w-6 h-6 mr-2 text-amber-700" />
                                            <span>{reservation.phone}</span>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <MailIcon className="w-6 h-6 mr-2 text-amber-700" />
                                            <span>{reservation.email}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <UserIcon className="w-6 h-6 mr-2 text-amber-700" />
                                            <span>{reservation.guests} guests</span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="col-span-full text-center text-gray-500">No reservations found.</p>
                            )}
                        </div>
                        <div className="mt-8 flex justify-center">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="px-4 py-2 mr-2 bg-amber-700 text-white rounded disabled:bg-gray-300"
                            >
                                Previous
                            </button>
                            <span className="px-4 py-2">
                Page {currentPage} of {totalPages}
              </span>
                            <button
                                onClick={() => handlePageChange(parseInt(currentPage) + 1)}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 ml-2 bg-amber-700 text-white rounded disabled:bg-gray-300"
                            >
                                Next
                            </button>
                        </div>
                    </>
                )}
            </div>
            {editingReservation && (
                <EditReservationModal
                    reservation={editingReservation}
                    onClose={() => setEditingReservation(null)}
                    onUpdate={handleUpdateReservation}
                    onDelete={() => handleDeleteReservation(editingReservation._id)}
                />
            )}
        </Layout>
    )
}

export default Reservations

