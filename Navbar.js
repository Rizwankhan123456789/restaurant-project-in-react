import { Link } from "react-router-dom";

export {Link} from 'react-router-dom';
export default function Navbar(){
    return(
        <>
            <div className="container-xxl position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                <a href="" className="navbar-brand p-0">
                    <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>Restoran</h1>
                <img src="img/restaurant-logo.png" alt="Logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4">
                        <Link to="about" className="nav-item nav-link">About</Link>
                        <Link to="index" className="nav-item nav-link active">Home</Link>
                        <Link to="service" className="nav-item nav-link">Service</Link>
                        <Link to="menu" className="nav-item nav-link">Menu</Link>
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
                <div className="container my-5 py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br/>Delicious Meal</h1>
                            <p className="text-white animated slideInLeft mb-4 pb-2">At that time, it was the custom to repeat at the gathering. A great pain, a pain itself, sits. Another great love and pain are true. The gathering was itself with words and sitting, but constant words sit together, justly with great pain and love.</p>
                            <a href="" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A Table</a>
                        </div>
                        <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                            <img className="img-fluid" src="img/hero.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}