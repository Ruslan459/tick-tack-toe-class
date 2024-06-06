const fetchServer = (method = 'GET', { id, ...payload } = {}) => {
	let fetchURL = 'http://localhost:3005/todos';

	let options = {
		method,
		headers: { 'Content-Type': 'applucation/json' },
	};

	if (id !== undefined) {
		fetchURL += `/${id}`;
		options.body = JSON.stringify(payload);
	}

	return fetch(fetchURL, options).then((jsonData) => jsonData.json());
};

export const createTodo = (newTodo) => fetchServer('POST', newTodo);

export const readTodos = () => fetchServer();

export const updateTodo = (todoData) => fetchServer('PATCH', todoData);

export const deleteTodo = (todoId) => fetchServer('DELETE', { id: todoId });
