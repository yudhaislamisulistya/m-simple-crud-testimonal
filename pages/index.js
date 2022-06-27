import Link from "next/link";

export default function Home(){
  return(
    <div>
      <div className="pt-5 mt-2"></div>
      <div className="container">
        <div className="card single-product-card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="row">
                <div className="col-10">
                  <div className="card-content">
                    <a className="product-title d-block text-truncate mt-0" href="page-shop-details.html">Kasmira</a>
                    <p className="sale-price">Yap layanan ini sangat bagus dan sangat terjamin</p>
                  </div>
                </div>
                <div className="col-2 text-end align-self-center">
                  <i className="bi bi-star-fill text-yellow"/>
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
        </div>
      </div>
      <div className="pb-3"></div>
    </div>
  )
}