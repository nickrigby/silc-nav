"use strict";
exports.__esModule = true;
var SilcNav_1 = require("./SilcNav");
exports.SilcNav = SilcNav_1["default"];
function silcNavInit() {
    var navs = document.querySelectorAll('.silc-nav');
    if (navs.length > 0) {
        for (var i = 0; i < navs.length; i++) {
            new SilcNav_1["default"](navs[i]);
        }
    }
}
exports.silcNavInit = silcNavInit;
