import React from 'react';
import styled from 'styled-components';
import NameUser from './nameUser/nameUser';

const SUsers = styled.div`
grid-area:1/1/13/5;
display:flex;
flex-direction:column;
color:green;
font-family:DSMoster.woff ;
border: solid 0.2px blue ;
`;

const Users = () => {
return (
<SUsers>
<NameUser name="Pavel" id="1"/> 
<NameUser name="Valentina" id="2"/>
<NameUser name="Anatoliy" id="3"/>
<NameUser name="Valentina" id="4"/>
 </SUsers>
  );
};

export default Users;