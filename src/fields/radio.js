import { has, set } from 'lodash';
import checkLabel from './common/checkLabel';
import renderField from './common/field';
import { makeId } from '../utils';

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
      checkLabel(id, option.text),
    ],
  };
};

/**
 * Render radio fields type in HTML
 * @param {object} scheme Field scheme
 * @return {string} HTML representation of radio fields
 */
export default (scheme) => {
  const children = scheme.options.map(radioNode).map((node) => {
    if (
      has(scheme, 'default') &&
      scheme.default !== '' &&
      node.children[0].attrs.value === scheme.default
    ) {
      set(node.children[0].attrs, 'checked', 'checked');
    }
    return node;
  });
  return renderField(children);
};
