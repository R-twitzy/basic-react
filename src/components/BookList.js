export default function BookList(props){
     return(
        <div className="row m-2 py-2" style={{border: `2px solid lightgrey`}}>
            {/**cover area */}
            <div className="col-lg-3">
                <img 
                src={props.cover}
                width={`300px`}
                alt={`book's cover`}/>
            </div>

            {/** labels area */}
            <div className="col-lg-9 pt-3">
                <h4>{props.judul}</h4>
                <h6>ISBN: {props.isbn}</h6>
                <h6>Penulis: {props.penulis}</h6>
                <h6>Penerbit: {props.penerbit}</h6>
                <h6>
                    Rating:
                    { [...Array(5)].map((item, index) => {
                        if (index < props.rating) {
                            return(
                                <b className="text-warning">
                                    <small className="fa fa-star"></small>
                                </b>
                            )
                        }
                        return(
                            <small className="fa fa-star"></small>
                        )
                    })}    
                </h6>
                <h6>Progress:</h6>
                <div className="progress">
                    <div 
                    className="progress-bar bg-info" 
                    role="progressbar" 
                    style={{width: `${props.progress}%`}} 
                    aria-valuenow={props.progress} 
                    aria-valuemin="0" 
                    aria-valuemax="100">
                        {props.progress}%
                    </div>
                </div>
                                
            </div>
        </div>                   
    )
}