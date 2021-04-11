import React from 'react';
import styled from 'styled-components';
import { ITheme } from 'types';
import { Header } from './Header';
import { Navigation } from './Navigation';

const Wrapper = styled.div<{ theme: ITheme }>`
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 50px calc(100vh - 50px);
    grid-template-areas:
        'header header'
        'navigation main';
    width: 100%;
    position: relative;
`;

const StyledHeader = styled(Header)`
    grid-area: header;
    grid-row: 1;
`;

const StyledNavigation = styled(Navigation)`
    grid-area: navigation;
    grid-row: 2;
`;

const Main = styled.main`
    grid-area: main;
    grid-row: 2;
    padding: 1rem;
`;

export const PageLayout: React.FunctionComponent = ({ children }) => {
    return (
        <Wrapper>
            <StyledHeader></StyledHeader>
            <StyledNavigation />
            <Main>{children}</Main>
        </Wrapper>
    );
};
