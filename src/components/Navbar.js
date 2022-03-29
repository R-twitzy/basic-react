import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <b className="navbar-brand" href="#">My React</b>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/Balok" className="nav-link active" aria-current="page">
                                    Balok
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Book" className="nav-link active" aria-current="page">
                                    Book
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Score" className="nav-link active" aria-current="page">
                                    Score
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Student" className="nav-link active" aria-current="page">
                                    Student
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Tahu" className="nav-link active" aria-current="page">
                                    Tahu
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Adiwiyata" className="nav-link active" aria-current="page">
                                    Adiwiyata
                                </Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> <br /> <hr />
        </div>
    )
}