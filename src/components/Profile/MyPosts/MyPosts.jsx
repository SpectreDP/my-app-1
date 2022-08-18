import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo(props => {
  console.log('React memo')
  let postsElements =
    props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} />).reverse();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.postItem}>
        {postsElements}
      </div>
    </div>
  )
})

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name='newPostText' placeholder='Enter your message'
          validate={[required, maxLength10]} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

export default MyPosts;