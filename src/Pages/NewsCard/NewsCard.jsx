import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBookmark, FaEye, FaGoogle, FaRegStar, FaShare, FaShareAlt, FaStar, } from 'react-icons/fa';
import ReactStars from "react-rating-stars-component";
const NewsCard = ({singleNews}) => {
    const {_id,title,details,image_url,author,rating,total_view}=singleNews;
    console.log(singleNews)
    return (
        <Card className="mb-4">
        <Card.Header className='d-flex align-items-center'> 
        
        <Image style={{height:'40px'}} src={author?.img} roundedCircle />
        <div className=' ps-2 flex-grow-1 '>
          <p className='mb-0'>{author?.name}</p>
          <p><small>{moment(author?.published_date).format('D-MMM-YYYY')} </small></p>
        </div>
        <div>
          <FaBookmark/>
          <FaShareAlt></FaShareAlt>
        </div>
            </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
          <Card.Img variant="top" src={image_url} />
            {details.length < 250? <>{details}</> : <> {details.slice(0,250)}... <Link to={`/news/${_id}`}>Read More</Link></>}
          </Card.Text>
          
        </Card.Body>
        <Card.Footer className="text-muted d-flex">
          <div className='flex-grow-1 '>
           <span className='d-flex '>
           <ReactStars
          
           placeholderRating={rating.number}
           readonly
           emptySymbol={<FaRegStar></FaRegStar>}
           
           fullSymbol={<FaStar className='text-warning'></FaStar>}
           ></ReactStars> 
            {rating?.number}
            </span> 
          </div>
          <div>
            <span>
              <FaEye className='me-2'></FaEye>
              {total_view}
            </span>
          </div>
        </Card.Footer>
      </Card>
    );
};

export default NewsCard;