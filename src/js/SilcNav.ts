export default class {
  readonly moveClass = 'silc-nav__move';
  readonly itemsClass = 'silc-nav__items';
  readonly itemClass = 'silc-nav__item';
  readonly linkClass = 'silc-nav__link';

  protected element: HTMLElement;
  protected position: number;
  protected rootItems: HTMLElement;

	/**
	 * Contructor
	 * @param element 
	 */
  public constructor(element: HTMLElement) {

    // Save shortcut to element
    this.element = element;

    // Add BEM classes
    this.addBemClasses();

    // Save shortcut to root items
    this.rootItems = element.querySelector('.' + this.itemsClass) as HTMLElement;

    // Set initial position
    this.position = 0;

    // Create move controle
    this.createMoveControls();

    // Attach click listener
    this.element.addEventListener('click', event => {
      this.moveListener(event);
    });
  }

	/**
	 * Add BEM classes
	 */
  protected addBemClasses() {

    let uls = this.element.querySelectorAll('ul') as NodeList;
    if (uls.length > 0) {
      for (let i = 0; i < uls.length; i++) {
        let el = uls[i] as HTMLElement;
        el.classList.add(this.itemsClass);
      }
    }

    let lis = this.element.querySelectorAll('li') as NodeList;
    if (lis.length > 0) {
      for (let i = 0; i < lis.length; i++) {
        let el = lis[i] as HTMLElement;
        el.classList.add(this.itemClass);
      }
    }

    let links = this.element.querySelectorAll('a') as NodeList;
    if (links.length > 0) {
      for (let i = 0; i < links.length; i++) {
        let el = links[i] as HTMLElement;
        el.classList.add(this.linkClass);
      }
    }

    this.element.classList.add('silc-nav--ready');
  }

	/**
	 * Create controls for moving forward and backward
	 */
  protected createMoveControls() {

    // For each nav items
    let itemsEls = this.rootItems.querySelectorAll('.' + this.itemsClass) as NodeList;
    if (itemsEls.length > 0) {
      for (let i = 0; i < itemsEls.length; i++) {

        // Get elements
        let item = (itemsEls[i] as HTMLElement).parentNode as HTMLElement;
        let link = item.querySelector('.' + this.linkClass) as HTMLElement;
        let childItems = item.querySelector('.' + this.itemsClass) as HTMLElement;
        let childItemsFirstItem = childItems.querySelector('.' + this.itemClass) as HTMLElement;

        // Get link text
        let linkText = link.textContent || link.innerHTML;

        // Add parent class
        item.classList.add(this.itemClass + '--parent');

        // Create more element
        let forward = document.createElement('span');
        forward.classList.add(this.moveClass);
        forward.classList.add(this.moveClass + '--forward');
        forward.innerHTML = 'More ' + linkText;

        // Create back element
        let back = document.createElement('li');
        back.classList.add(this.itemClass);
        back.classList.add(this.moveClass);
        back.classList.add(this.moveClass + '--back');
        back.innerHTML = linkText;

        // Add forward and back link
        link.appendChild(forward);
        childItems.insertBefore(back, childItemsFirstItem);
      }
    }
  }

	/**
	 * Listen for clicks on move elements
	 * @param event 
	 */
  protected moveListener(event: Event) {

    let target = event.target as HTMLElement;

    if (target.classList.contains(this.moveClass + '--forward') || target.classList.contains(this.moveClass + '--back')) {

      event.preventDefault();

      if (target.classList.contains(this.moveClass + '--forward')) {
        this.position++;
        this.move(target, 'forward');
      } else {
        this.position--;
        this.move(target, 'back');
      }

    }

    event.stopPropagation();
  }

	/**
	 * Move through navigation when collapsed
	 * @param target
	 */
  protected move(target: HTMLElement, direction: String) {

    // Get parent item
    let parentItem = target.parentNode.parentNode as HTMLElement;

    // Hide everything
    let els1 = this.rootItems.querySelectorAll('.' + this.itemsClass) as NodeList;
    for (let i = 0; i < els1.length; i++) {
      let el = els1[i] as HTMLElement;
      el.classList.add(this.itemsClass + '--hidden');
    }

    // Show selected branch
    let els2 = parentItem.querySelectorAll('.' + this.itemsClass) as NodeList;
    for (let i = 0; i < els2.length; i++) {
      let el = els2[i] as HTMLElement;
      el.classList.remove(this.itemsClass + '--hidden');
    }

    // Show selected branch parent tree
    let els3 = this.getParents(target, '.' + this.itemsClass);
    for (let i = 0; i < els3.length; i++) {
      let el = els3[i] as HTMLElement;
      el.classList.remove(this.itemsClass + '--hidden');
    }

    // Get parent items
    let parentItems = direction === 'forward'
      ? parentItem.querySelector('.' + this.itemsClass) as HTMLElement
      : parentItem.parentNode as HTMLElement

    // Add CSS for move
    this.rootItems.style.left = (this.position * -100) + '%';

    // Add CSS for height
    this.rootItems.style.height = this.position > 0
      ? parentItems.offsetHeight + 'px'
      : 'auto'
  }

	/**
	 * Get parent elements of passed in selector
	 * @param elem 
	 * @param selector 
	 */
  private getParents(elem: any, selector: String) {

    // Setup parents array
    let parents = [];

    // Get matching parent elements
    for (; elem && elem !== document; elem = elem.parentNode) {

      // Add matching parents to array
      if (elem.querySelector(selector)) {
        parents.push(elem);
      }
    }

    return parents;
  }
}
