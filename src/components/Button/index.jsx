/**
 * @flow
 * External Dependencies
 */
import * as React from 'react';

/**
 * Internal Dependencies
 */
import { Btn } from './styles';

/**
 * Prop definition
 */
type Props = {
  bg?: string,
  color?: string,
  rounded?: boolean,
  children: any,
};

/**
 * Button Atomic Component
 */
const Button = (props: Props) => (
  <Btn {...props}>
    {props.children}
  </Btn>
);

/**
 * Default Props
 */
Button.defaultProps = {
  bg: '#F5F6F7',
  color: '#222222',
  rounded: false
};

// Export
export default Button;
