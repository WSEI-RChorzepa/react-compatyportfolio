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