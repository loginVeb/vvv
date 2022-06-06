
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
        ]

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

newPost(text){
let addPost ={
id: 0,
massage: text,
likeCount: 100,
  }
this._state.profilePage.postData.push(addPost);
this._renderEntireTree(this._state) ;
}, 

unTextArea(text){
this._state.profilePage.newTextArea = text;
this._renderEntireTree(this._state) ;
}, 

};

window.store = store ;
export default store ;