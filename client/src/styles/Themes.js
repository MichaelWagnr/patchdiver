import { createGlobalStyle } from 'styled-components'

const Themes = createGlobalStyle`
  :root{
    // Main
    --primary-bg: #111;
    --primary-bg-light: #181818;
    --primary-bg-dark: #000;
    --primary-fg: #bbb;
    --primary-fg-light: #fff;
    --primary-fg-dark: #777;

    --secondary-fg: #6E70A3;
    --secondary-fg-light: #898ABE;
    --secondary-fg-dark: #3C3D71;

    --tertiary-fg: #13B5B8;

    --heart-light: hsl(0, 100%, 35%);
    --heart-dark: hsl(0, 100%, 15%);
  }

  // DX100 Themes

  .default {
    --fm-typography: #6E70A3;
    --fm-header-bg: #000000;
    --fm-header-fg: #6E70A3;
    --fm-panel-bg: #2F2A30;
    --fm-slider-path: #221D03;
    --fm-display-bg: #000000;
    --fm-display-fg: #13B5B8;
    --fm-slider-bg: #000000;
    --fm-slider-a: #13B5B8;
    --fm-slider-b: #FA9770;
    --fm-slider-c: #C2B9A8;
    --fm-status-bg: #080808;
    --fm-status-fg: #6E70A3;
  }

  .jupiter8 {
    --fm-typography: #CD705277;
    --fm-header-bg: #050b0b;
    --fm-header-fg: #8299B0;
    --fm-panel-bg: #000;
    --fm-slider-path: #050b0b;
    --fm-display-bg: #000000;
    --fm-display-fg: #C03E3E;
    --fm-slider-bg: #15191A;
    --fm-slider-a: #CD7052;
    --fm-slider-b: #72B562;
    --fm-slider-c: #3A78B9;
    --fm-status-bg: #050b0b;
    --fm-status-fg: #C03E3E66;
  }

  .akaimpc60 {
    --fm-typography: #000000;
    --fm-header-bg: #626a78;
    --fm-header-fg: #ACB8BF;
    --fm-panel-bg: #ACB8BF;
    --fm-slider-path: #9599A5;
    --fm-display-bg: #000;
    --fm-display-fg: #489ece;
    --fm-slider-bg: #F9FBEB;
    --fm-slider-a: #0D70B2;
    --fm-slider-b: #DD2520;
    --fm-slider-c: #C2B9A8;
    --fm-status-bg: #000000;
    --fm-status-fg: #489ece99;
  }

  .juno106 {
    --fm-typography: #F9FBEB99;
    --fm-header-bg: #A42E2E;
    --fm-header-fg: #F9FBEB;
    --fm-panel-bg: #4A4A4C;
    --fm-slider-path: #222;
    --fm-display-bg: #000000;
    --fm-display-fg: #A42E2E;
    --fm-slider-bg: #000;
    --fm-slider-a: #5179a8;
    --fm-slider-b: #7B9D9D;
    --fm-slider-c: #F7A429;
    --fm-status-bg: #080808;
    --fm-status-fg: #5179a8;
  }
`

export default Themes
