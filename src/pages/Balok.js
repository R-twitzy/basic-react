/**
 * State: tempat penyimpanan data(variabel) yg hnya berlaku di
 * lingkup satu komponen saja.
 * komponen yg memanfaatkan state di disebut komponen stateful,
 * sebaliknya komponen yg tidak memanfaatkan state disebut 
 * komponen stateless
 */
import { useState } from "react"
function Balok(props) {
    // prepare wadah panjang, lebar, tinggi, volume
    // mutator method -> fungsi utk mengubah data pd variabel privat
    let [panjang, setPanjang] = useState(0)
    let [tinggi, setTinggi] = useState(0)
    let [lebar, setLebar] = useState(0)
    let [volume, setVolume] = useState(0)

    let hitungVolume = () => {
        // mengubah nilai state volume menjadi p*l*t
        setVolume(panjang * lebar * tinggi)
    }

    return(
        <div className="container card mt-4">
            <div className="card-header">
                {props.title}
            </div>
            <div className="card-body">
                Panjang
                <input type={`number`} className="form-control mb-2"
                value={panjang}
                onChange={ev => setPanjang(ev.target.value)}
                />

                Lebar
                <input type={`number`} className="form-control mb-2"
                value={lebar}
                onChange={ev => setLebar(ev.target.value)}
                />

                Tinggi
                <input type={`number`} className="form-control mb-2"
                value={tinggi}
                onChange={ev => setTinggi(ev.target.value)}
                />

                <button className="btn btn-primary mt-1"
                onClick={() => hitungVolume()}>
                    Hitung
                </button>

                <h4 className="text-primary mt-3">
                    {`Volume ${props.title} adalah ${volume}`}
                </h4>
            </div>
        </div>
    )
}
export default Balok