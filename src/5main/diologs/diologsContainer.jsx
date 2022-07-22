
import Diologs from './diologs.jsx';

import {creatorUpTextareaDiologsPage, creatorAddMessage} from '../../redux/reducerDiologsPage.js';

import {connect} from 'react-redux';


let mapStateToProps = (state) => {
  return {
  diologsData: state.diologsPage.diologsData , 
  massageData: state.diologsPage.massageData, 
  newTextArea: state.diologsPage.newTextArea, 
   }
  };


let mapDispatchToProps = (dispatch) => {
  return {
  updataAddMessage : () => {
  dispatch(creatorAddMessage());
  }, 
 
  updataTextareaDiologs : (text ) => {
  dispatch(creatorUpTextareaDiologsPage(text))
  }, 
  };
}; 


const DiologsContainer = 
connect(mapStateToProps, mapDispatchToProps
  ) (Diologs);


export default DiologsContainer ;