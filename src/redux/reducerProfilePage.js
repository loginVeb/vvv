const ADD_POST = 'ADD_POST';
const UP_TEXTAREA_PROFILEPAGE = 'UP_TEXTAREA_PROFILEPAGE';


function reducerProfilePage(state, action) {

    if (action.type === ADD_POST) {
        let addPost = {
            id: 0,
            massage: this._state.profilePage.newTextArea,
            likeCount: 100,
        }
        this._state.profilePage.postData.push(addPost);
        this._state.profilePage.newTextArea = '333 ';
        this._renderEntireTree(this._state);
    }
    else if (action.type === UP_TEXTAREA_PROFILEPAGE) {
        this._state.profilePage.newTextArea = action.newText;
        this._renderEntireTree(this._state);
    }
}