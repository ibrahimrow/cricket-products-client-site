import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {

    const phone = useLoaderData();
    console.log(phone)
    return (
        <div>
            <h2>{phone.title}</h2>
            <img className='' src={phone.image} alt="" />
            <p>Price- {phone.price}</p>
            <button>{phone.button2}</button>
        </div>
    );
};

export default Phone;