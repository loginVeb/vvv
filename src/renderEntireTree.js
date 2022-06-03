import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {newPost, unTextArea}  from './redux/redux.js';

export let renderEntireTree = (state) => {
ReactDOM.render(
  <React.StrictMode>
    <App state={state}  newPost={newPost} unTextArea={unTextArea}/>
  </React.StrictMode>,
  document.getElementById('root')
);
};

