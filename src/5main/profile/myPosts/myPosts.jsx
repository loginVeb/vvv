import React from 'react';
import styled from 'styled-components';

const SMyPost = styled.div`
grid-area:3/1/5/13;
display: grid;
grid-template-columns:repeat(12, 8.333%);  
grid-template-rows:repeat(12, 8.333%); 
background: #cefefe ;
color:green;
font-family:'NameOfYourFontWoff2';
border: solid 0.1px blue ;
`
 const MyPost = () => {
  return (
<SMyPost> 
   MyPost
</SMyPost>
  );
};

export default MyPost;