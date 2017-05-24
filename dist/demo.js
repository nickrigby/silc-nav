"use strict";
exports.__esModule = true;
require("../scss/_variables.scss");
require("../scss/_index.scss");
var silc_core_1 = require("silc-core");
var index_1 = require("./index");
new silc_core_1.SilcCore();
[].forEach.call(document.querySelectorAll('.silc-nav'), function (el) {
    new index_1.SilcNav(el);
});
