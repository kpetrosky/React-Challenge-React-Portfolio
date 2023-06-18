import React from 'react';

function Header({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          style={{ fontSize: '32px' }} // Increase the font size to 24px
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          style={{ fontSize: '32px' }} // Increase the font size to 24px
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          style={{ fontSize: '32px' }} // Increase the font size to 24px
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="https://drive.google.com/file/d/1CEBJCPZzi76wkImKP8I0k9Rcdlk9CZj4/view?usp=sharing"
          target="_blank"
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          style={{ fontSize: '32px' }} // Increase the font size to 24px
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Header;

