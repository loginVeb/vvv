import React from 'react';
import styled from 'styled-components';
import Post from './post/post.jsx';

const SMyPosts = styled.div`
grid-area:3/1/13/13;

display:flex;
flex-direction:column;
color:green;
font-family:'tucsononewoff2';

`
 const MyPosts = () => {
   
let postData = [
{id:0, massage:'как дела друг', likeCount:152}, 
{id:1, massage:'нормально', likeCount:15}, 
]
   
  return (
<SMyPosts> 
   <textarea>text</textarea>
   <button>add post</button>
    <div>
   <Post message={postData[0].massage} likeCount={postData[0].likeCount} id={postData[0].id}/>
     <Post message={postData[1].massage} likeCount={postData[1].likeCount} id={postData[1].id}/>
</div>
</SMyPosts>
  );
};

export default MyPosts;