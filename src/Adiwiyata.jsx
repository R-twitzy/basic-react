
import {Link, Routes, Route} from "react-router-dom"
import '../src/App.css'
import Home from "./pages/Home"
import Galeri from "./pages/Galeri"
import Besar from "./pages/Besar"

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <b className="navbar-brand" href="#">Adiwiyata</b>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/Home">
                  <a className="nav-link active" aria-current="page">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Galeri">
                  <a className="nav-link active" aria-current="page">Galeri</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Besar">
                  <a className="nav-link active" aria-current="page">Hari Besar</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> <br/> <hr/>
      <div>
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Galeri" element={<Galeri />}></Route>
          <Route path="/Besar" element={<Besar />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
