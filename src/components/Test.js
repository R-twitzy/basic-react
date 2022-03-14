function Test(props){
    return (
        <div className="container card" style={{width: `18rem`}}>
            <img src={props.avatar} className="card-img-top mx-auto" style={{width: `100px`}}></img>

            <div className="card-body">
                <h4 class="card-title">Nama: {props.name}</h4>
                <h6 class="card-subtitle mb-2 text-muted">Address: {props.address}</h6>
                <p class="card-text">
                    {props.children}
                </p>
            </div>

        </div>
    )
}

export default Test