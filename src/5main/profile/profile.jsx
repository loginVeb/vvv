import React from 'react';
import styled from 'styled-components';
import MyPostsContener from './myPosts/myPostsContener.jsx';
import ProfileInfo from './profileInfo/profileInfo.jsx' ;

const SProfile = styled.div`
grid-area:1/1/13/13;
display: grid;
grid-template-columns:repeat(12, 8.333%);  
grid-template-rows:repeat(12, 8.333%); 
background: #cefefe ;
color:green;
font-family:'tucsononewoff2';
border: solid 0.1px blue ;
`
 const Profile = (props ) => {
  return (
<SProfile> 
<ProfileInfo />
<MyPostsContener store={props.store} />
</SProfile>
  );
};

export default Profile;