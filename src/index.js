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
 dispatch={store.dispatch.bind(store)}/>
 </React.StrictMode>,
 document.getElementById('root') );
};


renderEntireTree(store.getState());
store.subscribe(renderEntireTree)