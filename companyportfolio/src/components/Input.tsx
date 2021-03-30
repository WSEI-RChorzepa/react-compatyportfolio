import styled from 'styled-components';
import { lighten } from 'polished';
import { ITheme, IInputProps } from '../types';

export const Input = styled.input<{ theme: ITheme; textCenter?: boolean }>`
    border: 1px solid ${({ theme }) => theme.border.color};
    padding: 0.5rem 2rem;
    text-align: ${({ textCenter }) => (textCenter ? 'center' : null)};
    border-radius: 2px;
    transition: all 250ms ease-in-out;
    width: 100%;

    &::placeholder {
        color: ${({ theme }) => theme.secondary};
    }

    &:focus {
        outline: none;
        border: 1px solid ${({ theme }) => lighten(0.3, theme.primary)};
        box-shadow: 0 0 5px ${({ theme }) => lighten(0.05, theme.primary)};
    }

    &:hover {
        cursor: pointer;
        border: 1px solid ${({ theme }) => lighten(0.3, theme.primary)};
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: inline-block;
    width: inherit;
`;

const IconWrapper = styled.div`
    position: absolute;
    top: 6px;
    right: 5px;
    height: 20px;
    width: 20px;
`;

export const InputWithProps: React.FunctionComponent<IInputProps> = (props) => {
    return (
        <Wrapper>
            <Input type={props.type ? props.type : 'text'} placeholder={props.placeholder} />
            {props.renderIcon && <IconWrapper>{props.renderIcon}</IconWrapper>}
        </Wrapper>
    );
};
