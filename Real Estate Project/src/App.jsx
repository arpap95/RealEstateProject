import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/navbar/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

