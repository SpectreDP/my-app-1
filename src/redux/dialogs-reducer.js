const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText });

export default dialogsReducer;