# jstransformer-mathjax

JSTransformers plumbing for rendering LaTeX formulas into SVG or MML using
MathJax.

[![Build
Status](https://img.shields.io/travis/andreabedini/jstransformer-mathjax/master.svg)](https://travis-ci.org/andreabedini/jstransformer-mathjax)
[![Dependency
Status](https://img.shields.io/david/andreabedini/jstransformer-mathjax.svg)](https://david-dm.org/andreabedini/jstransformer-mathjax)
[![Coverage
Status](https://img.shields.io/coveralls/andreabedini/jstransformer-mathjax/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-mathjax?branch=master)
[![NPM
version](https://img.shields.io/npm/v/jstransformer-mathjax.svg)](https://www.npmjs.org/package/jstransformer-mathjax)

## Installation

    npm install jstransformer-mathjax

## Usage

    var transformer = require('jstransformer');
    var mathjax = transformer(require('jstransformer-mathjax'));

    var options = {};
    var res = mathjax.render('c = \\pm\\sqrt{a^2 + b^2}', options);
    // => {body: '<svg ...', dependencies: []}

## License

MIT

