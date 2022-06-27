
export default function Home(){
  return(
    <div>
      <div class="pt-5 mt-2"></div>
      <div class="container">
        <div class="card card-bg-img bg-img bg-overlay mb-3" style={{backgroundImage: "url(&#x27;images/3.jpg&#x27;)"}}>
          <div class="card-body direction-rtl p-5">
            <h2 class="text-white">Reusable elements</h2>
            <p class="mb-4 text-white">More than 220+ reusable modern design elements. Just copy the code and paste it on
              your desired page.</p><a class="btn btn-warning" href="elements.html">All elements</a>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="card bg-primary mb-3 bg-img" style={{backgroundImage: "url(&#x27;images/1.png&#x27;)"}}>
          <div class="card-body direction-rtl p-5">
            <h2 class="text-white">Ready pages</h2>
            <p class="mb-4 text-white">Already designed more than 100+ pages for your needs. Such as - Authentication,
              Chats, eCommerce, Blog &amp; Miscellaneous pages.</p><a class="btn btn-warning" href="pages.html">All
              pages</a>
          </div>
        </div>
      </div>
      <div class="pb-3"></div>
    </div>
  )
}