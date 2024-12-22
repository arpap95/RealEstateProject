import React from 'react';
import Card from '../../components/card/Card'; // Adjust the path as necessary
import './mostVisited.css';

const MostVisitedSection = () => {
  const mostVisitedItems = [
    {
      title: 'Most Visited Homes in 2024',
      description: 'Check out the homes that have been getting the most attention this year.',
      link: '#',
      imageUrl: 'https://via.placeholder.com/150', // Add an image URL if needed
    },
    {
      title: 'Most Popular Listings Near You',
      description: 'Browse the most popular listings in your area for 2024.',
      link: '#',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Best Real Estate Investments to Make',
      description: 'Discover which properties are generating the highest returns for investors.',
      link: '#',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="most-visited-section py-5">
      <div className="container">
        <h2 className="mb-4 text-center">Most Visited</h2>
        <div className="row">
          {mostVisitedItems.map((item, index) => (
            <div className="col-md-4" key={index}>
              <Card
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                link={item.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostVisitedSection;
