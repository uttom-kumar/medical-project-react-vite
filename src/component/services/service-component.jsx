import React from 'react';
import Service1Icon from '../../../public/images/services1.png'
import Service2Icon from '../../../public/images/services2.png'
import Service3Icon from '../../../public/images/services3.png'
import Service4Icon from '../../../public/images/services4.png'
import Service5Icon from '../../../public/images/services5.png'

const ServiceComponent = () => {
    return (
        <div>
            <section className="services mt-4 py-5" id="services">
                <div className="container">
                    <h1 className="text-center">
                        Top <span className="p_color">services</span> we offer
                    </h1>
                    <p className="text-secondary text-center my-3">
                        In today’s fast-paced world, your health deserves the utmost attention and
                        convenience. That’s why&nbsp;HealNet&nbsp;offers a suite of integrated
                        services designed to cater to your healthcare needs digitally:
                    </p>
                    {/* ---------- */}
                    <div className="row g-4 py-4 ">
                        <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
                            <div className="card p-4">
                                <div>
                                    <img
                                        className="img-fluid mb-3"
                                        src={Service1Icon}
                                        alt="services"
                                    />
                                </div>
                                <h3 className="p_color">Online Consultations</h3>
                                <p className="text-secondary">
                                    Consult with top doctors across various specialties via video or
                                    chat communication. It’s totally secure, private, and convenient.
                                    Choose the best time for an in-person visit with our easy-to-use
                                    scheduling system, or proceed with our online consultation.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                            <div className="card p-4">
                                <div>
                                    <img
                                        className="img-fluid mb-3"
                                        src={Service2Icon}
                                        alt="services"
                                    />
                                </div>
                                <h3 className="p_color">Booking Appointments</h3>
                                <p className="text-secondary">
                                    Choose the best time for an in-person visit with our easy-to-use
                                    scheduling system, or proceed with our online consultation features.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card p-4">
                                <div>
                                    <img
                                        className="img-fluid mb-3"
                                        src={Service3Icon}
                                        alt="services"
                                    />
                                </div>
                                <h3 className="p_color">Prescriptions</h3>
                                <p className="text-secondary">
                                    Receive and renew prescriptions digitally after your consultation
                                    with our specialists .
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card p-4">
                                <div>
                                    <img
                                        className="img-fluid mb-3"
                                        src={Service4Icon}
                                        alt="services"
                                    />
                                </div>
                                <h3 className="p_color">Medical Notes</h3>
                                <p className="text-secondary">
                                    Obtain necessary medical notes for work or school with only a few
                                    clicks of hassle .
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card p-4">
                                <div>
                                    <img
                                        className="img-fluid mb-3"
                                        src={Service5Icon}
                                        alt="services"
                                    />
                                </div>
                                <h3 className="p_color">Medicine Refills</h3>
                                <p className="text-secondary">
                                    Skip the pharmacy queues and save time + energy by ordering medicine
                                    refills online .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceComponent;