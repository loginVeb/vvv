import React from 'react';
import styled from 'styled-components';
//import Users from './user/user.jsx'

const SMessages = styled.div`
grid-area:1/5/13/13;
background: #cefefe ;
color:green;
font-family:DSMosterwoff ;
border: solid 0.2px blue ;

        &:active {
            color: #ffffff ;
        }


`
 const Messages = () => {
   
let massageData = [
{id:0, massage:'привет'}, 
{id:1, massage:'здрастуйте'}, 
{id:2, massage:'пока'}, 
{id:3, massage:'досвидания'}, 
]
   
  return (
<SMessages>
  <div id={massageData[0].id}>{massageData[0].massage}</div>
  <div id={massageData[1].id}>{massageData[1].massage}</div>
  <div id={massageData[2].id}>{massageData[2].massage}</div>
  <div id={massageData[3].id}>{massageData[3].massage}</div>
 </SMessages>
  );
};

export default Messages;