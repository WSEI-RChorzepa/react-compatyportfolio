export interface IOption {
    category: string;
    items: IItem[];
}

export interface IItem {
    renderIcon: JSX.Element;
    label: string;
    onClick(): void;
}
