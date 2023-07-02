import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from '../Footer';
import backgroundImage9 from '../images/background/5037711.jpg';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  const divStyle = {
    color: '#1f1300ff',
    backgroundColor: '#e5446dff',
    padding: '20px',
    backgroundImage: `url(${backgroundImage9})`,
  };

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <About />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <div style={divStyle}>
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}
