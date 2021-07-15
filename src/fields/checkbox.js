import renderField from '../renders/renderField';
import defaultSetters from './default-setters';
import check from './common/check';

/**
 * Render a checkbox field type in HTML
 * @param {Object} schema Field schema
 * @return {String} HTML representation of a checkbox field
 */
export default (schema) => {
  const nodes = [check(schema)];

  const nodesReady =
    schema.default !== undefined ? defaultSetters.checkbox(nodes, schema.default) : nodes;

  return renderField(nodesReady);
};
