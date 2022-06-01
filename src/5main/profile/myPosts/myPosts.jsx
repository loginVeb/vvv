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



const MyPosts = (props) => {
 


 

  let postDataNev = props.postData.map((el) => {
    return <Post message={el.massage} likeCount={el.likeCount} id={el.id} />

  });

  let linkRef = React.createRef();
  


  let addPost = () => {
    let text = linkRef.current.value;
  props.newPost(text);
  }

  return (

    <SMyPosts>
      <textarea ref={linkRef}>text</textarea>
      <button onClick={addPost}>add post</button>
      <div>
        {postDataNev}
      </div>
    </SMyPosts>
  );
};

export default MyPosts;