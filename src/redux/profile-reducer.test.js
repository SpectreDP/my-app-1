import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";



let state = {
    posts: [
        { id: 1, message: 'Hello world!', likesCount: '10' },
        { id: 2, message: 'It is working!', likesCount: '12' },
        { id: 3, message: 'The best POST', likesCount: '26' },
        { id: 4, message: '!?!?!?!?!?!?!', likesCount: '3' }
    ]
}


test('message of new post should be correct', () => {
    let action = addPostActionCreator('?Hello, HELLO?');
    let newState = profileReducer(state, action);

    expect(newState.posts[4].message).toBe('?Hello, HELLO?');

});

test('length of posts should be incremented', () => {
    let action = addPostActionCreator('?Hello, HELLO?');
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);

});

test('after deleting length of messages should be decremented', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);

});

test(`after deleting length shouldn't be decremented if id is incorrect`, () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);

});