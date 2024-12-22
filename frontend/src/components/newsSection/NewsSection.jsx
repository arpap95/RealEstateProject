import React from 'react';
import Card from '../../components/card/Card'; // Adjust the path as necessary
import './newsSection.css';

const NewsSection = () => {
  const newsItems = [
    {
      title: '5 Tips for First-Time Home Buyers',
      description:
        'Learn how to navigate the housing market and find your dream home with these essential tips.',
      link: '#',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Top Neighborhoods to Watch in 2024',
      description:
        'Discover the hottest neighborhoods where everyone wants to live this year.',
      link: '#',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'How to Secure the Best Mortgage Rates',
      description:
        'Find out what steps you can take to lock in a great mortgage rate for your home purchase.',
      link: '#',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="news-section py-5">
      <div className="container">
        <h2 className="mb-4 text-center">Latest News</h2>
        <div className="row">
          {newsItems.map((news, index) => (
            <div className="col-md-4" key={index}>
              <Card
                title={news.title}
                description={news.description}
                imageUrl={news.imageUrl}
                link={news.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
