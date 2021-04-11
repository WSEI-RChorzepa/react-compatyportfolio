export type ButtonVariant = 'primary' | 'danger';

export type ButtonThemeType = {
    theme: IButtonTheme;
};

export interface IButtonTheme {
    backgroundColor: string;
    color: string;
}

export interface IButtonProps {
    onClick: () => void;
    variant: ButtonVariant;
    loading?: boolean;
    loadingMessage?: string;
}

type Border = {
    color: string;
};

type Header = {
    background: string;
};

type Dropdown = {
    color: string;
};

export interface ITheme {
    id: string;
    primary: string;
    danger: string;
    secondary: string;
    background: string;
    body: string;
    border: Border;
    header: Header;
    dropdown: Dropdown;
}

export interface IDropdownItem {
    category: string;
    options: IDropdownOption[];
}

export interface IDropdownOption {
    renderIcon: JSX.Element;
    label: string;
    onClick: Function;
}

export interface IDropdownProps {
    label: string;
    items: IDropdownItem[];
}

export interface IInputProps {
    type?: string;
    placeholder?: string;
    renderIcon?: JSX.Element;
}

export interface INavbarNotify {
    value: number;
    renderIcon: JSX.Element;
}
