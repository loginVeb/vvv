import React from 'react';
import styled from 'styled-components';
//import Users from './user/user.jsx'

const SMessages = styled.div`
grid-area:1/7/7/13;
background: #cefefe ;
color:green;
font-family:DSMosterwoff ;
border: solid 0.2px blue ;

        &:active {
            color: #ffffff ;
        }


`
 const Messages = (props) => {
   

   
let massageDataMap = props.massageData.map((el) =>{return <div id={el.id}> {el.massage} </div>
  });
   
  return (
<SMessages>
{massageDataMap} 
 </SMessages>
  );
};

export default Messages;