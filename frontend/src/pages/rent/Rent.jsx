import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './rent.css';

const Rent = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5001/api/rent')
            .then(response => setProperties(response.data))
            .catch(error => console.error('Error fetching properties for rent:', error));
    }, []);

    return (
        <div>
            <h1>Properties for Rent</h1>
            <ul>
                {properties.map(property => (
                    <li key={property.id}>
                        <strong>{property.description}</strong> - ${property.monthly_rent}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Rent;

