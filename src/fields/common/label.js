/**
 * Make label node
 * @param {string} forAttr Label for attribute
 * @param {string} text Label text
 * @param {?string} classes Label classes
 * @return {object} Simple label node
 */
export default (text, forAttr = '', classes = 'form-label') => ({
  type: 'tag',
  name: 'label',
  voidElement: false,
  attrs: {
    for: forAttr,
    class: classes,
  },
  children: [{ type: 'text', content: text }],
});
