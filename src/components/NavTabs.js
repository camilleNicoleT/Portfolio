import React from 'react';

//We're extracting the key value pairs from props by giving the href it's current page value
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header class='rounded-xl flex justify-between shadow border m-4 p-5 w-100 navbar'>
    <ul className="nav nav-tabs p-5 m-4 flex justify-between">
      <li className="nav-item ml-5 flex justify-center">
        <a 
          href="#home"
          
          onClick={() => handlePageChange('Home')}
      
          //this is a Ternary operator that is checking to see if the Home nav-link is active
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} 
        >
          Home
        </a>
     </li>
     <li className="nav-item ml-5 flex justify-center">
        <a class="p-5"
          href="#about"
          onClick={() => handlePageChange('About')}
        
          // Determine whether the About nav link is active or not

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} 
        >
          About
                </a>
        </li>
        <li className="nav-item ml-5 flex justify-center">
        <a class="p-5"
          href="#contact"
          // Determine whether the Contact nav link is active or not

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} 
        > 
        Contact
        </a>
        </li>
        <li className="nav-item ml-5 flex justify-center">
        <a class="p-5"
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
