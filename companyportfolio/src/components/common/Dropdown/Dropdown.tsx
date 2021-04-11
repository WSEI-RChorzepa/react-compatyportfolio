import React, { useRef, useState } from 'react';
import useOutsideClick from 'hooks/useOutsideClick';
import * as Styled from './styledHelpers';

export interface DropdownProps {
    label: string;
    filter?: JSX.Element;
}

const Dropdown: React.FunctionComponent<DropdownProps> = ({ label, filter, children }) => {
    const ref = useRef(null);
    const [value, setValue] = useState('');
    const [open, setOpen] = useState(false);

    useOutsideClick({ ref, callback: () => setOpen(false) });

    const handleValueChange = (option: any): void => {
        setOpen(false);
        setValue(option);
    };

    return (
        <Styled.Wrapper ref={ref}>
            <Styled.Label>{label}</Styled.Label>

            <Styled.Value
                onClick={() => setOpen(!open)}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
            />

            {filter && filter}

            <Styled.MenuWrapper open={open}>
                <Styled.Menu>
                    <span>Test</span>
                </Styled.Menu>
            </Styled.MenuWrapper>
        </Styled.Wrapper>
    );
};

const NavigationDropdown: React.FunctionComponent = () => {
    return <Dropdown label="Home" />;
};

export default Dropdown;
