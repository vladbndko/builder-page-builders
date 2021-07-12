import renderField from './common/field';
import { makeId } from '../utils';
import defaultSetters from './default-setters';
import label from './common/label';

/**
 * Make a radio node
 * @param {object} option Radio options
 * @return {object} Radio node
 */
const radioNode = (option) => {
  const id = makeId(option.text);
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
          name: id,
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
 * @param {object} schema Field schema
 * @return {string} HTML representation of radio fields
 */
export default (schema) => {
  const nodes = schema.options.map(radioNode);

  const nodesReady =
    schema.default !== undefined ? defaultSetters.radio(nodes, schema.default) : nodes;

  return renderField(nodesReady);
};
