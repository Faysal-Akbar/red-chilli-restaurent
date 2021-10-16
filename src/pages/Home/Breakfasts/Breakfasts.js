import React, { useEffect, useState } from 'react';
import Breakfast from './Breakfast';

const Breakfasts = () => {
        const [breakfasts, setBreakfasts] = useState([]);

        useEffect( ()=> {
            fetch('./breakfast.json')
            .then(response => response.json())
            .then(data => setBreakfasts(data))
            }, []);

    return (
        <div id="breakfast">
            <h2 className="text-danger">Our Breakfast Items</h2>
            <div className="row m-5">
            {
                breakfasts.map(breakfast => <Breakfast
                    key={breakfast.id}
                    breakfast = {breakfast}
                ></Breakfast>)
            }
            </div>
        </div>
    );
};

export default Breakfasts;