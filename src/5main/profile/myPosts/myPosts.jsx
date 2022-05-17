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
 const MyPosts = (props ) => {
   
let postDataNev = props.redux.postData.map((el) => {
 return <Post message={el.massage} likeCount={el.likeCount} id={el.id}/>
});
   
  return (
<SMyPosts> 
   <textarea>text</textarea>
   <button>add post</button>
    <div>
   {postDataNev} 
</div>
</SMyPosts>
  );
};

export default MyPosts;