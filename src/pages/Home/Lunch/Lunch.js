import React from 'react';
import { Link } from 'react-router-dom';

const Lunch = (props) => {
    const {id, name, price, rating, image, description} = props.lunch;
    return (
        <div className="col-lg-4">
            <div className="bg-danger pb-2 mb-4 rounded">
                <img style={{width: "100%", height: "350px", marginBottom:"10px"}} src={image} alt="" />
                <div style={{textAlign:'start', paddingLeft:"30px", color:"white"}}>
                    <h3 className="text-warning fw-bold">{name}</h3>
                    <h5>Price : ${price}</h5>
                    <h6>Ratings : {rating}</h6>
                    <h6>{description}</h6>
                </div>
                <Link to={`/lunch/${id}`}>
                <button className="btn btn-warning">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Lunch;