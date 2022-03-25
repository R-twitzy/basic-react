
//import Employee from "./components/Employee"
//import Accordion from "./components/Accordion"
// import Balok from "./pages/Balok";
// import Student from "./pages/Student";
import {Link, Routes, Route} from "react-router-dom"
import '../src/App.css'
import Home from "./pages/Home"
import Galeri from "./pages/Galeri"
import Besar from "./pages/Besar"

function App() {
  return (
    <div>
      {/** <div className="App"> 
        <Employee name="Ramma" address="Tulungagung" born="9 November 2004"
          avatar="https://cutewallpaper.org/21/avatar-images-download/Avatar-icon-clipart-images-gallery-for-free-download-.png">
          Hayyyuuuuukk 
        </Employee> <br/>

        <Accordion name="Ramma" address="Tulungagung" born="9 November 2004" id="satu" target="#satu"
          avatar="https://cutewallpaper.org/21/avatar-images-download/Avatar-icon-clipart-images-gallery-for-free-download-.png">
          Hayyyuuuuukk 
        </Accordion> <br/>
        <Accordion name="Alok" address="Bermuda" born="26 Agustus 1991" id="dua" target="#dua"
          avatar="https://cdn-icons-png.flaticon.com/512/147/147144.png">
          Iri Bilang Boss  
        </Accordion> <br/>
        <Accordion name="Ilham Pro Tzy" address="Clock Tower" born="1 Oktober 2011" id="tiga" target="#tiga"
          avatar="https://freepikpsd.com/file/2019/10/avatar-icon-png-5-Images-PNG-Transparent.png">
          Ilham suka Jumpshot  
        </Accordion> <br/>
        <Accordion name="EVOS Rehan" address="Exp Lane" born="3 April 2010" id="empat" target="#empat"
          avatar="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png">
          Evos Rehan adalah pro player yang rajin menabung  
        </Accordion> <br/>
      </div> */}

      {/**<div>
        <Balok title="Lemari"></Balok>
        <Balok title="Kasur"></Balok>
      </div> */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
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
