const UP_TEXTAREA_DIOLOGSPAGE = 'UP_TEXTAREA_DIOLOGSPAGE';
const ADD_WMESSAGE = 'ADD_WMESSAGE';

let initialState ={
  diologsData: [
            { id: 0, name: 'Pavel' },
            { id: 1, name: 'Valentina ' },
            { id: 2, name: 'Anatoliy' },
            { id: 3, name: 'Anastasiya' },
        ],

        massageData: [
            { id: 0, massage: 'привет' },
            { id: 1, massage: 'здрастуйте' },
            { id: 2, massage: 'пока' },
            { id: 3, massage: 'досвидания' },
        ], 
        newTextArea:'сообщение2',
};

function reducerDiologsPage(state = initialState , action) {

switch(action.type){
  case UP_TEXTAREA_DIOLOGSPAGE:{
  let stateCopy = {...state} ;
stateCopy.newTextArea = action.newText;
return stateCopy;
} 
case ADD_WMESSAGE:
   let addMessage = {
      id: 10,
      massage: state.newTextArea,
    };
    let stateCopy = {...state} ;
stateCopy.massageData = [...state.massageData] ;
    stateCopy.massageData.push(addMessage);
    stateCopy.newTextArea = '777';
  return stateCopy;
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