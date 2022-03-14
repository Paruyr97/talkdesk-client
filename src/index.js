import React from 'react';
import ReacpOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import { BrowserRouter } from "react-router-dom";

ReacpOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));
