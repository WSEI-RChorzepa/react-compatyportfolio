import styled from 'styled-components';

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
