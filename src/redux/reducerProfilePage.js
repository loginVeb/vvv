const ADD_POST = 'ADD_POST';
const UP_TEXTAREA_PROFILEPAGE = 'UP_TEXTAREA_PROFILEPAGE';


 function reducerProfilePage(state, action) {
switch(action.type ){
  case ADD_POST:
 let addPost = {
            id: 0,
            massage: state.newTextArea,
            likeCount: 100,
        };
        state.postData.push(addPost);
        state.newTextArea = '333 ';
        return state ;
        case UP_TEXTAREA_PROFILEPAGE:
  state.newTextArea = action.newText;
  return state ;
  default :
  return state ;
};
};


 export const creatorAddPost = () =>{
  return {
    type:'ADD_POST',
  };
};

export  const creatorUpTextareaProfilePage = (text) =>{
  return {
    type:'UP_TEXTAREA_PROFILEPAGE',
    newText:text,
  };
};

export default reducerProfilePage;