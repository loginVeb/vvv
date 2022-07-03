const UP_TEXTAREA_DIOLOGSPAGE = 'UP_TEXTAREA_DIOLOGSPAGE';
const ADD_WMESSAGE = 'ADD_WMESSAGE';


function reducerDiologsPage(state, action) {

  if (action.type === UP_TEXTAREA_DIOLOGSPAGE) {
    state.newTextArea = action.newText;
  }
  else if (action.type === ADD_WMESSAGE) {

    let addMessage = {
      id: 10,
      massage: state.newTextArea,
    };
    state.diologsPage.massageData.push(addMessage);
    state.newTextArea = '777';

  }
};