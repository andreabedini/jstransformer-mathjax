var mjAPI = require("mathjax-node/lib/mj-single.js");

mjAPI.config({
  MathJax: {
    SVG: {
      font: "STIX-Web"
    }
  }
});

mjAPI.start();

var default_output_format = 'svg';

exports.name = 'mathjax';
exports.outputFormat = default_output_format;
exports.inputFormats = ['tex'];

exports.renderAsync = function (str, {format = default_output_format}) {
  return new Promise(function(resolve, reject) {
    mjAPI.typeset({
      math: str,
      format: "TeX", // "inline-TeX", "MathML"
      mml: format === 'mml',
      svg: format === 'svg'
    }, function (data) {
      if (data.errors) {
        reject(errors)
      } else {
        resolve(data[format]);
      }
    })
  });
};
