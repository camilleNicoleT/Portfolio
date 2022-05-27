import React from 'react';

//We're extracting the key value pairs from props by giving the href it's current page value
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header class='rounded-xl shadow border p-5 w-100 navbar'>
    <ul className="nav nav-tabs p-5 space-between">
      <li className="nav-item ml-3">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
      
          //this is a Ternary operator that is checking to see if the Home nav-link is active
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
    
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
        
          // Determine whether the About nav link is active or not

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
        <a
          href="#contact"
          // Determine whether the Contact nav link is active or not

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
        <a
          href="#resume"
          // Determine whether the Contact nav link is active or not

          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
   </header>
  );
}

export default NavTabs;
