import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";


const SNameUser = styled.div`
grid-area:1/1/13/5;
color:green;
font-family:DSMoster.woff ;
//border: solid 3px #ecfffe;
    &:hover {
            color: Black ;
        }
        &:active {
            color: #ffffff ;
        }
`;

const NameLink = styled(NavLink)`
pading:10px;
text-decoration:none;
`;

const NameUser = (props) => {
return (
<SNameUser>
<NameLink to={'/diologs/' + props.id} activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>{props.name}</NameLink>
 </SNameUser>
  );
};

export default NameUser;