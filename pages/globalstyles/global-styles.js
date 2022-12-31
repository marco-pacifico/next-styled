import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'Untitled Serif';
        src: local('Untitled Serif'), url('/fonts/untitled-serif-web-regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Untitled Sans';
        src: local('Untitled Sans'), url('/fonts/untitled-sans-web-light.woff2') format('woff2');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Untitled Sans';
        src: local('Untitled Sans'), url('/fonts/untitled-sans-web-regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Untitled Sans';
        src: local('Untitled Sans'), url('/fonts/untitled-sans-web-medium.woff2') format('woff2');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'source code pro';
        src: local('source code pro'), url('/fonts/source-code-pro.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'sohne';
        src: local('sohne'), url('/fonts/sohne.woff2') format('woff2');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'sohne';
        src: local('sohne'), url('/fonts/sohne.woff2') format('woff2');
        font-weight: 425;
        font-style: normal;
    }
    @font-face {
        font-family: 'sohne';
        src: local('sohne'), url('/fonts/sohne.woff2') format('woff2');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'sohne';
        src: local('sohne'), url('/fonts/sohne.woff2') format('woff2');
        font-weight: 200;
        font-style: normal;
    }

 
    html,
    body {
    padding: 0;
    margin: 0;
    font-family:'sohne', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    * {
    box-sizing: border-box;
    }

    @media (prefers-color-scheme: dark) {
    html {
        color-scheme: dark;
    }
    body {
        color: white;
        background: black;
    }
    }
`

export default GlobalStyles