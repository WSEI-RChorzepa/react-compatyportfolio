import styled from 'styled-components';
import { ITheme } from 'types';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center-end;
    align-items: flex-start;
    position: relative;
    width: fit-content;
    box-sizing: border-box;
`;

export const Label = styled.label<{ theme: ITheme }>`
    font-weight: 500;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.dropdown.color};
`;

export const Value = styled.input`
    border: 1px solid #ccc;
    padding: 5px;
`;

export const MenuWrapper = styled.div<{ open: boolean }>`
    display: ${({ open }) => (open ? 'block' : 'none')};
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border: 1px solid rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
`;

export const MenuItem = styled.span`
    font-size: 13px;
    color: rgba(0, 0, 0, 0.6);

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;
