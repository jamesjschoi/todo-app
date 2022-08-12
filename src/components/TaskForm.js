import React, { useRef } from 'react';
import styles from './TaskForm.module.css';

const TaskForm = () => {
  const titleInputRef = useRef();
  const noteInputRef = useRef();

  const formHandler = (e) => {
    e.preventDefault();

    const enteredTitleValue = titleInputRef.current.value;
    const enteredNoteValue = noteInputRef.current.value;
  };
  return (
    <form className={styles.form} onSubmit={formHandler}>
      <label for='title'>Title</label>
      <input type='text' id='title' name='title' ref={titleInputRef} />
      <label for='note'>Note</label>
      <input type='text' id='note' name='note' ref={noteInputRef} />
      <button>Add</button>
    </form>
  );
};

export default TaskForm;
