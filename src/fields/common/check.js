import { makeId } from '../../utils';
import label from './label';

/**
 * Make a check node
 * @param {Object} option Check options
 * @param {String} type Type of check: checkbox|radio
 * @return {Object} Check node
 */
export default (option, type = 'checkbox') => {
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
          type,
          id,
          value: option.value,
          class: 'form-check-input',
        },
      },
      label(option.text, id, 'form-check-label'),
    ],
  };
};
