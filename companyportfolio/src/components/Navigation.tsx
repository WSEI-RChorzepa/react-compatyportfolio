import React from 'react';
import { Row } from 'components';
import { UserPanel } from 'components/common';

export const Navigation: React.VoidFunctionComponent = ({ ...rest }) => (
    <Row {...rest}>
        <UserPanel />
    </Row>
);
