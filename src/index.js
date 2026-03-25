import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import senatorsList from './data/senators.json';


// Render the App component here!
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App senatorsList={senatorsList} />);
