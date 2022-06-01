import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state  from './redux/redux.js';
import {newPost}  from './redux/redux.js';




ReactDOM.render(
  <React.StrictMode>
    <App state={state}  newPost={newPost}/>
  </React.StrictMode>,
  document.getElementById('root')
);
