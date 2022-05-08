import React from 'react';
import styled from 'styled-components';
import { device } from './@media';
import GlobalFonts from './Fonts/Fonts';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './3Header/Header';
import Nav from './4nav/nav.jsx';
import Main from './5main/main.jsx';

const StyleAppWrapper = styled.div`
display: grid;
grid-template-columns:repeat(12, 8.333%);  
grid-template-rows:repeat(12, 55px); 
background: #cccccc ;
color:red;
  font-family:DSMoster.woff ;
@media ${device.mobileM} { 
border: solid 1px blue;
}
`

function App() {
  return (
<BrowserRouter >
<StyleAppWrapper>
<GlobalFonts />
<Route path='/' render={() => <Header />} />
<Route path='/' render={() => < Nav/>} />
<Route path='/' render={() => <Main/>} />
</StyleAppWrapper>
</BrowserRouter>
  );
};



export default App;
//npm start