import React from 'react';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

const Header = () => {
  return (
    <div className="header">
      <h1>
        <PlaylistAddCheckIcon className="header-icon" htmlColor="#fff" fontSize="large" />
        Todo List
      </h1>
    </div>
  );
};

export default Header;
