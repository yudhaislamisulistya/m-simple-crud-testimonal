import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
    const router = useRouter();
    return (
        <div className="footer-nav-area" id="footerNav">
            <div className="container px-0">
            <div className="footer-nav position-relative">
                <ul className="h-100 d-flex align-items-center justify-content-between ps-0">
                <li className={router.asPath == "/" ? "active" : null}>
                    <Link href={'/'}>
                        <a href="page-home.html">
                        <svg className="bi bi-house" width="20" height="20" viewBox="0 0 16 16" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                            d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                            <path fillRule="evenodd"
                            d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                        </svg><span>Home</span></a>
                    </Link>
                </li>
                <li className={router.asPath == "/create" ? "active" : null}>
                    <Link href="/create">
                        <a>
                        <svg className="bi bi-collection" width="20" height="20" viewBox="0 0 16 16" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                            d="M14.5 13.5h-13A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5zm-13 1A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z" />
                        </svg><span>Create</span></a>
                    </Link>
                </li>
                <li className={router.asPath == "/about" ? "active" : null}>
                    <Link href={'/about'}>
                        <a>
                        <svg className="bi bi-person" width="20" height="20" viewBox="0 0 16 16" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                            d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z" />
                        </svg><span>About</span></a>
                    </Link>
                </li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Footer;