"use strict";
exports.__esModule = true;
var SilcNav = (function () {
    function SilcNav(element) {
        var _this = this;
        // Save shortcut to element
        this.element = element;
        // Save shortcut to root items
        this.rootItems = element.querySelector('.silc-nav__items');
        // Set initial position
        this.position = 0;
        // For each nav items
        [].forEach.call(this.rootItems.querySelectorAll('.silc-nav__items'), function (items) {
            // Get elements
            var item = items.parentNode;
            var link = item.querySelector('.silc-nav__link');
            // Get link text
            var linkText = link.innerText;
            // Add parent class
            item.classList.add('silc-nav__item--parent');
            // Create more element
            var forward = document.createElement('span');
            forward.classList.add('silc-nav__move', 'silc-nav__move--forward');
            forward.innerHTML = 'More ' + linkText;
            // Create back element
            var back = document.createElement('li');
            back.classList.add('silc-nav__item', 'silc-nav__move', 'silc-nav__move--back');
            back.innerHTML = linkText;
            // Add forward and back link
            link.appendChild(forward);
            item.querySelector('.silc-nav__items').prepend(back);
        });
        // Attach click behaviour to forward links
        [].forEach.call(element.querySelectorAll('.silc-nav__move--forward'), function (moreLink) {
            moreLink.addEventListener('click', function (event) {
                _this.position++;
                _this.move(event);
            });
        });
        // Attach click behaviour to back links
        [].forEach.call(element.querySelectorAll('.silc-nav__move--back'), function (backLink) {
            backLink.addEventListener('click', function (event) {
                _this.position--;
                _this.move(event);
            });
        });
    }
    SilcNav.prototype.move = function (event) {
        event.preventDefault();
        // Get parent item
        var parentItem = event.target.parentNode.parentNode;
        // Hide everything
        [].forEach.call(this.rootItems.querySelectorAll('.silc-nav__items'), function (el) {
            el.classList.add('silc-nav__items--hidden');
        });
        // Show selected branch
        [].forEach.call(parentItem.querySelectorAll('.silc-nav__items'), function (el) {
            el.classList.remove('silc-nav__items--hidden');
        });
        // Show selected branch parent tree
        [].forEach.call(this.getParents(event.target, '.silc-nav__items'), function (el) {
            el.classList.remove('silc-nav__items--hidden');
        });
        // Get parent items
        var parentItems = parentItem.querySelector('.silc-nav__items');
        // Add CSS for move
        this.rootItems.style.left = (this.position * -100) + '%';
        // Add CSS for height
        this.rootItems.style.height = parentItems.offsetHeight + 'px';
    };
    SilcNav.prototype.getParents = function (elem, selector) {
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
    };
    return SilcNav;
}());
exports.SilcNav = SilcNav;
