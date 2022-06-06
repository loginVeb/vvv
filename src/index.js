import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux.js';
import './index.css';
import App from './App';

let renderEntireTree = (state ) => {
 // alert(props.store);
 ReactDOM.render(
<React.StrictMode>
 <App state={state} 
 newPost={store.newPost.bind(store)} 
 unTextArea={store.unTextArea.bind(store)} />
 </React.StrictMode>,
 document.getElementById('root') );
};


renderEntireTree(store.getState());
store.subscribe(renderEntireTree)