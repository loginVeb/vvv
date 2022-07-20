import React from 'react';
import Users from './user/user.jsx';
import Messages from './messages/messages';
import TextareaDiv from './textarea/textarea';

import {creatorUpTextareaDiologsPage, creatorAddMessage} from '../../redux/reducerDiologsPage.js';

import StoreContext from '../../storeContext.jsx';

const DiologsContainer = (props) => {
return <StoreContext.Consumer>
{ (store) => {
let diologsData = store.getState().diologsPage.diologsData ;

let massageData = store.getState().diologsPage.massageData ;

let newTextArea = store.getState().diologsPage.newTextArea ;

  let updataAddMessage = () => {
  store.dispatch(creatorAddMessage());
  }
  
  let updataTextareaDiologs = (text ) => {
  store.dispatch(creatorUpTextareaDiologsPage(text));
  }

  return <>
<Users diologsData={diologsData} />

<Messages massageData={massageData} />

<TextareaDiv updataTextareaDiologs={updataTextareaDiologs}
 updataAddMessage={updataAddMessage} 
 newTextArea={newTextArea} 
  />
 </>
   } 
 } 
  </StoreContext.Consumer>
};


export default DiologsContainer ;