import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './pages/Home.jsx'
import Reserve from './pages/Reserve.jsx'
import Menu from './pages/Menu.jsx'
import LocationHours from './pages/LocationHours.jsx'
import AboutUs from './pages/AboutUs.jsx'

function App() {
  return (
      <Router>
          <div>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/reserve" element={<Reserve />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/location" element={<LocationHours />} />
                  <Route path="/aboutus" element={<AboutUs />} />
              </Routes>
          </div>
      </Router>
  )
}

export default App
