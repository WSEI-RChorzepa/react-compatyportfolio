import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faBell, faHome } from '@fortawesome/free-solid-svg-icons';
import { Row, Flex, Search, HeaderIcon } from 'components';
import LogoSrc from 'assets/logoWithoutName.png';
import NavigationDropdown from './NavigationDropdown';
import * as StyledComponent from './components';

export const Header: React.VoidFunctionComponent = ({ ...rest }) => {
    return (
        <StyledComponent.Wrapper {...rest}>
            <Row>
                <StyledComponent.Grid>
                    <Flex direction="row" justifyContent="flex-start" alignItems="center">
                        <StyledComponent.Logo src={LogoSrc} alt="Brand logo" />

                        <NavigationDropdown />
                    </Flex>
                    <Search />
                    <div>
                        <Flex direction="row" justifyContent="flex-end" alignItems="center">
                            <HeaderIcon value={0} renderIcon={<FontAwesomeIcon icon={faHome} />} />
                            <HeaderIcon value={6} renderIcon={<FontAwesomeIcon icon={faComments} />} />
                            <HeaderIcon value={6} renderIcon={<FontAwesomeIcon icon={faBell} />} />
                        </Flex>
                    </div>
                </StyledComponent.Grid>
            </Row>
        </StyledComponent.Wrapper>
    );
};
