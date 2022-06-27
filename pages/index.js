
export default function Home(){
  return(
    <div>
      <div className="pt-5 mt-2"></div>
      <div className="container">
        <div className="card card-bg-img bg-img bg-overlay mb-3">
          <div className="card-body direction-rtl p-5">
            <h2 className="text-white">Reusable elements</h2>
            <p className="mb-4 text-white">More than 220+ reusable modern design elements. Just copy the code and paste it on
              your desired page.</p><a className="btn btn-warning" href="elements.html">All elements</a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card bg-primary mb-3 bg-img">
          <div className="card-body direction-rtl p-5">
            <h2 className="text-white">Ready pages</h2>
            <p className="mb-4 text-white">Already designed more than 100+ pages for your needs. Such as - Authentication,
              Chats, eCommerce, Blog &amp; Miscellaneous pages.</p><a className="btn btn-warning" href="pages.html">All
              pages</a>
          </div>
        </div>
      </div>
      <div className="pb-3"></div>
    </div>
  )
}