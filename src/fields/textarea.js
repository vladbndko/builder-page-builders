import classNames from 'classnames';
import renderField from '../renders/renderField';
import { makeId } from '../utils';
import defaultSetters from './default-setters';
import label from './common/label';

/**
 * Render a textarea field type in HTML
 * @param {Object} schema Field schema
 * @return {String} HTML representation of a textarea field
 */
export default (schema) => {
  const id = makeId(schema.text);

  const nodes = [
    label(schema.text, id),
    {
      type: 'tag',
      name: 'textarea',
      voidElement: false,
      attrs: {
        id,
        name: id,
        ...schema.attrs,
        class: classNames('form-control', schema.attrs?.class),
      },
      children: [],
    },
  ];

  const nodesReady =
    schema.default !== undefined ? defaultSetters.textarea(nodes, schema.default) : nodes;

  return renderField(nodesReady);
};
