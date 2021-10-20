import { Close } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import "./SendMail.css";
import { useForm } from "react-hook-form";
import { closeSendMessage } from '../features/mailSlice';
import { useDispatch } from 'react-redux';
import { db } from '../firebase';
import firebase from 'firebase';

function SendMail() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  
  const onSubmit = (data) => {
    console.log(data, db)
    db.collection("emails").add({
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close 
          onClick={() => dispatch(closeSendMessage())}
          fontSize="small" className="sendMail__close"/>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="to" placeholder="To" 
          {...register("to", {required: true})} autoComplete="off"/>
        {errors.to && <p className="sendMail__error">To is required</p>}
        <input name="subject" placeholder="Subject" type="text" 
          {...register("subject", {required: true})} />
        <textarea name="message" className="sendMail__message"
          {...register("message", {required: true})}/>
        {errors.message && <p className="sendMail__error">Message is required</p>}
        <div className="sendMail__options">
          <Button variant="contained" className="sendMail__send" type="submit">Send</Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail
