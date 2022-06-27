import List from "../components/home/list";

export async function getServerSideProps(context){
    const dev = process.env.NODE_ENV !== 'production'
    const { DEV_URL, PROD_URL } = process.env

    const res = await fetch(`${dev ? DEV_URL : PROD_URL}/api/get`)
    const data = await res.json()

    return {
        props: {
          testimonials: data.data || null,
          url: dev ? DEV_URL : PROD_URL
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
      <div className="pb-3"></div>
    </div>
  )
}