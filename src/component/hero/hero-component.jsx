import React from 'react';
import ri_amazon from '../../../public/images/logo/ri_amazon-fill.png'
import appleIcon from '../../../public/images/logo/ic_baseline-apple.png'
import googleIcon from '../../../public/images/logo/uim_google.png'
import nationIcon from '../../../public/images/logo/cib_notion.png'
import spotifyIcon from '../../../public/images/logo/mdi_spotify.png'
import mdiSlackIcon from '../../../public/images/logo/mdi_slack.png'

import heroImage from '../../../public/images/hero_img.png'
import Rectangle1Icon from '../../../public/images/Rectangle 8 (1).png'
import Rectangle2Icon from '../../../public/images/Rectangle 8 (2).png'
import Rectangle3Icon from '../../../public/images/Rectangle 8 (3).png'
import Rectangle4Icon from '../../../public/images/Rectangle 8.png'

import heroOverlay from '../../../public/images/hero_overlay.png'
import {Link} from "react-router-dom";


const HeroSection = () => {
    return (
        <div>
            <seciton className="hero_section">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="hero_left">
                                <h1 className="lh-1 mb-4">
                                    Your <span className="p_color">trusted partner</span> in digital
                                    healthcare.
                                </h1>
                                <p className="mb-5">
                                    <a className="p_color" href="">
                                        Empowering Your Health at Every Step.
                                    </a>{" "}
                                    Experience personalized medical care from the comfort of your home.
                                    Connect with{" "}
                                    <a className="p_color" href="">
                                        certified doctors
                                    </a>
                                    , or manage prescriptions, and schedule appointments with ease.
                                    Ready to take control of your health?
                                    <a className="p_color" href="">
                                        Get Started
                                    </a>
                                    or Book an Appointment today.
                                </p>
                                <Link to={'/contact'} className="btn btn-primary text-light px-5 py-3" href="">
                                    Book an appointment
                                    <i
                                        className="fa-solid fa-chevron-right ms-2"
                                        style={{fontSize: 14}}
                                    />
                                </Link>
                                <p className="my-4 text-secondary">
                                    Trusted by millions across the globe:
                                </p>
                                <div className="company_brand d-flex align-items-center gap-3">
                                    <li>
                                        <a href="">
                                            <img
                                                className="img-fluid"
                                                src={ri_amazon}
                                                alt="amazon"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img
                                                className="img-fluid"
                                                src={appleIcon}
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img
                                                className="img-fluid"
                                                src={googleIcon}
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img
                                                className="img-fluid"
                                                src={nationIcon}
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img
                                                className="img-fluid"
                                                src={spotifyIcon}
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img
                                                className="img-fluid"
                                                src={mdiSlackIcon}
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="hero_right">
                                <img
                                    className="img-fluid"
                                    src={heroImage}
                                    alt=""
                                />
                                <div className="div_1">
                                    <p>
                                        <i className="fa-solid fa-star me-3 "/> Easy Appointment Booking
                                    </p>
                                </div>
                                <div className="div_2">
                                    <div className="d-flex ">
                                        <img src={Rectangle1Icon} alt=""/>
                                        <img src={Rectangle2Icon} alt=""/>
                                        <img src={Rectangle3Icon} alt=""/>
                                        <img src={Rectangle4Icon} alt=""/>
                                        <p>
                                            2400<span>+</span>
                                        </p>
                                    </div>
                                    <div className="div2_text">
                                        <p className="fs-5 m-0">Happy Customers</p>
                                        <div className="ratting text-warning">
                                            <i className="fa-solid fa-star"/>
                                            <i className="fa-solid fa-star"/>
                                            <i className="fa-solid fa-star"/>
                                            <i className="fa-solid fa-star"/>
                                            <i className="fa-regular fa-star-half-stroke"/>
                                            <span className="text-dark">(4.7 Stars)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="div_3">
                                    <p className="m-0">
                                        Lorem ipsum dolor sit amet, ligula ego. consectetuer adipiscing
                                        elit doloras.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero_overlay">
                        <img src={heroOverlay} alt=""/>
                    </div>
                </div>
            </seciton>
            <section className="easy_book py-5">
                <div className="container">
                    <div className="card p-4">
                        <div className="card-title">
                            <h3 className="p_color">
                                Easily book an appointment in 3 simple steps.
                            </h3>
                        </div>
                        <form>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div>
                                        <label htmlFor="email" className="form-label">
                                            <i className="fa-solid fa-envelope p_color me-2"/> Email
                                            Address
                                        </label>
                                        <input type="email" className="form-control" id="email"/>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div>
                                        <label htmlFor="contact" className="form-label ">
                                            <i className="fa-solid fa-phone p_color me-2"/>
                                            Contact Number
                                        </label>
                                        <input type="text" className="form-control" id="contact"/>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mt-">
                                    <div>
                                        <label htmlFor="date" className="form-label ">
                                            <i className="fa-solid fa-calendar-days p_color me-2"/> Date of
                                            Appointment
                                        </label>
                                        <input type="date" className="form-control" id="date"/>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <button type="button" className="btn btn-primary">Apply Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;