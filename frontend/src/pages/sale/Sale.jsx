import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './sale.css';

const Sale = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:5001/api/sale')
          .then(response => setProperties(response.data))
          .catch(error => console.error('Error fetching properties for sale:', error));
  }, []);

  return (
      <div>
          <h1>Properties for Sale</h1>
          <ul>
              {properties.map(property => (
                  <li key={property.id}>
                      <strong>{property.description}</strong> - ${property.price}
                  </li>
              ))}
          </ul>
      </div>
  );
};

export default Sale;