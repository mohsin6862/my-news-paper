import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import useTitle from '../../hooks/useTitle';

const Catagory = () => {
    const catagoryNews = useLoaderData()
    const {id}= useParams()
    useTitle('Home')
    return (
        <div>
            {id && <h1>{catagoryNews.length} News in this is Catagory  </h1>}

            {
                catagoryNews.map(singleNews => <NewsCard
                     key={singleNews._id}
                     singleNews={singleNews}>
                        
                     </NewsCard>)
            }

        </div>
    );
};

export default Catagory;