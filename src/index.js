import React from 'react';
import ReactDOM from 'react-dom/client';
import { Game } from './game';
import { ReduxRenderer } from './redux-manager';
import { store } from './store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<ReduxRenderer store={store}>
			<Game />
		</ReduxRenderer>
	</React.StrictMode>,
);
