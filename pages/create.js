import { useState } from "react"
import Const from "../helpers/const"

export async function getServerSideProps(){
    return {
        props: {
            url: Const().dev ? Const().DEV_URL : Const().PROD_URL
        }
    }
}

export default function Create({url}){
    console.log(url);
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const [star, setStar] = useState('')
    const [loading, setLoading] = useState('')
    const [error, setError] = useState('')
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        

        if(!name || !comment || !star){
            setError(<div className="alert alert-danger" role="alert"><strong>Please Fil all field</strong></div>)
            setLoading(false)
            return
        }

        const post = {
            name,
            comment,
            star,
            createdAt: new Date().toISOString()
        }

        const res = await fetch(`${url}/api/create`, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json()
        
        if(data.code != 200){
            setError(<div className="alert alert-danger" role="alert"><strong>{data.message}</strong></div>)
            setLoading(false)
            return
        }

        setName('')
        setComment('')
        setStar('')
        setLoading(false)
        setError('')
        setStatus(<div className="alert alert-success" role="alert"><strong>Successfully added</strong></div>)
    }
    return(
        <div className="container pt-3">               
            <div className="card mb-3 mt-5">
                <div className="card-body">
                    <h5 className="mb-3">Write to Testimonal</h5>
                    <div className="contact-form">
                        {error}
                        {status}
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                <input className="form-control" value={name} name="name" onChange={(e) => setName(e.target.value)} type="text" placeholder="Your name"/>
                            </div>
                            <div className="form-group mb-3">
                                <input className="form-control" value={comment} name="comment" type="text" onChange={(e) => setComment(e.target.value)} placeholder="Comment"/>
                            </div>
                            <div className="form-group mb-3">
                                <input className="form-control" value={star} name="star" onChange={(e) => setStar(e.target.value)} min={1} max={5} type="number" placeholder="1-5"/>
                            </div>
                            {loading ? <div className="text-center">Loading...</div> : <button className="btn btn-primary w-100">Send Now</button>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}