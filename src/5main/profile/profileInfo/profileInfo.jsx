import React from 'react';
import styled from 'styled-components';

const SProfileInfo = styled.div`
grid-area:1/1/3/13;
display: grid;
grid-template-columns:repeat(12, 8.333%);  
grid-template-rows:repeat(12, 8.333%); 
background: #cefefe ;
color:green;
font-family:'NameOfYourFontWoff2';
border: solid 0.1px blue ;
`
 const ProfileInfo = () => {
  return (
<SProfileInfo > 
   ProfileInfo
</SProfileInfo>
  );
};

export default ProfileInfo;