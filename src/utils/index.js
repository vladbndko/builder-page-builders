import slugify from 'slugify';
import { v4 as uuidv4 } from 'uuid';

/**
 * Make a slug from the text
 * @param {String} text Text
 * @return {String} Slug
 */
const makeId = (text) => {
  if (process.env.NODE_ENV && process.env.NODE_ENV === 'test') {
    return slugify(text, {
      lower: true,
    });
  }
  return uuidv4();
};

/**
 * Value setter
 * @param {Array} perhapsValues Perhaps values
 * @return {String|Number} Value
 */
const setValue = (perhapsValues) => [...perhapsValues, ''].filter((v) => v !== undefined)[0];

export { makeId, setValue };
