import React from 'react';
import '../Notification/notification-module.css';
export const Notification = ({ message }) => {
  return <p className="notification">{message}</p>;
};
