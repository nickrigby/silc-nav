# Nav component for the silk framework
The nav component is an ultra-leightweight navigation component for the silk framework. The nav is collapsed by default — to work on smaller screens — and can expand to a traditional horizontal navigation with drop-downs.

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

## SASS variables
The nav component is set up with no deliberate styling. However, a number of [SASS variables](src/scss/_variables.scss) can be overriden to easily add style.
