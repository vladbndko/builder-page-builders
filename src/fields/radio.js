import renderField from '../renders/renderField';
import { makeId } from '../utils';
import defaultSetters from './default-setters';
import label from './common/label';
import title from './common/title';

/**
 * Make a radio node
 * @param {Object} option Radio options
 * @param {String} schemaText Schema name
 * @return {Object} Radio node
 */
const radioNode = (option, schemaText) => {
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
          type: 'radio',
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
 * Render radio fields type in HTML
 * @param {Object} schema Field schema
 * @return {String} HTML representation of radio fields
 */
export default (schema) => {
  const nodes = schema.options.map((option) => radioNode(option, schema.text));

  const nodesReady =
    schema.default !== undefined ? defaultSetters.radio(nodes, schema.default) : nodes;

  return renderField([title(schema.text), ...nodesReady]);
};
