import React from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';
import { Avatar, IconButton } from '@mui/material';
import gmailLogo from "../assets/images/gmail_logo.png";
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Header.css";
import HelpIcon from '@mui/icons-material/Help';
import AppsIcon from '@mui/icons-material/Apps';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <ReorderIcon />
        </IconButton>
        <img src={gmailLogo} alt="logo" />
      </div>

      <div className="header__middle">
        <div className="search_mail">
          <IconButton>
            < SearchIcon />
          </IconButton>
          <input type="text" placeholder="Search mail" />
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>

      <div className="header__right">
        <IconButton>
          <HelpIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  )
}

export default Header
