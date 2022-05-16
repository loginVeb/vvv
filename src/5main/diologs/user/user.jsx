import React from 'react';
import styled from 'styled-components';
import NameUser from './nameUser/nameUser';

const SUsers = styled.div`
grid-area:1/1/13/5;
display:flex;
flex-direction:column;
color:green;
font-family:'NameOfYourFontWoff2' ;
border: solid 0.2px blue ;
`;

const Users = () => {
  

let diologsData = [
{id:1, name:'Pavel'}, 
{id:2, name:'Valentina '}, 
{id:3, name:'Anatoliy'}, 
{id:4, name:'Anastasiya'}, 
];

  
return (
<SUsers>
<NameUser name={diologsData[0].name} id={diologsData[0].id} /> 
<NameUser name={diologsData[1].name} id=   {diologsData[1].id} />
<NameUser name={diologsData[2].name} id={diologsData[2].id} />
<NameUser name={diologsData[3].name} id={diologsData[3].id}/>
 </SUsers>
  );
};

export default Users;