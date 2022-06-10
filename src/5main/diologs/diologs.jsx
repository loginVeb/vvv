import React from 'react';
import styled from 'styled-components';
import Users from './user/user.jsx';
import Messages from './messages/messages';
import TextareaDiv from './textarea/textarea';

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
      <Users diologsData={props.diologsPage.diologsData} />

      <Messages massageData={props.diologsPage.massageData} />

      <TextareaDiv diologsPage={props.diologsPage}
 dispatch={props.dispatch}
 store={props.store}/>

    </SDiologs>
  );
};

export default Diologs;