/** import semua pages yg akan kita tampilkan */
import Balok from "./pages/Balok"
import Book from "./pages/Book"
import Student from "./pages/Student"
import Score from "./pages/Score"
import Tahu from "./pages/Tahu"

/** Area Web Adiwiyata */
import Adiwiyata from "./Adiwiyata"
import Home from "./pages/Home"
import Galeri from "./pages/Galeri"
import Besar from "./pages/Besar"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"

export default function App() {
    return(
        <BrowserRouter>
        {/** BrowserRouter adalah element yg digunakan utk mengaur 
         * tampilan pada halaman web berdasarkan path atau url yg ditentukan
         * oleh user */}
         <Navbar/>
            <Routes>
                {/** Routes -> grouping path path atau url yg didefinisikan */}
                <Route path="/balok" element={<Balok />}></Route>
                <Route path="/Book" element={<Book />}></Route>
                <Route path="/Student" element={<Student />}></Route>
                <Route path="/Score" element={<Score />}></Route>
                <Route path="/Tahu" element={<Tahu />}></Route>

                {/** Area Web Adiwiyata */}
                <Route path="/Adiwiyata" element={<Adiwiyata />}></Route>
                <Route path="/Home" element={<Home />}></Route>
                <Route path="/Galeri" element={<Galeri />}></Route>
                <Route path="/Besar" element={<Besar />}></Route>
            </Routes>
        </BrowserRouter>
    ) 
}