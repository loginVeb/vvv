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
{id:0, name:'Pavel'}, 
{id:1, name:'Valentina '}, 
{id:2, name:'Anatoliy'}, 
{id:3, name:'Anastasiya'}, 
{id:4, name:'Manya'}, 
];

let diologsDataNev = diologsData.map((el) => {
return <NameUser name={el.name} id={el.id}/>
});
  
return (
<SUsers>
{diologsDataNev} 
 </SUsers>
  );
};

export default Users;