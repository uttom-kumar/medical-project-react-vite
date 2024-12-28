import React from 'react';
import aboutImage from '../../../public/images/about.png'

const AboutComponent = () => {
    return (
        <div>
            <section className="about mt-5 py-5">
                <div className="container">
                    <div className="card p-4">
                        <div className="card-title text-center mb-4">
                            <h2>
                                <span className="p_color">HealNet’s Story:</span> Get to know us
                            </h2>
                        </div>
                        <div className="row g-4">
                            <div className="col-xl-4 col-lg-4 col-md-4-col-sm-12 col-12">
                                <div className="card-img">
                                    <img className="img-fluid" src={aboutImage} alt=""/>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8-col-sm-12 col-12">
                                <div>
                                    <p className="text-secondary mb-3">
                                        HealNet is more than just an online medical service; it’s a
                                        movement towards accessible, efficient, and compassionate
                                        healthcare for all. Founded by a team of visionary doctors,
                                        healthcare professionals, and technology experts, we are driven by
                                        the mission to deliver exceptional medical care directly to you,
                                        no matter where you are. Our platform is built on the pillars of
                                        trust, innovation, and patient-centricity, ensuring that every
                                        interaction is personalized and every treatment plan is tailored
                                        to your unique needs. With a network of licensed practitioners
                                        from diverse medical fields, we guarantee comprehensive care
                                        that’s just a click away.
                                    </p>
                                    <a className="btn about_btn px-4 py-3" href="">
                                        Learn more about us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutComponent;