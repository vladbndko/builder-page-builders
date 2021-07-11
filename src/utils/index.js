import slugify from 'slugify';

// eslint-disable-next-line import/prefer-default-export
export const makeId = (text) =>
  slugify(text, {
    lower: true,
  });
