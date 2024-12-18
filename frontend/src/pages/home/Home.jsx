import "./home.css";
import React from 'react';
import SearchSection from '../../components/searchSection/SearchSection';
import NewsSection from '../../components/newsSection/NewsSection';
import MostVisited from '../../components/mostVisitedSection/MostVisited';

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