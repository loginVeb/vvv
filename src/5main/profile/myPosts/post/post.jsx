import React from 'react';
import styled from 'styled-components';
import img2 from './img2.jpg';

const SPost = styled.div`
color:red;
font-family: 'tucsononewoff2' ;
`;
const Avatar = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

 const Post = (props) => {
   
  return (
<SPost> 

 <div><Avatar src={img2} alt="ura"/>{props.message} {props.likeCount}</div> 
</SPost>
  );
};

export default Post;