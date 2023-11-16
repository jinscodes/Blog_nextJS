## Disadvantage of CSS - Why Scss or Sass

Before looking into Scss and Sass, we must know what is the cons of the CSS. 

### Cons of CSS
- In the perspective of making selector, we must write down unnecessary parent element selector each time
- It's hard to centralize automation for larger projects
- Everything needs to be modified manually

### Scss and Sass to Compensate for The Shortcomings of CSS
- Overlapping of selectors can reduce repeated use of parent elements: Nesting
- Manage CSS properties and values in a unified manner using variables
- Conditional statements, repeat statements are available 
	- dynamic css management is possible

### Disadvantages of Scss & Sass
![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/457b9a69-c141-4c71-8b38-e1d0d3202468)

The hassle of having to compile. Due to the nature of publishing, compiling with every css change results in too little accuracy and work efficiency.

💡 The extension of VSCode's **live class comparator** completely compensates for the shortcomings.

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/0db06880-af72-4471-bb31-bb005db21845)

## Scss Vs. Sass
> Sass is not just a word that refers to Sass, but to both Sass and Scss. That is, Sass and Scss are the same extensions. Sass and Scss are compatible. The Scss is perfectly compatible with the css grammar.

- **Sass**: Syntactically Awesome Style Sheets
- **Scss**: Sassy Cascading Style Sheets

### Differences between Scss and Sass
1️⃣ First, Scss was created later. In other words, Scss was created after Sass was created

2️⃣ The usage varies slightly depending on the presence or absence of {} (bracket) and ; (semi-colon)
- Sass does not use braces and semicolons (nesting through line breaks)
- Scss uses braces and semicolons
- Scss is the same way as css, making it easier for scss to understand

3️⃣ File extension name is different
- Sass는 .sass
- Scss는 .scss

4️⃣ The only difference in functionality occurs in the mix-in, which is the way to create reuse functions

## CSS Vs. Sass

### 1️⃣ Variable allocation possible

**CSS**:
```css
body {
	font: 100% Helvetica, sans-serif;
	color: #333;
}
```

**Sass(Scss)**:
```css
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
	font: 100% $font-stack;
	color: $primary-color;
}
```

As in the example above, values for the properties of css can be assigned to variables within the scss folder by themselves

Because of its own variable allocation, frequently used values can be designated as variables and reused

### Nesting

**CSS**:
```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
}

nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

**Sass(Scss)**:
```css
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

The biggest reason for using scss. Overlapping allows easy configuration and readability

### Modularization

**CSS**:
```css
/* base.scss */
$primary-color: #333;

body {
  color: $primary-color;
}
```

**Sass(Scss)**:
```css
/* style.scss */
@use 'base';

div {
  background-color: base.$primary-color;
}
```

You can use '@use' to build modularity of certain css files and properties.

### MixIn

**CSS**:
```css
.info {
  background: DarkGray;
  box-shadow: 0 0 1px rgba(169, 169, 169, 0.25);
  color: #fff;
}

.alert {
  background: DarkRed;
  box-shadow: 0 0 1px rgba(139, 0, 0, 0.25);
  color: #fff;
}

.success {
  background: DarkGreen;
  box-shadow: 0 0 1px rgba(0, 100, 0, 0.25);
  color: #fff;
}
```

**Scss**:
```css
/* Scss */
@mixin theme($theme: DarkGray) {
  background: $theme;
  box-shadow: 0 0 1px rgba($theme, .25);
  color: #fff;
}

.info {
  @include theme;
}
.alert {
  @include theme($theme: DarkRed);
}
.success {
  @include theme($theme: DarkGreen);
}
```

**Sass**:
```css
@mixin rtl($property, $ltr-value, $rtl-value) {
  #{$property}: $ltr-value;

  [dir=rtl] & {
    #{$property}: $rtl-value;
  }
}

.sidebar {
  @include rtl(float, left, right);
}

// sass
@mixin rtl($property, $ltr-value, $rtl-value)
  #{$property}: $ltr-value

  [dir=rtl] &
    #{$property}: $rtl-value



.sidebar
  @include rtl(float, left, right)
```

❗️ First of all, there are posts and documents about the difference between scss and sass, so I looked for an example of `mixin` in the official document, but there was no difference except for brace and semicolon…

Mixin can bind common attributes and values through `@mixin` and use `@include`. It seems very useful when common values have to be duplicated and used in many places.

In addition, not only can you group and use values, but you can also assign them to properties using default parameters as a function. In other words, you can assign a specific value to a variable and receive it as a factor value from the mixin and use it

### Extend/Inheritance

**HTML & Sass(Scss)**:
```css
/* html */
<div class="error error--serious">
  Oh no! You've been hacked!
</div>

/* scss 1 */
.error {
  border: 1px #f00;
  background-color: #fdd;

  &--serious {
    @extend .error;
    border-width: 3px;
  }
}

/* scss 2 */
.error:hover {
  background-color: #fee;
}

.error {
	background-color: #eee;
	border-width: 5px;
}

.error--serious {
  @extend .error;
  border-width: 3px;
}
```

### Operator

**HTML & Sass(Scss)**:
```css
@use "sass:math";

div {
 display: flex;
}

.imgInDiv {
	width: math.div(600px, 960px) * 100%;
}

.spanInDiv {
	width: math.div(300px, 960px) * 100%;
  margin-left: auto;
}
```

If multiple operations are required, the css file can resolve itself. 

Previously, the value was calculated using calc, but in the case of scss, '@use "sass:math' is called and calculated through various functions of math. Math has various mathematical functions such as div(division), sin(sign), cos(cosine), tan(tangent), random, max, min, etc