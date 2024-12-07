import menuBg from '/hoursbg.jpg'
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import Layout from "../components/Layout.jsx";

const LocationHours = () => {

    const currentDate = new Date();
    const currentDay = currentDate.getDay()

    const hours = [
        { day: 'Sun', open: '11:00AM', close: '10:00PM' },
        { day: 'Mon', open: '12:00PM', close: '10:00PM' },
        { day: 'Tue', open: '12:00PM', close: '10:00PM' },
        { day: 'Wed', open: '12:00PM', close: '10:00PM' },
        { day: 'Thu', open: '11:00AM', close: '10:00PM' },
        { day: 'Fri', open: '12:00PM', close: '11:00PM' },
        { day: 'Sat', open: '11:00AM', close: '11:00PM' },
    ]

    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <Layout title="HOURS + LOCATION" backgroundImage={menuBg}>
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-semibold">Our Location</h2>
                        <p className="text-xl">4 Rue Malher</p>
                        <p className="text-xl">Paris 75004, France</p>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d41994.18700337935!2d2.2777846!3d48.865138!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671fdfd96fd53%3A0xc469698627af24c7!2sBreakfast%20in%20America%20-%20Marais!5e0!3m2!1sen!2srs!4v1731427606822!5m2!1sen!2srs"
                                className="w-full h-full"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">Hours</h2>
                        <ul className="space-y-2">
                            {hours.map((item, index) => (
                                <li
                                    key={item.day}
                                    className={`flex justify-between items-center p-2 ${
                                        index === currentDay ? 'bg-amber-100 font-semibold' : ''
                                    }`}
                                >
                                    <span>{item.day}</span>
                                    <span>{item.open} - {item.close}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default LocationHours