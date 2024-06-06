import { useState } from 'react';
import { Button } from '../button/button';
import styles from './todo.module.css';

export const Todo = ({ id, title, completed, isEditing, onEdit, onSave, onRemove }) => {
	const [newTitle, setNewTitle] = useState(title);

	const onTitleChange = ({ target }) => {
		setNewTitle(target.value);
	};

	return (
		<div className={styles.todo}>
			<input
				className={styles.checkbox}
				type="checkbox"
				checked={completed}
				readOnly
			/>
			<div className={styles.title}>
				{isEditing ? (
					<input type="text" value={newTitle} onChange={onTitleChange} />
				) : (
					<div onClick={onEdit}>{title}</div>
				)}
			</div>
			<div>
				{isEditing ? (
					<Button onClick={onSave}>Сохранить</Button>
				) : (
					<Button onClick={onRemove}>Удалить</Button>
				)}
			</div>
		</div>
	);
};
