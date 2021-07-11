/**
 * Make parent node
 * @param {array} children Array of children nodes
 * @return {object} Parent node
 */
export default (children) => ({
  type: 'tag',
  name: 'div',
  voidElement: false,
  attrs: {
    class: 'mb-3',
  },
  children,
});
