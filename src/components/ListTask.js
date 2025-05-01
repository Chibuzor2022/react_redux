import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "./Task";
import { filterTasks } from "../redux/actions";

const ListTask = () => {
	// This is to get tasks and filter from Redux store
	const { tasks, filter } = useSelector((state) => ({
		tasks: state.tasks,
		filter: state.filter,
	}));

	const dispatch = useDispatch();

	//To filter Filter tasks
	const filteredTasks = tasks.filter((task) => {
		if (filter === "done") return task.isDone;
		if (filter === "notDone") return !task.isDone;
		return true;
	});

	return (
		<div>
			{/* Filter controls according done/not done */}
			<div>
				<button onClick={() => dispatch(filterTasks("all"))}>All</button>
				<button onClick={() => dispatch(filterTasks("done"))}>Done</button>
				<button onClick={() => dispatch(filterTasks("notDone"))}>
					Not Done
				</button>
			</div>

			{/* To show filtered tasks */}
			{filteredTasks.map((task) => (
				<Task key={task.id} task={task} />
			))}
		</div>
	);
};

export default ListTask;
