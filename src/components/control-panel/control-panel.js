import { useState } from 'react';
import { Button } from '../button/button';
import styles from './control-panel.module.css';

export const ControlPanel = () => {
	const [searchingPhrase, setSearchingPhrase] = useState('');
	const [isSortingEnabled, setIsSortingEnabled] = useState(false);

	const onSeartingPhraseChange = ({ target }) => {
		setSearchingPhrase(target.value);
	};

	const onSortingChange = ({ target }) => {
		setIsSortingEnabled(target.checked);
	};

	const onAddTodo = () => {};

	return (
		<div className={styles.controlPanel}>
			<input
				className={styles.search}
				type="text"
				placeholder="Поиск..."
				value={searchingPhrase}
				onChange={onSeartingPhraseChange}
			/>
			<input
				className={styles.sort}
				type="checkbox"
				checked={isSortingEnabled}
				onChange={onSortingChange}
			/>
			<Button onClick={onAddTodo}>Добавить задачу</Button>
		</div>
	);
};
