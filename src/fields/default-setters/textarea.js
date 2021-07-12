import { set } from 'lodash';

/**
 * Set default to textarea field
 * @param {array} nodes Nodes
 * @param {string|number} defaultValue Default value to set
 * @return {array} Nodes
 */
export default (nodes, defaultValue) => {
  set([...nodes][1], 'children', [{ type: 'text', content: defaultValue }]);
  return nodes;
};
