import React from 'react';
import styled from 'styled-components';


const SPost = styled.div`

`
 const Post = (props) => {
  return (
<SPost> 
   {props.message} {props.likeCount} 
</SPost>
  );
};

export default Post;