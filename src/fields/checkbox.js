import { has } from 'lodash';
import checkLabel from './common/checkLabel';
import renderField from './common/field';
import { makeId } from '../utils';

/**
 * Render a checkbox field type in HTML
 * @param {object} scheme Field scheme
 * @return {string} HTML representation of a checkbox field
 */
export default (scheme) => {
  const id = makeId(scheme.text);
  const children = [
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
            ...scheme.attrs,
            class: has(scheme, 'attrs.class')
              ? `form-check-input ${scheme.attrs.class}`
              : 'form-check-input',
          },
        },
        checkLabel(id, scheme.text),
      ],
    },
  ];
  return renderField(children);
};
