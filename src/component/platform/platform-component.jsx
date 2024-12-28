import React from 'react';
import platformIcon from '../../../public/images/timeline_r.png'

const PlatformComponent = () => {
    return (
        <div>
            <section className="platform py-5">
                <div className="container  ">
                    <h2 className="text-center mb-3">
                        How <span className="p_color">our platform</span> works
                    </h2>
                    <p className="text-secondary text-center text_p">
                      <span>
                        Navigating your healthcare journey with&nbsp;HealNet&nbsp;is seamless.
                        Just follow these steps mentioned below to proceed with your selected
                        services. You can also see our FAQ section for more guidance:
                      </span>
                    </p>
                    <div className="timeline_section">
                        <div className="row py-5 mx-5">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <ul className="timeline_bar">
                                    <li className="timeline_dots">
                                        <div className="num text-white fw-bold">1</div>
                                        <h3>Create Your Profile</h3>
                                        <p className="">
                                            Sign up and fill in your medical history securely. Setting up
                                            your profile this way would ensure that you stay up-to-date with
                                            your medical processes.
                                        </p>
                                    </li>
                                    <li className="timeline_dots">
                                        <div className="num text-white fw-bold">2</div>
                                        <h3>Choose Your Service</h3>
                                        <p>
                                            Select from our range of services and book a consultation.
                                            Booking a consultation with HealNet is fairly simple and
                                            straight-forward.
                                        </p>
                                    </li>
                                    <li className="timeline_dots">
                                        <div className="num text-white fw-bold">3</div>
                                        <h3>Meet Your Doctor</h3>
                                        <p>
                                            Have a virtual consultation with one of our certified
                                            specialists, or go for a physical visit to the doctor in case
                                            you opted for a physical check-up.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="timeline_img">
                                    <img className="" src={platformIcon} alt=""/>
                                    <div>
                                        <p>
                                            <i className="fa-solid fa-star"/> Best Certified Team of
                                            Specialists
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PlatformComponent;