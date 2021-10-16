import React from 'react';
import Banner from '../Banner/Banner';
import Breakfasts from '../Breakfasts/Breakfasts';
import Dinners from '../Dinner/Dinners';
import Lunches from '../Lunch/Lunches';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Breakfasts></Breakfasts>
            <Lunches></Lunches>
            <Dinners></Dinners>
        </div>
    );
};

export default Home;