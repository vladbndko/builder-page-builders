import { keys } from 'lodash';
import { readHTMLFixture } from '../../utils';
import renderSetField from '../../src/fields/set';

const FIELD_TYPE = 'set';

const fieldsToTest = {
  default: {
    type: FIELD_TYPE,
    text: 'Set',
    default: [0, 2],
    options: [
      { text: 'Default checkbox', value: 0 },
      { text: 'Default checkbox checked', value: 1 },
      { text: 'Default checkbox disabled', value: 2 },
    ],
  },
};

test.each(keys(fieldsToTest))(`Field:${FIELD_TYPE}(%s)`, (key) => {
  const expectedHTML = readHTMLFixture(`fields/${FIELD_TYPE}/${key}.html`);
  expect(renderSetField(fieldsToTest[key])).toBe(expectedHTML);
});
