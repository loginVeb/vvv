import React from 'react';
import styled from 'styled-components';
import DiologsContainer from './diologsContainer.jsx';

const SDiologs = styled.div`
grid-area:1/1/13/13;
display: grid;
grid-template-columns:repeat(12, 8.333%);  
grid-template-rows:repeat(12, 8.333%); 
background: #cefefe ;
color:green;
font-family:'NameOfYourFontWoff2' ;
//border: solid 0.2px blue ;
`
const Diologs = (props) => {

  return (
 <SDiologs>
   <DiologsContainer store = {props.store}/>
  </SDiologs>
  );
};

export default Diologs;