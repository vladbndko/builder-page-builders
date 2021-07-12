import { set } from 'lodash';

/**
 * Set default to textarea field
 * @param {Array} nodes Nodes
 * @param {String|Number} defaultValue Default value to set
 * @return {Array} Nodes
 */
export default (nodes, defaultValue) => {
  set([...nodes][1], 'children', [{ type: 'text', content: defaultValue }]);
  return nodes;
};
