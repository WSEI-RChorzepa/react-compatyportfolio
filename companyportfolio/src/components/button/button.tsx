import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { colors } from '../../styles/variables';
import { themes } from './themes';
import { ButtonThemeType, IButtonProps } from '../types';

const Message = styled.span`
    margin-left: 0.5em;
`;

const StyledButton = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    border: 1px solid transparent;
    transition: all 200ms ease-in-out;
    background-color: ${(props: ButtonThemeType) => props.theme.backgroundColor};
    color: ${(props: ButtonThemeType) => props.theme.color};
    &:hover {
        cursor: pointer;
        background-color: ${(props: ButtonThemeType) => lighten(0.05, props.theme.backgroundColor)};
        border: 1px solid ${(props: ButtonThemeType) => darken(0.05, props.theme.backgroundColor)};
        box-shadow: 1px 1px 10px ${(props: ButtonThemeType) => lighten(0.1, props.theme.backgroundColor)};
    }
    &:focus {
        outline: none;
    }
    &:active {
        background-color: ${(props: ButtonThemeType) => darken(0.08, props.theme.backgroundColor)};
    }
    &:disabled {
        background-color: ${colors.secondary};
    }
    &:hover:disabled {
        cursor: wait;
        box-shadow: none;
        border: 1px solid transparent;
    }
`;

const Button: FunctionComponent<IButtonProps> = ({ onClick, variant, loading, loadingMessage, children }) => {
    return (
        <StyledButton onClick={onClick} theme={themes.get(variant)} disabled={loading}>
            {loading ? (
                <>
                    <FontAwesomeIcon icon={faSpinner} spin />
                    <Message>{loadingMessage ? loadingMessage : 'Please wait...'}</Message>
                </>
            ) : (
                children
            )}
        </StyledButton>
    );
};

export default Button;
