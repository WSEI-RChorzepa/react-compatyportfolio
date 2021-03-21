import { createGlobalStyle } from "styled-components";
import { font } from "./variables";

import "normalize.css";
import "./imports.css";

const GlobalStyle = createGlobalStyle`

    body {
        font-family: ${font.fontFamily};
        font-size: ${font.fontSize};
        color: ${font.color};
        background-color: rgba(236, 240, 241, .5);
    }

`;

export default GlobalStyle;
