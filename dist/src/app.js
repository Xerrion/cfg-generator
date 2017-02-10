'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('../../src/materialize');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#app',
    data: {
        crosshairAlpha: 200,
        crosshairThickness: 0.5,
        crosshairSize: 5,
        crosshairGap: 0,
        crosshairOutline: 0,
        crosshairColorR: 50,
        crosshairColorG: 250,
        crosshairColorB: 50,
        bg: 50,
        crossHairDot: 0
    }
});

// jQuery Noobin
/* eslint-env node */
/* eslint-env Vue */
/* eslint-env jquery */

(0, _jquery2.default)(document).ready(function () {
    (0, _jquery2.default)('#crosshairAlpha').tooltip({
        delay: 50,
        tooltip: '<h5>cl_crosshairalpha</h5><p>Values: 0-255</p>',
        position: 'left',
        html: true
    });
});