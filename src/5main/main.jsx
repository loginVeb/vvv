import React from 'react';
import styled from 'styled-components';
import { Route } from "react-router-dom";
import Profile from './profile/profile.jsx';
import Diologs from './diologs/diologs.jsx';
import Sidebar from './sidebar/sidebar.jsx';

const SMain = styled.main`
grid-area:2/4/13/13;display: grid;
grid-template-columns:repeat(12, 8.333%);  
grid-template-rows:repeat(12, 8.333%);
background: #cefefe ;
color:red;
  font-family:'NameOfYourFontWoff2' ;
//border: solid 0.2px blue ;
`
const Main = (props) => {
  return (
 <SMain>
 <Route path='/Profile' render={() => <Profile
 store={props.store} 
 profilePage={props.state.profilePage}
 dispatch={props.dispatch}/>} />
 
 <Route path='/diologs' render={() => <Diologs 
 diologsPage={props.state.diologsPage}
 dispatch={props.dispatch}
 store={props.store} />} />
 
  <Route path='/sidebar' render={() => <Sidebar 
 sideBarPage={props.state.sideBarPage}
 dispatch={props.dispatch}
 store={props.store} />} />
 
    </SMain>
  );
};



export default Main;