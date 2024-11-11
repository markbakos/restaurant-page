import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './pages/Home.jsx'
import Reserve from './pages/Reserve.jsx'
import Menu from './pages/Menu.jsx'

function App() {
  return (
      <Router>
          <div>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/reserve" element={<Reserve />} />
                  <Route path="/menu" element={<Menu />} />
              </Routes>
          </div>
      </Router>
  )
}

export default App
