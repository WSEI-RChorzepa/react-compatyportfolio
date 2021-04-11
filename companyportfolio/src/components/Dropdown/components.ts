import styled from 'styled-components';
import { ITheme } from 'types';

export const Label = styled.label<{ theme: ITheme }>`
    font-weight: 500;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.dropdown.color};
`;

export const DropdownWrapper = styled.div`
    position: relative;
    width: 50%;
    &:hover {
        cursor: pointer;
    }
`;

export const DropdownOptions = styled.div<{ isOpen: boolean }>`
    overflow: hidden;
    position: absolute;
    top: 20px;
    width: 100%;
    padding: 1rem;
    background-color: #fff;
    transform: ${({ isOpen }) => (!isOpen ? 'scaleY(0)' : 'scaleY(1)')};
    transform-origin: left top;
    opacity: ${({ isOpen }) => (!isOpen ? '0' : '1')};
    display: flex;
    flex-direction: column;
    transition: all 200ms ease-in-out;
    border: 1px solid rgba(0, 0, 0, 0.05);
    z-index: 1;
`;

export const OptionWrapper = styled.div<{ theme: ITheme }>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 25px;
    transition: all 200ms ease;

    &:hover a {
        color: ${({ theme }) => theme.primary};
    }
    &:hover svg {
        opacity: 1;
        path {
            fill: ${({ theme }) => theme.primary};
        }
    }

    a {
        text-decoration: none;
        font-size: 1.3rem;
        font-weight: 300;
        color: ${({ theme }) => theme.link.color};
        text-shadow: 0 0 2px ${({ theme }) => theme.secondary};
    }

    a,
    svg path {
        transition: all 200ms ease;
    }
`;

export const Category = styled.strong`
    font-size: 1.2rem;
    font-weight: 400;
    margin: 1rem 0;
`;

export const FilterWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const IconWrapper = styled.div`
    width: 30px;
`;
