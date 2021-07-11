import { keys } from 'lodash';
import { readHTMLFixture } from '../../utils';
import renderCheckboxField from '../../src/fields/checkbox';

const FIELD_TYPE = 'checkbox';

const fieldsToTest = {
  default: {
    text: 'Default checkbox',
    attrs: {
      value: '1',
    },
  },
  checked: {
    text: 'Checked checkbox',
    attrs: {
      value: '0',
      checked: 'checked',
    },
  },
};

test.each(keys(fieldsToTest))(`Field:${FIELD_TYPE}(%s)`, (key) => {
  const expectedHTML = readHTMLFixture(`fields/${FIELD_TYPE}/${key}.html`);
  expect(renderCheckboxField(fieldsToTest[key])).toBe(expectedHTML);
});
