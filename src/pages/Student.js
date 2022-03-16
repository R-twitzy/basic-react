import { useState, useEffect } from "react"
/**
 * useState -> utk mendefinisikan state 
 * useEddect -> fungsi yg dijalankan (dieksekusi)
 * ketika komponennya telah ditampilkan
 * 
 */
import { Modal } from "bootstrap"

export default function Student(props) {
    let [students, setStudents] = useState([])
    let [modalStudent, setModalStudent] = useState(null)
    let [id, setId] = useState(0)
    let [name, setName] = useState("")
    let [birthdate, setBirthdate] = useState("")
    let [action, setAction] = useState("")

    useEffect(() => {
        // inisiasi data array students
        let arrayStudents =[
            {id: 1, name: `Jang Yeeun (Jaevis)`, birthdate: `9 Desember 2004`},
            {id: 2, name: `Bae Jinsol (Baevis)`, birthdate: `28 Desember 2004`},
        ]
        setStudents(arrayStudents)

        // inisiasi state modal student
        setModalStudent(new Modal(document.getElementById(`modal_student`)))
    }, [])

    // function addStudent
    let addStudent = () => {
        // open modal
        modalStudent.show()

        // reset isi dari setiap inputan
        setId(0)
        setName("")
        setBirthdate("")
        setAction("insert")
    }

    // function saveStudent
    let saveStudent = () => {
        // close modal
        modalStudent.hide()
        if (action === `insert`){
            let newData = {
                id: id, name: name, birthdate: birthdate
            }

            // store array from students
            let temp = [...students]
            // add newdata
            temp.push(newData)
            // store to students again
            setStudents(temp)
        }
    }

    return(
        <div className="container-fluid">
            <div className="card col-10">
                <div className="card-header bg-secondary">
                    <h3 className="text-white">List of Student</h3>
                </div>
                <div className="card-body">
                    {students.map(item => (
                        <div className="row" key={`key${item.id}`} >
                            <div className="col-2">
                                <small>ID</small>
                                <h5>{item.id}</h5>
                            </div>
                            <div className="col-4">
                                <small>Name</small>
                                <h5>{item.name}</h5>
                            </div>
                            <div className="col-4">
                                <small>Date of Birth</small>
                                <h5>{item.birthdate}</h5>
                            </div>
                        </div>
                    ))}

                    {/** button add data */}
                    <button className="btn btn-outline-success mt-2"
                    onClick={() => addStudent()}>
                        Tambah Siswa
                    </button>

                    {/** modal component */}
                    <div className="modal" id="modal_student">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4>Form Student</h4>
                                </div>
                                <div className="modal-body">
                                    {/** input for ID, Name, Birthdate */}
                                    ID
                                    <input type={`number`}
                                    className="form-control mb-2"
                                    value={id}
                                    onChange={ev => setId(ev.target.value)} />

                                    Name
                                    <input type={`text`}
                                    className="form-control mb-2"
                                    value={name}
                                    onChange={ev => setName(ev.target.value)}/>

                                    Date of Birth
                                    <input type={`text`}
                                    className="form-control mb-2"
                                    value={birthdate}
                                    onChange={ev => setBirthdate(ev.target.value)}/>

                                    <button className="btn-sm btn-success mt-2"
                                    onClick={() => saveStudent()}>
                                        Simpan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}