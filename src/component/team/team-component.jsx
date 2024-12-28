import React from 'react';
import doctor1Icon from '../../../public/images/Doctor-Free-PNG-Image 1.png'
import overLayImage from '../../../public/images/Group 29.png'
import doctor2Icon from '../../../public/images/Frame 30.png'

const TeamComponent = () => {
    return (
        <div>
            <section className="our_team py-5">
                <div className="container">
                    <h2 className="p_color text-center m-0">Masters of Medicine:</h2>
                    <h2 className="text-center m-0">Meet our team of specialists</h2>
                    <p className="text-secondary text-center text_width">
                        <small>
                            Our team of specialists is at the forefront of medical innovation. Each
                            specialist brings a unique blend of expertise, empathy, and experience
                            to ensure that your health is in the best hands:
                        </small>
                    </p>
                    <div className="card">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="card_img">
                                    <img
                                        src={doctor1Icon}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                <div className="card_content pt-4 pb-4">
                                    <h3 className="text-light">Dr. Sarah Johnson (Cardiologist)</h3>
                                    <p className="text-light">
                                        Heart health is Dr. Wong’s passion, and her approach to cardiology
                                        integrates cutting-edge technology with compassionate care. She’s
                                        a respected voice in the prevention of heart disease and a trusted
                                        partner to her patients on their journey to wellness.
                                    </p>
                                    <a href="" className="btn btn-light p_color">
                                        Book appointment <i className="fa-solid fa-phone ms-2"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="overlay1">
                            <img src={overLayImage} alt=""/>
                        </div>
                    </div>
                    <div className="card">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="card_img">
                                    <img
                                        src={doctor2Icon}
                                        alt=""
                                        className="img-fluid"
                                        id="card_img"
                                    />
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                <div className="card_content pt-4 pb-4">
                                    <h3 className="text-light">Dr. Mark Lee (Dermatologist )</h3>
                                    <p className="text-light">
                                        Dr. Lee is a visionary in dermatology, advancing treatments for
                                        skin health with a gentle, holistic approach. His dedication to
                                        clinical excellence and patient education has made him a leader in
                                        dermatological care.&nbsp;He’s known for his precision and
                                        commitment to patient-centered care.
                                    </p>
                                    <a href="" className="btn btn-light p_color">
                                        Book appointment <i className="fa-solid fa-phone ms-2"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="overlay2">
                            <img src={overLayImage} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeamComponent;