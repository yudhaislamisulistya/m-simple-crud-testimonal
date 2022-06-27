import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import '../styles/bootstrap-icons.css'
import '../styles/tiny-slider.css'
import '../styles/baguetteBox.min.css'
import '../styles/rangeslider.css'
import '../styles/vanilla-dataTables.min.css'
import '../styles/apexcharts.css'
import '../styles/style.css'
import Layout from '../components/layouts'

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
