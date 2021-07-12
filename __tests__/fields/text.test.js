import { keys } from 'lodash';
import { readHTMLFixture } from '../../utils';
import renderTextField from '../../src/fields/text';

const FIELD_TYPE = 'text';

const fieldsToTest = {
  default: {
    type: FIELD_TYPE,
    text: 'Default label',
    attrs: {
      placeholder: 'Example placeholder',
    },
  },
  tel: {
    type: FIELD_TYPE,
    text: 'Phone',
    attrs: {
      type: 'tel',
    },
  },
  email: {
    type: FIELD_TYPE,
    text: 'Email',
    default: 'hello@example.com',
    attrs: {
      type: 'email',
    },
  },
};

test.each(keys(fieldsToTest))(`Field:${FIELD_TYPE}(%s)`, (key) => {
  const expectedHTML = readHTMLFixture(`fields/${FIELD_TYPE}/${key}.html`);
  expect(renderTextField(fieldsToTest[key])).toBe(expectedHTML);
});
