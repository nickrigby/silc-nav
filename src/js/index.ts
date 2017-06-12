import SilcNav from "./SilcNav";

function silcNavInit() {
    [].forEach.call(document.querySelectorAll('.silc-nav'), el => {
        new SilcNav(el);
    });
}

export { SilcNav, silcNavInit }
