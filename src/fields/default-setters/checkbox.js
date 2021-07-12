import { set } from 'lodash';
/**
 * Set default to check field
 * @param {Object} node Node
 * @param {String|Number} defaultValue Default value to set
 * @return {Object} Nodes
 */
export default (node, defaultValue) => {
  if (defaultValue === true) {
    set(node[0].children[0].attrs, 'checked', 'checked');
  }
  return node;
};
