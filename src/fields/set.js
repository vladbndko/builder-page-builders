import renderField from '../renders/renderField';
import { makeId } from '../utils';
import defaultSetters from './default-setters';
import label from './common/label';
import title from './common/title';

/**
 * Make a radio node
 * @param {Object} option Check options
 * @param {String} schemaText Schema name
 * @return {Object} Check node
 */
const checkNode = (option, schemaText) => {
  const id = `${makeId(schemaText)}-${makeId(option.text)}`;
  return {
    type: 'tag',
    name: 'div',
    voidElement: false,
    attrs: {
      class: 'form-check',
    },
    children: [
      {
        type: 'tag',
        name: 'input',
        voidElement: true,
        attrs: {
          type: 'checkbox',
          id,
          value: option.value,
          class: 'form-check-input',
        },
      },
      label(option.text, id, 'form-check-label'),
    ],
  };
};

/**
 * Render set fields type in HTML
 * @param {Object} schema Field schema
 * @return {String} HTML representation of radio fields
 */
export default (schema) => {
  const nodes = schema.options.map((option) => checkNode(option, schema.text));

  const nodesReady =
    schema.default !== undefined ? defaultSetters.set(nodes, schema.default) : nodes;

  return renderField([title(schema.text), ...nodesReady]);
};
