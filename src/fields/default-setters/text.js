import { set } from 'lodash';

/**
 * Set default to text field
 * @param {Array} nodes Nodes
 * @param {String|Number} defaultValue Default value to set
 * @return {Array} Nodes
 */
export default (nodes, defaultValue) => {
  set([...nodes][1].attrs, 'value', defaultValue);
  return nodes;
};
