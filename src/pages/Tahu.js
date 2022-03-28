import { useState, useEffect } from "react";
import TahuList from "../components/TahuList";

export default function Tahu(props) {
    let[tahus, setTahus] = useState([])

    useEffect(() =>{
        // inisiasi data array tahu
        let arrayTahu = [
            {tgl: "01-03-2022", awal: 100, terjual: 85, rusak: 5,
                hdasar: 3000, hjual: 4500},
            {tgl: "04-03-2022", awal: 50, terjual: 40, rusak: 5,
                hdasar: 3500, hjual: 4500},
            {tgl: "10-03-2022", awal: 70, terjual: 60, rusak: 10,
                hdasar: 4000, hjual: 5000},
        ]
        setTahus(arrayTahu)
    }, [])

    return(
        <div className="container-fluid">
            {tahus.map(item => (
                <TahuList
                    key={`key-${item.tgl}`}
                    tgl={item.tgl}
                    awal={item.awal}
                    terjual={item.terjual}
                    rusak={item.rusak}
                    hdasar={item.hdasar}
                    hjual={item.hjual}
                    >

                </TahuList>
            ))}
        </div>
    )
}