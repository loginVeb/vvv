
let store ={
_state:{
    profilePage: {
        postData: [
            { id: 0, massage: 'как дела ', likeCount: 3 },
            { id: 1, massage: 'нормально', likeCount: 15 },
        ],

        newTextArea:'сообщение',
    },

    diologsPage: {
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
    }
}, 
getState(){
  return this._state;
}, 
_renderEntireTree(){
  
}, 
subscribe(renderEntireTree){
this._renderEntireTree = renderEntireTree;
}, 
/*
newPost(){
let addPost ={
id: 0,
massage: this.profilePage.newTextArea,
likeCount: 100,
  }
this._state.profilePage.postData.push(addPost);
this._state.profilePage.newTextArea = ' ';
this._renderEntireTree(this._state) ;
}, 

unTextArea(text){
this._state.profilePage.newTextArea = text;
this._renderEntireTree(this._state) ;
}, */

dispatch(action){
  if(action.type === 'ADD_POST'){
let addPost ={
id: 0,
massage:this._state.profilePage.newTextArea,
likeCount: 100,
  }
this._state.profilePage.postData.push(addPost);
this._state.profilePage.newTextArea = '333 ';
this._renderEntireTree(this._state) ;
  }
else if(action.type === 'UP_TEXTAREA_PROFILEPAGE'){
this._state.profilePage.newTextArea = action.newText;
this._renderEntireTree(this._state) ;
  }
  else if(action.type === 'UP_TEXTAREA_DIOLOGSPAGE'){
this._state.diologsPage.newTextArea = action.newText;
this._renderEntireTree(this._state) ;
}
else if(action.type === 'ADD_WMESSAGE'){
  
let addMessage ={
id:10,
massage: this._state.diologsPage.newTextArea,
};
this._state.diologsPage.massageData.push(addMessage);
this._state.diologsPage.newTextArea = '777';
this._renderEntireTree(this._state) ;
  }
} 
};

export  const reatorUpTextareaDiologsPage = (text) =>{
  return {
    type:'UP_TEXTAREA_DIOLOGSPAGE',
    newText:text,
  }
};

 export  const reatorAddMessage = () =>{
  return {
    type:'ADD_WMESSAGE',
  }
};

export const reatorAddPost = () =>{
  return {
    type:'ADD_POST',
  }
}

export  const reatorUpTextareaProfilePage = (text) =>{
  return {
    type:'UP_TEXTAREA_PROFILEPAGE',
    newText:text,
  }
}

window.store = store ;
export default store ;