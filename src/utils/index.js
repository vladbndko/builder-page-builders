import slugify from 'slugify';

/**
 * Make a slug from the text
 * @param {String} text Text
 * @return {String} Slug
 */
// eslint-disable-next-line import/prefer-default-export
export const makeId = (text) =>
  slugify(text, {
    lower: true,
  });
