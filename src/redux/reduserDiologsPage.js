
const UP_TEXTAREA_DIOLOGSPAGE = 'UP_TEXTAREA_DIOLOGSPAGE';
const ADD_WMESSAGE = 'ADD_WMESSAGE';


function reducerDiologsPage(state, action) {

switch(action.type){
  case UP_TEXTAREA_DIOLOGSPAGE:
state.newTextArea = action.newText;
return state;
case ADD_WMESSAGE:
   let addMessage = {
      id: 10,
      massage: state.newTextArea,
    };
    state.massageData.push(addMessage);
    state.newTextArea = '777';
  return state;
default:
 return state;
 };
};


export const creatorUpTextareaDiologsPage = (text) => {
  return {
    type:'UP_TEXTAREA_DIOLOGSPAGE',
    newText:text,
  }
};

 export  const creatorAddMessage = () =>{
  return {
    type:'ADD_WMESSAGE',
  }
};

export default reducerDiologsPage;