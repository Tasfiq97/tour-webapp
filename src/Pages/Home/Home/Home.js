import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
import Destinations from '../../Destinations/Destinations';
import Offer from '../../Offer/Offer';
import Tours from '../../Services/Tours';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Destinations></Destinations>
            <Offer></Offer>
            <Tours></Tours>
            
        </div>
    );
};

export default Home;