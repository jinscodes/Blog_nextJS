## Intro..
There are two main ways to manage values such as color in a flutter.

Use constants to manage frequently used values at once or to make them a little more stringent.

Alternatively, there is a way to create and manage ThemeData.

## Constant: Color Type
If working on the project, not just the flutter, we have to use a lot of colors.

And it's cumbersome to input the color in Rgb every time.

Create the theme.dart in the common folder and set a constant using the appTheme class.

Create variables and assign them to all the colors in the app.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/4d1d39cc-a3b4-4ad9-bc7b-439f2287b58a)

But most of the time, the app itself doesn't have a huge amount of color and doesn't have to change color. 

Alternatively, the amount of variables can increase as the project increases in size.

## ThemeData
There is a method of creating and using ThemeData without declaring color values as constants in the class.

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/be3bd823-b794-409a-9d13-7879d4ad3034)

## Constant: Color
It looks similar to declaring the constants above, but it's a slightly different way. 

Above, a constant was declared using a **color type** in a class called appTheme. 

However, this method is just to declare Color.

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/204d20a9-87d2-4966-972c-c864545024ac)

This method has the advantage of being easy to refer anywhere, preventing duplication of code, changing everywhere when changed in one place, and shortening the code.

However, the above method has the disadvantage of making the code more difficult to manage when creating light mode/dark mode.

--- 
[](https://uzzam.dev/33)

[](https://aschilken.medium.com/flutter-best-practices-colors-and-textstyles-6e14b06fc3a1)