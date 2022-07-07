# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5).

## Table of contents

- [Frontend Mentor - Intro section with dropdown navigation solution](#frontend-mentor---intro-section-with-dropdown-navigation-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](images/solution%20image.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/Zeuhz-Droid/intro-section-with-dropdown-navigation-main)
- Live Site URL: [Add live site URL here](https://zeuhz-droid.github.io/intro-section-with-dropdown-navigation-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [JavaScript](https://javascript.org/) - For functionality

### What I learned

This is my first try at a mobile-first workflow, seeing that i'm used to desktop-first, this was a little challenging but it came out great. I learnt the use of the picture HTML tag for alternating between images with respect to the device's screen size and also how to use implement media queries in javascript.

```html
<picture>
  <source media="(max-width: 37.5rem)" srcset="images/image-hero-mobile.png" />

  <img
    src="images/image-hero-desktop.png"
    alt="Full techy image"
    class="header__photo-img"
  />
</picture>
```

```css
.navigation__input:checked ~ .navigation__button .navigation__icon::before {
  top: 0;
  transform: rotate(135deg);
}

.navigation__input:checked ~ .navigation__button .navigation__icon::after {
  top: 0;
  transform: rotate(-135deg);
}
```

```js
const mediaQuery = window.matchMedia("(min-width: 37.5em)");
function handleScreenChange(e) {
  if (e.matches) {
    //block of codes to execute
  }
}
mediaQuery.addListener(handleScreenChange); // size-listener
handleScreenChange(mediaQuery); //function call
```

### Continued development

Currently focusing on my JavaScript, brushing it up and hoping to start using React to effect the HTML markups.

### Useful resources

- [MDN](https://developer.mozilla.org/en-US/) - This helped me for researching values of some css property and Javascript media queries. I really liked this pattern and will use it going forward.
- [w3 schools](https://www.w3schools.com/colors/colors_converter.asp) - This is an amazing color converter. Helped me convert colors from hsl to rgba.

## Author

- Website - [Zeuhz](coming soon...)
- Frontend Mentor - [@Zeuhz-Droid](https://www.frontendmentor.io/profile/Zeuhz-Droid)
- Twitter - [@zeuhzDroid](https://www.twitter.com/zeuhzDroid)

## Acknowledgments

I would love to acknowledge GOD for keeping me alive to write the code for this project and also my tutor Jonas Schedtmann for His deep and detailed explanations.
