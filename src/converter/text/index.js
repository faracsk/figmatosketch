const textAlignement = require('./_horizontalAlignement');
const textVerticalAlignement = require('./_verticalAlignement');
const textCase = require('./_textCase');

module.exports = function (data, result) {
  // const color = {};
  // for (let i in data.fills) {
  //   if(data.fills[i].type === 'SOLID') {
  //     color.a = data.fills[i].opacity;
  //     color.b = data.fills[i].color.b;
  //     color.g = data.fills[i].color.g;
  //     color.r = data.fills[i].color.r;
  //   }
  // }
  // result.style.textStyle = {
  //   "_class": "textStyle",
  //   "encodedAttributes": {
  //     "MSAttributedStringColorAttribute": {
  //       "_class": "color",
  //       "alpha": color.a,
  //       "blue": color.b,
  //       "green": color.g,
  //       "red": color.r
  //     },
  //     "MSAttributedStringFontAttribute": {
  //       "_class": "UIFontDescriptor",
  //       "attributes": {
  //         "name": data.fontName.family,
  //         "size": data.fontSize
  //       }
  //     },
  //     "textStyleVerticalAlignmentKey": 0,
  //     "paragraphStyle": {
  //       "_class": "paragraphStyle",
  //       "maximumLineHeight": data.lineHeight.value,
  //       "minimumLineHeight": data.lineHeight.value,
  //       "alignment": textAlignement(data.textAlignHorizontal)
  //     },
  //     "kerning": data.letterSpacing.value
  //   },
  //   "verticalAlignment": textVerticalAlignement(data.textAlignVertical)
  // };
  // result.attributedString = {
  //   "_class": "attributedString",
  //   "string": data.characters,
  //   "attributes": [{
  //     "_class": "stringAttribute",
  //     "location": 0,
  //     "length": data.characters.length,
  //     "attributes": {
  //       "MSAttributedStringFontAttribute": {
  //         "_class": "UIFontDescriptor",
  //         "attributes": {
  //           "name": data.fontName.family,
  //           "size": data.fontSize
  //         }
  //       },
  //       "MSAttributedStringColorAttribute": {
  //         "_class": "color",
  //         "alpha": color.a,
  //         "blue": color.b,
  //         "green": color.g,
  //         "red": color.r
  //       },
  //       "paragraphStyle": {
  //         "_class": "paragraphStyle",
  //         "alignment": textAlignement(data.textAlignHorizontal)
  //       }
  //     }
  //   }]
  // };

  // if (data.textCase) {
  //   result.style.textStyle.encodedAttributes.MSAttributedStringTextTransformAttribute = 1;
  //   result.attributedString.attributes[0].attributes.MSAttributedStringTextTransformAttribute = textCase(data.textCase);
  // }
  //
  // result.automaticallyDrawOnUnderlyingPath = false;
  // result.dontSynchroniseWithSymbol = false;
  // result.glyphBounds = "{{0, 4}, {38, 8}}";
  // result.lineSpacingBehaviour = 2;
  // result.textBehaviour = 2;
}
