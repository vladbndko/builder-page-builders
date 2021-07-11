import { keys } from 'lodash';
import { readHTMLFixture } from '../../utils';
import renderRadioField from '../../src/fields/radio';

const FIELD_TYPE = 'radio';

const fieldsToTest = {
  default: {
    text: 'Radios',
    default: 0,
    options: [
      { text: 'Default radio', value: 0 },
      { text: 'Default radio checked', value: 1 },
      { text: 'Default radio disabled', value: 2 },
    ],
  },
};

test.each(keys(fieldsToTest))(`Field:${FIELD_TYPE}(%s)`, (key) => {
  const expectedHTML = readHTMLFixture(`fields/${FIELD_TYPE}/${key}.html`);
  expect(renderRadioField(fieldsToTest[key])).toBe(expectedHTML);
});
