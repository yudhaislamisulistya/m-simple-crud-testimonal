const Welome = () => {
    return(
        <div className="toast toast-autohide custom-toast-1 toast-success home-page-toast" role="alert" aria-live="assertive"
            aria-atomic="true" data-bs-delay="7000" data-bs-autohide="true">
            <div className="toast-body">
                <svg className="bi bi-bookmark-check text-white" width="30" height="30" viewBox="0 0 16 16" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                    d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                    <path fill-rule="evenodd"
                    d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                </svg>
                <div className="toast-text ms-3 me-2">
                    <p className="mb-1 text-white">Welcome to Affan!</p><small className="d-block">Click the "Add to Home Screen" button
                    &amp; enjoy it like an app.</small>
                </div>
            </div>
            <button className="btn btn-close btn-close-white position-absolute p-1" type="button" data-bs-dismiss="toast"
            aria-label="Close"></button>
        </div>
    )
}

export default Welome;