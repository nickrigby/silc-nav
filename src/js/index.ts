export default class Nav
{
    element: HTMLElement;
	position: number;
	rootItems: HTMLElement;

    constructor(element: HTMLElement)
    {
		// Save shortcut to element
        this.element = element;

		// Save shortcut to root items
		this.rootItems = <HTMLElement>element.querySelector('.silk-nav--items');

		// Set initial position
		this.position = 0;

		// For each nav items
		[].forEach.call(this.rootItems.querySelectorAll('.silk-nav--items'), (items) => {

			// Get elements
			let item = items.parentNode;
			let link = item.querySelector('.silk-nav--link');

			// Get link text
			let linkText = link.innerText;

			// Add parent class
			item.classList.add('silk-nav--item-parent');

			// Create more element
			let forward = document.createElement('span');
			forward.classList.add('silk-nav--move-forward');
			forward.innerHTML = 'More ' + linkText;

			// Create back element
			let back = document.createElement('li');
			back.classList.add('silk-nav--move-back');
			back.innerHTML = linkText;

			// Add forward and back link
			link.appendChild(forward);
			item.querySelector('.silk-nav--items').prepend(back);
		});

		// Attach click behaviour to forward links
		[].forEach.call(element.querySelectorAll('.silk-nav--move-forward'), (moreLink) => {
			moreLink.addEventListener('click', (event) => {
				this.position++;
				this.move(event);
			});
		});

		// Attach click behaviour to back links
		[].forEach.call(element.querySelectorAll('.silk-nav--move-back'), (backLink) => {
			backLink.addEventListener('click', (event) => {
				this.position--;
				this.move(event);
			});
		});
    }

	move(event)
	{
		event.preventDefault();

		// Get parent item
		var parentItem = event.target.parentNode.parentNode;

		// Hide everything
		[].forEach.call(this.rootItems.querySelectorAll('.silk-nav--items'), (el) => {
			el.classList.add('is-hidden');
		});

		// Show selected branch
		[].forEach.call(parentItem.querySelectorAll('.silk-nav--items'), (el) => {
			el.classList.remove('is-hidden');
		});

		// Show selected branch parent tree
		[].forEach.call(this.getParents(event.target, '.silk-nav--items'), (el) => {
			el.classList.remove('is-hidden');
		});

		// Get parent items
		let parentItems = parentItem.querySelector('.silk-nav--items');
		
		// Add CSS for move
		this.rootItems.style.left = (this.position * -100) + '%';

		// Add CSS for height
		this.rootItems.style.height = parentItems.offsetHeight + 'px';
	}

	getParents(elem, selector)
	{
		// Element.matches() polyfill for IE and Safari
		if (!Element.prototype.matches)
		{
			Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
		}

		// Setup parents array
		var parents = [];

		// Get matching parent elements
		for ( ; elem && elem !== document; elem = elem.parentNode ) {

			// Add matching parents to array
			if (selector && elem.matches(selector))
			{
				parents.push(elem);
			}
		}

		return parents;
	}
}
