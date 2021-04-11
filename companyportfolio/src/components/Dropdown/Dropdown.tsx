import React, { SyntheticEvent, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { Flex, Input } from 'components';
import { IDropdownProps, IDropdownItem } from 'types';
import * as StyledComponent from './components';
import useOutsideClick from 'hooks/useOutsideClick';

import NoResult from 'components/common/NoResult';

const DropdownOption: React.FunctionComponent<{ item: IDropdownItem }> = ({ item }) => {
    return (
        <Flex direction="column" justifyContent="flex-start" alignItems="flex-start">
            <StyledComponent.Category>{item.category}</StyledComponent.Category>
            {item.options.map((option) => (
                <StyledComponent.OptionWrapper key={option.label}>
                    <StyledComponent.IconWrapper>{option.renderIcon}</StyledComponent.IconWrapper>
                    <a href="#">{option.label}</a>
                </StyledComponent.OptionWrapper>
            ))}
        </Flex>
    );
};

export const Dropdown: React.FunctionComponent<IDropdownProps> = ({ label, items, children }) => {
    const ref = useRef(null);
    const [isOpen, setOpen] = useState(false);
    const [dropdownItems, setDropdownItems] = useState<IDropdownItem[]>(items);

    useOutsideClick({ ref, callback: () => setOpen(false) });

    const filter = (ev: SyntheticEvent) => {
        const value = (ev.target as HTMLInputElement).value;

        const result = items.map((item: IDropdownItem) => {
            return {
                ...item,
                options: item.options.filter((option) => option.label.toLowerCase().includes(value.toLowerCase())),
            };
        });

        setDropdownItems(result);
    };

    return (
        <StyledComponent.DropdownWrapper ref={ref}>
            <Flex direction="row" justifyContent="space-between" alignItems="center" onClick={() => setOpen(!isOpen)}>
                <StyledComponent.Label>{label}</StyledComponent.Label>
                <FontAwesomeIcon icon={faSortDown} />
            </Flex>
            <StyledComponent.DropdownOptions isOpen={isOpen}>
                <StyledComponent.FilterWrapper>
                    <Input placeholder="Filter" onChange={filter} />
                </StyledComponent.FilterWrapper>
                {dropdownItems.map((item) => {
                    return item.options.length ? <DropdownOption key={item.category} item={item} /> : null;
                })}
                {!dropdownItems.reduce((current, next) => current + next.options.length, 0) && <NoResult />}
            </StyledComponent.DropdownOptions>
        </StyledComponent.DropdownWrapper>
    );
};
