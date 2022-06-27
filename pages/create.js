export default function Create(){
    return(
        <div className="container pt-3">               
            <div className="card mb-3 mt-5">
                <div className="card-body">
                    <h5 className="mb-3">Write to us</h5>
                    <div className="contact-form">
                        <form action="#">
                            <div className="form-group mb-3">
                                <input className="form-control" type="text" placeholder="Your name"/>
                            </div>
                            <div className="form-group mb-3">
                                <input className="form-control" type="email" placeholder="Enter email"/>
                            </div>
                            <div className="form-group mb-3">
                                <select className="form-select" name="topic">
                                    <option value="">Authors Help</option>
                                    <option value="">Buyer Help</option>
                                    <option value="">Licenses</option>
                                </select>
                            </div>
                            <div className="form-group mb-3">
                                <textarea className="form-control" name="textarea" cols="30" rows="10" placeholder="Write details"></textarea>
                            </div>
                            <button className="btn btn-primary w-100">Send Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}