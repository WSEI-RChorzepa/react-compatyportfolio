import React, { SyntheticEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { Flex, Input } from 'components';
import { IDropdownProps, IDropdownItem } from 'types';
import * as StyledComponent from './components';

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

export const Dropdown: React.FunctionComponent<IDropdownProps> = ({ label, items }) => {
    const [isOpen, setOpen] = useState(true);
    const [dropdownItems, setDropdownItems] = useState<IDropdownItem[]>(items);

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
        <StyledComponent.DropdownWrapper>
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
                {!dropdownItems.reduce((current, next) => current + next.options.length, 0) && <span>No results</span>}
            </StyledComponent.DropdownOptions>
        </StyledComponent.DropdownWrapper>
    );
};
