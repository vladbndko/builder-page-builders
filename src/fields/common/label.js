/**
 * Make label node
 * @param {string} id Label for attribute
 * @param {string} text Label text
 * @return {object} Label node
 */
export default (id, text) => ({
  type: 'tag',
  name: 'label',
  voidElement: false,
  attrs: {
    for: id,
    class: 'form-label',
  },
  children: [{ type: 'text', content: text }],
});
