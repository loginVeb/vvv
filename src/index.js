import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {diologsData, massageData, postData} from './redux/redux.js';
ReactDOM.render(
  <React.StrictMode>
    <App diologsData={diologsData} massageData={massageData} postData={postData} />
  </React.StrictMode>,
  document.getElementById('root')
);
