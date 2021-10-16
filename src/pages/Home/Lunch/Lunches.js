import React, { useEffect, useState } from 'react';
import Lunch from './Lunch';

const Lunches = () => {
    const [lunches, setLunches] = useState([]);

    useEffect(()=> {
        fetch('./lunch.json')
        .then(response => response.json())
        .then(data => setLunches(data))
    }, [])
    return (
        <div id="lunch">
           <h2 className="text-danger">Our Lunch Items</h2>
           <div className="row m-5">
               {
                   lunches.map(lunch => <Lunch
                    key={lunch.id}
                    lunch={lunch}
                   ></Lunch>)
               }
           </div>
        </div>
    );
};

export default Lunches;