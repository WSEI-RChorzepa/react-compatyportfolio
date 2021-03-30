import React, { useState } from 'react';
import { Reset } from 'styled-reset';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import DefaultTheme from 'themes/default';
import { ITheme } from './types';
import Routes from './Routes';

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
    * {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    html {
        font-size: 62.5%;
    }
    body {
        font-family: 'Roboto';
        font-weight: 300;
        font-size: 1.4rem;
        background-color: ${({ theme }) => theme.background};
    }
`;

const App: React.VoidFunctionComponent = () => {
    const [theme] = useState(DefaultTheme);

    return (
        <ThemeProvider theme={{ ...theme }}>
            <Reset />
            <GlobalStyle />
            <Routes />
        </ThemeProvider>
    );
};

export default App;
