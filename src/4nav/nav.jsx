import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const SNav = styled.nav`
grid-area:2/1/13/4;
display:flex;
flex-direction:column;
background: #cefefe ;
color:red;
font-family:DSMoster.woff ;
border: solid 0.2px blue ;
`
const SNavLink = styled(NavLink)`
margin-top:10px;
margin-left:2px;
text-decoration:none;
`



 const Nav = () => {
  return (
<SNav> 
<SNavLink to="/profile" activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}> profile </SNavLink>
<SNavLink to="/diologs" activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}> diologs </SNavLink>
 </SNav>
  );
};


export default Nav;