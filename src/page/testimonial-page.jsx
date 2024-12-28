import React from 'react';
import Layout from "../layout.jsx";
import TestimonialComponent from "../component/testinonial/testimonial-component.jsx";
import PlatformComponent from "../component/platform/platform-component.jsx";
import TeamComponent from "../component/team/team-component.jsx";

const TestimonialPage = () => {
    return (
        <Layout>
            <TestimonialComponent />
            <PlatformComponent />
            <TeamComponent />
        </Layout>
    );
};

export default TestimonialPage;