/* eslint-env node */
/* eslint-env Vue */
/* eslint-env jquery */

import Vue from 'vue';
import $ from 'jquery'
import '../../src/materialize';

new Vue({
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
$(document).ready(function () {
    $('#crosshairAlpha').tooltip({
        delay: 50,
        tooltip: '<h5>cl_crosshairalpha</h5><p>Values: 0-255</p>',
        position: 'left',
        html: true
    });
});
