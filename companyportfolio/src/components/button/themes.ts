import { colors } from 'styles/variables';
import {  IButtonTheme, ButtonVariant } from '../types'

export const themes: Map<ButtonVariant, IButtonTheme> = new Map();
themes.set( 'primary', {
    backgroundColor: colors.primary,
    color: '#fff',
});

themes.set('danger', {
    backgroundColor: colors.danger,
    color: '#fff',
});

