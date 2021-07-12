/**
 * Make label node
 * @param {String} forAttr Label for attribute
 * @param {String} text Label text
 * @param {?String} classes Label classes
 * @return {Object} Simple label node
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
