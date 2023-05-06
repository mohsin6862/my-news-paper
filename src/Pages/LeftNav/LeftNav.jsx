import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [catagories, setCatagories] = useState([]);

    useEffect(()=>{
        fetch('https://my-news-paper-server-mohsin6862.vercel.app/catagories')
        .then(res => res.json())
        .then(data => setCatagories(data))
    },[])

    return (
        <div className='py-5'>
            <h3>All Catagory</h3>
            <div className='py-5'>
              {
                catagories.map(catagory =>   <p key={catagory.id}>
                   <Link to={`/catagory/${catagory.id}`} className=' text-decoration-none text-black '> {catagory.name}</Link>
                    
                    </p>)
              }
            </div>
        </div>
    );
};

export default LeftNav;