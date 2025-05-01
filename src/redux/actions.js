export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const FILTER_TASKS = 'FILTER_TASKS';

// Action creator for adding a new task
export const addTask = (description) => ({
  type: ADD_TASK,
  payload: {
    id: Date.now(), // To generate unique ID using timestamp
    description,
    isDone: false // initialising new task. By default it is not done.
  }
});

// Action creator for toggling task completion status
export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: { id } 
});

// Action creator for editing task description
export const editTask = (id, description) => ({
  type: EDIT_TASK,
  payload: { id, description } 
});

// Action creator for filtering tasks
export const filterTasks = (filterType) => ({
  type: FILTER_TASKS,
  payload: { filterType } //types are ; 'all', 'done', or 'notDone'
});