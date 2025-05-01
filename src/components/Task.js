import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/actions';

const Task = ({ task }) => {
  // INitialising state for editing
  const [isEditing, setIsEditing] = useState(false);


  const [editedDescription, setEditedDescription] = useState(task.description);
  
  // To get dispatch function from Redux
  const dispatch = useDispatch();

  // To toggle edit mode 
  const handleEdit = () => {
    if (isEditing && editedDescription.trim()) {

      dispatch(editTask(task.id, editedDescription));
    }
    setIsEditing(!isEditing); 
  };

  return (
    <div style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
      {isEditing ? (
        // To Show input field when editing
        <input
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          onBlur={handleEdit} 
          autoFocus // To focus automatically when editing
        />
      ) : (
        <span>{task.description}</span>
      )}
      {/*To toggle completion status button */}
      <button onClick={() => dispatch(toggleTask(task.id))}>
        {task.isDone ? 'Undo' : 'Done'}
      </button>
      {/* Edit/Save button */}
      <button onClick={handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </div>
  );
};

export default Task;