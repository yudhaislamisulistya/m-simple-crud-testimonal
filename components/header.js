const Header = () => {
    return(
        <div>
            <div className="header-area" id="headerArea">
                <div className="container ">
                <div className="header-content header-style-five position-relative d-flex align-items-center justify-content-between">
                    <div className="logo-wrapper"><a href="page-home.html"><img src="images/logo.png" alt="logo"/></a></div>
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