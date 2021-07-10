import { keys } from 'lodash';
import { readHTMLFixture } from '../../utils';
import text from '../../src/fields/text';

const fieldsToTest = {
  default: {
    text: 'Default label',
    attrs: {
      placeholder: 'Example placeholder',
    },
  },
  tel: {
    text: 'Phone',
    attrs: {
      type: 'tel',
    },
  },
  email: {
    text: 'Email',
    attrs: {
      type: 'email',
    },
  },
};

test.each(keys(fieldsToTest))('Field:text(%s)', (key) => {
  const expectedHTML = readHTMLFixture(`fields/text/${key}.html`);
  expect(text(fieldsToTest[key])).toBe(expectedHTML);
});
