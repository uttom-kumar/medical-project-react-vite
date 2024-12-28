import React from 'react';
import Layout from "../layout.jsx";
import ServiceComponent from "../component/services/service-component.jsx";
import HeroSection from "../component/hero/hero-component.jsx";
import AboutComponent from "../component/about/about-component.jsx";
import PlatformComponent from "../component/platform/platform-component.jsx";
import TestimonialComponent from "../component/testinonial/testimonial-component.jsx";
import TeamComponent from "../component/team/team-component.jsx";
import ContactComponent from "../component/contact/contact-component.jsx";

const HomePage = () => {
    return (
        <Layout>
            <HeroSection />
            <ServiceComponent />
            <AboutComponent />
            <PlatformComponent />
            <TestimonialComponent />
            <TeamComponent />
            <ContactComponent />
        </Layout>
    );
};

export default HomePage;