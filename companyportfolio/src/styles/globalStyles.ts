import { createGlobalStyle } from "styled-components";
import { font, colors}  from "./variables";

import "normalize.css";
import "./imports.css";

const GlobalStyle = createGlobalStyle`

    body {
        font-family: ${font.fontFamily};
        font-size: ${font.fontSize};
        color: ${font.color};
        background-color: ${colors.background.content}
    }

`;

export default GlobalStyle;
