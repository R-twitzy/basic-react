import { useState, useEffect } from "react";
import BookList from "../components/BookList";

//import { Modal } from "bootstrap";

export default function Book(props){
    let [books, setBooks] = useState([])
    /**{let [modalBook, setModalBook] = useState(null)
    let [isbn, setIsbn] = useState(0)
    let [cover, setCover] = useState("")
    let [judul, setJudul] = useState("")
    let [penulis, setPenulis] = useState("")
    let [penerbit, setPenerbit] = useState("")
    let [income, setIncome] = useState(0)
    let [rating, setRating] = useState(0)
    let [action, setAction] = useState("")
    let [editIsbn, setEditIsbn] = useState(true)}*/

    useEffect(() => {
        // inisiasi data array books
        let arrayBooks =[
            {isbn: 111, cover:`https://static.vecteezy.com/system/resources/previews/001/761/386/non_2x/city-background-business-book-cover-design-template-vector.jpg`,
                judul:`Red Bussiness`, penulis:`Doni Salaman`, 
                penerbit:`Bimono`, income: 1000, rating: 3,
                progress: 40},
            {isbn: 222, cover:`https://static.vecteezy.com/system/resources/previews/000/665/896/non_2x/light-blue-geometric-city-background-business-book-cover-design-template.jpg`,
                judul:`Blue Corporate`, penulis:`Endro Khanz`, 
                penerbit:`Piw Publisher`, income: 3000, rating: 4,
                progress: 65},
            {isbn: 333, cover:`https://static.vecteezy.com/system/resources/previews/000/665/888/non_2x/modern-triangular-city-background-business-book-cover-design-template.jpg`,
                judul:`Green Triangle`, penulis:`Ahmad Segatogi`, 
                penerbit:`Tiga Company`, income: 2000, rating: 4,
                progress: 80},
        ]
        setBooks(arrayBooks)

        /**{// inisiasi state modal book
        setModalBook(new Modal(document.getElementById(`modal_book`)))}*/
    }, [])

    return(
        <div className="container-fluid card">
            <div className="card-header bg-secondary">
                <h3 className="text-white">List of Book</h3>
            </div>
            <div className="card-body">
                {books.map(item => (
                    <BookList 
                        key={`key-${item.isbn}`}
                        isbn={item.isbn} 
                        cover={item.cover} 
                        judul={item.judul}
                        penulis={item.penulis}
                        penerbit={item.penerbit}
                        rating={item.rating} 
                        progress={item.progress}>    
                    </BookList>
                ))}
            </div>
        </div>
    )
}