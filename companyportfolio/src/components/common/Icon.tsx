import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 1.3rem;
    & path {
        fill: rgba(52, 73, 94, 0.8);
    }
`;

interface IconProps {
    icon: IconProp;
}

const Icon: React.FunctionComponent<IconProps> = (props) => <StyledIcon icon={props.icon} />;

export default Icon;
