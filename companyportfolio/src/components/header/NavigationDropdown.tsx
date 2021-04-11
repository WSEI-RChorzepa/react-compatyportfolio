import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faAddressCard,
    faUserFriends,
    IconDefinition,
    faBuilding,
    faUserShield,
    faEdit,
    faBook,
} from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'components';

const NavIcon: React.VoidFunctionComponent<{ icon: IconDefinition }> = ({ icon }) => (
    <FontAwesomeIcon icon={icon} color="#ddd" />
);

const NavigationDropdown: React.FunctionComponent = () => (
    <Dropdown
        label="Home"
        items={[
            {
                category: 'Platform',
                options: [
                    {
                        renderIcon: <NavIcon icon={faHome} />,
                        label: 'Home',
                        onClick: () => console.log('Home'),
                    },
                    {
                        renderIcon: <NavIcon icon={faAddressCard} />,
                        label: 'Publications',
                        onClick: () => console.log('Home'),
                    },
                    {
                        renderIcon: <NavIcon icon={faUserFriends} />,
                        label: 'People',
                        onClick: () => console.log('Home'),
                    },
                    {
                        renderIcon: <NavIcon icon={faBuilding} />,
                        label: 'Entities',
                        onClick: () => console.log('Home'),
                    },
                    {
                        renderIcon: <NavIcon icon={faUserShield} />,
                        label: 'Administration',
                        onClick: () => console.log('Home'),
                    },
                ],
            },
            {
                category: 'Workspace',
                options: [
                    {
                        renderIcon: <NavIcon icon={faEdit} />,
                        label: 'Client contact',
                        onClick: () => console.log('Home'),
                    },
                    {
                        renderIcon: <NavIcon icon={faEdit} />,
                        label: 'Supplier contact',
                        onClick: () => console.log('Home'),
                    },
                    {
                        renderIcon: <NavIcon icon={faBuilding} />,
                        label: 'Corporate',
                        onClick: () => console.log('Home'),
                    },
                    {
                        renderIcon: <NavIcon icon={faBook} />,
                        label: 'Group Norms',
                        onClick: () => console.log('Home'),
                    },
                    {
                        renderIcon: <NavIcon icon={faEdit} />,
                        label: 'Real estate contracts',
                        onClick: () => console.log('Home'),
                    },
                ],
            },
        ]}
    />
);

export default NavigationDropdown;
