import { set } from 'lodash';

/**
 * Set default to select field
 * @param {Array} nodes Nodes
 * @param {String|Number} defaultValue Default value to set
 * @return {Array} Nodes
 */
export default (nodes, defaultValue) =>
  nodes.map((node) => {
    const { value } = node.children[0].attrs;
    if (value === defaultValue) {
      set(node.children[0].attrs, 'selected', 'selected');
    }
    return node;
  });
