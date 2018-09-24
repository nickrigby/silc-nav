import SilcNav from "./SilcNav";

function silcNavInit() {
  let navs = document.querySelectorAll('.silc-nav') as NodeList;
  if (navs.length > 0) {
    for (let i = 0; i < navs.length; i++) {
      new SilcNav(navs[i] as HTMLElement);
    }
  }
}

export { SilcNav, silcNavInit }
