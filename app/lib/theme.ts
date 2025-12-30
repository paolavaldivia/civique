import {createServerFn} from '@tanstack/react-start';
import {getCookie, setCookie} from '@tanstack/react-start/server';

export type Theme = 'light' | 'dark' | 'system';

const THEME_COOKIE_NAME = 'theme';

export const getThemeServerFn = createServerFn().handler(async () => {
    const theme = getCookie(THEME_COOKIE_NAME) || `{ theme: 'system' }`;
    return JSON.parse(theme);
});

export const setThemeServerFn = createServerFn({method: 'POST'})
    .inputValidator(((data: { theme: Theme }) => data))
    .handler(
        async ({data}) => {
            setCookie(THEME_COOKIE_NAME, JSON.stringify(data));
            return data;
        }
    );

