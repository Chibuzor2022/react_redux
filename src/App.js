import React from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import "./App.css";

const App = () => {
	return (
		<div className="app">
			<h1>ToDo App with Redux</h1>
			{/* Component for adding new tasks */}
			<AddTask />
			{/* Component for displaying and filtering tasks */}
			<ListTask />
		</div>
	);
};

export default App;
