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
   let [editId, setEditId] = useState(true)

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
        setEditId(true)
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
        } else if (action === `edit`) {
            // store data students to temp
            let temp = [...Student]

            // find index of selected data by ID
            let index = temp.findIndex(siswa => siswa.id === id)

            // update data on founded index
            temp[index].name = name
            temp[index].birthdate = birthdate

            // restore to student compile
            setStudents(temp)
        }
    }

    // function edit student
    let editStudent = siswa => {
        // open the modal
        modalStudent.show()
        setId(siswa.id)
        setName(siswa.name)
        setBirthdate(siswa.birthdate)
        setAction(`edit`)
        setEditId(false)
    }

    // function delete student
    let deleteStudent = siswa => {
        
    }

    return(
        <div className="container-fluid">
            <div className="card col-10">
                <div className="card-header bg-secondary">
                    <h3 className="text-white">List of Student</h3>
                </div>
                <div className="card-body">
                    {students.map(siswa => (
                        <div className="row" key={`key${siswa.id}`} >
                            <div className="col-2">
                                <small>ID</small>
                                <h5>{siswa.id}</h5>
                            </div>
                            <div className="col-4">
                                <small>Name</small>
                                <h5>{siswa.name}</h5>
                            </div>
                            <div className="col-4">
                                <small>Date of Birth</small>
                                <h5>{siswa.birthdate}</h5>
                            </div>
                            <diV className="col-2">
                                <small>Action</small> <br/>
                                {/**edit button */}
                                <button className="btn btn-outline-primary mx-1"
                                onClick={() => editStudent(siswa)}>
                                    Edit
                                </button>

                                {/**delete button */}
                                <button className="btn btn-danger mx-1"
                                onClick={() => deleteStudent(siswa)}>
                                    Delete
                                </button>
                            </diV>
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
                                    onChange={ev => setId(ev.target.value)} 
                                    readOnly={!editId}/>
                                    {/** saat add student, editId = true 
                                     * oleh krn itu readonly harus false
                                    */}

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