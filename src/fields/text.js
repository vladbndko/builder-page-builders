import parent from './common/parent';

const HTML = require('html-parse-stringify');
const slugify = require('slugify');

const text = (schema) => {
  const id = slugify(schema.text, {
    lower: true,
  });
  const ast = [
    {
      type: 'tag',
      name: 'label',
      voidElement: false,
      attrs: {
        for: id,
        class: 'form-label',
      },
      children: [{ type: 'text', content: schema.text }],
    },
    {
      type: 'tag',
      name: 'input',
      voidElement: true,
      attrs: {
        id: slugify(schema.text, {
          lower: true,
        }),
        type: 'text',
        ...schema.attrs,
        class: schema.attrs.class ? `form-control ${schema.attrs.class}` : 'form-control',
      },
    },
  ];
  return parent(HTML.stringify(ast));
};
export default text;
