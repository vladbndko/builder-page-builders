import { has, get } from 'lodash';
import labelNode from './common/label';
import renderField from './common/field';
import { makeId } from '../utils';

/**
 * Render a textarea field type in HTML
 * @param {object} scheme Field scheme
 * @return {string} HTML representation of a textarea field
 */
export default (scheme) => {
  const id = makeId(scheme.text);
  const children = [
    labelNode(id, scheme.text),
    {
      type: 'tag',
      name: 'textarea',
      voidElement: false,
      attrs: {
        id,
        ...scheme.attrs,
        class: has(scheme, 'attrs.class') ? `form-control ${scheme.attrs.class}` : 'form-control',
      },
      children: [{ type: 'text', content: get(scheme, 'default', '') }],
    },
  ];
  return renderField(children);
};
