import labelNode from './common/label';
import renderField from './common/field';
import { makeId } from '../utils';
import { has } from 'lodash';

/**
 * Render a text field type in HTML
 * @param {object} scheme Field scheme
 * @return {string} HTML representation of a text field
 */
export default (scheme) => {
  const id = makeId(scheme.text);
  const children = [
    labelNode(id, scheme.text),
    {
      type: 'tag',
      name: 'input',
      voidElement: true,
      attrs: {
        id,
        type: 'text',
        ...scheme.attrs,
        class: has(scheme, 'attrs.class') ? `form-control ${scheme.attrs.class}` : 'form-control',
      },
    },
  ];
  return renderField(children);
};
