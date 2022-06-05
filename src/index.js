import React from 'react';
import ReactDOM from 'react-dom';
import state from './redux/redux.js';
import './index.css';
import App from './App';
import { newPost, unTextArea, subscribe} from './redux/redux.js';

let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} newPost={newPost} unTextArea={unTextArea} />
        </React.StrictMode>,
        document.getElementById('root')
    );
};


renderEntireTree(state);
subscribe(renderEntireTree)