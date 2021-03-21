import React from 'react';
import styled from 'styled-components';

const Navbar = styled.div`
    background-color: '#FFF';
    padding: 0.5em 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Header: React.VoidFunctionComponent = () => {
    return (
        <Navbar>
            <div>
                <span>Logo</span>
                <span>Home</span>
            </div>
            <div>
                <span>Search</span>
            </div>
            <div>
                <span>Icon home</span>
                <span>Icon Message</span>
                <span>Icon Alert</span>
            </div>
        </Navbar>
    );
};

export default Header;
