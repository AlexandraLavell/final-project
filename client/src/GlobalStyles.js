
// import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --color-main-yellow: rgba(255, 250, 205, 0.2); 
        --color-font-yellow: lemonchiffon;//rgba(4, 93, 28, 1);//#009B77; //lemonchiffon;//#f9f77d; 
        --color-dark-yellow: #F7F44D;
        --color-compliment-green: #056B36;
        --color-compliment-blue: #020442;
        --color-file-brown: #c49e7a;
        --font-main: "Courier Prime", monospace;
        --font-body: 'Kosugi', Arial, Helvetica, sans-serif;
        --padding-page: 24px;
    }

    /* http://meyerweb.com/eric/tools/css/reset/
        v2.0 | 20110126
        License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        vertical-align: baseline;
        text-decoration: none;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    h1,
    h2,
    h3,
    label,
    button {
    color: #fff;
    font-family: var(--font-main);
    font-size: 32px;
    text-align: center;
    text-decoration: none;
    }
    p,
    a,
    li,
    blockquote,
    input {
    font-family: var(--font-main);
    text-decoration: none;
    }

    input {
        font-size: 24px;
        height: 42px;
        border: 2px solid var(--color-orange);
        border-radius: 4px;
        padding: 0 12px;
    }
    `;
