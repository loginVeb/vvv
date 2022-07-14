import React from 'react';
import styled from 'styled-components';

const SsideBar = styled.div`
grid-area:1/1/13/13;
display: grid;
grid-template-columns:repeat(12, 8.333%);  
grid-template-rows:repeat(12, 8.333%); 
background: green ;
color: black ;
font-family:'tucsononewoff2';
border: solid 0.1px blue ;
`
 const SideBar = (props ) => {
  return (
<SsideBar> 
sideBar
</SsideBar>
  );
};

export default SideBar;