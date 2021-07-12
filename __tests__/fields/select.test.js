import { keys } from 'lodash';
import { readHTMLFixture } from '../../utils';
import renderSelectField from '../../src/fields/select';

const FIELD_TYPE = 'select';

const fieldsToTest = {
  default: {
    type: FIELD_TYPE,
    text: 'Default select',
    default: 1,
    options: [
      { text: 'One', value: 1 },
      { text: 'Two', value: 2 },
      { text: 'Three', value: 3 },
      { text: 'Four', value: 4 },
    ],
  },
};

test.each(keys(fieldsToTest))(`Field:${FIELD_TYPE}(%s)`, (key) => {
  const expectedHTML = readHTMLFixture(`fields/${FIELD_TYPE}/${key}.html`);
  expect(renderSelectField(fieldsToTest[key])).toBe(expectedHTML);
});
