import { css } from "styled-components";

export const COLORS = {
    white: '0deg 0% 100%',
    black: '0deg 0% 0%',
    gray: {
        100: '185deg 5% 95%',
        200: '185deg 5% 80%',
        300: '185deg 5% 60%',
        400: '185deg 5% 40%',
        500: '185deg 5% 20%',
    },
    test: '200deg 80% 50%',
};

export const LightTheme = css`
    --color-text-primary: hsl(${COLORS.black});
    --color-text-secondary: hsl(${COLORS.gray[300]});
    --color-background: hsl(${COLORS.white});
    --color-border: hsl(${COLORS.gray[100]});
`
export const DarkTheme = css`
     /* --color-text-primary: hsl(${COLORS.test}); */
     --color-text-primary: hsl(${COLORS.white});
     --color-text-secondary: hsl(${COLORS.gray[400]});
     --color-background: hsl(${COLORS.black});
     --color-border: hsl(${COLORS.gray[500]});
`
