import { set } from 'lodash';
/**
 * Set default to check fields: radios, set of checkboxes
 * @param {array} nodes Nodes
 * @param {string|number} defaultValue Default value to set
 * @return {array} Nodes
 */
export default (nodes, defaultValue) =>
  [...nodes].map((node) => {
    const { value } = node.children[0].attrs;
    if (value === defaultValue) {
      set(node.children[0].attrs, 'checked', 'checked');
    }
    return node;
  });
