import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { InputWithProps } from './Input';

export const Search: React.VoidFunctionComponent = () => (
    <InputWithProps type="text" placeholder="Search..." renderIcon={<FontAwesomeIcon icon={faSearch} color="#ccc" />} />
);
