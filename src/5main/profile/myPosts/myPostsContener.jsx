import React from 'react';
import MyPosts from './myPosts.jsx'
import {creatorUpTextareaProfilePage} from '../../../redux/reducerProfilePage.js';
import {creatorAddPost} from '../../../redux/reducerProfilePage.js';

const MyPostsContener = (props) => {

let state = props.store.getState().profilePage ;

  let updataAddPoast = () => {
  props.store.dispatch(creatorAddPost());
  }
  
  let updataNevPostText = (text ) => {
  props.store.dispatch(creatorUpTextareaProfilePage(text));
  }

  return (
    <MyPosts 
    updataNevPostText={updataNevPostText}
    updataAddPoast={updataAddPoast} 
    state={state} 
    />
  )
};

export default MyPostsContener;