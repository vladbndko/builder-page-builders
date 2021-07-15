import renderField from '../renders/renderField';
import defaultSetters from './default-setters';
import check from './common/check';
import title from './common/title';

/**
 * Render set fields type in HTML
 * @param {Object} schema Field schema
 * @return {String} HTML representation of radio fields
 */
export default (schema) => {
  const nodes = schema.options.map((option) => check(option));

  const nodesReady =
    schema.default !== undefined ? defaultSetters.set(nodes, schema.default) : nodes;

  return renderField([title(schema.text), ...nodesReady]);
};
