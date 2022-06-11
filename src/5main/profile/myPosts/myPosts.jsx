import React from 'react';
import styled from 'styled-components';
import Post from './post/post.jsx';
import {reatorUpTextareaProfilePage} from '../../../redux/redux.js'
import {reatorAddPost} from '../../../redux/redux.js'

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
  props.dispatch(reatorAddPost());
  }
  
  let onUpPost = (event) => {
    let text = event.target.value;
    props.dispatch(reatorUpTextareaProfilePage(text));
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