import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import "./SendMail.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "../config/firebase";
import firebase from "firebase";
import { selectuser } from "../features/userSlice";

const SendMail = () => {
  const { register, handleSubmit, errors } = useForm();

  const user = useSelector(selectuser);

  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      from: user?.email,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New message</h3>
        <Close
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          type="email"
          placeholder="To"
          ref={register({ required: true })}
        />
        {errors.to && (
          <p className="sendMail__error">To mail id is required.</p>
        )}
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          ref={register({ required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is required.</p>
        )}
        <input
          name="message"
          type="text"
          className="sendMail__message"
          ref={register({ required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">Message is required.</p>
        )}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
