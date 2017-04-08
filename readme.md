# Silk Nav
The nav component is an ultra-lightweight web component for the [silk framework](https://github.com/nickrigby/silk). The nav is collapsed by default — to work on smaller screens — with the ability to expand to a horizontal navigation with drop-downs.

## HTML
```html
<nav class="silk-nav">
    <ul class="silk-nav__items">
        <li class="silk-nav__item">
            <a class="silk-nav__link" href="#">Item 1</a>
            <ul class="silk-nav__items">
                <li class="silk-nav__item">
                    <a class="silk-nav__link" href="#">Item 1.1</a>
                    <ul class="silk-nav__items">
                        <li class="silk-nav__item"><a class="silk-nav__link" href="#">Item 1.1.1</a></li>
                        <li class="silk-nav__item"><a class="silk-nav__link" href="#">Item 1.1.2</a></li>
                        <li class="silk-nav__item">
                            <a class="silk-nav__link" href="#">Item 1.1.3</a>
                            <ul class="silk-nav__items">
                                <li class="silk-nav__item"><a class="silk-nav__link" href="#">Item 1.1.3.1</a></li>
                                <li class="silk-nav__item"><a class="silk-nav__link" href="#">Item 1.1.3.2</a></li>
                                <li class="silk-nav__item"><a class="silk-nav__link" href="#">Item 1.1.3.3</a></li>
                            </ul>     
                        </li>
                    </ul>
                </li>
                <li class="silk-nav__item">
                    <a class="silk-nav__link" href="#">Item 1.2</a>
                    <ul class="silk-nav__items">
                        <li class="silk-nav__item"><a class="silk-nav__link" href="#">Item 1.2.1</a></li>
                        <li class="silk-nav__item">
                            <a class="silk-nav__link" href="#">Item 1.2.2</a>
                            <ul class="silk-nav__items">
                                <li class="silk-nav__item">
                                    <a class="silk-nav__link" href="#">Item 1.2.2.1</a>
                                    <ul class="silk-nav__items">
                                        <li class="silk-nav__item"><a class="silk-nav__link" href="#">Item 1.2.2.1.1</a></li>
                                        <li class="silk-nav__item"><a class="silk-nav__link" href="#">Item 1.2.2.1.2</a></li>
                                        <li class="silk-nav__item"><a class="silk-nav__link" href="#">Item 1.2.2.1.3</a></li>
                                    </ul>  
                                </li>
                                <li class="silk-nav__item"><a class="silk-nav__link" href="#">Item 1.2.2.2</a></li>
                                <li class="silk-nav__item"><a class="silk-nav__link" href="#">Item 1.2.2.3</a></li>
                            </ul>     
                        </li>
                        <li class="silk-nav__item"><a class="silk-nav__link" href="#">Item 1.2.3</a></li>
                    </ul> 
                </li>
            </ul>
        </li>
        <li class="silk-nav__item">
            <a class="silk-nav__link" href="#">Item 2</a>
            <ul class="silk-nav__items">
                <li class="silk-nav__item">
                    <a class="silk-nav__link" href="#">Item 2.1</a>
                    <ul class="silk-nav__items">
                        <li class="silk-nav__item"><a class="silk-nav__link" href="#">Item 2.1.1</a></li>
                        <li class="silk-nav__item"><a class="silk-nav__link" href="#">Item 2.1.2</a></li>
                        <li class="silk-nav__item"><a class="silk-nav__link" href="#">Item 2.1.3</a></li>
                    </ul>
                </li>
                <li class="silk-nav__item">
                    <a class="silk-nav__link" href="#">Item 2.2</a>
                    <ul class="silk-nav__items">
                        <li class="silk-nav__item"><a class="silk-nav__link" href="#">Item 2.2.1</a></li>
                        <li class="silk-nav__item"><a class="silk-nav__link" href="#">Item 2.2.2</a></li>
                        <li class="silk-nav__item"><a class="silk-nav__link" href="#">Item 2.2.3</a></li>
                    </ul> 
                </li>
            </ul>
        </li>
    </ul>
</nav>
```

## Styling
As with all Silk components, no deliberate style has been added. However, through a SASS fallback system, a number of [SASS variables](src/scss/_variables.scss) are available to easily apply design without having to write your own selectors.
