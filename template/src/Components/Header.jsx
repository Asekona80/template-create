import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1
        contentEditable
        suppressContentEditableWarning
        className="header-title"
      >
        Asekona Xanywa
      </h1>
      <p
        contentEditable
        suppressContentEditableWarning
      >
        Software Developer
      </p>
      <p
        contentEditable
        suppressContentEditableWarning
      >
        john.doe@example.com | (123) 456-7890 | LinkedIn Profile
      </p>
      <hr className="header-line" />
    </header>
  );
};

export default Header;
