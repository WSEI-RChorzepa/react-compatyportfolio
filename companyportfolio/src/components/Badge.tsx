import styled from 'styled-components';
import { ITheme } from 'types';

export const Badge = styled.span<{ theme: ITheme }>`
    position: absolute;
    top: -5px;
    right: -2px;
    content: '';
    font-family: 'Montserrat';
    font-weight: 400;
    color: #fff;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 5px;
    height: 1.3rem;
    min-width: 1.5rem;
    font-size: 0.9rem;
    padding: 0 2px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
