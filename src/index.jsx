import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './Routers/AppRouter';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../src/assets/style/style.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter/>
  </React.StrictMode>
);

