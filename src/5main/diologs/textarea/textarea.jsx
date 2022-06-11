import React from 'react';
import styled from 'styled-components';
//import Users from './user/user.jsx'
import {reatorUpTextareaDiologsPage} from '../../../redux/redux.js'
import {reatorAddMessage} from '../../../redux/redux.js'


const STextareaDiv = styled.div`
grid-area:7/1/11/13;
display: grid;
grid-template-columns:repeat(12, 8.333%);  
grid-template-rows:repeat(12, 8.333%);
background: #cefefe ;
color:green;
font-family:DSMosterwoff ;
border: solid 0.2px blue ;
background: #cefefe ;
`
const Stextarea = styled.textarea`
grid-area:1/1/10/13;
border: solid 0.2px blue ;
background: #cefefe ;
`
const Sbutton = styled.button`
grid-area:10/1/13/4;
border: solid 0.2px blue ;
border-radius:15px;
` 



const TextareaDiv = (props) => {
  
let upChange = (event) => {
  let text = event.target.value;
 props.dispatch(reatorUpTextareaDiologsPage(text)) ;
};

 let addMessage = () => {
  props.dispatch(reatorAddMessage());
  }

  return (
    <STextareaDiv>
   
 <Stextarea onChange={upChange} 
 value={props.diologsPage.newTextArea}></Stextarea>
      
  <Sbutton onClick={addMessage}>
  Отправить 
  </Sbutton>
    </STextareaDiv>
  );
};

export default TextareaDiv;