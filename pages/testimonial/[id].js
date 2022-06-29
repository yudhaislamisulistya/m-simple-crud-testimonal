import { useRouter } from "next/router";
import Const from "../../helpers/const";

export async function getServerSideProps(context){
    const { id }  = context.query;

    const res = await fetch(`${Const().dev ? Const().DEV_URL : Const().PROD_URL}/api/${id}`)
    const data = await res.json()
    return {
        props: {
            testimonial: data.data || null,
        }            
    }
}

const DetailTestimonial = ({testimonial}) => {
    const {name, comment, star} = testimonial
    const stars = []
    for (let i = 0; i < star; i++) {
        stars.push(<i className="bi bi-star-fill text-yellow small-text"></i>)
    }
    return (
        <div className="pb-5 pt-5">
            <div className="card text-left mt-2 mb-2">
                <div className="card-header">{stars}</div>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{comment}</p>
                </div>
            </div>
        </div>
    );
}

export default DetailTestimonial