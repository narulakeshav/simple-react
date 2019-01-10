/**
 * @name: Grid
 * @flow
 */

import styled from 'styled-components';

/**
 * Page Component
 * @type Div
 */
export const Page = styled.div`
  padding: 0;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  background: ${(props) => (props.bg ? props.bg : 'none')};
`;

export const Section = styled.section`
  background: ${(props) => (props.bg ? props.bg : 'none')};

  /* Align Text */
  text-align: ${(props) => ((props.alignCenter) ? 'center'
    : (props.alignRight) ? 'right' : 'left')};
`;

/**
 * Grid
 * @type div
 */
export const Grid = styled(Section)`
  display: grid;
	grid-gap: ${(props) => ((props.gap) ? props.gap : '0')};
	padding: ${(props) => ((props.padding) ? props.padding : '0')};

	/* Split */
	grid-template-columns: ${(props) => ((props.split)
    ? props.split
    : '1fr')};

	/* Align Items (Top to Bottom) */
	align-items: ${(props) => ((props.sameHeightChildren)
    ? 'stretch'
    : (props.alignVertically)
      ? 'center'
      : (props.alignBottom)
        ? 'end'
        : 'start')};

	/* Justify (Left to Right) */
  justify-items: ${(props) => ((props.justifyCenter)
    ? 'center'
    : (props.justifyEnd)
      ? 'end'
      : 'stretch')};
`;
