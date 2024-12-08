import menuBg from "/aboutusbg.jpg";
import img from "/aboutusimg.jpg"
import MenuSidebar from "../components/MenuSidebar.jsx";
import Footer from "../components/Footer.jsx";
import FooterDoc from "../components/FooterDoc.jsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

const AboutUs = () => {

    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

  return (
      <>
          <MenuSidebar />
          <header className="w-screen h-[40vh] sm:h-[30vh] flex justify-center items-center">
              <img className="h-[40vh] sm:h-[30vh] w-screen object-cover object-center opacity-70 absolute left-0 select-none"
                   src={menuBg} alt="Title image for About Us Section"/>
              <h1 className="text-center text-5xl z-10 font-semibold text-black select-none">ABOUT US</h1>
          </header>
          <main className="flex flex-col items-center my-5 h-[60vh] sm:h-[70vh] text-center text-xl mb-60 sm:mb-0">
              <figure>
                <img src={img} alt="Image of people eating at a restaurant"
                     className="h-[40vh] sm:h-[40vh] sm:w-[50vw] object-cover object-center"/>
              </figure>
              <h1 className="mt-5 text-center font-semibold text-3xl">What you need to know about us</h1>
              <p className="my-1">We serve authentic traditional dishes from around the world in our wide-range menu.</p>
              <p className="my-1">The menu allows you to sample a variety of different flavors.</p>
              <p className="my-1">We are rated 4.2 stars on Google from 2700+ reviews.</p>
              <p className="my-1">We are ranked #1 in our area on <a href="https://www.tripadvisor.com/" target="_blank" className="text-blue-600">Tripadvisor</a></p>
          </main>
          <FooterDoc />
          <Footer />
      </>

  )
}

export default AboutUs