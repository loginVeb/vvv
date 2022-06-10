
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
       newText:'сообщение2',
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
  if(action.type === 'NEWPOST'){
let addPost ={
id: 0,
massage:this._state.profilePage.newTextArea,
likeCount: 100,
  }
this._state.profilePage.postData.push(addPost);
this._state.profilePage.newTextArea = ' ';
this._renderEntireTree(this._state) ;
  }
else if(action.type === 'UNTEXTAREA'){
this._state.profilePage.newTextArea = action.text;
this._renderEntireTree(this._state) ;
  }
  else if(action.type === 'UNTEXTAREA2'){
this._state.diologsPage.newText = action.text;
this._renderEntireTree(this._state) ;
}
else if(action.type === 'NEWMESSAGE'){
let addMessage ={
id:10,
massage: this._state.diologsPage.newText,
};
this._state.diologsPage.massageData.push(addMessage);
this._state.diologsPage.newText = '777';
this._renderEntireTree(this._state) ;
  }
} 
};

window.store = store ;
export default store ;