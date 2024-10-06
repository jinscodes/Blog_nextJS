## Introduction

According to the document of webpack, it said that "a variety of interfaces are available to customzie the compilation process. Some features overlap bewteen interfaces, while others exist only through a single interface".

> Necessity is the mother of invention.

To understand the necessity of the webpack, we need to know the background when the JavaScript is in old timey ages when a website was just a small bundle of good old html, css and probably one or a few JavaScript files.

##### The problems

Dev community tried to improve the overall user and developer experience around using and building JavaScript/web applications. As a result, we can see a lot of new libraries and frameworks. A few design patterns are getting better and more powerful but simple way of writing complex JavaScript. It means that the websites were no more just a small package with an odd number of files in them. Also, they stated getting bulky with modules. In the end, all this led to a situation where there were four or five times more files in the entire application package.

Not only was the overall size of the application a challenge, but also a huge gap between the code that developers write and the code that the browsers could understand is created. So, developers need helpers called polyfills to make sure that the browsers were able to interpret the code.

To solve these issues, webpack is created. Webpack is a static module bundler.

> Webpack = Module bundling  
> Module bundler is a method of making multiple files into one JavaScript file.

##### Why webpack is the answer

The webpack goes through the package and creates dependency graph which consists of various modules. Then, depending on this graph, it creates new package which consists of the minimum number of files required, often just a single bundle.js file which can be plugged in to the html file easily and used for the application.

---

[](https://webpack.js.org/api/)

[](https://www.freecodecamp.org/news/an-intro-to-webpack-what-it-is-and-how-to-use-it-8304ecdc3c60/)

[](https://velog.io/@yon3115/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%ED%95%84%EC%88%98-Webpack%EC%9D%B4%EB%9E%80)
