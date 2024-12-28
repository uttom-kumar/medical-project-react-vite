import React from 'react';
import footerIcon from '../../../public/images/logo/Group 23.png'

const AppFooter = () => {
    return (
        <div>
            <footer>
                <section className="footer pt-5 pb-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                <div>
                                    <ul>
                                        <li>
                                            <img
                                                className="img-fluid"
                                                src={footerIcon}
                                                alt=""
                                            />
                                        </li>
                                        <li>
                                            <p className="mt-5">
                                                Experience personalized medical care from the comfort of your
                                                home.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                <div>
                                    <ul>
                                        <li>
                                            <h5>Support</h5>
                                        </li>
                                        <li>
                                            <a href="" className="text-secondary">
                                                Getting Started
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="text-secondary">
                                                FAQS
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="text-secondary">
                                                Help Articles
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="text-secondary">
                                                Report an issue
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="text-secondary">
                                                Contact Help Desk
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                <div>
                                    <ul>
                                        <li>
                                            <h5>Services</h5>
                                        </li>
                                        <li>
                                            <a href="" className="text-secondary">
                                                Booking appointments
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="text-secondary">
                                                Online consultations
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="text-secondary">
                                                Prescriptions
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="text-secondary">
                                                Medicine Refills
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="text-secondary">
                                                Medical Notes
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                <div>
                                    <ul>
                                        <li>
                                            <h5>Legal</h5>
                                        </li>
                                        <li>
                                            <a href="" className="text-secondary">
                                                Terms &amp; Conditions
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="text-secondary">
                                                Privacy Policy
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="text-secondary">
                                                Cookie Notice{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="text-secondary">
                                                Cookie Preferences
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="text-secondary">
                                                Trust Center
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="hr_color mt-3"/>
                            <div className="socail_wapper">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <ul className="icon_wapper">
                                            <li>
                                                <a href="">
                                                    <i className="fa-brands fa-facebook"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <i className="fa-brands fa-instagram"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <i className="fa-brands fa-linkedin"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <i className="fa-brands fa-youtube"/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="socail_text">
                                            <p className="text-secondary m-0">
                                                HealNet 2024 © All Rights Reserved
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    );
};

export default AppFooter;