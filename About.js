export default function About(){
    return(
        <>
         <div className="container-xxl bg-white p-0">
    
        <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style={{width: "3rem", height: "3rem", role:"status"}}>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    
        <div className="container-xxl position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                <a href="" className="navbar-brand p-0">
                    <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>Restoran</h1>
                     <img src="img/restaurant-logo.jpeg" alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4">
                        <a href="index" className="nav-item nav-link">Home</a>
                        <a href="about" className="nav-item nav-link active">About</a>
                        <a href="service" className="nav-item nav-link">Service</a>
                        <a href="menu" className="nav-item nav-link">Menu</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <a href="booking" className="dropdown-item">Booking</a>
                                <a href="team" className="dropdown-item">Our Team</a>
                                <a href="testimonial" className="dropdown-item">Testimonial</a>
                            </div>
                        </div>
                        <a href="contact" className="nav-item nav-link">Contact</a>
                    </div>
                    <a href="" className="btn btn-primary py-2 px-4">Book A Table</a>
                </div>
            </nav>

            <div className="container-xxl py-5 bg-dark hero-header mb-5">
                <div className="container text-center my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="row g-3">
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src="img/about-1.jpg" />
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src="img/about-2.jpg" style={{marginTop: "25%"}} />
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src="img/about-3.jpg" />
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src="img/about-4.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h5 className="section-title ff-secondary text-start text-primary fw-normal">About Us</h5>
                        <h1 className="mb-4">Welcome to <i className="fa fa-utensils text-primary me-2"></i>Restoran</h1>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <div className="row g-4 mb-4">
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                    <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">15</h1>
                                    <div className="ps-4">
                                        <p className="mb-0">Years of</p>
                                        <h6 className="text-uppercase mb-0">Experience</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                    <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">50</h1>
                                    <div className="ps-4">
                                        <p className="mb-0">Popular</p>
                                        <h6 className="text-uppercase mb-0">Master Chefs</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="container-xxl pt-5 pb-3">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5>
                    <h1 className="mb-5">Our Master Chefs</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src="img/team-1.jpg" alt="" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src="img/team-2.jpg" alt="" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src="img/team-3.jpg" alt="" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src="img/team-4.jpg" alt="" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
                        <a className="btn btn-link" href="">About Us</a>
                        <a className="btn btn-link" href="">Contact Us</a>
                        <a className="btn btn-link" href="">Reservation</a>
                        <a className="btn btn-link" href="">Privacy Policy</a>
                        <a className="btn btn-link" href="">Terms & Condition</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Peshwar, Pakistan</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>03481925602</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>rizwanqadar155@gmail.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Opening</h4>
                        <h5 className="text-light fw-normal">Monday - Saturday</h5>
                        <p>09AM - 09PM</p>
                        <h5 className="text-light fw-normal">Sunday</h5>
                        <p>10AM - 08PM</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Newsletter</h4>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
                            <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved. 
							
	         <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
        
        
        </>

    );
}