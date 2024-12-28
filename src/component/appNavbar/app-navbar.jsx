import React from 'react';
import {Link} from "react-router-dom";
import navLogo from '../../../public/images/logo/nav_logo.png'

const AppNavbar = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light shadow ">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img
                                src={navLogo}
                                alt="logo"
                                className="img-fluid"
                            />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <Link to={"/"} className="nav-link active" aria-current="page">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/services'} className="nav-link">
                                        Services
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/testimonial'} className="nav-link">
                                        Testimonial
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/about"} className="nav-link">
                                        About us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/contact'} className="nav-link">
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                            <form className="d-flex ">
                                <div>
                                    <Link className="btn btn-primary" to={'/contact'}>
                                        Join us
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default AppNavbar;