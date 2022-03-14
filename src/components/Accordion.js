function Accordion(props) {
    return (
        <div className="container">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target={props.target} aria-expanded="true" aria-controls={props.id}>
                    {props.name}
                    </button>
                </h2>
                <div id={props.id} class="accordion-collapse collapse show" aria-labelledby={props.id} data-bs-parent="#accordionExample">
                    <div class="accordion-body">
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
                </div>
                </div>
            </div>
        </div>
        
    
    )
}

export default Accordion