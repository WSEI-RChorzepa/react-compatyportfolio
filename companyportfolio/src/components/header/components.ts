import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { ITheme } from 'types';

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: ${(props) => props.theme?.header?.background};
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    align-items: center;

    &:nth-child(1) {
        grid-column: 1;
    }
    &:nth-child(2) {
        grid-column: 2;
    }
    &:nth-child(3) {
        grid-column: 3;
    }
`;

export const Logo = styled.img<{ src: string }>`
    src: ${({ src }) => src};
    height: inherit;
    width: 30px;
    margin-right: 1rem;
`;

export const NotifyIconWrapper = styled.div<{ theme: ITheme }>`
    background-color: ${({ theme }) => lighten(0.1, theme.secondary)};
    position: relative;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeaderIconWrapper = styled.div`
    margin: 0 0.5rem;
    svg {
        color: ${({ theme }) => darken(0.2, theme.secondary)};
        font-size: 1.6rem;
    }
`;
