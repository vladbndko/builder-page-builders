import { keys } from 'lodash';
import { readHTMLFixture } from '../../utils';
import renderTextareaField from '../../src/fields/textarea';

const FIELD_TYPE = 'textarea';

const fieldsToTest = {
  default: {
    text: 'Textarea',
    attrs: {
      rows: '5',
    },
  },
  hasValue: {
    text: 'I have a value',
    default: 'Some value',
  },
};

test.each(keys(fieldsToTest))(`Field:${FIELD_TYPE}(%s)`, (key) => {
  const expectedHTML = readHTMLFixture(`fields/${FIELD_TYPE}/${key}.html`);
  expect(renderTextareaField(fieldsToTest[key])).toBe(expectedHTML);
});