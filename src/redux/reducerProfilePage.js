const ADD_POST = 'ADD_POST';
const UP_TEXTAREA_PROFILEPAGE = 'UP_TEXTAREA_PROFILEPAGE';



let initialState = {
postData: [
            { id: 0, massage: 'как дела ', likeCount: 3 },
            { id: 1, massage: 'нормально', likeCount: 15 },
        ],

        newTextArea:'сообщение',
};


 function reducerProfilePage( state = initialState , action) {
switch(action.type ){
  case ADD_POST: {
    let addPost = {
            id: 0,
            massage: state.newTextArea,
            likeCount: 100,
        };
        let stateCopy = {...state} ;
        stateCopy.postData = [...state.postData] ;
        stateCopy.postData.push(addPost);
        stateCopy.newTextArea = 'ура ';
        return stateCopy ;
  } 
case UP_TEXTAREA_PROFILEPAGE:
   let stateCopy = {...state} ;
  stateCopy.newTextArea = action.newText;
  return stateCopy ; 
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