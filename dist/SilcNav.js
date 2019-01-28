"use strict";
exports.__esModule = true;
var default_1 = /** @class */ (function () {
    /**
     * Contructor
     * @param element
     */
    function default_1(element) {
        var _this = this;
        this.moveClass = 'silc-nav__move';
        this.itemsClass = 'silc-nav__items';
        this.itemClass = 'silc-nav__item';
        this.linkClass = 'silc-nav__link';
        // Save shortcut to element
        this.element = element;
        // Add BEM classes
        this.addBemClasses();
        // Save shortcut to root items
        this.rootItems = element.querySelector('.' + this.itemsClass);
        // Set initial position
        this.position = 0;
        // Create move controle
        this.createMoveControls();
        // Attach click listener
        this.element.addEventListener('click', function (event) {
            _this.moveListener(event);
        });
    }
    /**
     * Add BEM classes
     */
    default_1.prototype.addBemClasses = function () {
        var uls = this.element.querySelectorAll('ul');
        if (uls.length > 0) {
            for (var i = 0; i < uls.length; i++) {
                var el = uls[i];
                el.classList.add(this.itemsClass);
            }
        }
        var lis = this.element.querySelectorAll('li');
        if (lis.length > 0) {
            for (var i = 0; i < lis.length; i++) {
                var el = lis[i];
                el.classList.add(this.itemClass);
            }
        }
        var links = this.element.querySelectorAll('a');
        if (links.length > 0) {
            for (var i = 0; i < links.length; i++) {
                var el = links[i];
                el.classList.add(this.linkClass);
            }
        }
        this.element.classList.add('silc-nav--ready');
    };
    /**
     * Create controls for moving forward and backward
     */
    default_1.prototype.createMoveControls = function () {
        // For each nav items
        var itemsEls = this.rootItems.querySelectorAll('.' + this.itemsClass);
        if (itemsEls.length > 0) {
            for (var i = 0; i < itemsEls.length; i++) {
                // Get elements
                var item = itemsEls[i].parentNode;
                var link = item.querySelector('.' + this.linkClass);
                var childItems = item.querySelector('.' + this.itemsClass);
                var childItemsFirstItem = childItems.querySelector('.' + this.itemClass);
                // Get link text
                var linkText = link.textContent || link.innerHTML;
                // Add parent class
                item.classList.add(this.itemClass + '--parent');
                // Create more element
                var forward = document.createElement('span');
                forward.classList.add(this.moveClass);
                forward.classList.add(this.moveClass + '--forward');
                forward.innerHTML = 'More ' + linkText;
                // Create back element
                var back = document.createElement('li');
                back.classList.add(this.itemClass);
                back.classList.add(this.moveClass);
                back.classList.add(this.moveClass + '--back');
                back.innerHTML = linkText;
                // Add forward and back link
                link.appendChild(forward);
                childItems.insertBefore(back, childItemsFirstItem);
            }
        }
    };
    /**
     * Listen for clicks on move elements
     * @param event
     */
    default_1.prototype.moveListener = function (event) {
        var target = event.target;
        if (target.classList.contains(this.moveClass + '--forward') || target.classList.contains(this.moveClass + '--back')) {
            event.preventDefault();
            if (target.classList.contains(this.moveClass + '--forward')) {
                this.position++;
                this.move(target, 'forward');
            }
            else {
                this.position--;
                this.move(target, 'back');
            }
        }
        event.stopPropagation();
    };
    /**
     * Move through navigation when collapsed
     * @param target
     */
    default_1.prototype.move = function (target, direction) {
        // Get parent item
        var parentItem = target.parentNode.parentNode;
        // Hide everything
        var els1 = this.rootItems.querySelectorAll('.' + this.itemsClass);
        for (var i = 0; i < els1.length; i++) {
            var el = els1[i];
            el.classList.add(this.itemsClass + '--hidden');
        }
        // Show selected branch
        var els2 = parentItem.querySelectorAll('.' + this.itemsClass);
        for (var i = 0; i < els2.length; i++) {
            var el = els2[i];
            el.classList.remove(this.itemsClass + '--hidden');
        }
        // Show selected branch parent tree
        var els3 = this.getParents(target, '.' + this.itemsClass);
        for (var i = 0; i < els3.length; i++) {
            var el = els3[i];
            el.classList.remove(this.itemsClass + '--hidden');
        }
        // Get parent items
        var parentItems = direction === 'forward'
            ? parentItem.querySelector('.' + this.itemsClass)
            : parentItem.parentNode;
        // Add CSS for move
        this.rootItems.style.left = (this.position * -100) + '%';
        // Add CSS for height
        this.rootItems.style.height = this.position > 0
            ? parentItems.offsetHeight + 'px'
            : 'auto';
    };
    /**
     * Get parent elements of passed in selector
     * @param elem
     * @param selector
     */
    default_1.prototype.getParents = function (elem, selector) {
        // Setup parents array
        var parents = [];
        // Get matching parent elements
        for (; elem && elem !== document; elem = elem.parentNode) {
            // Add matching parents to array
            if (elem.querySelector(selector)) {
                parents.push(elem);
            }
        }
        return parents;
    };
    return default_1;
}());
exports["default"] = default_1;
