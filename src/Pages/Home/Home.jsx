import React from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';
import CategoryCarousel from './CategoryCarousel ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryCarousel></CategoryCarousel>
            <HotJobs></HotJobs>
        </div>
    );
};

export default Home;