import { set } from 'lodash';

/**
 * Set default to select field
 * @param {Array} nodes Nodes
 * @param {String|Number} defaultValue Default value to set
 * @return {Array} Nodes
 */
export default (nodes, defaultValue) => {
  const optionsNode = nodes[1].children.map((optionNode) => {
    if (optionNode.attrs.value === defaultValue) {
      set({ ...optionNode }.attrs, 'selected', 'selected');
    }
    return optionNode;
  });
  return [
    nodes[0],
    {
      ...nodes[1],
      children: optionsNode,
    },
  ];
};
