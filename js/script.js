var fireballSize = 22;
var getFireballSpeed = function (left) {
    return left ? 5 : 2;
};

var wizardSpeed = 3;
var wizardWidth = 70;

var getWizardHeight = function (wizardWidth) {
    return wizardWidth * 1.337;
};

var getWizardX = function (width) {
    return width / 2;
};

var getWizardY = function (height) {
    return height  * 2 / 3;
};

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var gradient = ctx.createLinearGradient(0, 0, 300, 150);


gradient.addColorStop(0, 'green');
gradient.addColorStop(1, 'blue');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 300, 150);
ctx.strokeStyle = 'yellow';
ctx.strokeRect(0, 0, 300, 150);








