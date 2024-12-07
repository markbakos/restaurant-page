import Navbar from "./Navbar.jsx";
import FooterDoc from "./FooterDoc.jsx";
import Footer from "./Footer.jsx";

const Layout = ({title, backgroundImage, children}) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <header className="w-full h-[30vh] sm:h-[40vh] flex justify-center items-center relative">
                <img
                    className="h-full w-full object-cover object-center absolute inset-0"
                    src={backgroundImage}
                    alt={`${title} background`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"/>
                <h1 className="text-center text-4xl sm:text-5xl font-bold text-white z-10 relative">
                    {title}
                </h1>
            </header>
            <main className="flex-grow container mx-auto px-4 py-8">
                {children}
            </main>
            <FooterDoc/>
            <Footer/>
        </div>
    )
}

export default Layout