> Sass and Scss are brother, but Sass(Scss) and Less are others.

## Less
Less is a backwards-compatible extension of CSS that introduces features like variables, nesting, and functions to enhance the maintainability and flexibility of stylesheets. It compiles into standard CSS, making it easy to integrate into existing web projects.

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/11c284f6-a3b7-4e46-be9d-33d470f4178a)

### Pros
- LESS is an extended version of CSS, and has excellent sub-compatible capabilities
- It has the advantage of being easy to learn because it uses the existing grammar of CSS as it is.
- Compilation can be done only with the JS interpreter built into the browser, so you are free from defense
- It is being actively pioneered after Sass, making it quite easy to find useful libraries or mixed implementations

### Cons
- Need tools for preprocessor, may be slow to recompile
- **In Less**, the prefix for the variable name is @ and is likely to be confused with unique CSS keywords such as @media, @import, and @font-face rules
- Sass requires frequent recompilation when changing node versions

## Sass(Scss) Vs. Less

**Construction environment**

The Sass and Scss are driving based on the Ruby environment, while Less is driving based on Node.js

### Grammar
**Scss**:
```scss
$main-color: #333;

body: {
	color: $main-color;
}
```

**Less**:
```scss
@main-color: #333;

body {
	color: @main-color;
}
```

The variable of Less starts with @.

Because the variable starts with @, it sometimes conflicts with techniques such as @media, which is the existing css grammar

### Unable to import styles of other files

**Scss**:
```scss
@use 'base';

div {
	background-color: base.$primary-color;
}
```

**Less**:
```less
imposible...
```

Unlike Scss can bring the variables from other files, Less cannot bring assigned variables from other files.

> 💡 Sass(Scss) and Less don't have big differences. However, differences are exist. So, you can choose according to your preference, development tendency, and development environment.

---