import { useEffect, useState } from 'react';
import { Todo, ControlPanel } from './components';
import { readTodos, updateTodo, deleteTodo } from './api';
import { removeTodo, setTodo } from './utils';
import styles from './App.module.css';

export const App = () => {
	const [todos, setTodos] = useState([]);

	const onTodoSave = (id, newTitle) => {
		updateTodo({ id, title: newTitle }).then(() => {
			setTodo({ id, title: newTitle, isEditing: false });
		});
	};

	const onTodoEdit = (id) => {
		setTodo({ id, isEditing: true });
	};

	const onTodoTitleChange = () => {};

	const onTodoRemove = (id) => {
		deleteTodo(id).then(removeTodo(todos, id));
	};

	useEffect(() => {
		readTodos().then((todosData) => setTodos(todosData));
	}, []);

	return (
		<div className={styles.App}>
			<ControlPanel />
			<div className={styles.todos}>
				{todos.map(({ id, title, completed, isEditing = false }) => (
					<Todo
						key={id}
						id={id}
						title={title}
						completed={completed}
						onEdit={() => onTodoEdit(id)}
						onTitileChange={(newTitile) => onTodoTitleChange(id, title)}
						onSave={() => onTodoSave(id)}
						onRemove={() => onTodoRemove(id)}
					/>
				))}
			</div>
		</div>
	);
};
