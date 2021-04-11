import React, { useState } from 'react';
import { INavbarNotify } from 'types';
import { Badge } from 'components';
import * as StyledComponent from './components';

export const HeaderIcon: React.FunctionComponent<INavbarNotify> = (props) => {
    const [notifications] = useState(props.value || 0);

    return props.value ? (
        <StyledComponent.HeaderIconWrapper>
            <StyledComponent.NotifyIconWrapper>
                <Badge>{notifications > 10 ? '10 +' : notifications}</Badge>
                {props.renderIcon}
            </StyledComponent.NotifyIconWrapper>
        </StyledComponent.HeaderIconWrapper>
    ) : (
        <StyledComponent.HeaderIconWrapper>{props.renderIcon}</StyledComponent.HeaderIconWrapper>
    );
};

export default HeaderIcon;
