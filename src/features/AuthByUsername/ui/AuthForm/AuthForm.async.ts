import { FC, lazy } from 'react';
import { AuthFormProps } from './AuthForm';

export const AuthFormAsync = lazy<FC<AuthFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    // to simulate delay
    setTimeout(() => resolve(import('./AuthForm')), 1500);
}));
