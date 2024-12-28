import React from 'react';
import AppNavbar from "./component/appNavbar/app-navbar.jsx";
import AppFooter from "./component/footer/app-footer.jsx";
import NextTopLoader from "nextjs-toploader";

const Layout = (props) => {
    return (
        <div>
            <div className="fixed-top mb-5">
                <NextTopLoader
                    color="#2299DD"
                    initialPosition={0.08}
                    crawlSpeed={500}
                    height={3}
                    crawl={true}
                    showSpinner={false}
                    easing="ease"
                    speed={500}
                    shadow="0 0 10px #2299DD,0 0 5px #2299DD"
                    template='<div class="bar" role="bar"><div class="peg"></div></div>
                        <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                    zIndex={1600}
                    showAtBottom={false}
                />
                <AppNavbar />
            </div>
            <div className="">
                {props.children}
                <AppFooter />
            </div>
        </div>
    );
};

export default Layout;