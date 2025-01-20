import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import Card from '../../components/card/Card';
import './rent.css';

const Rent = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5001/api/rent')
      .then((response) => {
        setProperties(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching properties for rent');
        setLoading(false);
        console.error('Error fetching properties for rent:', error);
      });
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <Container>
      <h1 className="my-4">Properties for Rent</h1>
      <Row>
        {properties.map((property) => (
          <Col key={property.id} sm={12} md={6} lg={4} className="mb-4">
            <Card
              title={property.description}
              description={`Location: ${property.location}`}
              price={`Monthly Rent: $${property.monthly_rent}`}
              imageUrl={property.imageUrl}
              link={`/properties/${property.id}`}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Rent;
