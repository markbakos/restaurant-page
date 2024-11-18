import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './pages/Home.jsx'
import Reserve from './pages/Reserve.jsx'
import Menu from './pages/Menu.jsx'
import LocationHours from './pages/LocationHours.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Gallery from "./pages/Gallery.jsx";
import Reservations from "./pages/Reservations.jsx";
import Cart from "./components/Cart.jsx";
import Orders from "./pages/Orders.jsx";

function App() {
  return (
      <Router>
          <div>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/reserve" element={<Reserve />} />
                  <Route path="/reservations" element={<Reservations />}/>
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/location" element={<LocationHours />} />
                  <Route path="/aboutus" element={<AboutUs />} />
                  <Route path="/gallery" element={<Gallery/>}/>
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/orders" element={<Orders/>} />
              </Routes>
          </div>
      </Router>
  )
}

export default App
