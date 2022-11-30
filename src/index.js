import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // finding the 'root' div in public/index.html
root.render(<App />); // replacing the content from 'root' with what's in App.js
