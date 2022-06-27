export default function About(){
    return(
        <div className="container pt-3">
            <div className="row g-3">                       
                <div className="col-12">
                    <div className="card team-member-card shadow mt-5">
                        <div className="card-body">
                            <div className="team-member-img shadow-sm"><img src="images/avatar.jpeg" alt="avatar"/></div>
                            <div className="team-info">
                                <h3 className="mb-1 fz-20">Yudha Islami Sulistya</h3>
                                <h6 className="mb-3 fz-14">Machine Learning Engineer & Software Developer</h6>
                                <p className="mb-0 fz-12">My name is Yudha Islami Sulistya, an IT Enthusiast from Ampana, Central Sulawesi. I have a lot of experience with website and android based development, and lately, I've been focusing on developing knowledge about machine learning</p>
                                <small className="text-justify"></small>
                            </div>
                        </div>
                        <div className="contact-info bg-primary">
                            <p className="mb-0 text-truncate">yudha@sivia.id</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}