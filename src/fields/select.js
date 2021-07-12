import renderField from '../renders/renderField';
import { makeId } from '../utils';
import defaultSetters from './default-setters';
import label from './common/label';
import classNames from 'classnames';

/**
 * Make a select option node
 * @param {Object} option Option options
 * @return {Object} Option node
 */
const optionNode = (option) => {
  return {
    type: 'tag',
    name: 'option',
    voidElement: false,
    attrs: {
      value: option.value,
    },
    children: [{ type: 'text', content: option.text }],
  };
};

/**
 * Render select field type in HTML
 * @param {Object} schema Field schema
 * @return {String} HTML representation of select field
 */
export default (schema) => {
  const id = makeId(schema.text);

  const nodes = [
    label(schema.text, id),
    {
      type: 'tag',
      name: 'select',
      voidElement: false,
      attrs: {
        id,
        ...schema.attrs,
        class: classNames('form-select', schema.attrs?.class),
      },
      children: schema.options.map(optionNode),
    },
  ];

  const nodesReady =
    schema.default !== undefined ? defaultSetters.select(nodes, schema.default) : nodes;

  return renderField(nodesReady);
};
