import { set, isArray, includes } from 'lodash';

/**
 * Set default to check fields: radios, set of checkboxes
 * @param {Array} nodes Nodes
 * @param {String|Number|Array} defaultValue Default value to set
 * @return {Array} Nodes
 */
export default (nodes, defaultValue) =>
  [...nodes].map((node) => {
    const { value } = node.children[0].attrs;
    if (value === defaultValue || (isArray(defaultValue) && includes(defaultValue, value))) {
      set(node.children[0].attrs, 'checked', 'checked');
    }
    return node;
  });
