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
{id:3, massage:'урааааа'}, 
]
   
let massageDataMap = massageData.map((el) =>{return <div id={el.id}> {el.massage} </div>
  });
   
  return (
<SMessages>
{massageDataMap} 
 </SMessages>
  );
};

export default Messages;