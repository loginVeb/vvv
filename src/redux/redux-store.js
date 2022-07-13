import {combineReducers, createStore} from "redux";
import reducerProfilePage from './reducerProfilePage.js';
import reducerDiologsPage from './reducerDiologsPage.js';

let reducers = combineReducers({
profilePage: reducerProfilePage, 
diologsPage: reducerDiologsPage, 
});
let store = createStore(reducers);

export default store;