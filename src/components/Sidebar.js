import { Button } from '@mui/material';
import React from 'react';
import "./Sidebar.css";
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from './SidebarOption';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';

function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
        startIcon={<AddIcon />}>Compose</Button>
      <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
      <SidebarOption Icon={StarIcon} title="Starred" number={2} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={3} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" />
      <SidebarOption Icon={NearMeIcon} title="Sent" />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={1} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" />

      <div className="sidebar__meet">
        <h3>Meet</h3>
        <SidebarOption Icon={VideocamIcon} title="Join a meeting" />
        <SidebarOption Icon={KeyboardIcon} title="New Meeting" />
      </div>
    </div>
  );
}

export default Sidebar;
