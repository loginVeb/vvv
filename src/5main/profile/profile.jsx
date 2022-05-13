import React from 'react';
import styled from 'styled-components';
import MyPosts from './myPosts/myPosts.jsx';
import ProfileInfo from './profileInfo/profileInfo.jsx' ;

const SProfile = styled.div`
grid-area:1/1/13/13;
display: grid;
grid-template-columns:repeat(12, 8.333%);  
grid-template-rows:repeat(12, 8.333%); 
background: #cefefe ;
color:green;
font-family:'NameOfYourFontWoff2';
border: solid 0.1px blue ;
`
 const Profile = () => {
  return (
<SProfile> 
<ProfileInfo/>
   <MyPosts/>
</SProfile>
  );
};

export default Profile;