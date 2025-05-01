import { ADD_TASK, TOGGLE_TASK, EDIT_TASK, FILTER_TASKS } from "./actions";

// Initial state when app loads
const initialState = {
	tasks: [], // Empty array for tasks
	filter: "all", // Default filter shows all tasks
};

// Reducer function that handles state changes
const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TASK:
			return {
				...state,
				tasks: [...state.tasks, action.payload], // Add new task
			};

		case TOGGLE_TASK:
			return {
				...state,
				tasks: state.tasks.map((task) =>
					task.id === action.payload.id
						? { ...task, isDone: !task.isDone } // To flip isDone status
						: task
				),
			};

		case EDIT_TASK:
			// Update description for specific task
			return {
				...state,
				tasks: state.tasks.map((task) =>
					task.id === action.payload.id
						? { ...task, description: action.payload.description }
						: task
				),
			};

		case FILTER_TASKS:
			// Update filter type in state
			return {
				...state,
				filter: action.payload.filterType,
			};

		default:
			return state;
	}
};

export default todoReducer;
