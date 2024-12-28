import React from 'react';

const ContactComponent = () => {
    return (
        <div>
            <section className="contact mt-5 py-5">
                <div className="container ">
                    <div className="p-4 bg-white shadow">
                        <h1 className="text-center">
                            Reach our <span className="p_color">Help Desk</span> for support
                        </h1>
                        <p className="text-center">
                            Questions? Need assistance? Our dedicated support team is here to help you
                            every step of the way
                        </p>
                        <form action="" className="py-5">
                            <div className="row g-3">
                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                    <div className="input">
                                    <span>
                                      <i className="fa-solid fa-user p_color"/>
                                    </span>
                                        <input type="text" placeholder="Enter Your Name"/>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                    <div className="input">
                                    <span>
                                      <i className="fa-solid fa-envelope p_color"/>
                                    </span>
                                        <input type="email" placeholder="Enter Your Email Address"/>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 text-center">
                                    <button type="submit" className="btn">
                                        Contact us{" "}
                                        <i className="fa-solid fa-circle-arrow-right ms-2 text-light"/>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ContactComponent;