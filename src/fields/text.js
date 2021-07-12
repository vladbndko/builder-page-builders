import classNames from 'classnames';
import renderField from './common/field';
import { makeId } from '../utils';
import defaultSetters from './default-setters';
import label from './common/label';

/**
 * Render a text field type in HTML
 * @param {object} schema Field schema
 * @return {string} HTML representation of a text field
 */
export default (schema) => {
  const id = makeId(schema.text);

  const nodes = [
    label(schema.text, id),
    {
      type: 'tag',
      name: 'input',
      voidElement: true,
      attrs: {
        id,
        name: id,
        type: 'text',
        ...schema.attrs,
        class: classNames('form-control', schema.attrs?.class),
      },
    },
  ];

  const nodesReady =
    schema.default !== undefined ? defaultSetters.text(nodes, schema.default) : nodes;

  return renderField(nodesReady);
};
