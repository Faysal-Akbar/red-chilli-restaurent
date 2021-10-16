import React, { useEffect, useState } from 'react';
import Dinner from './Dinner';

const Dinners = () => {
    const [dinners, setDinners] = useState([]);

    useEffect(()=> {
        fetch('./dinner.json')
        .then(response => response.json())
        .then(data => setDinners(data))
    }, [])
    return (
        <div id="dinner">
            <h2 className="text-danger">Our Dinner Items</h2>
            <div className="row m-5">
                {
                    dinners.map(dinner => <Dinner
                        key={dinner.id}
                        dinner = {dinner}
                    ></Dinner>)
                }
            </div>
        </div>
    );
};

export default Dinners;