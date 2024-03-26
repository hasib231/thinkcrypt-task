import React from 'react';
import Banner from './Banner';
import OurCoreValues from './OurCoreValues';
import OurProcurement from './OurProcurement';
import WhoWeAre from './WhoWeAre';
import ProductCategories from './ProductCategories';
import Footer from '../../shared/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurCoreValues></OurCoreValues>
            <OurProcurement></OurProcurement>
            <WhoWeAre></WhoWeAre>
            <ProductCategories></ProductCategories>
            <Footer></Footer>
        </div>
    );
};

export default Home;