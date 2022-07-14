import {combineReducers, createStore} from "redux";

import reducerProfilePage from './reducerProfilePage.js';

import reducerDiologsPage from './reducerDiologsPage.js';

import reducerSideBarPage from './reducerSideBarPage.js';

let reducers = combineReducers({
profilePage: reducerProfilePage, 
diologsPage: reducerDiologsPage, 
sidebarPage: reducerSideBarPage, 
});

let store = createStore(reducers);

export default store;