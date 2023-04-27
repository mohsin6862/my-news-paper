import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
           <div className='text-center my-5'>
           <img src={logo} alt="" />
            <h6 className='mt-2'>Journalism Without Fear or Favour</h6>
            <p >{moment().format("dddd, MMMM D, YYYY")}</p>
           </div>
        </div>
    );
};

export default Header;