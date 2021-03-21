import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from 'components';
import GlobalStyle from './styles/globalStyles';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <Routes />
    </React.StrictMode>,
    document.getElementById('root'),
);
