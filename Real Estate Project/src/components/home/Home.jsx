import "./home.css";
import React from 'react';
import SearchSection from '../SearchSection/SearchSection';
import NewsSection from '../NewsSection/NewsSection';
import MostVisited from '../mostVisitedSection/MostVisited';

const Home = () => {
  return (
    <div>
      <SearchSection />
      <MostVisited/>
      <NewsSection />
      
    </div>
  );
};

export default Home;
