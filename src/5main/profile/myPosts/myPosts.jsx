import React from 'react';
import styled from 'styled-components';
import Post from './post/post.jsx';
import {creatorUpTextareaProfilePage} from '../../../redux/reduserProfilePage.js'
import {creatorAddPost} from '../../../redux/reduserProfilePage.js'

const SMyPosts = styled.div`
grid-area:3/1/13/13;
display:flex;
flex-direction:column;
color:green;
font-family:'tucsononewoff2';

`



const MyPosts = (props) => {
 
  let postDataNev = props.profilePage.postData.map((el) => {
    return <Post message={el.massage} likeCount={el.likeCount} id={el.id} />
  });

  
  
  let addPost = () => {
  props.dispatch(creatorAddPost());
  }
  
  let onUpPost = (event) => {
    let text = event.target.value;
    props.dispatch(creatorUpTextareaProfilePage(text));
  }

  return (

    <SMyPosts>
      <textarea  value={props.profilePage.newTextArea} onChange={onUpPost}/>
      <button onClick={addPost}>add post</button>
      <div>
        {postDataNev}
      </div>
    </SMyPosts>
  );
};

export default MyPosts;