/**
 * Created by xerrion on 30/01/2017.
 */
var app = new Vue({
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
        styleObject: {
            'background-color': 'rgb(' + this.crosshairColorR +'2,2)',
            width: 250+'px',
            height: 250+'px'
        },
        crossHairDot: 0
    }
});
$(document).ready(function () {
    $('#crosshairAlpha').tooltip({
        delay: 50,
        tooltip: "<h5>cl_crosshairalpha</h5><p>Values: 0-255</p>",
        position: 'left',
        html: true
    });
});