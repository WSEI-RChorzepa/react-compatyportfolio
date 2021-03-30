import React, { useState } from 'react';
import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { ITheme, INavbarNotify } from 'types';
import { Badge } from 'components';

const NotifyIconWrapper = styled.div<{ theme: ITheme }>`
    background-color: ${({ theme }) => lighten(0.1, theme.secondary)};
    position: relative;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    margin: 0 0.5rem;
    svg {
        color: ${({ theme }) => darken(0.2, theme.secondary)};
        font-size: 1.6rem;
    }
`;

export const HeaderIcon: React.FunctionComponent<INavbarNotify> = (props) => {
    const [notifications] = useState(props.value || 0);

    return props.value ? (
        <Wrapper>
            <NotifyIconWrapper>
                <Badge>{notifications > 10 ? '10 +' : notifications}</Badge>
                {props.renderIcon}
            </NotifyIconWrapper>
        </Wrapper>
    ) : (
        <Wrapper>{props.renderIcon}</Wrapper>
    );
};
