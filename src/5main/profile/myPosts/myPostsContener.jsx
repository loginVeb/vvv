
import MyPosts from './myPosts.jsx';
import {creatorUpTextareaProfilePage, creatorAddPost} from '../../../redux/reducerProfilePage.js';
import {connect} from 'react-redux';



   

let mapStateToProps = (state) => {
  return{
    postData: state.profilePage.postData, 
    newTextArea: state.profilePage.newTextArea,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
updataAddPoast : () => {
  let action = creatorAddPost();
  dispatch(action);
   }, 
   
updataNevPostText: (text) => {
let action = creatorUpTextareaProfilePage(text);
dispatch(action);
   }, 
   
  };
}; 
const MyPostsContener = connect(mapStateToProps, mapDispatchToProps
  ) (MyPosts);

export default MyPostsContener;