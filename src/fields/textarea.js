import classNames from 'classnames';
import renderField from '../renders/renderField';
import { makeId, setValue } from '../utils';
import label from './common/label';

/**
 * Render a textarea field type in HTML
 * @param {Object} schema Field schema
 * @return {String} HTML representation of a textarea field
 */
export default (schema) => {
  const id = makeId(schema.text);
  return renderField([
    label(schema.text, id),
    {
      type: 'tag',
      name: 'textarea',
      voidElement: false,
      attrs: {
        id,
        ...schema.attrs,
        class: classNames('form-control', schema.attrs?.class),
      },
      children: [{ type: 'text', content: setValue([schema.value, schema.default]) }],
    },
  ]);
};
