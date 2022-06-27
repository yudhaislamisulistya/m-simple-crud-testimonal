export default function Create(){
    return(
        <div className="container pt-3">               
            <div className="card mb-3 mt-5">
                <div className="card-body">
                    <h5 className="mb-3">Write to Testimonal</h5>
                    <div className="contact-form">
                        <form action="#">
                            <div className="form-group mb-3">
                                <input className="form-control" type="text" placeholder="Your name"/>
                            </div>
                            <div className="form-group mb-3">
                                <input className="form-control" type="text" placeholder="Comment"/>
                            </div>
                            <div className="form-group mb-3">
                                <input className="form-control" min={1} max={5} type="number" placeholder="1-5"/>
                            </div>
                            <button className="btn btn-primary w-100">Send Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}