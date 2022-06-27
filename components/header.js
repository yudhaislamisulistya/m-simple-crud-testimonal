import Link from "next/link";


const Header = () => {

    return(
        <div>
            <div className="header-area" id="headerArea">
                <div className="container ">
                <div className="header-content header-style-five position-relative d-flex align-items-center justify-content-between">
                    <div className="logo-wrapper">
                        <Link href={'/'}>
                            <a><img src="images/logo-yudha.png" alt="logo"/></a>
                        </Link>
                    </div>
                    <div className="navbar--toggler" id="affanNavbarToggler" data-bs-toggle="offcanvas" data-bs-target="#affanOffcanvas"
                    aria-controls="affanOffcanvas"><span className="d-block"></span><span className="d-block"></span><span
                        className="d-block"></span></div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Header;