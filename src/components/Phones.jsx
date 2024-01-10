import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Phones = () => {
    const phones = useLoaderData();
    return (
        <div>
            <h2>All Products here : {phones.length}</h2>

            {
              phones.map(phone => <li key={phone.id}><Link to={`/phone/${phone.id}`}>{phone.title}</Link></li>)
            }
        </div>
    );
};

export default Phones;