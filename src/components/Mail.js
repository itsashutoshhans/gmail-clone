import { IconButton } from '@mui/material'
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "./Mail.css";
import { LabelImportant } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { selectOpenMail } from '../features/mailSlice';

function Mail() {
  const history = useHistory();
  const selectedMail = useSelector(selectOpenMail);
  const { subject, title, description, time  } = selectedMail;
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <div>
            1 of 97
          </div>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>{subject}</h2>
          <LabelImportant className="mail__important"/> 
          <p className="mail__title">{title}</p>
          <p className="mail__time">{time}</p>
        </div>
        <div className="mail__message">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Mail
