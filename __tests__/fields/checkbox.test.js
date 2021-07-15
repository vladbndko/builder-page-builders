import { keys } from 'lodash';
import { readHTMLFixture } from '../../utils';
import renderCheckboxField from '../../src/fields/checkbox';

const FIELD_TYPE = 'checkbox';

const fieldsToTest = {
  default: {
    type: FIELD_TYPE,
    text: 'Default checkbox',
    value: 1,
  },
  checked: {
    type: FIELD_TYPE,
    text: 'Checked checkbox',
    default: true,
    value: 0,
  },
};

test.each(keys(fieldsToTest))(`Field:${FIELD_TYPE}(%s)`, (key) => {
  const expectedHTML = readHTMLFixture(`fields/${FIELD_TYPE}/${key}.html`);
  expect(renderCheckboxField(fieldsToTest[key])).toBe(expectedHTML);
});
