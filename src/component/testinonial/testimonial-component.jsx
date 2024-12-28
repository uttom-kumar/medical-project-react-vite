import React from 'react';
import rectangle1Icon from '../../../public/images/Rectangle 8.png'
import rectangle2Icon from '../../../public/images/Rectangle 8 (1).png'
import rectangle3Icon from '../../../public/images/Rectangle 8 (3).png'

import vectorIcon from '../../../public/images/Vector.png'

const TestimonialComponent = () => {
    return (
        <div>
            <section className="testimonials">
                <div className="container mt-5 py-5 px-5">
                    <h2 className="p_color text-center lh-1">Patient Testimonials:</h2>
                    <h2 className="text-center lh-1">Hear from Those We’ve Cared For</h2>
                    <p className="text-secondary text-center mt-3">
                        Discover the difference we make through the voices of those we’ve served:
                    </p>
                    <div className="row my-5 g-4">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="card p-3">
                                <div className="d-flex gap-4 align-items-center">
                                    <div>
                                        <img src={rectangle1Icon} alt=""/>
                                    </div>
                                    <div>
                                        <p className="m-0">
                                            “After my knee surgery, the convenience of online consultations
                                            made my recovery smoother than I could have imagined.” - Linda
                                            A.
                                        </p>
                                    </div>
                                </div>
                                <div className="overlay1">
                                    <img src={vectorIcon} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="card p-3">
                                <div className="d-flex gap-4 align-items-center">
                                    <div>
                                        <img src={rectangle2Icon} alt=""/>
                                    </div>
                                    <div>
                                        <p className="m-0">
                                            “Managing chronic conditions like diabetes requires a lot of
                                            vigilance, but the medicine refill system has simplified my
                                            life.” - Henry B.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial_counter">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div>
                                        <h1 className="">10,000+</h1>
                                        <p>Successful Consultations</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div>
                                        <h1 className="">2,500+</h1>
                                        <p>Healthcare Professionals</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div>
                                        <h1 className="">98%</h1>
                                        <p>Patient Satisfaction Rate</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div>
                                        <h1 className="">200+</h1>
                                        <p>Top Specialists</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="card p-3">
                                <div className="d-flex gap-4 align-items-center">
                                    <div>
                                        <img src={rectangle1Icon} alt=""/>
                                    </div>
                                    <div>
                                        <p className="m-0">
                                            “After my knee surgery, the convenience of online consultations
                                            made my recovery smoother than I could have imagined.” - Linda
                                            A.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="card p-3">
                                <div className="d-flex gap-4 align-items-center">
                                    <div>
                                        <img src={rectangle2Icon} alt=""/>
                                    </div>
                                    <div>
                                        <p className="m-0">
                                            “Managing chronic conditions like diabetes requires a lot of
                                            vigilance, but the medicine refill system has simplified my
                                            life.” - Henry B.
                                        </p>
                                    </div>
                                </div>
                                <div className="overlay2">
                                    <img src={vectorIcon} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TestimonialComponent;