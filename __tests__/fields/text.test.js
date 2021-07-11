import { keys } from 'lodash';
import { readHTMLFixture } from '../../utils';
import renderTextField from '../../src/fields/text';

const FIELD_TYPE = 'text';

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

test.each(keys(fieldsToTest))(`Field:${FIELD_TYPE}(%s)`, (key) => {
  const expectedHTML = readHTMLFixture(`fields/${FIELD_TYPE}/${key}.html`);
  expect(renderTextField(fieldsToTest[key])).toBe(expectedHTML);
});
