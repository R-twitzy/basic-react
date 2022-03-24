import { useState, useEffect } from "react";
import ScoreList from "../components/ScoreList";

export default function Score(props) {
    let[scores, setScores] = useState([])

    useEffect(() => {
        // inisiasi data array scores
        let arrayScores = [
            {id:1, name:"Aira Johnson", math:80, 
                english:90, chemistry:70},
            {id:2, name:"Scarlett Mahatam", math:40, 
                english:80, chemistry:79},
            {id:3, name:"Mikael Oka Wahyu", math:50, 
                english:87, chemistry:60},
            {id:4, name:"Mama Zila", math:70, 
                english:78, chemistry:80},
            {id:5, name:"Esa Adilla Rahmandito", math:50, 
                english:80, chemistry:56},
        ]
        setScores(arrayScores)
    }, [])

    return(
        <div className="container mt-5 px-2">
            <div className="table-responsive">
                <table className="table table-responsive table-borderless">
                    <thead>
                        <tr className="bg-light">
                            <th scope="col" width="5%">ID</th>
                            <th scope="col" width="25%">Name</th>
                            <th scope="col" width="15%">Math</th>
                            <th scope="col" width="15%">English</th>
                            <th scope="col" width="15%">Chemistry</th>
                            <th scope="col" width="15%">Average</th>
                            <th scope="col" className="text-end" width="25%"><span>Information</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {scores.map(item => (
                            <ScoreList
                                key={`key-${item.id}`}
                                id={item.id}
                                name={item.name}
                                math={item.math}
                                english={item.english}
                                chemistry={item.chemistry}>
                            </ScoreList>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
