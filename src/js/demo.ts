import "../scss/_variables.scss";
import "../scss/_index.scss";

import { SilcCore } from "silc-core";
import { SilcNav } from "./index.ts";

new SilcCore();

[].forEach.call(document.querySelectorAll('.silc-nav'), (el) => {
    new SilcNav(el);
});
