const { minify } = require('html-minifier');
const fs = require('fs');
const path = require('path');

export const getFixturePath = (filepath) => path.join(__dirname, '..', '__fixtures__', filepath);

export const readFile = (filepath) => fs.readFileSync(getFixturePath(filepath), 'utf-8');

export const readHTMLFixture = (filepath) =>
  minify(readFile(path.join('html', filepath)), {
    collapseWhitespace: true,
    collapseInlineTagWhitespace: true,
    keepClosingSlash: true,
  });

export const readJSONFixture = (filepath) => readFile(path.join('json', filepath));
