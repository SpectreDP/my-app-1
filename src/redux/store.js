import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hello world!', likesCount: '10' },
                { id: 2, message: 'It is working!', likesCount: '12' },
                { id: 3, message: 'The best POST', likesCount: '26' },
                { id: 4, message: '!?!?!?!?!?!?!', likesCount: '3' }
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dmitry' },
                { id: 2, name: 'Lina' },
                { id: 3, name: 'Ivan' },
                { id: 4, name: 'Anna' },
                { id: 5, name: 'Elena' },
                { id: 6, name: 'Vladimir' }
            ],
            messages: [
                { id: 1, message: 'Hello World!' },
                { id: 2, message: 'Redux!' },
                { id: 3, message: 'Yo!' },
                { id: 4, message: 'Yo!' },
                { id: 5, message: 'Yoo!' }
            ],
            newMessageText: '123'
        },
        sidebar: {
            friends: [
                { id: 1, name: 'Lina' },
                { id: 2, name: 'Ivan' },
                { id: 3, name: 'Anna' }
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}

export default store;
window.store = store;



