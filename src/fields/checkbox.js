import classNames from 'classnames';
import label from './common/label';
import renderField from './common/field';
import { makeId } from '../utils';
import defaultSetters from './default-setters';

/**
 * Render a checkbox field type in HTML
 * @param {object} schema Field schema
 * @return {string} HTML representation of a checkbox field
 */
export default (schema) => {
  const id = makeId(schema.text);

  const nodes = [
    {
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
            name: id,
            ...schema.attrs,
            class: classNames('form-check-input', schema.attrs?.class),
          },
        },
        label(schema.text, id, 'form-check-label'),
      ],
    },
  ];

  const nodesReady =
    schema.default !== undefined ? defaultSetters.checkbox(nodes, schema.default) : nodes;

  return renderField(nodesReady);
};
