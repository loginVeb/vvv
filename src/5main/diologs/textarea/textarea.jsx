import React from 'react';
import styled from 'styled-components';
//import Users from './user/user.jsx'

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
let newPost = React.createRef();

let addPost = () => {

  let text = newPost.current.value;
  alert(text);
};

const TextareaDiv = () => {

  return (
    <STextareaDiv>
      <Stextarea ref={newPost}>777</Stextarea>
      <Sbutton onClick={addPost}>Отправить </Sbutton>
    </STextareaDiv>
  );
};

export default TextareaDiv;