import React from 'react';
import Users from './user/user.jsx';
import Messages from './messages/messages';
import TextareaDiv from './textarea/textarea';

import {creatorUpTextareaDiologsPage, creatorAddMessage} from '../../redux/reducerDiologsPage.js';



const DiologsContainer = (props) => {

let diologsData = props.store.getState().diologsPage.diologsData ;

let massageData = props.store.getState().diologsPage.massageData ;

let newTextArea = props.store.getState().diologsPage.newTextArea ;

  let updataAddMessage = () => {
  props.store.dispatch(creatorAddMessage());
  }
  
  let updataTextareaDiologs = (text ) => {
  props.store.dispatch(creatorUpTextareaDiologsPage(text));
  }

  return (
    <>
<Users diologsData={diologsData} />

<Messages massageData={massageData} />

<TextareaDiv updataTextareaDiologs={updataTextareaDiologs}
 updataAddMessage={updataAddMessage} 
 newTextArea={newTextArea} 
  />
 </>
  );
};

export default DiologsContainer ;