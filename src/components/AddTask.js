import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const AddTask = () => {
  // initialising the state for the input field
  const [description, setDescription] = useState('');
  
  // Get dispatch function from Redux
  const dispatch = useDispatch();

  // This is to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); //This is to prevent page reload
    if (description.trim()) { // This is to check for empty input
      dispatch(addTask(description)); 
      setDescription(''); // Clear input after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add new task..."
      />
      <button type="submit">Click to add Task</button>
    </form>
  );
};

export default AddTask;