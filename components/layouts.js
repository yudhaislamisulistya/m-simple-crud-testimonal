import Script from "next/script";
import Footer from "./footer";
import Header from "./header";
import Offcanvas from "./offcanvas";
import Welome from "./welcome";
import Preloader from "./preloader";

const Layout = ({children}) => {
    return(
        <div>
            <Preloader/>
            <Header/>
            <Offcanvas/>
            <Welome/>
            {children}
            <Footer/>
            <Script src="/js/bootstrap.bundle.min.js" strategy="beforeInteractive"/>
            <Script src="/js/slideToggle.min.js" strategy="beforeInteractive"/>
            <Script src="/js/internet-status.js" strategy="beforeInteractive"/>
            <Script src="/js/tiny-slider.js" strategy="beforeInteractive"/>
            <Script src="/js/baguetteBox.min.js" strategy="beforeInteractive"/>
            <Script src="/js/countdown.js" strategy="beforeInteractive"/>
            <Script src="/js/rangeslider.min.js" strategy="beforeInteractive"/>
            <Script src="/js/vanilla-dataTables.min.js" strategy="beforeInteractive"/>
            <Script src="/js/index.js" strategy="beforeInteractive"/>
            <Script src="/js/imagesloaded.pkgd.min.js" strategy="beforeInteractive"/>
            <Script src="/js/isotope.pkgd.min.js" strategy="beforeInteractive"/>
            <Script src="/js/dark-rtl.js" strategy="afterInteractive"/>
            <Script src="/js/active.js" strategy="beforeInteractive"/>
            <Script src="/js/pwa.js" strategy="beforeInteractive"/>
        </div>
    )
}


export default Layout;