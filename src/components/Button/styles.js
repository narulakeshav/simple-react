/**
 * @flow
 * External Dependencies
 */
import styled from 'styled-components';

/**
 * Internal Dependencies
 */
import { FONT } from '../../utils/styles';

/**
 * Btn
 * @type button
 */
export const Btn = styled.button`
  display: inline-block;
	background: ${(props) => props.bg};
	border: none;
	border-radius: ${(props) => (props.rounded ? '40px' : '4px')};
	height: 40px;
	padding: 4px 1.25rem;
	color: ${(props) => props.color};
  font: 600 ${FONT.size - 4}px ${FONT.family};
  transition: 0.25s all ease-in;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;
