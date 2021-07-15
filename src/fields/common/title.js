/**
 * Make title (h5) node
 * @param {String} text Title text
 * @param {String} tag Title tag
 * @return {Object} Title (h5) node
 */
export default (text, tag = 'h5') => ({
  type: 'tag',
  name: tag,
  voidElement: false,
  children: [{ type: 'text', content: text }],
});
