function Employee(props) {
    return (
    <div class="container card mt-5">
        <div className="card-header bg-secondary">
            <h4 className="text-light mt-1">{props.name}</h4>
        </div>
        <div class="row card-body">
            <div class="col-2">
            <img src={props.avatar} className="card-img-top mx-auto" style={{width: `150px`}}></img>
            </div>
            <div class="col-4 mt-2">
            <i className="text-primary">Address : </i>
            <h6 >{props.address}</h6>
            <i className="text-primary">Date of Birth : </i>
            <h6 >{props.born}</h6>
            </div>
            <div class="col-4 mt-2">
            <i className="text-primary">Bio : </i>
            <p >{props.children}</p>
            </div>
        </div>
    </div>
    )
}

export default Employee