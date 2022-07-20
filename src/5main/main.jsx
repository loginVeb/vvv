import React from 'react';
import styled from 'styled-components';
import { Route } from "react-router-dom";
import Profile from './profile/profile.jsx';
import Diologs from './diologs/diologs.jsx';
//import Sidebar from './sidebar/sidebar.jsx';

const SMain = styled.main`
grid-area:2/4/13/13;display: grid;
grid-template-columns:repeat(12, 8.333%);  
grid-template-rows:repeat(12, 8.333%);
background: #cefefe ;
color:red;
  font-family:'NameOfYourFontWoff2' ;
//border: solid 0.2px blue ;
`
const Main = () => {
  return (
 <SMain>
 
 <Route path='/Profile' render={() => <Profile />
}/>

 <Route path='/diologs' render={() => <Diologs />} />
 {/*
  <Route path='/sidebar' render={() => <Sidebar store={props.store} />} />
 */} 
    </SMain>
  );
};



export default Main;