import HTML from 'html-parse-stringify';

/**
 * Render a field
 * @param {array} nodes Nodes
 * @return {string} HTML representation of a field
 */
export default (nodes) =>
  HTML.stringify([
    {
      type: 'tag',
      name: 'div',
      voidElement: false,
      attrs: {
        class: 'mb-3',
      },
      children: nodes,
    },
  ]);
