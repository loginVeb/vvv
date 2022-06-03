import {renderEntireTree}  from '.././renderEntireTree.js';

const state = {

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
};

export let newPost = (text) => {
    
state.profilePage.postData.push({id: 0, massage: text, likeCount: 100,})
 renderEntireTree(state) ;
 
};

export let unTextArea = (text) => {
    
    state.profilePage.newTextArea = text;
     renderEntireTree(state) ;

    };
    
    window.state = state;

export default state;