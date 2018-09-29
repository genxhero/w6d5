import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';

document.addEventListener("DOMContentLoaded",() => {
  console.log("page loading");
  const root = document.getElementById('root');
  ReactDOM.render(
    <Clock />,
    root);
});
