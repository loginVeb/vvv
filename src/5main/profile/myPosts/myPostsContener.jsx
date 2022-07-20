import React from 'react';
import MyPosts from './myPosts.jsx';
import {creatorUpTextareaProfilePage, creatorAddPost} from '../../../redux/reducerProfilePage.js';
import StoreContext from '../../../storeContext.jsx';


const MyPostsContener = () => {
  return <StoreContext.Consumer>
   { (store) => { 
let state = store.getState().profilePage ;

  let updataAddPoast = () => {
  store.dispatch(creatorAddPost());
  }
  
   let updataNevPostText = (text ) => {
  store.dispatch(creatorUpTextareaProfilePage(text));
  }

   
   return <MyPosts 
    updataNevPostText={updataNevPostText}
    updataAddPoast={updataAddPoast} 
    state={state} 
    />
    }
   }
  </StoreContext.Consumer>
};

export default MyPostsContener;