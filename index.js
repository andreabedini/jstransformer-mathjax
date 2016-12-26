var _ = require('lodash');
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

exports.renderAsync = function (str, options) {
  var _opts = _.defaults({}, options, {
    format: default_output_format
  });

  return new Promise(function(resolve, reject) {
    mjAPI.typeset({
      math: str,
      format: "TeX", // "inline-TeX", "MathML"
      mml: _opts.format === 'mml',
      svg: _opts.format === 'svg'
    }, function (data) {
      if (data.errors) {
        reject(errors)
      } else {
        resolve(data[_opts.format]);
      }
    })
  });
};

