import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/variables';

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 50px calc(100vh - 120px) 50px;
    grid-template-columns: 100%;
    background-color: ${colors.background.wrapper};
    position: relative;
    margin: 0.5em;
`;

const Header = styled.header`
    grid-column: 1;
    grid-row: 1;
    background: #fff;
    position: relative;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 0 1rem;
`;

const Main = styled.main`
    grid-column: 1;
    grid-row: 2;
    padding: 2em;
    display: grid;
    grid-template-columns: 20% 80%;
`;

const Navigation = styled.div`
    grid-column: 1;
    position: relative;
`;

const Content = styled.div`
    grid-column: 2;
`;

const Footer = styled.footer`
    grid-column: 1;
    grid-row: 3;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
`;

const Layout: React.FunctionComponent = ({ children }) => {
    return (
        <Wrapper>
            <Header>header</Header>
            <Main>
                <Navigation>Navigation</Navigation>
                <Content>{children}</Content>
            </Main>
            <Footer>
                <span>&copy; Compay portfolio</span>
            </Footer>
        </Wrapper>
    );
};

export default Layout;
