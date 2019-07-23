const fs = require('fs');
const Handlebars = require('handlebars');
const { toHsla } = require('./util/color');

// import prop value transformer for ad-hoc material ui colors in docs
const toMaterialPaletteColor = require('./transforms').filter(
  (t) => t.name === 'attribute/materialPalette'
)[0].transformer;

Handlebars.registerHelper('json', (c) => JSON.stringify(c, null, 2));
const template = Handlebars.compile(fs.readFileSync(`./doc/index.hbs`).toString());

/**
 * @param {Array} props list of dictionary props
 * @param {String} cat category
 * @returns {Array}
 */
const filterByCategory = (props, cat) =>
  props.filter((p) => p.attributes.category === `${cat}`);

/**
 * @returns {String} generated comment with date
 */
const jsComment = () =>
  [
    '/**',
    '* DO NOT EDIT',
    `* Generated by fds-dictionary on ${new Date()}`,
    '* github.com/cbinsights/form-design-system/',
    '*/\n\n',
  ].join('\n');

/**
 * @param {Array} dictionary style-dictionary dictionary
 * @return {String} html file
 */
const formatHtmlDoc = (dictionary) => {
  const color = filterByCategory(dictionary.allProperties, 'color').map((p) => {
    const { name, hex, rgb, hsl, varNames } = p.attributes;
    const { materialPalette } = toMaterialPaletteColor(p);
    return {
      name,
      varNames,
      values: {
        calculated: p.value,
        hex,
        rgba: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`,
        hsla: toHsla(hsl),
      },
      materialPalette: Object.keys(materialPalette).map((key) => ({
        key,
        value: materialPalette[key],
        isBase: Boolean(key.toString() === '500'),
        isAccent: Boolean(key.toString().includes('A')),
      })),
    };
  });

  const otherProps = dictionary.allProperties
    .filter((p) => p.attributes.category !== 'color')
    .map((p) => {
      const { varNames, category } = p.attributes;
      return {
        varNames,
        value: p.value,
        attributes: { category },
      };
    });

  return template({
    color,
    font: filterByCategory(otherProps, 'font'),
    layout: filterByCategory(otherProps, 'layout'),
    motion: filterByCategory(otherProps, 'motion'),
  });
};

/**
 * @param {Array} dictionary style-dictionary dictionary
 * @returns {String} js file
 */
const formatJSCustomProperties = (dictionary) =>
  [
    `${jsComment()}`,
    'module.exports = {',
    ...dictionary.allProperties.map((prop) => `  "--${prop.name}": "${prop.value}",`),
    '};',
  ].join('\n');

/**
 * @param {Array} dictionary style-dicitonary dictionary
 * @return {String} js file with commonJS exports
 */
const formatCommonJs = (dictionary) =>
  jsComment() +
  dictionary.allProperties
    .map((prop) => `exports.${prop.name} = "${prop.value}";`)
    .join('\n');

/**
 * @param {Object} filteredDictionary dictionary category-filtered by config
 * @return {String} js file for colors in the CBI React Native app
 */
const formatReactNativeColors = (filteredDictionary) =>
  [
    `${jsComment()}`,
    'module.exports = {',
    ...filteredDictionary.allProperties.map((prop) => `  ${prop.name}: '${prop.value}',`),
    '};',
  ].join('\n');

/**
 * @param {Object} filteredDictionary dictionary category-filtered by config
 * @return {String} js file with commonjs export of tint/shade objects for each color
 */
const formatMaterialPalette = (filteredDictionary) =>
  [
    `${jsComment()}`,
    'module.exports = {',
    ...filteredDictionary.allProperties.map((prop) => {
      const paletteProps = Object.keys(prop.attributes.materialPalette)
        .map((k) => `    ${k}: '${prop.attributes.materialPalette[k]}',`)
        .join('\n');

      return `  ${prop.name}: {\n${paletteProps}\n  },`;
    }),
    '};',
  ].join('\n');

/**
 * @param {Object} filteredDictionary dictionary category-filtered by config
 * @return {String} css file with "custom media" declarations (uses PostCSS to polyfill)
 */
const formatCssCustomMedia = (filteredDictionary) =>
  [
    `${jsComment()}`,
    `/**
* Usage (relies on postcss-preset-env Stage 1 polyfills):
*
* @media (--viewport-s) {
*   ...styles that target small viewports AND larger...
* }
*/`,
    ...filteredDictionary.allProperties.map(
      (prop) => `@custom-media --viewport-${prop.name} ${prop.value};`
    ),
  ].join('\n');

// Custom formats
module.exports = [
  {
    name: 'html/doc',
    formatter: formatHtmlDoc,
  },
  {
    name: 'js/customProperties',
    formatter: formatJSCustomProperties,
  },
  {
    name: 'javascript/commonJs',
    formatter: formatCommonJs,
  },
  {
    name: 'javascript/reactNativeColors',
    formatter: formatReactNativeColors,
  },
  {
    name: 'javascript/materialPalette',
    formatter: formatMaterialPalette,
  },
  {
    name: 'css/customMedia',
    formatter: formatCssCustomMedia,
  },
];