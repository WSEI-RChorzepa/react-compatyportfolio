import styled, { css } from 'styled-components';

export const Row = styled.div`
    position: relative;
    padding: 1rem 2rem;
    width: 100%;
`;

type FlexProps = {
    wrap?: boolean;
    direction: 'row' | 'column';
    justifyContent: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'space-between';
    alignItems: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
};

export const Flex = styled.div<FlexProps>`
    position: relative;
    display: flex;
    justify-content: ${({ justifyContent }) => justifyContent};
    ${({ wrap }) =>
        wrap
            ? css`
                  flex-wrap: wrap;
              `
            : css`
                  flex-wrap: nowrap;
              `};
    align-items: ${({ alignItems }) => alignItems};
    flex-direction: ${({ direction }) => direction};
`;
