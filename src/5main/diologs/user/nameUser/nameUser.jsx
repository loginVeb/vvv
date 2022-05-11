import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";


const SNameUser = styled.div`
grid-area:1/1/13/5;
color:green;
font-family:'NameOfYourFontWoff2' ;
//border: solid 3px #ecfffe;
    &:hover {
            color: Black ;
        }
        &:active {
            color: #ffffff ;
        }
`;

const NameLink = styled(NavLink)`
padding:10px;
text-decoration:none;
`;

const NameUser = (props) => {
const patch = '/diologs/' + props.id;
return (
<SNameUser>
<NameLink to={patch} activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>{props.name}</NameLink>
 </SNameUser>
  );
};

export default NameUser;