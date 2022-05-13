import React from 'react';
import styled from 'styled-components';
import Post from './post/post.jsx';

const SMyPosts = styled.div`
grid-area:3/1/5/13;

display:flex;
flex-direction:column;
color:green;
font-family:'NameOfYourFontWoff2';

`
 const MyPosts = () => {
  return (
<SMyPosts> 
   <textarea>text</textarea>
   <button>add post</button>
    <div>
   <Post message="как дела" likeCount="3"/>
   <Post message="нормально" likeCount="0"/>
</div>
</SMyPosts>
  );
};

export default MyPosts;