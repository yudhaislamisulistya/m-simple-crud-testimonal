import Link from "next/link";

const List = ({ testimonial }) => {
    const {name, comment, star} = testimonial
    const stars = []
    for (let i = 0; i < star; i++) {
        stars.push(<i className="bi bi-star-fill text-yellow small-text"></i>)
    }
    console.log(stars);
    return(
        <div className="card single-product-card">
            <div className="card-body">
                <div className="row">
                    <div className="col-10">
                        <div className="card-content">
                        <a className="product-title d-block text-truncate mt-0" href="page-shop-details.html">{name}</a>
                        <p className="sale-price">{comment}</p>
                        </div>
                    </div>
                    <div className="col-2 text-end align-self-top">
                        {stars}
                        <span className="d-block"/>
                        <Link href={'/about'}>
                        <a>
                            <i className="bi bi-arrow-bar-right d-inline-block"/><span className="small-text align-middle">Detail</span>
                        </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List;