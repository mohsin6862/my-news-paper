import React from 'react';
import { useParams } from 'react-router-dom';

const Catagory = () => {
    const {id}= useParams()
    return (
        <div>
            <h1>This is Catagory {id} </h1>
        </div>
    );
};

export default Catagory;