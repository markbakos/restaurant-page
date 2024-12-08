import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react'

//TODO: need to fix the scroll issue

const MenuSidebar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isAboutOpen, setIsAboutOpen] = useState(false)
    const sidebarRef = useRef(null)
    const location = useLocation()

    const toggleSidebar = () => setIsOpen(!isOpen)
    const toggleAboutSubmenu = () => setIsAboutOpen(!isAboutOpen)

    const closeSidebar = () => {
        setIsOpen(false)
        setIsAboutOpen(false)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                closeSidebar()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    useEffect(() => {
        closeSidebar()
    }, [location])

    return (
        <nav className="fixed top-0 left-0 z-50">
            <button
                onClick={toggleSidebar}
                className={`${isOpen ? 'hidden' : 'block'} text-gray-800 p-4 sm:p-8 sm:pl-10 hover:text-gray-600 transition-colors`}
                aria-label="Toggle Sidebar"
            >
                <Menu size={38} />
            </button>

            <div
                ref={sidebarRef}
                className={`fixed inset-y-0 left-0 w-[70vw] sm:w-[300px] bg-gray-900 overflow-y-auto transition-transform transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } ease-in-out duration-300 z-50`}
            >
                <div className="p-6">
                    <button
                        onClick={closeSidebar}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    >
                        <X size={38} />
                    </button>
                    <nav className="mt-8 space-y-4">
                        <Link to="/" className="block px-4 py-2 text-lg text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors">
                            Home
                        </Link>
                        <Link to="/menu" className="block px-4 py-2 text-lg text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors">
                            Menu
                        </Link>
                        <div className="relative">
                            <button
                                onClick={toggleAboutSubmenu}
                                className="w-full text-left px-4 py-2 text-lg text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors flex justify-between items-center"
                            >
                                About
                                {isAboutOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>
                            {isAboutOpen && (
                                <div className="pl-6 mt-2 space-y-2">
                                    <Link to="/aboutus" className="block px-4 py-2 text-gray-400 hover:bg-gray-800 hover:text-white rounded-md transition-colors">
                                        About Us
                                    </Link>
                                    <Link to="/gallery" className="block px-4 py-2 text-gray-400 hover:bg-gray-800 hover:text-white rounded-md transition-colors">
                                        Gallery
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link to="/location" className="block px-4 py-2 text-lg text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors">
                            Hours + Location
                        </Link>
                        <Link to="/reserve" className="block px-4 py-2 text-lg text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors">
                            Reserve
                        </Link>
                        <div className="pt-6 mt-6 border-t border-gray-700">
                            <h2 className="px-4 py-2 text-sm font-semibold text-gray-400 uppercase">Admin</h2>
                            <Link to="/reservations" className="block px-4 py-2 mt-2 text-lg text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors">
                                Reservations
                            </Link>
                            <Link to="/orders" className="block px-4 py-2 text-lg text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors">
                                Orders
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </nav>
    )
}

export default MenuSidebar

