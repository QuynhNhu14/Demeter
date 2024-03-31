import * as stylex from '@stylexjs/stylex';

// A constant can be used to avoid repeating the media query
const DARK = '@media (prefers-color-scheme: dark)';

export const colors = stylex.defineVars({
  textColor: {default: 'black', [DARK]: 'white'},
  primaryColor: {default: '#009f7f', [DARK]: '#009f7f'},
  secondaryColor: {default: '#019376', [DARK]: '#019376'},
  borderColor: {default: '#e7e7e7', [DARK]: '#333'},
  backgroundGrayColor: {default: '#f3f4f6', [DARK]: '#333'},
  grayColor: {default: '#e5e7eb', [DARK]: '#333'},

  primaryText: {default: 'black', [DARK]: 'white'},
  secondaryText: {default: '#333', [DARK]: '#ccc'},
  accent: {default: 'blue', [DARK]: 'lightblue'},
  background: {default: 'white', [DARK]: 'black'},
  lineColor: {default: 'gray', [DARK]: 'lightgray'},
});

export const spacing = stylex.defineVars({
  none: '0px',
  xsmall: '4px',
  small: '8px',
  medium: '12px',
  large: '20px',
  xlarge: '32px',
  xxlarge: '48px',
  xxxlarge: '96px',
});