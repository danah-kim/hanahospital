import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};

    body {
        margin:0;
        padding:0;
        background-color:#fff;
        color:#333;
        font-style:normal;
        font-size: 12px;
        font-family: 'Helvetica Neue', 'Nanum Barun Gothic', 'Nanum Gothic', 'Segoe UI', dotum, -apple-system, sans-serif, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans';
        letter-spacing:-0.2px;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    div, ul, ol, li, dl, dt, dd, form, fieldset, input,textarea, button, p, h1, h2, h3, h4, h5, h6, blockquote, iframe, th, td {
        margin:0;
        padding:0;
        -webkit-text-size-adjust:none;
    }
    div, dd, li, p, span, td, dt, h1, h2, h3, h4, h5, h6, strong, b, em, th {
        font-family: 'Nanum Barun Gothic','Nanum Gothic',dotum,sans-serif;
    }
    img {
        border: 0 none;
        vertical-align:middle;
        max-width:100%;
    }
    li {
        list-style:none;
    }
    button span {
        display:none;
    }
    h1, h2, h3, h4, h5, h6 {
        font-size:100%;
        font-style:normal;
    }
`;

export default globalStyles;
