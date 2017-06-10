export class SilcNav {
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
		this.rootItems = <HTMLElement>element.querySelector('.' + this.itemsClass);

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

		[].forEach.call(this.element.querySelectorAll('ul'), el => {
			el.classList.add(this.itemsClass);
		});

		[].forEach.call(this.element.querySelectorAll('li'), el => {
			el.classList.add(this.itemClass);
		});

		[].forEach.call(this.element.querySelectorAll('a'), el => {
			el.classList.add(this.linkClass);
		});
	}

	/**
	 * Create controls for moving forward and backward
	 */
	protected createMoveControls() {

		// For each nav items
		[].forEach.call(this.rootItems.querySelectorAll('.' + this.itemsClass), items => {

			// Get elements
			let item = items.parentNode;
			let link = item.querySelector('.' + this.linkClass);
			let childItems = item.querySelector('.' + this.itemsClass);
			let childItemsFirstItem = childItems.querySelector('.' + this.itemClass);

			// Get link text
			let linkText = link.innerText;

			// Add parent class
			item.classList.add(this.itemClass + '--parent');

			// Create more element
			let forward = document.createElement('span');
			forward.classList.add(this.moveClass, this.moveClass + '--forward');
			forward.innerHTML = 'More ' + linkText;

			// Create back element
			let back = document.createElement('li');
			back.classList.add(this.itemClass, this.moveClass, this.moveClass + '--back');
			back.innerHTML = linkText;

			// Add forward and back link
			link.appendChild(forward);
			childItems.insertBefore(back, childItemsFirstItem);
		});
	}

	/**
	 * Listen for clicks on move elements
	 * @param event 
	 */
	protected moveListener(event: Event) {

		let target = <Element>event.target;

		if (target.classList.contains(this.moveClass + '--forward') || target.classList.contains(this.moveClass + '--back')) {

			event.preventDefault();

			if (target.classList.contains(this.moveClass + '--forward')) {
				this.position++;
			} else {
				this.position--;
			}

			this.move(target);
		}

		event.stopPropagation();
	}

	/**
	 * Move through navigation when collapsed
	 * @param target
	 */
	protected move(target: Element) {

		// Get parent item
		var parentItem = <Element>target.parentNode.parentNode;

		// Hide everything
		[].forEach.call(this.rootItems.querySelectorAll('.' + this.itemsClass), (el) => {
			el.classList.add(this.itemsClass + '--hidden');
		});

		// Show selected branch
		[].forEach.call(parentItem.querySelectorAll('.' + this.itemsClass), (el) => {
			el.classList.remove(this.itemsClass + '--hidden');
		});

		// Show selected branch parent tree
		[].forEach.call(this.getParents(target, '.' + this.itemsClass), (el) => {
			el.classList.remove(this.itemsClass + '--hidden');
		});

		// Get parent items
		let parentItems = <HTMLElement>parentItem.querySelector('.' + this.itemsClass);

		// Add CSS for move
		this.rootItems.style.left = (this.position * -100) + '%';

		// Add CSS for height
		this.rootItems.style.height = parentItems.offsetHeight + 'px';
	}

	/**
	 * Get parent elements of passed in selector
	 * @param elem 
	 * @param selector 
	 */
	private getParents(elem: any, selector: String) {
		// Element.matches() polyfill for IE and Safari
		if (!Element.prototype.matches) {
			Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
		}

		// Setup parents array
		var parents = [];

		// Get matching parent elements
		for (; elem && elem !== document; elem = elem.parentNode) {

			// Add matching parents to array
			if (selector && elem.matches(selector)) {
				parents.push(elem);
			}
		}

		return parents;
	}
}
