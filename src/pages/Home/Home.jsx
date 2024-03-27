import React from 'react';
import Banner from './Banner';
import OurCoreValues from './OurCoreValues';
import OurProcurement from './OurProcurement';
import WhoWeAre from './WhoWeAre';
import ProductCategories from './ProductCategories';
import FeaturedProducts from './FeaturedProducts';
import BestSellers from './BestSellers';
import BonelessCut from './BonelessCut';
import FrozenItems from './FrozenItems';
import Marinated from './Marinated';
import HowWeDiff from './HowWeDiff';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurCoreValues></OurCoreValues>
            <OurProcurement></OurProcurement>
            <WhoWeAre></WhoWeAre>
            <ProductCategories></ProductCategories>
            <FeaturedProducts></FeaturedProducts>
            <BestSellers></BestSellers>
            <BonelessCut></BonelessCut>
            <FrozenItems></FrozenItems>
            <Marinated></Marinated>
            <HowWeDiff></HowWeDiff>
        </div>
    );
};

export default Home;