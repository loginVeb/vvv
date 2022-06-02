import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {newPost}  from './redux/redux.js';

export let renderEntireTree = (state) => {
ReactDOM.render(
  <React.StrictMode>
    <App state={state}  newPost={newPost}/>
  </React.StrictMode>,
  document.getElementById('root')
);
};

