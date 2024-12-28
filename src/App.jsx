import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import HomePage from "./page/home-page.jsx";
import ServicePage from "./page/service-page.jsx";
import AboutPage from "./page/about-page.jsx";
import TestimonialPage from "./page/testimonial-page.jsx";
import ContactPage from "./page/contact-page.jsx";

function ScrollToTopOnNavigation() {
    const { pathname } = useLocation();
    useEffect(() => {
        const scroll = () => {
            window.scrollTo(0, 0);
        };
        requestAnimationFrame(scroll);
    }, [pathname]);
    return null;
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <ScrollToTopOnNavigation />
                <Routes>
                    <Route path="/" element={ <HomePage /> } />
                    <Route path="/services" element={ <ServicePage /> } />
                    <Route path="/testimonial" element={ <TestimonialPage /> } />
                    <Route path="/about" element={ <AboutPage /> } />
                    <Route path="/contact" element={ <ContactPage /> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;