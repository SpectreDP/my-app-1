import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';

const maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements =
    state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
  let messagesElements =
    state.messages.map(m => <Message message={m.message} key={m.id} />);

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageText);
  }
  
  return (
    <div className={s.title}>
      <div className={s.dialogs}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} 
        validate={[required, maxLength50]}
        name='newMessageText' placeholder='Enter your message'/>
      </div>
      <div>
        <button>Send message</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs;