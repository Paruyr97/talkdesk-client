import React from 'react';
import ReacpOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './components/app/app';

ReacpOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));
