import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Index = () => {
const [darkMode, setDarkMode] = useState(() => {
const savedTheme = window.localStorage.getItem('theme');
return savedTheme ? savedTheme === 'light' : true; 
});

useEffect(() => {
   document.body.style.backgroundColor = darkMode ? '#1a1a1a' : 'white';
}, [darkMode]);

useEffect(() => {
   if (!window.localStorage.getItem('theme')) {
   window.localStorage.setItem('theme', darkMode ? 'light' : 'dark');
   }
   // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

return (
   <React.StrictMode>
   <App darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
   </React.StrictMode>
);
};

root.render(<Index />);
reportWebVitals();