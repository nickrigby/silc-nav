# silc nav [![Build Status](https://travis-ci.org/nickrigby/silc-nav.svg?branch=master)](https://travis-ci.org/nickrigby/silc-nav) [![npm version](https://badge.fury.io/js/silc-nav.svg)](https://badge.fury.io/js/silc-nav)
The nav component is an ultra-lightweight web component for the [silc framework](https://github.com/nickrigby/silc). The nav is collapsed by default — to work on smaller screens — with the ability to expand to a horizontal navigation with drop-downs.

## HTML
```html
<nav class="silc-nav">
    <ul>
        <li>
            <a href="#">Item 1</a>
            <ul>
                <li>
                    <a href="#">Item 1.1</a>
                    <ul>
                        <li><a href="#">Item 1.1.1</a></li>
                        <li><a href="#">Item 1.1.2</a></li>
                        <li>
                            <a href="#">Item 1.1.3</a>
                            <ul>
                                <li><a href="#">Item 1.1.3.1</a></li>
                                <li><a href="#">Item 1.1.3.2</a></li>
                                <li><a href="#">Item 1.1.3.3</a></li>
                            </ul>     
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Item 1.2</a>
                    <ul>
                        <li><a href="#">Item 1.2.1</a></li>
                        <li>
                            <a href="#">Item 1.2.2</a>
                            <ul>
                                <li>
                                    <a href="#">Item 1.2.2.1</a>
                                    <ul>
                                        <li><a href="#">Item 1.2.2.1.1</a></li>
                                        <li><a href="#">Item 1.2.2.1.2</a></li>
                                        <li><a href="#">Item 1.2.2.1.3</a></li>
                                    </ul>  
                                </li>
                                <li><a href="#">Item 1.2.2.2</a></li>
                                <li><a href="#">Item 1.2.2.3</a></li>
                            </ul>     
                        </li>
                        <li><a href="#">Item 1.2.3</a></li>
                    </ul> 
                </li>
            </ul>
        </li>
        <li>
            <a href="#">Item 2</a>
            <ul>
                <li>
                    <a href="#">Item 2.1</a>
                    <ul>
                        <li><a href="#">Item 2.1.1</a></li>
                        <li><a href="#">Item 2.1.2</a></li>
                        <li><a href="#">Item 2.1.3</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Item 2.2</a>
                    <ul>
                        <li><a href="#">Item 2.2.1</a></li>
                        <li><a href="#">Item 2.2.2</a></li>
                        <li><a href="#">Item 2.2.3</a></li>
                    </ul> 
                </li>
            </ul>
        </li>
    </ul>
</nav>
```

### BEM classes
BEM classes are added via JavaScript to ease integrations with third-party systems, and to enforce semantic markup. Classes are as follows:

```html
<ul class="silc-nav__items">...</ul>
<li class="silc-nav__item">...</li>
<a class="silc-nav__link">...</a>
```

## Styling
As with all silc components, no deliberate style has been added. However, through a SASS fallback system, a number of [SASS variables](src/scss/_variables.scss) are available to easily apply design without having to write your own selectors.
