import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [catagories, setCatagories] = useState([]);

    useEffect(()=>{
        fetch('catagoryData.js')
        .then(res => res.json())
        .then(data => setCatagories(data))
    },[])

    return (
        <div>
            <h3>All Catagory</h3>
            <div>
                {
                    catagories.map(catagory => <Link> catagory.name</Link>)
                }
            </div>
        </div>
    );
};

export default LeftNav;