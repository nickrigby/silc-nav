"use strict";
exports.__esModule = true;
var SilcNav_1 = require("./SilcNav");
exports.SilcNav = SilcNav_1["default"];
function silcNavInit() {
    [].forEach.call(document.querySelectorAll('.silc-nav'), function (el) {
        new SilcNav_1["default"](el);
    });
}
exports.silcNavInit = silcNavInit;
