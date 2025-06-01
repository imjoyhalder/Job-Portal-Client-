import React from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';
import CategoryCarousel from './CategoryCarousel ';
import AutoPlay from './AutoCarosule/AutoPlay';
import GlobalExhibition from './GlobalExhibition/GlobalExhibition';
import Partners from './Partners/Partners';
import NewsFAQ from './NewsFAQ/NewsFAQ';
import AboutDeji from './AboutDeji/AboutDeji';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryCarousel></CategoryCarousel>
            <HotJobs></HotJobs>
            <AboutDeji></AboutDeji>
             <AutoPlay></AutoPlay>
            <GlobalExhibition></GlobalExhibition>
            <Partners></Partners>
            <NewsFAQ></NewsFAQ>
        </div>
    );
};

export default Home;