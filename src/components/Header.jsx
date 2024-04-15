import React from 'react';
import HighlightIcon from '@mui/icons-material/Highlight';

const Header = () => {
  return (
    <div className="header">
      <h1>
        <HighlightIcon fill="black" />
        Todo List
      </h1>
    </div>
  );
};

export default Header;
