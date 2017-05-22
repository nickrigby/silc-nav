# silc Nav
The nav component is an ultra-lightweight web component for the [silc framework](https://github.com/nickrigby/silc). The nav is collapsed by default — to work on smaller screens — with the ability to expand to a horizontal navigation with drop-downs.

## HTML
```html
<nav class="silc-nav">
    <ul class="silc-nav__items">
        <li class="silc-nav__item">
            <a class="silc-nav__link" href="#">Item 1</a>
            <ul class="silc-nav__items">
                <li class="silc-nav__item">
                    <a class="silc-nav__link" href="#">Item 1.1</a>
                    <ul class="silc-nav__items">
                        <li class="silc-nav__item"><a class="silc-nav__link" href="#">Item 1.1.1</a></li>
                        <li class="silc-nav__item"><a class="silc-nav__link" href="#">Item 1.1.2</a></li>
                        <li class="silc-nav__item">
                            <a class="silc-nav__link" href="#">Item 1.1.3</a>
                            <ul class="silc-nav__items">
                                <li class="silc-nav__item"><a class="silc-nav__link" href="#">Item 1.1.3.1</a></li>
                                <li class="silc-nav__item"><a class="silc-nav__link" href="#">Item 1.1.3.2</a></li>
                                <li class="silc-nav__item"><a class="silc-nav__link" href="#">Item 1.1.3.3</a></li>
                            </ul>     
                        </li>
                    </ul>
                </li>
                <li class="silc-nav__item">
                    <a class="silc-nav__link" href="#">Item 1.2</a>
                    <ul class="silc-nav__items">
                        <li class="silc-nav__item"><a class="silc-nav__link" href="#">Item 1.2.1</a></li>
                        <li class="silc-nav__item">
                            <a class="silc-nav__link" href="#">Item 1.2.2</a>
                            <ul class="silc-nav__items">
                                <li class="silc-nav__item">
                                    <a class="silc-nav__link" href="#">Item 1.2.2.1</a>
                                    <ul class="silc-nav__items">
                                        <li class="silc-nav__item"><a class="silc-nav__link" href="#">Item 1.2.2.1.1</a></li>
                                        <li class="silc-nav__item"><a class="silc-nav__link" href="#">Item 1.2.2.1.2</a></li>
                                        <li class="silc-nav__item"><a class="silc-nav__link" href="#">Item 1.2.2.1.3</a></li>
                                    </ul>  
                                </li>
                                <li class="silc-nav__item"><a class="silc-nav__link" href="#">Item 1.2.2.2</a></li>
                                <li class="silc-nav__item"><a class="silc-nav__link" href="#">Item 1.2.2.3</a></li>
                            </ul>     
                        </li>
                        <li class="silc-nav__item"><a class="silc-nav__link" href="#">Item 1.2.3</a></li>
                    </ul> 
                </li>
            </ul>
        </li>
        <li class="silc-nav__item">
            <a class="silc-nav__link" href="#">Item 2</a>
            <ul class="silc-nav__items">
                <li class="silc-nav__item">
                    <a class="silc-nav__link" href="#">Item 2.1</a>
                    <ul class="silc-nav__items">
                        <li class="silc-nav__item"><a class="silc-nav__link" href="#">Item 2.1.1</a></li>
                        <li class="silc-nav__item"><a class="silc-nav__link" href="#">Item 2.1.2</a></li>
                        <li class="silc-nav__item"><a class="silc-nav__link" href="#">Item 2.1.3</a></li>
                    </ul>
                </li>
                <li class="silc-nav__item">
                    <a class="silc-nav__link" href="#">Item 2.2</a>
                    <ul class="silc-nav__items">
                        <li class="silc-nav__item"><a class="silc-nav__link" href="#">Item 2.2.1</a></li>
                        <li class="silc-nav__item"><a class="silc-nav__link" href="#">Item 2.2.2</a></li>
                        <li class="silc-nav__item"><a class="silc-nav__link" href="#">Item 2.2.3</a></li>
                    </ul> 
                </li>
            </ul>
        </li>
    </ul>
</nav>
```

## Styling
As with all silc components, no deliberate style has been added. However, through a SASS fallback system, a number of [SASS variables](src/scss/_variables.scss) are available to easily apply design without having to write your own selectors.
