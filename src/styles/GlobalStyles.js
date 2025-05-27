import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  /* ================================
     🎨 Base Colors (Icon Backgrounds)
  ================================= */
  --icon-bg-orange: hsl(27, 100%, 96%);
  --icon-bg-green: hsl(151, 88%, 94%);
  --icon-bg-blue: hsl(225, 100%, 96%);
  --icon-bg-purple: hsl(278, 100%, 95%);
  --letter-bg: hsl(220, 38%, 97%);

  /* ====================
     🌟 Accent Colors
  ======================= */
  --accent-red: hsl(0, 82%, 63%);
  --accent-green: hsl(151, 68%, 52%);
  --accent-purple: hsl(277, 91%, 56%);
  --accent-blue: hsl(223, 100%, 59%);
  --accent-orange: hsl(22, 100%, 60%);
  --color-white: hsl(0, 100%, 100%);
  --color-black: hsl(0, 0%, 0%);

  /* ================================
     🌞 Light Mode (default override)
  ================================= */
  &,
  &.light-mode {
    --bg-app: hsl(220, 38%, 97%);
    --bg-sub: hsl(0, 100%, 100%);
    --bg-progress: hsl(0, 100%, 100%);

    --text-title: hsl(216, 25%, 25%);
    --text-desc: hsl(219, 13%, 44%);
    --text-letter: hsl(219, 13%, 44%);
    --icon-toggle: hsl(219, 13%, 44%);
    --sub-shadow: 0px 16px 40px rgba(143, 160, 193, 0.14);
    --answer-label: hsl(0, 100%, 100%);

    --bg-mobile: url("/images/backgrounds/pattern-background-mobile-light.svg");
    --bg-tablet: url("/images/backgrounds/pattern-background-tablet-light.svg");
    --bg-desktop: url("/images/backgrounds/pattern-background-desktop-light.svg");
  }

  /* ================================
     🌙 Dark Mode
  ================================= */
  &.dark-mode {
    --bg-app: hsl(216, 25%, 25%);
    --bg-sub: hsl(215, 27%, 32%);
    --bg-progress: hsl(215, 27%, 32%);

    --text-title: hsl(0, 100%, 100%);
    --text-desc: hsl(216, 47%, 78%);
    --text-letter: hsl(219, 13%, 44%);
    --icon-toggle: hsl(0, 100%, 100%);
    --sub-shadow: 0px 16px 40px rgba(49, 62, 81, 0.14);
    --answer-label: hsl(215, 27%, 32%);

    --bg-mobile: url("/images/backgrounds/pattern-background-mobile-dark.svg");
    --bg-tablet: url("/images/backgrounds/pattern-background-tablet-dark.svg");
    --bg-desktop: url("/images/backgrounds/pattern-background-desktop-dark.svg");
  }

  /* TYPOGRAPHY */

  /* font-family */
  @font-face {
    font-family: "Rubik";
    src: url("/fonts/static/Rubik-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Rubik";
    src: url("/fonts/static/Rubik-Medium.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Rubik";
    src: url("/fonts/static/Rubik-Italic.ttf") format("truetype");
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }

  /* font-sizes */
  --fs-title: clamp(2.5rem, 6vw, 4rem);
  --fs-5xl: 9rem;
  --fs-4xl: 5.5rem;
  --fs-3xl: 4rem;
  --fs-2xl: 2.5rem;
  --fs-xl: 2.25rem;
  --fs-lg: 1.75rem;
  --fs-md: 1.5rem;
  --fs-sm: 1.25rem;
  --fs-xs: 1.125rem;
  --fs-xxs: 0.875rem;

  /* font-weights */
  --fw-light: 300; 
  --fw-regular: 400; 
  --fw-medium: 500; 
 
  /* line-heights */
  --lh-tightest: 1; 
  --lh-tight: 1.2; 
  --lh-normal: 1.5; 

  /* Spacing Scale */
  --space-xxs: 0.5rem;
  --space-xs: 0.75rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 2.5rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;
  --space-4xl: 8rem;
  --space-5xl: 9rem;
  --space-6xl: 11.5rem;

  body {
    font-family: "Rubik", sans-serif;
    background-color: var(--bg-app);
    background-image: var(--bg-mobile);
    background-size: cover;
  }

  @media (min-width: 37.5rem) {
    body {
      background-image: var(--bg-tablet);
    }
  }

  @media (min-width: 64rem) {
    body {
      background-image: var(--bg-desktop);
    }
  }

  label:has(input:checked) .AnswerLabel {
    color: var(--answer-label);
}

}


/* RESET */

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Prevent font size inflation */
html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
  box-sizing: border-box;
}

/* Remove default margin in favour of better control in authored CSS */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin-block-end: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core body defaults */
body {
  min-height: 100dvh;
  line-height: 1.5;
}

/* Remove default margins */
html,
body {
  margin: 0;
  padding: 0;
  border: 0;
}

* {
  margin: 0;
}

/* Set shorter line heights on headings and interactive elements */
h1,
h2,
h3,
h4,
button,
input,
label {
  line-height: 1.1;
}

/* Balance text wrapping on headings */
h1,
h2,
h3,
h4 {
  overflow-wrap: break-word;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
  color: currentColor;
}

/* Make images easier to work with */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Make sure textareas without a rows attribute are not tiny */
textarea:not([rows]) {
  min-height: 10em;
}

/* Anything that has been anchored to should have extra scroll margin */
:target {
  scroll-margin-block: 5ex;
}

/* remove animations for people who've turned them off */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Smooth scroll */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

button {
  cursor: pointer;
}

`;

export default GlobalStyles;
