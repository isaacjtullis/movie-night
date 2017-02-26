// Application entrypoint.

// Load up the application styles
require("../public/application.css");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(<App />, document.getElementById('root'));
