export default function TahuList(props) {
    let untung= (props.terjual * props.hjual) - ((props.awal - props.terjual) * props.hdasar)
    let persen= ((props.terjual/props.awal) * 100).toFixed()
    return (
        <div className="card container my-3">
            {/** Row Atas*/}
            <div className="row px-3 pt-1">
                {/** Tanggal*/}
                <div className="col card mx-1 mt-3 p-2 px-3 py-3 shadow-sm tanggal">
                    <div className="d-flex px-2 flex-column">
                        <h4>Tanggal</h4>
                        <h4>{props.tgl}</h4>
                    </div>
                </div>
                {/** Stok Awal*/}
                <div className="col card mx-1 mt-3 p-2 px-3 py-3 shadow-sm awal">
                    <div className="d-flex px-2 flex-column">
                        <h4>Stok Awal</h4>
                        <h4>{props.awal}</h4>
                    </div>
                </div>
                {/** Terjual*/}
                <div className="col card mx-1 mt-3 p-2 px-3 py-3 shadow-sm terjual">
                    <div className="d-flex px-2 flex-column">
                        <h4>Terjual</h4>
                        <h4>{props.terjual}</h4>
                    </div>
                </div>
                {/** Rusak*/}
                <div className="col card mx-1 mt-3 p-2 px-3 py-3 shadow-sm rusak">
                    <div className="d-flex px-2 flex-column">
                        <h4>Rusak</h4>
                        <h4>{props.rusak}</h4>
                    </div>
                </div>
            </div>

            {/** Row Bawah*/}
            <div className="row px-3 pb-3">
                {/** Keuntungan*/}
                <div className="col card mx-1 mt-3 p-2 px-3 py-3 shadow-sm untung">
                    <div className="d-flex px-2 flex-column">
                        <h4>Keuntungan</h4>
                        <h4>Rp {untung}</h4>
                    </div>
                </div>
                {/** Persentase*/}
                <div className="col mx-1 mb-2 shadow-sm align-self-end">
                    <div className="progress">
                        <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: `${persen}%` }}
                            aria-valuenow={persen}
                            aria-valuemin="0"
                            aria-valuemax="100">
                            {persen}%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}