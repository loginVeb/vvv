import React from 'react';
import styled from 'styled-components';
import DiologsContainer from './diologsContainer.jsx';

import Messages from './messages/messages.jsx';
import Textarea from './textarea/textarea.jsx';

import User from './user/user.jsx';

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
let massageData = props.massageData;
  return (
 <SDiologs>
 
 <Messages massageData={massageData}/>
 <Textarea newTextArea={props.newTextArea}/>
 <User diologsData={props.diologsData} />
 
  </SDiologs>
  );
};

export default Diologs;