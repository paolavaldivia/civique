import {createServerFn} from '@tanstack/react-start';
import {getCookie, setCookie} from '@tanstack/react-start/server';

export type Theme = 'light' | 'dark' | 'system';

const THEME_COOKIE_NAME = 'theme';

export const getThemeServerFn = createServerFn().handler(async () => {
    const theme = getCookie(THEME_COOKIE_NAME) || 'system';
    return theme as Theme;
});

export const setThemeServerFn = createServerFn({method: 'POST'})
    .inputValidator(((data: Theme) => data))
    .handler(
        async ({data}) => {
            setCookie(THEME_COOKIE_NAME, data);
            return data;
        }
    );

