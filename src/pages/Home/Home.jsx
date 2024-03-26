import React from 'react';
import Banner from './Banner';
import OurCoreValues from './OurCoreValues';
import OurProcurement from './OurProcurement';
import WhoWeAre from './WhoWeAre';
import ProductCategories from './ProductCategories';
import Footer from '../../shared/Footer';
import FeaturedProducts from './FeaturedProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurCoreValues></OurCoreValues>
            <OurProcurement></OurProcurement>
            <WhoWeAre></WhoWeAre>
            <ProductCategories></ProductCategories>
            <FeaturedProducts></FeaturedProducts>
            <Footer></Footer>
        </div>
    );
};

export default Home;