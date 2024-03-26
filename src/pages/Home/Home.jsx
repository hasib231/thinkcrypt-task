import React from 'react';
import Banner from './Banner';
import OurCoreValues from './OurCoreValues';
import OurProcurement from './OurProcurement';
import WhoWeAre from './WhoWeAre';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurCoreValues></OurCoreValues>
            <OurProcurement></OurProcurement>
            <WhoWeAre></WhoWeAre>
        </div>
    );
};

export default Home;