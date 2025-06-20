import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
import { worker } from './mocks/browser';

const root = ReactDOM.createRoot(document.getElementById('root'));

if(import.meta.env.DEV) {
  await worker.start();
  root.render(<App />);
} else {
  root.render(<App />);
}