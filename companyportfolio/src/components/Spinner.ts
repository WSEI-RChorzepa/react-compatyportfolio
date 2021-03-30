import styled, { keyframes } from 'styled-components';
import { ITheme } from 'types';

const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div<{ theme: ITheme }>`
    height: 15px;
    width: 15px;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 50%;
    border-top: none;
    border-right: none;
    margin: 16px auto;
    animation: ${rotation} 1s ease-in-out infinite;
`;
