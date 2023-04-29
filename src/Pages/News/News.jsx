import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';


const News = () => {
  const news = useLoaderData()
  console.log(news)

  const { image_url, _id, details, title,category_id } = news;
  return (
    <Card >
      <Card.Img variant="top" src={image_url}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {details}
        </Card.Text>
       <Link to={`/catagory/${category_id}`}> <Button  variant="danger"> <FaArrowLeft></FaArrowLeft>  Go All News</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default News;