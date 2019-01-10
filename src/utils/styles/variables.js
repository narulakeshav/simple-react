/**
 * @name: Variables
 * @desc: Contains color scheme and default variables
 * for styling. Updating this will cause the styles
 * such as color or font to change.
 *
 * @flow
 */

/**
 * Local Variables
 */
// Scheme
export const SCHEME = {
  primary: '#FF7816',
  secondary: '#FF4B00',
  gray: '#F7F8F9',
  dark: '#062849',
};

// Text Colors
export const COLORS = {
  light: '#878C9C',
  base: '#606374',
  dark: '#262D38',
  white: '#FFFFFF'
};

// Font
export const FONT = {
  family: `${[
    'SF Text Pro',
    'sans-serif',
    '-apple-system',
    'BlinkMacSystemFont',
    'Helventica Neue',
    'Roboto'
  ].join(',')}`,
  size: 20
};
