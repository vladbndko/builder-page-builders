import classNames from 'classnames';
import renderField from '../renders/renderField';
import { makeId, setValue } from '../utils';
import label from './common/label';

/**
 * Render a text field type in HTML
 * @param {Object} schema Field schema
 * @return {String} HTML representation of a text field
 */
export default (schema) => {
  const id = makeId(schema.text);
  return renderField([
    label(schema.text, id),
    {
      type: 'tag',
      name: 'input',
      voidElement: true,
      attrs: {
        id,
        type: 'text',
        ...schema.attrs,
        value: setValue([schema.value, schema.default]),
        class: classNames('form-control', schema.attrs?.class),
      },
    },
  ]);
};
