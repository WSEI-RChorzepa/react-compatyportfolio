import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    & span {
        color: #95a5a6;
        font-size: 1.2rem;
        font-weight: 400;
        text-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
    }
`;

const Shape = styled.div`
    background-color: #ecf0f1;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    margin-bottom: 1.5rem;

    & svg {
        font-size: 2.5rem;

        & path {
            fill: #bdc3c7;
            padding: 0.5rem;
        }
    }
`;

const NoResult: React.FunctionComponent = () => (
    <Wrapper>
        <Shape>
            <FontAwesomeIcon icon={faSearch} />
        </Shape>
        <span>No results found</span>
    </Wrapper>
);

export default NoResult;
