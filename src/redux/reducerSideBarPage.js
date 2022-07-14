const SIDE_BAR = 'SIDE_BAR';

let initialState = {
sideBarData: [
          
        ],
};


 function reducerSideBarPage( state = initialState , action) {
switch(action.type ){
  case SIDE_BAR:
    
  return state ; 
default :
  return state ;
};
};


 

export const creatorSideBarPage = () =>{
  return {
    
  };
};

export default reducerSideBarPage;