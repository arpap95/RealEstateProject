import React from 'react';
import './newsSection.css'; 

const NewsSection = () => {
  const newsItems = [
    {
      title: '5 Tips for First-Time Home Buyers',
      description:
        'Learn how to navigate the housing market and find your dream home with these essential tips.',
      link: '#',
    },
    {
      title: 'Top Neighborhoods to Watch in 2024',
      description:
        'Discover the hottest neighborhoods where everyone wants to live this year.',
      link: '#',
    },
    {
      title: 'How to Secure the Best Mortgage Rates',
      description:
        'Find out what steps you can take to lock in a great mortgage rate for your home purchase.',
      link: '#',
    },
  ];

  return (
    <div className="news-section py-5">
      <div className="container">
        <h2 className="mb-4 text-center">Latest News</h2>
        <div className="row">
          {newsItems.map((news, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{news.title}</h5>
                  <p className="card-text">{news.description}</p>
                  <a href={news.link} className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default NewsSection;

