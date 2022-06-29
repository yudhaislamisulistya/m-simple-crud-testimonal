import List from "../components/home/list";
import Const from "../helpers/const";

export async function getServerSideProps(){

    const res = await fetch(`${Const().dev ? Const().DEV_URL : Const().PROD_URL}/api/get`)
    const data = await res.json()

    return {
        props: {
          testimonials: data.data || null,
          url: Const().dev ? Const().DEV_URL : Const().PROD_URL
        }
    }
}

export default function Home({ testimonials }){
  return(
    <div>
      <div className="pt-5 mt-2"></div>
      <div className="container">
        {testimonials != null ? testimonials.map((testimonial, index) => (<List key={index} testimonial={testimonial} />)) : <div className="text-center">No data</div>}
      </div>
      <div className="pb-5"></div>
      <div className="pb-4"></div>
    </div>
  )
}