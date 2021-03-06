import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Projects from '../pages/Projects';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';
import Footer from '../pages/Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  const pdf = "assets/resume.pdf";
  // This method returns the page that has been clicked
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Resume') {
      return <Resume pdf={pdf}/>;
    }
    return <Contact />;
    
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="container">
      {/* // currentPage handlePageChange passing as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // call the renderPage method */}
      <main>
      {renderPage()}
    </main>
    <Footer />
    </div>
  );
}
