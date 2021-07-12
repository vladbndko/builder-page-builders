import { set } from 'lodash';

/**
 * Set default to text field
 * @param {array} nodes Nodes
 * @param {string|number} defaultValue Default value to set
 * @return {array} Nodes
 */
export default (nodes, defaultValue) => {
  set([...nodes][1].attrs, 'value', defaultValue);
  return nodes;
};
