import HTML from 'html-parse-stringify';
import parentNode from './parent';

/**
 * Render a field wrapped in the parent
 * @param {array} children Array of children nodes
 * @return {string} HTML representation of a field
 */
export default (children) => {
  const ast = [parentNode(children)];
  return HTML.stringify(ast);
};
