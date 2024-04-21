import react from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './Index.css';

const root = createRoot(document.getElementById('root'));

root.render(
	<>
		<App />
	</>
);
